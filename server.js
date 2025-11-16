/*
 * ==========================================
 * EXCEL UPLOAD SERVER - DETAILED DOCUMENTATION
 * ==========================================
 * 
 * PURPOSE:
 * This Express server provides an API endpoint that accepts Excel file uploads,
 * parses them into apartment data, and automatically generates/updates the 
 * TypeScript mockData.ts file used by the React frontend.
 * 
 * KEY FEATURES:
 * 1. Multi-row header detection for complex Excel formats
 * 2. Flexible column name mapping (supports various naming conventions)
 * 3. Update or Replace modes for data management
 * 4. In-browser logging system for debugging without terminal access
 * 5. Automatic Vite HMR trigger via timestamp updates
 * 
 * WORKFLOW:
 * User uploads Excel → Server parses → Detects headers → Maps to Apartment objects
 * → Generates TypeScript code → Writes to mockData.ts → Forces Vite reload
 * ==========================================
 */

// ============================================================
// DEPENDENCIES
// ============================================================
const express = require('express');      // Web framework for API endpoints
const multer = require('multer');        // Middleware for handling file uploads
const cors = require('cors');            // Enable Cross-Origin Resource Sharing
const XLSX = require('xlsx');            // Excel file parser (supports .xlsx, .xls, .csv)
const fs = require('fs');                // File system operations (read/write files)
const path = require('path');            // Path utilities for cross-platform file paths

// ============================================================
// SERVER CONFIGURATION
// ============================================================
const app = express();
const PORT = 3010;  // Running on 3010 to avoid conflicts with Vite dev server (3006)

// ============================================================
// MIDDLEWARE CONFIGURATION
// ============================================================
// Enable CORS (Cross-Origin Resource Sharing) to allow requests from the React app (port 3006)
app.use(cors());
// Parse JSON request bodies
app.use(express.json());

// ============================================================
// IN-MEMORY LOGGING SYSTEM
// ============================================================
/*
 * WHY THIS EXISTS:
 * Since users can't always access the terminal (especially in certain IDEs),
 * we store recent logs in memory and expose them via an API endpoint.
 * This allows the test-upload.html page to display server logs in the browser.
 * 
 * HOW IT WORKS:
 * - We override console.log and console.error
 * - Every log is stored in the recentLogs array
 * - When array exceeds MAX_LOGS, oldest entries are removed (FIFO - First In, First Out)
 * - Logs can be retrieved via GET /api/logs
 */
const recentLogs = [];
const MAX_LOGS = 100;  // Keep only the most recent 100 log entries

// Store original console methods before we override them
const originalLog = console.log;
const originalError = console.error;

/*
 * CUSTOM console.log OVERRIDE
 * - Converts all arguments to strings (handles objects via JSON.stringify)
 * - Stores the log with timestamp and type in recentLogs array
 * - Calls the original console.log so logs still appear in terminal
 */
console.log = (...args) => {
  const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
  recentLogs.push({ time: new Date().toISOString(), type: 'log', message });
  if (recentLogs.length > MAX_LOGS) recentLogs.shift();  // Remove oldest log if over limit
  originalLog.apply(console, args);  // Still print to terminal
};

/*
 * CUSTOM console.error OVERRIDE
 * - Same as console.log but marks type as 'error' for styling in UI
 */
console.error = (...args) => {
  const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
  recentLogs.push({ time: new Date().toISOString(), type: 'error', message });
  if (recentLogs.length > MAX_LOGS) recentLogs.shift();
  originalError.apply(console, args);
};

// ============================================================
// FILE UPLOAD CONFIGURATION
// ============================================================
/*
 * MULTER CONFIGURATION:
 * - multer.memoryStorage() stores uploaded files in memory as Buffer objects
 * - This is suitable for small-medium Excel files (< 10MB typically)
 * - Alternative would be diskStorage() but requires cleanup
 * - The uploaded file is accessible via req.file.buffer in the API handler
 */
const upload = multer({ storage: multer.memoryStorage() });

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/*
 * FUNCTION: generateRandomCoordinates
 * 
 * PURPOSE:
 * Since Excel files often don't contain lat/lng coordinates, we generate
 * random coordinates near Dartmouth College for map visualization.
 * 
 * LOGIC:
 * - Base point: Dartmouth Green (43.7022°N, 72.2896°W)
 * - Offset: ±0.05 degrees (~5 miles radius)
 * - Formula: 1 degree latitude ≈ 69 miles, 1 degree longitude ≈ 54 miles at this latitude
 * 
 * RETURNS:
 * { lat: number, lng: number } with 6 decimal places precision
 */
const generateRandomCoordinates = () => {
  const baseLat = 43.7022; // Dartmouth Green latitude
  const baseLng = -72.2896; // Dartmouth Green longitude (negative = West)
  
  // Generate random offset: (Math.random() - 0.5) gives range [-0.5, 0.5]
  // Multiplying by 0.1 gives range [-0.05, 0.05] degrees
  const latOffset = (Math.random() - 0.5) * 0.1;
  const lngOffset = (Math.random() - 0.5) * 0.1;
  
  return {
    lat: parseFloat((baseLat + latOffset).toFixed(6)),  // Limit to 6 decimal places
    lng: parseFloat((baseLng + lngOffset).toFixed(6))
  };
};

/*
 * FUNCTION: calculateDistance
 * 
 * PURPOSE:
 * Calculate the distance (in miles) from any coordinate to Dartmouth Green.
 * This helps users understand how far apartments are from campus.
 * 
 * ALGORITHM: Haversine Formula
 * - Used to calculate great-circle distance between two points on a sphere
 * - Accounts for Earth's curvature (more accurate than Pythagorean distance)
 * - Formula: a = sin²(Δlat/2) + cos(lat1) × cos(lat2) × sin²(Δlng/2)
 *            c = 2 × atan2(√a, √(1−a))
 *            distance = R × c
 * 
 * PARAMETERS:
 * @param {number} lat - Latitude of apartment
 * @param {number} lng - Longitude of apartment
 * 
 * RETURNS:
 * Distance in miles, rounded to 2 decimal places
 */
const calculateDistance = (lat, lng) => {
  const R = 3959; // Earth's radius in miles (use 6371 for kilometers)
  
  // Calculate differences and convert to radians
  const dLat = (lat - 43.7022) * Math.PI / 180;
  const dLng = (lng - (-72.2896)) * Math.PI / 180;
  
  // Haversine formula
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(43.7022 * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  
  return parseFloat((R * c).toFixed(2));  // Return distance in miles
};

/*
 * FUNCTION: parseRowToApartment
 * 
 * PURPOSE:
 * Converts a single Excel row (JavaScript object) into an Apartment object
 * that matches the TypeScript interface in mockData.ts.
 * 
 * CHALLENGES SOLVED:
 * 1. Column Name Variations: Different Excel files use different column names
 *    (e.g., "Bedrooms" vs "beds" vs "Bd")
 * 2. Missing Data: Provides sensible defaults when columns are missing
 * 3. Data Type Conversion: Ensures numbers are parsed correctly
 * 4. Data Enrichment: Generates coordinates, calculates distance, infers amenities
 * 
 * PARAMETERS:
 * @param {Object} row - Excel row parsed as JavaScript object (key-value pairs)
 * @param {number} nextId - ID to assign to this apartment
 * 
 * RETURNS:
 * Complete Apartment object matching the TypeScript interface
 */
const parseRowToApartment = (row, nextId) => {
  // -------------------------------------------------------
  // STEP 1: Extract basic data with fallback defaults
  // -------------------------------------------------------
  // Try multiple possible column names (case-sensitive!)
  // Uses short-circuit evaluation (||) - returns first truthy value
  const name = row['Property Address'] || row['address'] || row['name'] || row['Unit'] || `Apartment ${nextId}`;
  const bedrooms = parseInt(row['Bedrooms'] || row['bedrooms'] || row['beds'] || row['Bd'] || 1);
  const bathrooms = parseFloat(row['Bathrooms'] || row['bathrooms'] || row['baths'] || row['Bath'] || 1);
  const sqft = parseInt(row['SF'] || row['sqft'] || row['Sq Ft'] || row['Square Feet'] || 700);
  const rent = parseFloat(row['FY25'] || row['rent'] || row['Rent'] || row['price'] || row['Price'] || 1500);
  
  // -------------------------------------------------------
  // STEP 2: Generate location data
  // -------------------------------------------------------
  const coords = generateRandomCoordinates();
  const distance = calculateDistance(coords.lat, coords.lng);
  
  // -------------------------------------------------------
  // STEP 3: Extract metadata columns
  // -------------------------------------------------------
  const propertyType = row['Property Type'] || row['Type'] || 'Multi';
  const portfolio = row['Portfolio'] || 'Student Housing';
  const targetTenant = row['Target Tenant'] || 'Graduate Student';
  
  // -------------------------------------------------------
  // STEP 4: Infer amenities based on property characteristics
  // -------------------------------------------------------
  const amenities = [];
  
  // Type check: Ensure propertyType is a string before calling toLowerCase()
  // This prevents "TypeError: toLowerCase is not a function" if Excel cell is a number
  if (propertyType && typeof propertyType === 'string' && propertyType.toLowerCase().includes('single')) {
    amenities.push('Private Entrance');
  }
  
  // Infer amenities from property size
  if (sqft > 800) amenities.push('Spacious');
  
  // Standard amenities (assumed for all properties)
  amenities.push('WiFi', 'Heating', 'Parking');
  
  // Bathroom privacy logic
  if (bathrooms >= bedrooms) amenities.push('Private Bathroom');
  
  // Affordability marker
  if (rent < 1200) amenities.push('Affordable');
  
  // -------------------------------------------------------
  // STEP 5: Determine atmosphere based on target tenant
  // -------------------------------------------------------
  let atmosphere = 'mixed';  // Default atmosphere
  
  // Type check: Prevent TypeError if targetTenant is not a string
  if (targetTenant && typeof targetTenant === 'string') {
    // Graduate students and faculty/staff prefer quiet environments
    if (targetTenant.toLowerCase().includes('graduate')) atmosphere = 'quiet';
    if (targetTenant.toLowerCase().includes('staff') || targetTenant.toLowerCase().includes('faculty')) atmosphere = 'quiet';
  }
  
  // -------------------------------------------------------
  // STEP 6: Determine neighborhood from portfolio name
  // -------------------------------------------------------
  let neighborhood = 'Hanover';  // Default neighborhood
  
  // Type check: Prevent TypeError if portfolio is not a string
  if (portfolio && typeof portfolio === 'string') {
    // Map portfolio names to neighborhood names
    if (portfolio.toLowerCase().includes('park')) neighborhood = 'Park & Wheelock';
    if (portfolio.toLowerCase().includes('sargent')) neighborhood = 'Sargent Block';
    if (portfolio.toLowerCase().includes('south')) neighborhood = 'South Block';
    if (portfolio.toLowerCase().includes('sachem')) neighborhood = 'Sachem Village';
  }
  
  // -------------------------------------------------------
  // STEP 7: Construct final Apartment object
  // -------------------------------------------------------
  return {
    id: nextId,
    name: name,
    rent: rent,
    distance: distance,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    privateBathroom: bathrooms >= bedrooms,  // Logical inference
    sqft: sqft,
    amenities: amenities,
    coordinates: coords,
    
    // Generate unique Unsplash image URL using ID offset
    // Base: 1502672260266 (valid Unsplash photo ID)
    // Each apartment gets a unique ID by adding nextId
    image: `https://images.unsplash.com/photo-${1502672260266 + nextId}?w=800`,
    
    neighborhood: neighborhood,
    
    // Random student count between 10-39
    studentCount: Math.floor(Math.random() * 30) + 10,
    
    atmosphere: atmosphere,
    
    // Hardcoded values (could be made dynamic in future)
    nearbySchools: ['Dartmouth College'],
    utilities: {
      supermarkets: ['Hannaford', 'Price Chopper'],
      gyms: ['Dartmouth Gym', 'Alumni Gym'],
      restaurants: ['Collis Center', 'Hop'],
      publicTransport: ['Dartmouth Shuttle', 'Advance Transit']
    }
  };
};

/*
 * FUNCTION: generateTypeScriptCode
 * 
 * PURPOSE:
 * Generates the complete TypeScript code for mockData.ts file.
 * This includes the interface definition, apartments array, and static data.
 * 
 * WHY NOT USE A TEMPLATE FILE?
 * - The apartments array is dynamic and can have 1-1000+ entries
 * - JSON.stringify handles proper escaping of special characters
 * - Keeping everything in code makes it easy to maintain in one place
 * 
 * PARAMETERS:
 * @param {Array<Object>} apartments - Array of apartment objects
 * 
 * RETURNS:
 * String containing valid TypeScript code ready to write to file
 */
const generateTypeScriptCode = (apartments) => {
  // -------------------------------------------------------
  // PART 1: TypeScript Interface Definition
  // -------------------------------------------------------
  // This must match the interface used in the React components
  // Any changes here should also be reflected in the frontend
  const interfaceCode = `export interface Apartment {
  id: number;
  name: string;
  rent: number; // USD per month
  distance: number; // miles from campus
  bedrooms: number;
  bathrooms: number;
  privateBathroom: boolean;
  sqft: number;
  amenities: string[];
  coordinates: { lat: number; lng: number };
  image: string;
  // New enhanced properties
  neighborhood: string;
  studentCount: number; // estimated students in area
  atmosphere: string; // social, quiet, mixed
  nearbySchools: string[];
  utilities: {
    supermarkets: string[];
    gyms: string[];
    restaurants: string[];
    publicTransport: string[];
  };
}

`;

  // -------------------------------------------------------
  // PART 2: Apartments Array (Dynamic Content)
  // -------------------------------------------------------
  // JSON.stringify with 2-space indentation for readability
  const apartmentsCode = `export const apartments: Apartment[] = ${JSON.stringify(apartments, null, 2)};

`;

  // -------------------------------------------------------
  // PART 3: Static Data (Preserved from original mockData.ts)
  // -------------------------------------------------------
  // These are not modified by the Excel upload - they remain constant
  const trendDataCode = `export const trendData = [
  { month: "Jan", avgRent: 1150 },
  { month: "Feb", avgRent: 1175 },
  { month: "Mar", avgRent: 1200 },
  { month: "Apr", avgRent: 1225 },
  { month: "May", avgRent: 1280 },
  { month: "Jun", avgRent: 1350 },
  { month: "Jul", avgRent: 1400 },
  { month: "Aug", avgRent: 1450 },
  { month: "Sep", avgRent: 1380 },
  { month: "Oct", avgRent: 1320 },
  { month: "Nov", avgRent: 1280 },
  { month: "Dec", avgRent: 1250 }
];

export const USD_TO_KRW = 1350;
export const SQFT_TO_SQM = 0.092903;

export const neighborhoods = [
  { name: "Hanover", description: "Premium location closest to Dartmouth campus", averageRent: 1967, studentDensity: "very high", atmosphere: "social" },
  { name: "Lebanon", description: "Affordable and quiet residential area", averageRent: 1420, studentDensity: "medium", atmosphere: "quiet" },
  { name: "Norwich", description: "Scenic Vermont town across the river", averageRent: 1685, studentDensity: "low", atmosphere: "quiet" },
  { name: "West Lebanon", description: "Budget-friendly with shopping nearby", averageRent: 1238, studentDensity: "high", atmosphere: "mixed" }
];

export const utilityLocations = [
  // Supermarkets
  { name: "Hannaford", type: "supermarket", coordinates: { lat: 43.7030, lng: -72.2880 } },
  { name: "Price Chopper", type: "supermarket", coordinates: { lat: 43.7010, lng: -72.2900 } },
  { name: "Whole Foods", type: "supermarket", coordinates: { lat: 43.7050, lng: -72.2860 } },
  { name: "Shaws", type: "supermarket", coordinates: { lat: 43.7000, lng: -72.2920 } },
  { name: "Dartmouth Co-op", type: "supermarket", coordinates: { lat: 43.7035, lng: -72.2875 } },
  
  // Gyms
  { name: "Planet Fitness", type: "gym", coordinates: { lat: 43.7040, lng: -72.2890 } },
  { name: "Dartmouth Gym", type: "gym", coordinates: { lat: 43.7035, lng: -72.2875 } },
  { name: "Alumni Gym", type: "gym", coordinates: { lat: 43.7030, lng: -72.2870 } },
  { name: "Lebanon Recreation Center", type: "gym", coordinates: { lat: 43.7025, lng: -72.2885 } },
  { name: "Norwich Recreation Center", type: "gym", coordinates: { lat: 43.7005, lng: -72.2915 } },
  
  // Schools
  { name: "Dartmouth College", type: "school", coordinates: { lat: 43.7035, lng: -72.2875 } },
  { name: "Lebanon High School", type: "school", coordinates: { lat: 43.7020, lng: -72.2890 } },
  { name: "Norwich Elementary", type: "school", coordinates: { lat: 43.7005, lng: -72.2910 } }
];
`;

  // -------------------------------------------------------
  // FINAL STEP: Concatenate all parts
  // -------------------------------------------------------
  // Returns complete valid TypeScript file content
  return interfaceCode + apartmentsCode + trendDataCode;
};

/*
 * FUNCTION: findHeaderRow
 * 
 * PURPOSE:
 * Excel files from different sources often have complex multi-row headers:
 * - Row 1: Section title (e.g., "Property Information")
 * - Row 2: Column numbers (1, 2, 3, 4...)
 * - Row 3: Actual column names (Bedrooms, Bathrooms, etc.)
 * - Row 4+: Data starts here
 * 
 * This function intelligently detects which row contains the actual column names.
 * 
 * ALGORITHM:
 * 1. Try parsing rows 0-5 as potential headers
 * 2. For each row, convert to JSON and examine the keys
 * 3. Skip rows that are:
 *    - All numbers (like "1", "2", "3")
 *    - Contain "__EMPTY" (merged cells)
 *    - Are section headers with only 1-2 generic titles
 * 4. Accept the first row with at least 3 recognized column names
 * 
 * PARAMETERS:
 * @param {Object} worksheet - XLSX worksheet object
 * 
 * RETURNS:
 * { headerRow: number, data: Array<Object> }
 * - headerRow: The detected row index (0-based)
 * - data: Parsed rows as JavaScript objects
 */
const findHeaderRow = (worksheet) => {
  const range = XLSX.utils.decode_range(worksheet['!ref']);
  
  console.log(`📄 Excel range: ${worksheet['!ref']}`);
  
  // -------------------------------------------------------
  // Try rows 0-5 to find the actual header row
  // -------------------------------------------------------
  // Most Excel files have headers within the first 6 rows
  for (let headerRow = 0; headerRow <= 5; headerRow++) {
    try {
      // -------------------------------------------------------
      // Parse this row as if it were the header
      // -------------------------------------------------------
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
        range: headerRow,    // Start parsing from this row
        defval: '',          // Default value for empty cells
        blankrows: false     // Skip completely blank rows
      });
      
      // If no data, this row is blank - try next row
      if (jsonData.length === 0) continue;
      
      const firstRow = jsonData[0];
      const keys = Object.keys(firstRow);  // These are potential column names
      
      console.log(`🔍 Trying row ${headerRow}: keys =`, keys);
      
      // -------------------------------------------------------
      // VALIDATION: Skip rows that are NOT actual headers
      // -------------------------------------------------------
      
      // Check 1: Merged cells produce "__EMPTY" keys
      // Example: Excel file with merged title cell creates "__EMPTY", "__EMPTY_1", etc.
      const hasEmptyKeys = keys.some(key => key && key.includes('__EMPTY'));
      
      // Check 2: Number-only rows (like "1", "2", "3", "4")
      // Some Excel files have a row numbering columns
      const allNumbers = keys.length > 0 && keys.every(key => !isNaN(key) || key === '' || key.trim() === '');
      
      // Check 3: Section header rows with generic titles
      // Example: A row with only "Property Information" is not a data header
      const isSectionHeader = keys.length === 1 || keys.every(key => 
        key === '' || 
        key === 'Property Information' || 
        key === 'Property Address' ||
        key === 'Portfolio' ||
        key === 'Target Tenant'
      );
      
      // Apply validation checks
      if (allNumbers) {
        console.log(`⏭️  Skipping row ${headerRow} (all numbers)`);
        continue;
      }
      if (hasEmptyKeys) {
        console.log(`⏭️  Skipping row ${headerRow} (has __EMPTY merged cells)`);
        continue;
      }
      if (isSectionHeader) {
        console.log(`⏭️  Skipping row ${headerRow} (section header)`);
        continue;
      }
      
      // -------------------------------------------------------
      // VALIDATION: Check for recognized column names
      // -------------------------------------------------------
      // Count how many keys match expected column patterns
      // This list should be updated if you support new column types
      const validColumnCount = keys.filter(key => 
        key && key.length > 0 && (
          key.toLowerCase().includes('bedroom') ||
          key.toLowerCase().includes('bathroom') ||
          key.toLowerCase().includes('property') ||
          key.toLowerCase().includes('address') ||
          key.toLowerCase().includes('portfolio') ||
          key.toLowerCase().includes('tenant') ||
          key.toLowerCase().includes('type') ||
          key.toLowerCase().includes('sf') ||      // Square feet abbreviation
          key.toLowerCase().includes('sqft') ||
          key.toLowerCase().includes('unit')
        )
      ).length;
      
      // -------------------------------------------------------
      // ACCEPTANCE CRITERIA: At least 3 valid column names
      // -------------------------------------------------------
      // Requiring 3+ columns reduces false positives
      // (e.g., a row with only "Address" wouldn't be accepted)
      if (validColumnCount >= 3) {
        console.log(`✅ Found valid headers at row ${headerRow + 1} (${validColumnCount} valid columns)`);
        console.log(`📋 Columns:`, keys.join(', '));
        
        // -------------------------------------------------------
        // Clean up data: Remove completely empty rows
        // -------------------------------------------------------
        const validData = jsonData.filter(row => {
          const values = Object.values(row);
          // Keep row if at least one value is non-empty
          return values.some(val => val !== '' && val !== null && val !== undefined);
        });
        
        console.log(`📊 Valid data rows: ${validData.length}`);
        
        // SUCCESS: Return the detected header row and cleaned data
        return { headerRow, data: validData };
      }
    } catch (error) {
      // Error during parsing (e.g., malformed Excel)
      console.log(`❌ Error trying row ${headerRow}:`, error.message);
    }
  }
  
  // -------------------------------------------------------
  // FALLBACK: No valid header found in rows 0-5
  // -------------------------------------------------------
  // This happens if the Excel file has an unusual format
  // Fall back to default parsing (assume row 0 is header)
  console.log('⚠️  No specific header row detected, using default parsing');
  const fallbackData = XLSX.utils.sheet_to_json(worksheet, { defval: '', blankrows: false });
  console.log(`📊 Fallback data rows: ${fallbackData.length}`);
  return { 
    headerRow: 0,      // Assume first row is header
    data: fallbackData
  };
};

// ============================================================
// API ENDPOINTS
// ============================================================

/*
 * ENDPOINT: POST /api/upload-excel
 * 
 * PURPOSE:
 * Main endpoint that handles Excel file uploads and updates mockData.ts
 * 
 * REQUEST:
 * - Content-Type: multipart/form-data
 * - Fields:
 *   - file: Excel file (.xlsx, .xls, .csv)
 *   - mode: "replace" | "update"
 * 
 * RESPONSE (Success):
 * {
 *   success: true,
 *   message: "Successfully replaced mockData.ts",
 *   apartmentsAdded: 50,
 *   totalApartments: 50
 * }
 * 
 * RESPONSE (Error):
 * {
 *   error: "Failed to process Excel file",
 *   details: "Detailed error message",
 *   stack: "Error stack trace"
 * }
 * 
 * WORKFLOW:
 * 1. Validate file upload
 * 2. Parse Excel with intelligent header detection
 * 3. Read existing mockData.ts (if mode = "update")
 * 4. Map Excel rows to Apartment objects
 * 5. Merge or replace apartments array
 * 6. Generate TypeScript code
 * 7. Write to mockData.ts
 * 8. Force Vite to detect change (via timestamp update)
 */
app.post('/api/upload-excel', upload.single('file'), async (req, res) => {
  try {
    // -------------------------------------------------------
    // STEP 1: Validate file upload
    // -------------------------------------------------------
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // -------------------------------------------------------
    // STEP 2: Determine mode (replace vs update)
    // -------------------------------------------------------
    // "replace": Clear all existing apartments, use only new data
    // "update": Keep existing apartments, add new ones
    const mode = req.body.mode || 'replace';
    
    // -------------------------------------------------------
    // STEP 3: Parse Excel file
    // -------------------------------------------------------
    // XLSX.read supports .xlsx, .xls, .csv formats
    // Buffer contains the file content from memory storage
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    
    // Use first sheet (most Excel files have data in Sheet1)
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // -------------------------------------------------------
    // STEP 4: Intelligent header detection
    // -------------------------------------------------------
    // Uses findHeaderRow() to handle multi-row headers
    const { headerRow, data: jsonData } = findHeaderRow(worksheet);

    console.log(`📊 Parsed ${jsonData.length} rows from Excel (starting from row ${headerRow + 1})`);
    console.log('🔧 Mode:', mode);
    
    // Log first row for debugging (helps identify column mapping issues)
    if (jsonData.length > 0) {
      console.log('📝 First row sample:', JSON.stringify(jsonData[0], null, 2));
    }

    // -------------------------------------------------------
    // STEP 5: Prepare for ID assignment
    // -------------------------------------------------------
    let existingApartments = [];
    let nextId = 1;  // Default starting ID

    // -------------------------------------------------------
    // STEP 6: Read existing data (if mode = "update")
    // -------------------------------------------------------
    if (mode === 'update') {
      try {
        const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.ts');
        const existingContent = fs.readFileSync(mockDataPath, 'utf8');
        
        // -------------------------------------------------------
        // Extract apartments array using regex
        // -------------------------------------------------------
        // Pattern: export const apartments: Apartment[] = [...];
        // Matches everything between [ and ];
        const match = existingContent.match(/export const apartments: Apartment\[\] = (\[[\s\S]*?\]);/);
        
        if (match) {
          // Parse the JSON array
          // NOTE: Using JSON.parse on a regex capture is hacky but works for our use case
          // In production, use a proper TypeScript AST parser like ts-morph
          existingApartments = JSON.parse(match[1]);
          console.log(`📂 Found ${existingApartments.length} existing apartments`);
          
          // -------------------------------------------------------
          // Calculate next ID (avoid ID collisions)
          // -------------------------------------------------------
          // Find highest existing ID and add 1
          nextId = Math.max(...existingApartments.map(a => a.id), 0) + 1;
        }
      } catch (error) {
        console.log('⚠️ Could not read existing data, will create new file');
      }
    }

    // -------------------------------------------------------
    // STEP 7: Convert Excel rows to Apartment objects
    // -------------------------------------------------------
    const newApartments = jsonData.map((row, index) => {
      return parseRowToApartment(row, nextId + index);
    });

    console.log(`✅ Generated ${newApartments.length} new apartments`);

    // -------------------------------------------------------
    // STEP 8: Merge or replace apartments
    // -------------------------------------------------------
    const finalApartments = mode === 'update' 
      ? [...existingApartments, ...newApartments]  // Append new to existing
      : newApartments;                              // Replace all with new

    console.log(`📝 Final apartment count: ${finalApartments.length}`);

    // -------------------------------------------------------
    // STEP 9: Generate TypeScript code
    // -------------------------------------------------------
    const tsCode = generateTypeScriptCode(finalApartments);

    // -------------------------------------------------------
    // STEP 10: Write to mockData.ts
    // -------------------------------------------------------
    const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.ts');
    fs.writeFileSync(mockDataPath, tsCode, 'utf8');
    
    // -------------------------------------------------------
    // STEP 11: Force Vite HMR (Hot Module Replacement)
    // -------------------------------------------------------
    // CRITICAL FIX: Vite doesn't detect external file changes
    // Solution: Update file timestamp (access time & modification time)
    // This triggers Vite's file watcher and forces a reload
    const now = new Date();
    fs.utimesSync(mockDataPath, now, now);

    console.log('✨ Successfully updated mockData.ts');
    console.log(`📁 File path: ${mockDataPath}`);
    console.log(`📊 Total apartments in file: ${finalApartments.length}`);

    // -------------------------------------------------------
    // STEP 12: Send success response
    // -------------------------------------------------------
    res.json({
      success: true,
      message: `Successfully ${mode === 'update' ? 'updated' : 'replaced'} mockData.ts`,
      apartmentsAdded: newApartments.length,
      totalApartments: finalApartments.length
    });

  } catch (error) {
    // -------------------------------------------------------
    // ERROR HANDLING
    // -------------------------------------------------------
    // Log error to both terminal and in-memory logs
    console.error('❌ Error processing Excel file:', error);
    console.error('❌ Stack trace:', error.stack);
    
    // Send detailed error response for debugging
    // In production, you might want to hide stack traces
    res.status(500).json({ 
      error: 'Failed to process Excel file',
      details: error.message,
      stack: error.stack
    });
  }
});

/*
 * ENDPOINT: GET /api/health
 * 
 * PURPOSE: Simple health check to verify server is running
 * Used by the frontend to confirm connectivity
 */
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Excel upload server is running' });
});

/*
 * ENDPOINT: GET /api/logs
 * 
 * PURPOSE: Retrieve recent server logs
 * Used by test-upload.html to display logs in the browser
 * 
 * WHY THIS IS USEFUL:
 * - Users without terminal access can still see server errors
 * - Helpful for debugging Excel parsing issues
 * - Logs include timestamps and types (log/error)
 */
app.get('/api/logs', (req, res) => {
  res.json({ logs: recentLogs });
});

/*
 * ENDPOINT: POST /api/logs/clear
 * 
 * PURPOSE: Clear the in-memory logs
 * Useful when debugging multiple uploads in sequence
 */
app.post('/api/logs/clear', (req, res) => {
  recentLogs.length = 0;  // Clear array in place
  res.json({ success: true, message: 'Logs cleared' });
});

/*
 * ENDPOINT: POST /api/test-upload
 * 
 * PURPOSE: Debug endpoint to test Excel parsing without writing files
 * Returns raw Excel data and structure for inspection
 * 
 * USAGE:
 * Used by test-upload.html to verify file format before actual upload
 * Helps identify header row and column name issues
 */
app.post('/api/test-upload', upload.single('file'), (req, res) => {
  try {
    console.log('📥 Test upload received');
    console.log('File:', req.file ? {
      name: req.file.originalname,
      size: req.file.size,
      mimetype: req.file.mimetype
    } : 'No file');
    console.log('Body:', req.body);
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file received' });
    }
    
    // -------------------------------------------------------
    // Parse Excel and extract structure info
    // -------------------------------------------------------
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    console.log('Sheets:', workbook.SheetNames);
    
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    console.log('First sheet range:', firstSheet['!ref']);
    
    // -------------------------------------------------------
    // Extract first 6 rows as raw cell values
    // -------------------------------------------------------
    // This shows the actual Excel structure including multi-row headers
    const range = XLSX.utils.decode_range(firstSheet['!ref']);
    const samples = [];
    
    for (let R = range.s.r; R <= Math.min(range.s.r + 5, range.e.r); R++) {
      const row = [];
      for (let C = range.s.c; C <= range.e.c; C++) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = firstSheet[cellAddress];
        row.push(cell ? cell.v : '');  // cell.v is the cell value
      }
      samples.push(row);
    }
    
    console.log('Sample data:', samples);
    
    // -------------------------------------------------------
    // Return structure for inspection
    // -------------------------------------------------------
    res.json({
      success: true,
      filename: req.file.originalname,
      size: req.file.size,
      sheets: workbook.SheetNames,
      range: firstSheet['!ref'],
      sampleData: samples  // First 6 rows as 2D array
    });
  } catch (error) {
    console.error('Test upload error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: error.stack
    });
  }
});

// ============================================================
// START SERVER
// ============================================================
/*
 * Start the Express server on the configured port
 * 
 * ACCESS:
 * - Main upload: http://localhost:3010/api/upload-excel
 * - Health check: http://localhost:3010/api/health
 * - Logs viewer: http://localhost:3010/api/logs
 * - Test upload: http://localhost:3010/api/test-upload
 * 
 * RUNNING:
 * - Start: node server.js
 * - Or with npm: npm run server
 * - Or both servers: npm run start:all
 */
app.listen(PORT, () => {
  console.log(`🚀 Excel upload server running on http://localhost:${PORT}`);
  console.log(`📤 Upload endpoint: http://localhost:${PORT}/api/upload-excel`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test-upload`);
});

