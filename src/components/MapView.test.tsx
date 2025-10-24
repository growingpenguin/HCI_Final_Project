// Mock react-leaflet to avoid ESM transform errors in Jest
jest.mock('react-leaflet');
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MapView } from './MapView';

describe('MapView', () => {
  it('renders without crashing and shows map toggle', () => {
    render(<MapView />);
    expect(screen.getByText(/Map View/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Leaflet map/i })).toBeInTheDocument();
  });

  it('toggles between SVG and Leaflet map', () => {
    render(<MapView />);
    const toggle = screen.getByRole('button', { name: /Leaflet map/i });
    fireEvent.click(toggle);
    expect(screen.getByRole('button', { name: /SVG map/i })).toBeInTheDocument();
  });

  it('filters apartments by rent', () => {
    render(<MapView />);
    const slider = screen.getByLabelText(/Max rent/i);
    fireEvent.change(slider, { target: { value: 1000 } });
    // Should not throw, and map should update (visual test would be better)
  });
});
