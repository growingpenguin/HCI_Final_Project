// __mocks__/leaflet.markercluster.js
const L = require('leaflet');
L.markerClusterGroup = () => ({
  addLayer: jest.fn(),
  addTo: jest.fn(),
  clearLayers: jest.fn(),
  on: jest.fn(),
  remove: jest.fn(),
  getLayers: jest.fn(() => []),
});
module.exports = L;
