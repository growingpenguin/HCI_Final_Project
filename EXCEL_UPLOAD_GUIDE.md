# 📊 Excel Upload System - User Guide

## Overview

The Excel Upload System allows you to automatically convert Excel spreadsheet data into TypeScript apartment listings in `mockData.ts`. This eliminates manual data entry and ensures consistency.

## 🚀 Quick Start

### 1. Start the Upload Server

Run the backend server that handles file uploads:

```bash
npm run server
```

The server will start on `http://localhost:3010`

### 2. Start the Development Server

In a **separate terminal**, run:

```bash
npm run dev
```

Or run both servers simultaneously:

```bash
npm run start:all
```

### 3. Access the Upload Interface

Navigate to **http://localhost:3005/upload** (or your dev server port) and you'll see the Excel Upload interface.

## 📝 How to Use

### Step 1: Prepare Your Excel File

Your Excel file should contain apartment data with any of these column names (case-insensitive):

| Column Name Options | Description | Example |
|---------------------|-------------|---------|
| **Property Address** / address / name / Unit | Apartment name/address | "1 Austin Ave" |
| **Bedrooms** / bedrooms / beds / Bd | Number of bedrooms | 2 |
| **Bathrooms** / bathrooms / baths / Bath | Number of bathrooms | 1.5 |
| **SF** / sqft / Sq Ft / Square Feet | Square footage | 850 |
| **FY25** / rent / Rent / price / Price | Monthly rent in USD | 1500 |
| **Property Type** / Type | Property type | "Multi", "SFH", "Apartment" |
| **Portfolio** / Portfolio | Building portfolio | "Sachem Village", "South Block" |
| **Target Tenant** / Target Tenant | Target demographic | "Graduate Student", "Staff/Faculty" |

**Example Excel Structure:**

| Property Address | Bedrooms | Bathrooms | SF | FY25 | Property Type | Portfolio | Target Tenant |
|-----------------|----------|-----------|-----|------|---------------|-----------|---------------|
| 1 Austin Ave | 3 | 1 | 700 | 1695 | SFH | Single Family | Staff/Faculty |
| 1 N. Park St - 1N | 1 | 1 | 683 | 1320 | Multi | Multi Family | Staff/Faculty |

### Step 2: Choose Upload Mode

#### 🔄 Update Mode (Recommended)
- **Adds** new apartments to existing data
- Preserves all current listings
- New apartments get sequential IDs
- Perfect for adding more properties

#### ⚠️ Replace Mode
- **Replaces** all existing data
- Clears current apartments
- Starts fresh with only uploaded data
- Use when restructuring entire dataset

### Step 3: Upload File

1. Click the upload area or drag and drop your Excel file
2. Supported formats: `.xlsx`, `.xls`, `.csv`
3. Click "Update Data" or "Replace Data" button
4. Wait for confirmation message

### Step 4: See Results

After successful upload, you'll see:
- ✅ Number of apartments added
- 📊 Total apartment count
- 💡 Reminder to refresh your application

**Refresh your browser** to see the new data in action!

## 🗺️ Auto-Generated Data

The system automatically generates these fields for each apartment:

### Coordinates & Location
- **coordinates**: Random lat/lng within 5 miles of Dartmouth Green
- **distance**: Calculated distance from Dartmouth (43.7022, -72.2896)

### Enriched Properties
- **neighborhood**: Based on Portfolio (e.g., "Sachem Village", "South Block")
- **atmosphere**: Based on Target Tenant ("quiet" for graduates/faculty, "social" for general)
- **studentCount**: Random estimate (10-40 students)
- **amenities**: Auto-selected based on property characteristics:
  - WiFi, Heating, Parking (always included)
  - Private Bathroom (if bathrooms ≥ bedrooms)
  - Spacious (if sqft > 800)
  - Affordable (if rent < $1,200)
  
### Utilities
Each apartment gets default nearby utilities:
- **Supermarkets**: Hannaford, Price Chopper
- **Gyms**: Dartmouth Gym, Alumni Gym  
- **Restaurants**: Collis Center, Hop
- **Public Transport**: Dartmouth Shuttle, Advance Transit

## 📋 Supported Excel Formats

### Format 1: Property Management Style
```
| Property Type | Bedrooms | Bathrooms | SF | Property Address | Portfolio | Target Tenant |
```

### Format 2: Rental Listing Style  
```
| Unit | beds | baths | sqft | rent | address | Type |
```

### Format 3: Financial Planning Style
```
| Unit | Sq Ft | FY25 | Cost per sq ft | Type |
```

**The parser is flexible!** It recognizes various column name variations automatically.

## 🔧 Troubleshooting

### "Failed to connect to upload server"
**Solution**: Make sure the server is running:
```bash
npm run server
```

### "No file uploaded"
**Solution**: Ensure you've selected a valid Excel file (.xlsx, .xls, or .csv)

### "Failed to process Excel file"
**Solution**: Check that your Excel file has:
- At least one sheet
- Column headers in the first row
- Valid data in subsequent rows

### Missing coordinates/data after upload
**Solution**: This is normal! Coordinates and enriched data are auto-generated. Check the generated `mockData.ts` file.

### Changes not appearing in the app
**Solution**: Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

## 🎯 Example Workflow

Let's say you have an Excel file `new_apartments.xlsx`:

```bash
# Terminal 1: Start upload server
npm run server

# Terminal 2: Start dev server  
npm run dev

# Browser: Go to http://localhost:3005/upload
# 1. Select "Update" mode
# 2. Choose new_apartments.xlsx
# 3. Click "Update Data"
# 4. See success message: "Added: 15 apartments, Total: 235 apartments"
# 5. Refresh browser
# 6. Check Home page - 15 new apartments appear!
# 7. Check Map - New markers on the heatmap!
```

## 📂 Generated File Structure

After upload, your `src/data/mockData.ts` will contain:

```typescript
export interface Apartment { ... }

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "1 Austin Ave",
    rent: 1695,
    distance: 0.30,
    bedrooms: 3,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 700,
    amenities: ["WiFi", "Heating", "Parking"],
    coordinates: { lat: 43.7022, lng: -72.2896 },
    image: "https://images.unsplash.com/...",
    neighborhood: "Single Family",
    studentCount: 24,
    atmosphere: "quiet",
    nearbySchools: ["Dartmouth College"],
    utilities: { ... }
  },
  // ... more apartments
];

export const trendData = [ ... ];
export const USD_TO_KRW = 1350;
export const SQFT_TO_SQM = 0.092903;
export const neighborhoods = [ ... ];
export const utilityLocations = [ ... ];
```

## 🔐 Data Safety

- **Update mode** preserves existing data
- Original data structure is always maintained
- The system validates file types before processing
- Error messages provide clear guidance

## 💡 Tips

1. **Use Update mode** for incremental additions
2. **Backup mockData.ts** before using Replace mode
3. **Standardize column names** in Excel for consistency
4. **Test with small files** first (5-10 rows)
5. **Check console logs** (server terminal) for detailed processing info

## 🎨 UI Features

- 📤 Drag-and-drop file upload
- 🎯 Clear mode selection (Update vs Replace)
- ✅ Success confirmation with stats
- ❌ Error messages with troubleshooting tips
- 📖 Built-in instructions and supported columns guide

## 🚀 Advanced Usage

### Running with Custom Port

Edit `server.js` to change the port:

```javascript
const PORT = 3010; // Change to your preferred port
```

### Customizing Auto-Generated Data

Edit the `parseRowToApartment` function in `server.js`:

```javascript
const parseRowToApartment = (row, nextId) => {
  // Customize coordinate generation
  const coords = generateRandomCoordinates();
  
  // Customize amenities logic
  const amenities = [];
  if (sqft > 1000) amenities.push('Luxury');
  
  // ... more customizations
};
```

### Adding Custom Fields

To add new fields to apartments:

1. Update the `Apartment` interface in both:
   - `server.js` (generateTypeScriptCode function)
   - `src/data/mockData.ts` (interface definition)

2. Modify `parseRowToApartment` in `server.js` to populate the field

## 📚 Related Documentation

- [Main README](./README.md) - Project overview
- [mockData.ts](./src/data/mockData.ts) - Current apartment data
- [server.js](./server.js) - Upload server code
- [ExcelUploader.tsx](./src/components/ExcelUploader.tsx) - Upload component

## ❓ FAQ

**Q: Can I upload CSV files?**  
A: Yes! The system supports .xlsx, .xls, and .csv formats.

**Q: What if my columns have different names?**  
A: The parser recognizes many variations (see "Supported Columns" table above).

**Q: How do I revert if something goes wrong?**  
A: Keep a backup of `mockData.ts` or use git to revert changes:
```bash
git checkout src/data/mockData.ts
```

**Q: Can I upload multiple files at once?**  
A: Not currently, but you can upload files sequentially in Update mode.

**Q: Where are the uploaded Excel files stored?**  
A: They're processed in-memory and not stored. Only the parsed data is saved to `mockData.ts`.

---

**Need Help?** Check the console logs in both terminals for detailed error messages and processing information!

