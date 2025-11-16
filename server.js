const express = require('express');
const multer = require('multer');
const cors = require('cors');
const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3010;

// Configure CORS
app.use(cors());
app.use(express.json());

// Store recent logs in memory
const recentLogs = [];
const MAX_LOGS = 100;

// Custom console logger that also stores logs
const originalLog = console.log;
const originalError = console.error;

console.log = (...args) => {
  const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
  recentLogs.push({ time: new Date().toISOString(), type: 'log', message });
  if (recentLogs.length > MAX_LOGS) recentLogs.shift();
  originalLog.apply(console, args);
};

console.error = (...args) => {
  const message = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
  recentLogs.push({ time: new Date().toISOString(), type: 'error', message });
  if (recentLogs.length > MAX_LOGS) recentLogs.shift();
  originalError.apply(console, args);
};

// Configure multer for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Helper function to generate random coordinates within Hanover/Lebanon area
const generateRandomCoordinates = () => {
  const baseLat = 43.7022; // Dartmouth Green
  const baseLng = -72.2896;
  // Random offset within ~5 miles
  const latOffset = (Math.random() - 0.5) * 0.1;
  const lngOffset = (Math.random() - 0.5) * 0.1;
  return {
    lat: parseFloat((baseLat + latOffset).toFixed(6)),
    lng: parseFloat((baseLng + lngOffset).toFixed(6))
  };
};

// Helper function to calculate distance from Dartmouth Green
const calculateDistance = (lat, lng) => {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat - 43.7022) * Math.PI / 180;
  const dLng = (lng - (-72.2896)) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(43.7022 * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return parseFloat((R * c).toFixed(2));
};

// Helper function to parse Excel row to Apartment object
const parseRowToApartment = (row, nextId) => {
  // Try to extract data from various possible column names
  const name = row['Property Address'] || row['address'] || row['name'] || row['Unit'] || `Apartment ${nextId}`;
  const bedrooms = parseInt(row['Bedrooms'] || row['bedrooms'] || row['beds'] || row['Bd'] || 1);
  const bathrooms = parseFloat(row['Bathrooms'] || row['bathrooms'] || row['baths'] || row['Bath'] || 1);
  const sqft = parseInt(row['SF'] || row['sqft'] || row['Sq Ft'] || row['Square Feet'] || 700);
  const rent = parseFloat(row['FY25'] || row['rent'] || row['Rent'] || row['price'] || row['Price'] || 1500);
  
  // Generate coordinates
  const coords = generateRandomCoordinates();
  const distance = calculateDistance(coords.lat, coords.lng);
  
  // Determine property type and amenities
  const propertyType = row['Property Type'] || row['Type'] || 'Multi';
  const portfolio = row['Portfolio'] || 'Student Housing';
  const targetTenant = row['Target Tenant'] || 'Graduate Student';
  
  const amenities = [];
  if (propertyType && typeof propertyType === 'string' && propertyType.toLowerCase().includes('single')) {
    amenities.push('Private Entrance');
  }
  if (sqft > 800) amenities.push('Spacious');
  amenities.push('WiFi', 'Heating', 'Parking');
  if (bathrooms >= bedrooms) amenities.push('Private Bathroom');
  if (rent < 1200) amenities.push('Affordable');
  
  // Determine atmosphere based on target tenant
  let atmosphere = 'mixed';
  if (targetTenant && typeof targetTenant === 'string') {
    if (targetTenant.toLowerCase().includes('graduate')) atmosphere = 'quiet';
    if (targetTenant.toLowerCase().includes('staff') || targetTenant.toLowerCase().includes('faculty')) atmosphere = 'quiet';
  }
  
  // Determine neighborhood based on portfolio
  let neighborhood = 'Hanover';
  if (portfolio && typeof portfolio === 'string') {
    if (portfolio.toLowerCase().includes('park')) neighborhood = 'Park & Wheelock';
    if (portfolio.toLowerCase().includes('sargent')) neighborhood = 'Sargent Block';
    if (portfolio.toLowerCase().includes('south')) neighborhood = 'South Block';
    if (portfolio.toLowerCase().includes('sachem')) neighborhood = 'Sachem Village';
  }
  
  return {
    id: nextId,
    name: name,
    rent: rent,
    distance: distance,
    bedrooms: bedrooms,
    bathrooms: bathrooms,
    privateBathroom: bathrooms >= bedrooms,
    sqft: sqft,
    amenities: amenities,
    coordinates: coords,
    image: `https://images.unsplash.com/photo-${1502672260266 + nextId}?w=800`,
    neighborhood: neighborhood,
    studentCount: Math.floor(Math.random() * 30) + 10,
    atmosphere: atmosphere,
    nearbySchools: ['Dartmouth College'],
    utilities: {
      supermarkets: ['Hannaford', 'Price Chopper'],
      gyms: ['Dartmouth Gym', 'Alumni Gym'],
      restaurants: ['Collis Center', 'Hop'],
      publicTransport: ['Dartmouth Shuttle', 'Advance Transit']
    }
  };
};

// Helper function to generate TypeScript code
const generateTypeScriptCode = (apartments) => {
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

  const apartmentsCode = `export const apartments: Apartment[] = ${JSON.stringify(apartments, null, 2)};

`;

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

  return interfaceCode + apartmentsCode + trendDataCode;
};

// Helper function to detect header row in multi-row header Excel files
const findHeaderRow = (worksheet) => {
  const range = XLSX.utils.decode_range(worksheet['!ref']);
  
  console.log(`📄 Excel range: ${worksheet['!ref']}`);
  
  // Try parsing with different header rows (0 through 5)
  for (let headerRow = 0; headerRow <= 5; headerRow++) {
    try {
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
        range: headerRow,
        defval: '',
        blankrows: false  // Skip blank rows
      });
      
      if (jsonData.length === 0) continue;
      
      const firstRow = jsonData[0];
      const keys = Object.keys(firstRow);
      
      console.log(`🔍 Trying row ${headerRow}: keys =`, keys);
      
      // Skip rows where:
      // 1. All keys are just numbers (like "1", "2", "3")
      // 2. Keys contain "__EMPTY" (merged cells from Excel)
      // 3. Keys are generic section headers
      const hasEmptyKeys = keys.some(key => key && key.includes('__EMPTY'));
      const allNumbers = keys.length > 0 && keys.every(key => !isNaN(key) || key === '' || key.trim() === '');
      const isSectionHeader = keys.length === 1 || keys.every(key => 
        key === '' || 
        key === 'Property Information' || 
        key === 'Property Address' ||
        key === 'Portfolio' ||
        key === 'Target Tenant'
      );
      
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
      
      // Check if this row has actual column names we recognize
      const validColumnCount = keys.filter(key => 
        key && key.length > 0 && (
          key.toLowerCase().includes('bedroom') ||
          key.toLowerCase().includes('bathroom') ||
          key.toLowerCase().includes('property') ||
          key.toLowerCase().includes('address') ||
          key.toLowerCase().includes('portfolio') ||
          key.toLowerCase().includes('tenant') ||
          key.toLowerCase().includes('type') ||
          key.toLowerCase().includes('sf') ||
          key.toLowerCase().includes('sqft') ||
          key.toLowerCase().includes('unit')
        )
      ).length;
      
      // Need at least 3 valid column names
      if (validColumnCount >= 3) {
        console.log(`✅ Found valid headers at row ${headerRow + 1} (${validColumnCount} valid columns)`);
        console.log(`📋 Columns:`, keys.join(', '));
        
        // Filter out empty rows
        const validData = jsonData.filter(row => {
          const values = Object.values(row);
          return values.some(val => val !== '' && val !== null && val !== undefined);
        });
        
        console.log(`📊 Valid data rows: ${validData.length}`);
        return { headerRow, data: validData };
      }
    } catch (error) {
      console.log(`❌ Error trying row ${headerRow}:`, error.message);
    }
  }
  
  // Fallback: use first row
  console.log('⚠️  No specific header row detected, using default parsing');
  const fallbackData = XLSX.utils.sheet_to_json(worksheet, { defval: '', blankrows: false });
  console.log(`📊 Fallback data rows: ${fallbackData.length}`);
  return { 
    headerRow: 0, 
    data: fallbackData
  };
};

// API endpoint for Excel upload
app.post('/api/upload-excel', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const mode = req.body.mode || 'replace'; // 'replace' or 'update'
    
    // Parse Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Detect header row and parse data
    const { headerRow, data: jsonData } = findHeaderRow(worksheet);

    console.log(`📊 Parsed ${jsonData.length} rows from Excel (starting from row ${headerRow + 1})`);
    console.log('🔧 Mode:', mode);
    
    // Log first row for debugging
    if (jsonData.length > 0) {
      console.log('📝 First row sample:', JSON.stringify(jsonData[0], null, 2));
    }

    let existingApartments = [];
    let nextId = 1;

    // Read existing mockData.ts if in update mode
    if (mode === 'update') {
      try {
        const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.ts');
        const existingContent = fs.readFileSync(mockDataPath, 'utf8');
        
        // Extract existing apartments array using regex
        const match = existingContent.match(/export const apartments: Apartment\[\] = (\[[\s\S]*?\]);/);
        if (match) {
          // Use eval to parse the array (in a real production app, use a proper TS parser)
          existingApartments = JSON.parse(match[1]);
          console.log(`📂 Found ${existingApartments.length} existing apartments`);
          
          // Find the highest ID
          nextId = Math.max(...existingApartments.map(a => a.id), 0) + 1;
        }
      } catch (error) {
        console.log('⚠️ Could not read existing data, will create new file');
      }
    }

    // Parse each row from Excel to Apartment object
    const newApartments = jsonData.map((row, index) => {
      return parseRowToApartment(row, nextId + index);
    });

    console.log(`✅ Generated ${newApartments.length} new apartments`);

    // Combine or replace apartments
    const finalApartments = mode === 'update' 
      ? [...existingApartments, ...newApartments]
      : newApartments;

    console.log(`📝 Final apartment count: ${finalApartments.length}`);

    // Generate TypeScript code
    const tsCode = generateTypeScriptCode(finalApartments);

    // Write to mockData.ts
    const mockDataPath = path.join(__dirname, 'src', 'data', 'mockData.ts');
    fs.writeFileSync(mockDataPath, tsCode, 'utf8');
    
    // Force Vite to detect the change by updating timestamp
    const now = new Date();
    fs.utimesSync(mockDataPath, now, now);

    console.log('✨ Successfully updated mockData.ts');
    console.log(`📁 File path: ${mockDataPath}`);
    console.log(`📊 Total apartments in file: ${finalApartments.length}`);

    res.json({
      success: true,
      message: `Successfully ${mode === 'update' ? 'updated' : 'replaced'} mockData.ts`,
      apartmentsAdded: newApartments.length,
      totalApartments: finalApartments.length
    });

  } catch (error) {
    console.error('❌ Error processing Excel file:', error);
    console.error('❌ Stack trace:', error.stack);
    res.status(500).json({ 
      error: 'Failed to process Excel file',
      details: error.message,
      stack: error.stack
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Excel upload server is running' });
});

// Logs endpoint - view recent server logs
app.get('/api/logs', (req, res) => {
  res.json({ logs: recentLogs });
});

// Clear logs endpoint
app.post('/api/logs/clear', (req, res) => {
  recentLogs.length = 0;
  res.json({ success: true, message: 'Logs cleared' });
});

// Test endpoint to debug file upload
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
    
    // Try to parse as Excel
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    console.log('Sheets:', workbook.SheetNames);
    
    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
    console.log('First sheet range:', firstSheet['!ref']);
    
    // Get first few cells
    const range = XLSX.utils.decode_range(firstSheet['!ref']);
    const samples = [];
    for (let R = range.s.r; R <= Math.min(range.s.r + 5, range.e.r); R++) {
      const row = [];
      for (let C = range.s.c; C <= range.e.c; C++) {
        const cell = firstSheet[XLSX.utils.encode_cell({ r: R, c: C })];
        row.push(cell ? cell.v : '');
      }
      samples.push(row);
    }
    
    console.log('Sample data:', samples);
    
    res.json({
      success: true,
      filename: req.file.originalname,
      size: req.file.size,
      sheets: workbook.SheetNames,
      range: firstSheet['!ref'],
      sampleData: samples
    });
  } catch (error) {
    console.error('Test upload error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: error.stack
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Excel upload server running on http://localhost:${PORT}`);
  console.log(`📤 Upload endpoint: http://localhost:${PORT}/api/upload-excel`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test-upload`);
});

