// GIS Shapefile Loader for New Hampshire
// This component handles loading and processing of official boundary data

import { newHampshireOfficialGeoJSON, fetchNewHampshireBoundary, newHampshireCenter, newHampshireBounds } from './NewHampshireBoundary';

export interface GISBoundaryData {
  type: string;
  features: Array<{
    type: string;
    properties: {
      STATEFP: string;
      STATENS: string;
      AFFGEOID: string;
      GEOID: string;
      STUSPS: string;
      NAME: string;
      LSAD: string;
      ALAND: number;
      AWATER: number;
    };
    geometry: {
      type: string;
      coordinates: number[][][];
    };
  }>;
}

export class ShapefileLoader {
  private boundaryData: GISBoundaryData | null = null;

  constructor() {
    this.loadBoundaryData();
  }

  async loadBoundaryData(): Promise<GISBoundaryData> {
    try {
      // Try to fetch from official source first
      const officialData = await fetchNewHampshireBoundary();
      this.boundaryData = officialData;
      return officialData;
    } catch (error) {
      console.warn('Using fallback boundary data:', error);
      // Fallback to local data
      this.boundaryData = newHampshireOfficialGeoJSON;
      return newHampshireOfficialGeoJSON;
    }
  }

  getBoundaryData(): GISBoundaryData | null {
    return this.boundaryData;
  }

  getCenter(): { lat: number; lng: number } {
    return newHampshireCenter;
  }

  getBounds(): number[][] {
    return newHampshireBounds;
  }

  // Method to validate coordinate system
  validateCoordinates(coordinates: number[][][]): boolean {
    if (!coordinates || coordinates.length === 0) {
      return false;
    }

    // Check if coordinates are in valid range for New Hampshire
    const [lng, lat] = coordinates[0][0];
    return lng >= -72.55 && lng <= -70.0 && lat >= 42.7 && lat <= 45.3058;
  }

  // Method to get simplified boundary for performance
  getSimplifiedBoundary(simplificationFactor: number = 0.01): GISBoundaryData | null {
    if (!this.boundaryData) return null;

    // This would implement Douglas-Peucker algorithm for line simplification
    // For now, return the original data
    return this.boundaryData;
  }
}

export default ShapefileLoader;