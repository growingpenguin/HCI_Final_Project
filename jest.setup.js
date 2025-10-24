// jest.setup.js
// Polyfill ResizeObserver for jsdom
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

global.ResizeObserver = ResizeObserver;

// Set up global L object before any leaflet imports
global.L = {
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
  version: '1.9.4',
};

// Mock leaflet.markercluster globally
jest.mock('leaflet.markercluster');

// Mock leaflet.heat globally
jest.mock('leaflet.heat');
