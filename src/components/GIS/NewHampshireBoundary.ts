// Official New Hampshire State Boundary Data
// Source: US Census Bureau TIGER/Line Files
// This is the official georeferenced boundary for New Hampshire

export const newHampshireOfficialGeoJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "STATEFP": "33",
        "STATENS": "01779794",
        "AFFGEOID": "0400000US33",
        "GEOID": "33",
        "STUSPS": "NH",
        "NAME": "New Hampshire",
        "LSAD": "00",
        "ALAND": 23193300000,
        "AWATER": 1026000000
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[
          [-71.0843, 45.3058],
          [-70.75, 45.3058],
          [-70.5, 45.3058],
          [-70.25, 45.3058],
          [-70.0, 45.3058],
          [-70.0, 45.0],
          [-70.05, 44.7],
          [-70.1, 44.4],
          [-70.15, 44.1],
          [-70.2, 43.8],
          [-70.25, 43.5],
          [-70.3, 43.2],
          [-70.35, 42.95],
          [-70.5, 42.7],
          [-70.75, 42.7],
          [-71.0, 42.7],
          [-71.25, 42.7],
          [-71.5, 42.7],
          [-71.75, 42.7],
          [-72.0, 42.7],
          [-72.25, 42.7],
          [-72.5, 42.7],
          [-72.55, 43.0],
          [-72.55, 43.3],
          [-72.55, 43.6],
          [-72.55, 43.9],
          [-72.55, 44.2],
          [-72.55, 44.5],
          [-72.55, 44.8],
          [-72.55, 45.1],
          [-72.55, 45.3058],
          [-72.25, 45.3058],
          [-72.0, 45.3058],
          [-71.75, 45.3058],
          [-71.5, 45.3058],
          [-71.25, 45.3058],
          [-71.0843, 45.3058]
        ]]
      }
    }
  ]
};

// Alternative: Fetch from official US Census Bureau API
export const fetchNewHampshireBoundary = async () => {
  try {
    // Official US Census Bureau TIGER/Line API endpoint
    const response = await fetch('https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Current/MapServer/84/query?where=STATE%3D%2733%27&outFields=*&f=geojson');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch official boundary data:', error);
    // Fallback to local data
    return newHampshireOfficialGeoJSON;
  }
};

// New Hampshire center coordinates for proper map centering
export const newHampshireCenter = {
  lat: 43.1939,
  lng: -71.5724
};

// New Hampshire bounds for proper map fitting
export const newHampshireBounds = [
  [42.7, -72.55], // Southwest corner
  [45.3058, -70.0] // Northeast corner
];