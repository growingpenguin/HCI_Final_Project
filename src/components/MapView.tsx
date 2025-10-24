import { useMemo, useState } from "react";
import { MapPin, DollarSign } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FilterPanel } from "./FilterPanel";
// Leaflet map implementation (kept separate file)
import { MapViewLeaflet } from './MapViewLeaflet';
import { apartments, USD_TO_KRW } from "../data/mockData";

export function MapView() {
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");

  // toggle between simple SVG map and Leaflet-based map
  const [useLeaflet, setUseLeaflet] = useState<boolean>(false);

  // New UI state for filters and interactions
  const [rentMax, setRentMax] = useState<number>(2000);
  const [bedroomsFilter, setBedroomsFilter] = useState<number | null>(null);
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [tooltip, setTooltip] = useState<{x:number,y:number,html:string}|null>(null);

  // Calculate map bounds based on apartment coordinates
  const latitudes = apartments.map(a => a.coordinates.lat);
  const longitudes = apartments.map(a => a.coordinates.lng);
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  // Map coordinates to pixel positions (simplified projection)
  const coordToPixel = (lat: number, lng: number) => {
    const width = 800;
    const height = 600;
    const x = ((lng - minLng) / (maxLng - minLng)) * (width - 100) + 50;
    const y = ((maxLat - lat) / (maxLat - minLat)) * (height - 100) + 50;
    return { x, y };
  };

  // Get color based on rent (green = low, yellow = mid, red = high)
  const getRentColor = (rent: number) => {
    if (rent < 1000) return "#4ade80"; // green
    if (rent < 1400) return "#fbbf24"; // yellow
    return "#ef4444"; // red
  };

  const selected = selectedApartment !== null 
    ? apartments.find(a => a.id === selectedApartment) 
    : null;

  // Apply lightweight filters without removing existing behavior
  const filteredApartments = useMemo(() => {
    return apartments.filter(a => a.rent <= rentMax && (bedroomsFilter == null || a.bedrooms === bedroomsFilter));
  }, [rentMax, bedroomsFilter]);

  // Simple clustering by pixel distance (greedy)
  const clusters = useMemo(() => {
    const threshold = 40; // pixels
    const cls: Array<{x:number,y:number,items:number[]}> = [];
    for (const a of filteredApartments) {
      const pos = coordToPixel(a.coordinates.lat, a.coordinates.lng);
      let placed = false;
      for (const c of cls) {
        const dx = c.x - pos.x;
        const dy = c.y - pos.y;
        if (Math.sqrt(dx*dx + dy*dy) < threshold) {
          c.items.push(a.id);
          // recompute centroid
          const n = c.items.length;
          c.x = (c.x * (n-1) + pos.x) / n;
          c.y = (c.y * (n-1) + pos.y) / n;
          placed = true;
          break;
        }
      }
      if (!placed) {
        cls.push({ x: pos.x, y: pos.y, items: [a.id] });
      }
    }
    return cls;
  }, [filteredApartments]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Map View</h1>
            <p className="text-gray-600">Explore housing locations near Dartmouth campus</p>
          </div>
          
          <button
            onClick={() => setCurrency(currency === "USD" ? "KRW" : "USD")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A4D7A7] hover:bg-[#92c595] text-gray-900 transition-colors"
          >
            <DollarSign className="w-4 h-4" />
            {currency}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="relative bg-[#EAEAEA] rounded-lg overflow-hidden" style={{ height: "600px" }}>
                {/* Map Implementation Toggle */}
                <div className="absolute right-4 top-4 z-20">
                  <button onClick={() => setUseLeaflet(!useLeaflet)} className="px-3 py-1 bg-white rounded shadow text-sm">
                    {useLeaflet ? 'Use SVG map' : 'Use Leaflet map'}
                  </button>
                </div>

                {/* Map (SVG or Leaflet) */}
                {useLeaflet ? (
                  <div className="w-full h-full">
                    <MapViewLeaflet
                      setSelectedApartment={setSelectedApartment}
                      currency={currency}
                      rentMax={rentMax}
                      bedroomsFilter={bedroomsFilter}
                      showHeatmap={showHeatmap}
                    />
                  </div>
                ) : (
                  <svg width="100%" height="100%" viewBox="0 0 800 600">
                  {/* Background grid */}
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="800" height="600" fill="url(#grid)" />
                  
                  {/* Campus marker (center) */}
                  <circle cx="400" cy="300" r="8" fill="#030213" opacity="0.8" />
                  <text x="400" y="320" textAnchor="middle" className="text-xs" fill="#030213">
                    Dartmouth Campus
                  </text>
                  
                  {/* Heatmap layer (simple radial circles behind markers) */}
                  {showHeatmap && filteredApartments.map((apt) => {
                    const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
                    const intensity = Math.min(1, apt.rent / 2000);
                    const radius = 40 + intensity * 80;
                    const color = getRentColor(apt.rent);
                    return (
                      <circle
                        key={`heat-${apt.id}`}
                        cx={pos.x}
                        cy={pos.y}
                        r={radius}
                        fill={color}
                        opacity={0.12}
                        pointerEvents="none"
                      />
                    );
                  })}

                  {/* Cluster markers */}
                  {clusters.map((c, idx) => {
                    if (c.items.length === 1) return null;
                    return (
                      <g key={`cluster-${idx}`} style={{ cursor: "pointer" }} onClick={() => setSelectedApartment(c.items[0])}>
                        <circle cx={c.x} cy={c.y} r={14} fill="#0ea5e9" opacity={0.95} stroke="white" strokeWidth={2} />
                        <text x={c.x} y={c.y + 5} textAnchor="middle" fill="white" className="text-xs font-medium" style={{ pointerEvents: "none" }}>
                          {c.items.length}
                        </text>
                      </g>
                    );
                  })}

                  {/* Apartment markers (filtered) */}
                  {filteredApartments.map((apt) => {
                    const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
                    const isSelected = selectedApartment === apt.id;
                    const inCluster = clusters.some(c => c.items.includes(apt.id) && c.items.length > 1);

                    return (
                      <g
                        key={apt.id}
                        onClick={() => setSelectedApartment(apt.id)}
                        style={{ cursor: "pointer" }}
                        onMouseEnter={() => {
                          setTooltip({ x: pos.x + 10, y: pos.y - 10, html: `${apt.name}<br/>$${apt.rent}/mo — ${apt.bedrooms}bd` });
                          setSelectedApartment(apt.id);
                        }}
                        onMouseLeave={() => setTooltip(null)}
                      >
                        {!inCluster && (
                          <>
                            <circle
                              cx={pos.x}
                              cy={pos.y}
                              r={isSelected ? 14 : 10}
                              fill={getRentColor(apt.rent)}
                              stroke="white"
                              strokeWidth={isSelected ? 3 : 2}
                              opacity={isSelected ? 1 : 0.95}
                            />
                            <text
                              x={pos.x}
                              y={pos.y + 5}
                              textAnchor="middle"
                              fill="white"
                              className="text-xs font-medium"
                              style={{ pointerEvents: "none" }}
                            >
                              {apt.id}
                            </text>
                          </>
                        )}
                      </g>
                    );
                  })}
                </svg>
                )}

                {/* Reusable FilterPanel (persistent) */}
                <div className="absolute top-4 left-4">
                  <FilterPanel
                    priceRange={[0, 2000]}
                    onPriceRangeChange={() => {}}
                    privateBathroom={false}
                    onPrivateBathroomChange={() => {}}
                    currency={currency}
                    units="sqft"
                    rentMax={rentMax}
                    onRentMaxChange={setRentMax}
                    bedroomsFilter={bedroomsFilter}
                    onBedroomsFilterChange={setBedroomsFilter}
                    showHeatmap={showHeatmap}
                    onShowHeatmapChange={setShowHeatmap}
                  />
                </div>

                {/* Tooltip */}
                {tooltip && (
                  <div className="absolute" role="tooltip" aria-hidden={tooltip ? "false" : "true"} style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -100%)", pointerEvents: 'none' }}>
                    <div className="bg-white text-xs p-2 rounded shadow">{/* simple HTML content - keep minimal */}
                      <div dangerouslySetInnerHTML={{ __html: tooltip.html }} />
                    </div>
                  </div>
                )}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="text-sm mb-2">Rent Level</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#4ade80]"></div>
                      <span>Low (&lt; $1000)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#fbbf24]"></div>
                      <span>Medium ($1000-$1400)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#ef4444]"></div>
                      <span>High (&gt; $1400)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              {selected ? (
                <div>
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 text-[#A4D7A7] mb-2">
                    <MapPin className="w-5 h-5" />
                    <span>Apartment #{selected.id}</span>
                  </div>
                  
                  <h3 className="mb-3">{selected.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rent</span>
                      <span>
                        {currency === "USD" 
                          ? `$${selected.rent.toLocaleString()}` 
                          : `₩${(selected.rent * USD_TO_KRW).toLocaleString()}`}
                        /mo
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance</span>
                      <span>{selected.distance} mi from campus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Size</span>
                      <span>{selected.sqft} ft²</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bedrooms</span>
                      <span>{selected.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bathrooms</span>
                      <span>{selected.bathrooms}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="text-sm text-gray-600 mb-2">Amenities</div>
                    <div className="flex flex-wrap gap-2">
                      {selected.amenities.map((amenity, index) => (
                        <Badge key={index} variant="secondary" className="bg-[#EAEAEA]">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p>Click on a marker to view details</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
