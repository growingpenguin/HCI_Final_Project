// __mocks__/react-leaflet.js
const React = require('react');
module.exports = {
	MapContainer: (props) => React.createElement('div', { 'data-testid': 'mock-map' }, props.children),
	TileLayer: () => React.createElement('div', { 'data-testid': 'mock-tilelayer' }),
	useMap: () => ({}),
	useMapEvent: () => {},
	useMapEvents: () => {},
};
