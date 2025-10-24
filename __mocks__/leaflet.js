// Mock for leaflet module
const L = {
  markerClusterGroup: jest.fn(() => ({
    addLayer: jest.fn(),
    addTo: jest.fn(),
    clearLayers: jest.fn(),
    on: jest.fn(),
    remove: jest.fn(),
    getLayers: jest.fn(() => []),
  })),
  heatLayer: jest.fn(() => ({
    addTo: jest.fn(),
    remove: jest.fn(),
  })),
  marker: jest.fn(() => ({
    bindPopup: jest.fn(),
    on: jest.fn(),
    addTo: jest.fn(),
  })),
  circleMarker: jest.fn(() => ({
    addTo: jest.fn(),
    on: jest.fn(),
  })),
  // Add other leaflet methods as needed
  map: jest.fn(),
  tileLayer: jest.fn(),
  latLng: jest.fn(),
  latLngBounds: jest.fn(),
  icon: jest.fn(),
  divIcon: jest.fn(),
  popup: jest.fn(),
  tooltip: jest.fn(),
  layerGroup: jest.fn(),
  featureGroup: jest.fn(),
  geoJSON: jest.fn(),
  control: {
    layers: jest.fn(),
    scale: jest.fn(),
    attribution: jest.fn(),
  },
  DomUtil: {
    create: jest.fn(),
    addClass: jest.fn(),
    removeClass: jest.fn(),
    hasClass: jest.fn(),
  },
  Util: {
    extend: jest.fn(),
    bind: jest.fn(),
    stamp: jest.fn(),
  },
  Evented: {
    on: jest.fn(),
    off: jest.fn(),
    fire: jest.fn(),
  },
  // Add version and other properties
  version: '1.9.4',
};

module.exports = L;
