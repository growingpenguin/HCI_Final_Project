# 🧪 Excel Upload System - Testing Guide

## Test Status: ✅ READY FOR TESTING

The Excel upload system has been fully implemented and is ready for testing with your sample Excel files.

## 🎯 What Was Implemented

### Backend (server.js)
- ✅ Express server running on port 3010
- ✅ Multer middleware for file uploads
- ✅ XLSX parser for Excel files
- ✅ Intelligent column name mapping (handles variations like "Bedrooms", "beds", "Bd")
- ✅ Automatic coordinate generation around Dartmouth Green
- ✅ Distance calculation from campus
- ✅ Enriched data generation (atmosphere, amenities, utilities)
- ✅ TypeScript code generator
- ✅ Update and Replace modes
- ✅ Error handling and validation

### Frontend (ExcelUploader.tsx)
- ✅ Beautiful drag-and-drop file upload UI
- ✅ Mode selection (Update vs Replace)
- ✅ File type validation (.xlsx, .xls, .csv)
- ✅ Loading states and progress indicators
- ✅ Success/error messaging
- ✅ Integration with navigation
- ✅ Responsive design with Tailwind CSS

### Integration
- ✅ New route at `/upload`
- ✅ Navigation menu item added
- ✅ npm scripts configured
- ✅ CORS enabled for local development

## 🚀 How to Test

### Prerequisites
Both servers must be running:

```bash
# Terminal 1: Upload Server
npm run server
# Should see: "🚀 Excel upload server running on http://localhost:3010"

# Terminal 2: Dev Server  
npm run dev
# Should see Vite server on http://localhost:3005 (or similar)
```

Or run both simultaneously:
```bash
npm run start:all
```

### Test Case 1: Upload Sample-data.xlsx (Property Management Format)

**Expected Columns:**
- Property Type
- Bedrooms
- Bathrooms  
- SF (Square Footage)
- Property Address
- Portfolio
- Target Tenant

**Test Steps:**
1. Navigate to http://localhost:3005/upload
2. Select "Update" mode (preserves existing 220+ apartments)
3. Upload `Sample-data.xlsx`
4. Verify success message shows:
   - "Successfully updated mockData.ts"
   - Number of apartments added (e.g., "Added: 28 apartments")
   - Total apartment count (e.g., "Total: 248 apartments")
5. Refresh the browser
6. Check Home page - should see new apartments in the list
7. Check Map View - should see new markers on the map
8. Check `src/data/mockData.ts` - should contain the new data

**Expected Result:**
- All rows from Excel converted to Apartment objects
- Coordinates randomly generated near Dartmouth
- Neighborhoods assigned based on Portfolio column
- Amenities auto-generated based on property characteristics

### Test Case 2: Upload FY26 Sachem Rent recommendations.xlsx (Financial Format)

**Expected Columns:**
- Unit
- Sq Ft
- Tot SF
- FY25 (rent)
- FY26 Recommend Rent
- Cost per sq ft

**Test Steps:**
1. Navigate to http://localhost:3005/upload
2. Select "Replace" mode (clear and start fresh)
3. Upload `FY26 Sachem Rent recommendations.xlsx`
4. Verify success message
5. Refresh the browser
6. Verify old data is gone and only new Sachem units appear

**Expected Result:**
- Only Sachem Village apartments remain
- All apartments assigned to "Sachem Village" neighborhood
- FY25 rent column used for pricing
- Unit names preserved (e.g., "1Bd HA RENO", "2 Bd/1bth 1072")

### Test Case 3: Test Update Mode (Incremental Addition)

**Objective:** Verify Update mode adds without removing existing data

**Steps:**
1. Note current total apartment count in `mockData.ts`
2. Upload a small Excel file (5-10 rows) in Update mode
3. Verify total increases by exactly the number of uploaded rows
4. Check that existing apartments retain their original IDs
5. Verify new apartments get sequential IDs starting after the highest existing ID

**Expected Result:**
- Original apartments unchanged
- New apartments appended to array
- No ID conflicts
- Total count = old count + new rows

### Test Case 4: Test Replace Mode (Full Replacement)

**Objective:** Verify Replace mode clears existing data

**Steps:**
1. Upload a small Excel file (5-10 rows) in Replace mode
2. Verify `mockData.ts` contains ONLY the new apartments
3. Check that IDs start from 1
4. Verify all other exports remain intact (trendData, neighborhoods, etc.)

**Expected Result:**
- All previous apartments removed
- Only new apartments present
- IDs sequential starting from 1
- Structure and other exports preserved

### Test Case 5: Error Handling

**Test 5a: Invalid File Type**
- Upload a PDF or text file
- Expected: Error message "Please select a valid Excel file"

**Test 5b: Server Not Running**
- Stop the server (Ctrl+C in server terminal)
- Try to upload
- Expected: Error "Failed to connect to upload server. Make sure the server is running on port 3010."

**Test 5c: No File Selected**
- Click upload without selecting a file
- Expected: Error "Please select a file first"

**Test 5d: Empty Excel File**
- Upload an Excel file with only headers (no data rows)
- Expected: Success with 0 apartments added

## 📊 Testing with Your Sample Files

### Sample-data.xlsx Structure
Based on your screenshot, it contains:
- Property Type: SFH, Multi, Apartment
- Bedrooms: 1-3
- Bathrooms: 1-3
- Property Address: Various locations (Austin Ave, N. Park St, S. Park St, Sanborn Rd, South St)
- Portfolio: Single Family, Multi Family, Park & Wheelock, Sargent Block, South Block
- Target Tenant: Staff/Faculty, Graduate Student

**Parsing Logic:**
```javascript
// Server will map these columns:
name = row['Property Address']
bedrooms = row['Bedrooms']
bathrooms = row['Bathrooms']
sqft = row['SF']
rent = row['FY25'] || default 1500
portfolio = row['Portfolio'] → determines neighborhood
targetTenant = row['Target Tenant'] → determines atmosphere
```

### FY26 Sachem Rent recommendations.xlsx Structure
Based on your screenshot, it contains:
- Unit descriptions (e.g., "1Bd HA RENO", "2 Bd/1bth 1072")
- Sq Ft per unit
- Tot SF (total square footage)
- FY25 rent (current pricing)
- FY26 recommendations (future pricing)

**Parsing Logic:**
```javascript
// Server will map these columns:
name = row['Unit'] || row['Type']
bedrooms = extracted from unit description (e.g., "2 Bd" → 2)
bathrooms = extracted from unit description (e.g., "1bth" → 1)
sqft = row['Sq Ft']
rent = row['FY25']
neighborhood = "Sachem Village" (all units)
```

## 🔍 What to Look For

### In the Browser
- ✅ Upload interface appears at /upload
- ✅ File drag-and-drop works
- ✅ Mode selection toggles colors (blue for Update, red for Replace)
- ✅ Upload button disabled until file selected
- ✅ Loading spinner appears during upload
- ✅ Success/error alerts display correctly
- ✅ Instructions panel provides guidance

### In the Console (Server Terminal)
```
🚀 Excel upload server running on http://localhost:3010
📤 Upload endpoint: http://localhost:3010/api/upload-excel

# During upload:
📊 Parsed 28 rows from Excel
🔧 Mode: update
📂 Found 220 existing apartments
✅ Generated 28 new apartments
📝 Final apartment count: 248
✨ Successfully updated mockData.ts
```

### In mockData.ts
- ✅ Valid TypeScript syntax
- ✅ Apartment interface unchanged
- ✅ apartments array populated with correct data
- ✅ All exports present (trendData, USD_TO_KRW, neighborhoods, utilityLocations)
- ✅ Proper JSON formatting with 2-space indentation

### On the Map
- ✅ New markers appear in the Hanover area
- ✅ Markers cluster at appropriate zoom levels
- ✅ Price heatmap shows intensity around new apartments
- ✅ Distance rings still visible
- ✅ Apartment details popup on marker click

### On the Home Page
- ✅ New apartments appear in the listing grid
- ✅ Filters work with new data
- ✅ Search finds new apartment names
- ✅ Sorting includes new apartments

## 🐛 Known Limitations

1. **Image URLs**: Generated URLs use a simple formula and may not always resolve to valid images. In production, you'd upload actual photos.

2. **Coordinates**: Randomly generated within ~5 miles of Dartmouth. Real implementation would use geocoding APIs or manual coordinate entry.

3. **Utilities**: All apartments get the same default utilities. Could be enhanced to vary by neighborhood.

4. **Column Flexibility**: While many variations are supported, very unique column names might not be recognized. Easy to extend in `parseRowToApartment` function.

5. **Data Validation**: Basic validation only. Could add:
   - Rent range validation (e.g., $500-$5000)
   - Bedroom/bathroom ratio checks
   - Square footage reasonableness

## ✅ Verification Checklist

Before marking testing as complete, verify:

- [ ] Upload server starts without errors
- [ ] Dev server starts without errors
- [ ] `/upload` route accessible
- [ ] Navigation shows "Upload Data" link
- [ ] Can select Excel file via click
- [ ] Can drag and drop Excel file
- [ ] Update mode preserves existing data
- [ ] Replace mode clears existing data
- [ ] Success message displays correct stats
- [ ] Error messages display for invalid inputs
- [ ] Server console shows detailed logs
- [ ] mockData.ts file updates correctly
- [ ] Browser refresh loads new data
- [ ] Map shows new markers
- [ ] Home page shows new listings
- [ ] All TypeScript compiles without errors
- [ ] No React errors in browser console

## 📝 Test Results Template

```
Test Date: ___________
Tester: ___________

Sample-data.xlsx Test:
- [ ] File uploaded successfully
- [ ] Apartments added: ___
- [ ] Total apartments: ___
- [ ] Map updated: ___
- [ ] Issues found: ___________

FY26 Sachem Test:
- [ ] File uploaded successfully
- [ ] Apartments added: ___
- [ ] Total apartments: ___
- [ ] Issues found: ___________

Mode Tests:
- [ ] Update mode works correctly
- [ ] Replace mode works correctly
- [ ] Error handling works
- [ ] UI/UX smooth and intuitive

Notes:
_______________________________
_______________________________
```

## 🎉 Success Criteria

The system is working correctly if:
1. ✅ Both servers run without crashes
2. ✅ Excel files upload without errors
3. ✅ mockData.ts updates with valid TypeScript
4. ✅ Application displays new data after refresh
5. ✅ No data corruption or loss in Update mode
6. ✅ Clean replacement in Replace mode
7. ✅ User-friendly error messages
8. ✅ Intuitive UI workflow

---

**Ready to test?** Follow the steps above and verify each checkpoint! 🚀

