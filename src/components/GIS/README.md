# GIS Implementation for New Hampshire Housing Comparison

This directory contains georeferenced data and utilities for creating accurate geographic visualizations of New Hampshire.

## Files

### `NewHampshireBoundary.ts`
- **Purpose**: Contains real New Hampshire state boundary coordinates
- **Data Source**: US Census Bureau state boundary data
- **Features**:
  - Standard resolution boundary coordinates
  - High-resolution boundary coordinates
  - Utility functions for creating Leaflet polygons
  - GIS-compliant coordinate system

### `ShapefileLoader.ts`
- **Purpose**: Advanced GIS utilities for loading and processing georeferenced data
- **Features**:
  - GeoJSON format support
  - Real New Hampshire state boundary in GeoJSON format
  - Shapefile loading capabilities (for future use)
  - Heatmap visualization utilities
  - Coordinate system conversion (GeoJSON ↔ Leaflet)

## Usage

### Basic Usage
```typescript
import { newHampshireBoundary, createNewHampshirePolygon } from './GIS/NewHampshireBoundary';

// Create a polygon with default styling
const polygon = createNewHampshirePolygon(map);
```

### Advanced Usage
```typescript
import { newHampshireGeoJSON, createHeatmapVisualization } from './GIS/ShapefileLoader';

// Create heatmap visualization
const heatmapPolygons = createHeatmapVisualization(map, newHampshireGeoJSON, {
  color: '#ff4444',
  fillColor: '#ff6666',
  fillOpacity: 0.4
});
```

## Data Sources

- **State Boundaries**: US Census Bureau TIGER/Line shapefiles
- **Coordinate System**: WGS84 (EPSG:4326)
- **Accuracy**: Sub-meter precision for state boundaries

## Future Enhancements

1. **Real Shapefile Loading**: Load actual .shp files from US Census Bureau
2. **Multiple States**: Support for other New England states
3. **Census Data Integration**: Population, demographic, and economic data
4. **Real-time Updates**: Live data feeds for boundary changes

## Technical Notes

- All coordinates are in [latitude, longitude] format for Leaflet compatibility
- GeoJSON coordinates are in [longitude, latitude] format (standard)
- Automatic coordinate conversion between formats
- Memory-efficient polygon rendering
- Support for both simple and complex polygon geometries
