import React, { useState } from 'react';
import { MapPin, DollarSign, Users, School, ShoppingCart, Dumbbell } from "lucide-react";
import { apartments, USD_TO_KRW, neighborhoods, utilityLocations } from "../data/mockData";

interface RealMapViewProps {
  selectedApartment: number | null;
  setSelectedApartment: (id: number | null) => void;
  currency: "USD" | "KRW";
  rentMax: number;
  bedroomsFilter: number | null;
  showHeatmap: boolean;
  heatmapType: "price" | "distance" | "neighborhood";
  showUtilities: boolean;
  utilityType: "all" | "supermarket" | "gym" | "school";
  selectedNeighborhood: string | null;
  visualizationMode: "price-bars" | "location-popup" | "neighborhood-clustering";
}

export function RealMapView({
  selectedApartment,
  setSelectedApartment,
  currency,
  rentMax,
  bedroomsFilter,
  showHeatmap,
  heatmapType,
  showUtilities,
  utilityType,
  selectedNeighborhood,
  visualizationMode
}: RealMapViewProps) {
  const [hoveredApartment, setHoveredApartment] = useState<number | null>(null);

  // Enhanced color functions
  const getRentColor = (rent: number) => {
    if (rent < 1000) return "#4ade80";
    if (rent < 1400) return "#fbbf24";
    return "#ef4444";
  };

  const getDistanceColor = (distance: number) => {
    if (distance < 0.5) return "#4ade80";
    if (distance < 1.0) return "#fbbf24";
    return "#ef4444";
  };

  const getNeighborhoodColor = (neighborhood: string) => {
    const colors: { [key: string]: string } = {
      "Lebanon": "#3b82f6",
      "Norwich": "#8b5cf6", 
      "On Campus": "#f59e0b",
      "Summit on Juniper": "#10b981"
    };
    return colors[neighborhood] || "#6b7280";
  };

  const getHeatmapColor = (apt: any) => {
    switch (heatmapType) {
      case "price": return getRentColor(apt.rent);
      case "distance": return getDistanceColor(apt.distance);
      case "neighborhood": return getNeighborhoodColor(apt.neighborhood);
      default: return getRentColor(apt.rent);
    }
  };

  // Filter apartments - but be more lenient to show more apartments
  const filteredApartments = apartments.filter(apt =>
    apt.rent <= rentMax &&
    (bedroomsFilter == null || apt.bedrooms === bedroomsFilter) &&
    (selectedNeighborhood == null || apt.neighborhood === selectedNeighborhood)
  );

  // Debug: Log apartment count and positions
  console.log(`Found ${filteredApartments.length} apartments:`, filteredApartments.map(a => `${a.name} (${a.neighborhood})`));
  filteredApartments.forEach(apt => {
    const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
    console.log(`${apt.name}: lat=${apt.coordinates.lat}, lng=${apt.coordinates.lng} -> x=${pos.x}, y=${pos.y}`);
  });

  // Simple coordinate mapping for Dartmouth area - SPREAD OUT MORE
  const mapLat = 43.7035;
  const mapLng = -72.2875;
  const mapScale = 0.005; // degrees per pixel - SMALLER for more spread

  const coordToPixel = (lat: number, lng: number) => {
    const x = 400 + (lng - mapLng) / mapScale;
    const y = 300 + (mapLat - lat) / mapScale;
    return { x, y };
  };

  return (
    <div className="relative w-full h-full bg-gray-100">
      {/* Simple Map Background */}
      <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Test marker to ensure rendering works */}
        <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded">
          Map is loading...
        </div>
        
        {/* Map Grid */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Dartmouth Campus Marker */}
        <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg"></div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-black bg-white px-1 rounded">
            Dartmouth
          </div>
        </div>

        {/* 1. Distance Visualization - Rings around campus */}
        {visualizationMode === "location-popup" && (
          <>
            <div className="absolute border-2 border-blue-500 border-dashed rounded-full opacity-60" 
                 style={{ 
                   left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                   width: '100px', height: '100px' 
                 }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-blue-500">
                0.5 mi
              </div>
            </div>
            <div className="absolute border-2 border-yellow-500 border-dashed rounded-full opacity-60" 
                 style={{ 
                   left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                   width: '150px', height: '150px' 
                 }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-yellow-500">
                1.0 mi
              </div>
            </div>
            <div className="absolute border-2 border-red-500 border-dashed rounded-full opacity-60" 
                 style={{ 
                   left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                   width: '200px', height: '200px' 
                 }}>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-red-500">
                1.5 mi
              </div>
            </div>
          </>
        )}

        {/* 2. Price Bars - Positioned to not interfere with apartment markers */}
        {visualizationMode === "price-bars" && filteredApartments.map((apt, idx) => {
          const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
          const barHeight = Math.max(40, (apt.rent / 2000) * 120); // Scale to max 120px height, min 40px
          const barWidth = 20; // Much wider bars
          const color = getRentColor(apt.rent);
          
          // Offset bars to the right of apartment markers
          const barOffset = 50;
          
          return (
            <div
              key={`price-bar-${apt.id}`}
              className="absolute transform -translate-y-1/2 z-5"
              style={{ left: pos.x + barOffset, top: pos.y, pointerEvents: 'none' }}
            >
              {/* Price bar - MUCH LARGER */}
              <div
                className="rounded-sm border-2 border-white shadow-lg"
                style={{
                  width: `${barWidth}px`,
                  height: `${barHeight}px`,
                  backgroundColor: color,
                  marginBottom: '8px'
                }}
              />
              {/* Price label - LARGER TEXT */}
              <div
                className="text-sm font-bold text-center bg-white px-1 rounded shadow"
                style={{ color, width: `${barWidth + 20}px`, marginLeft: '-10px' }}
              >
                ${apt.rent}
              </div>
            </div>
          );
        })}

        {/* Individual Apartment Markers - ALWAYS VISIBLE AND CLICKABLE */}
        {filteredApartments.map((apt) => {
          const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
          const isSelected = selectedApartment === apt.id;
          const isHovered = hoveredApartment === apt.id;
          const color = getHeatmapColor(apt);

          // Make markers MUCH more prominent in all modes
          const markerSize = isSelected ? 40 : isHovered ? 36 : 32;
          const markerOpacity = 1; // Always fully visible

          return (
            <div
              key={apt.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200"
              style={{ 
                left: pos.x, 
                top: pos.y, 
                zIndex: 50,
                pointerEvents: 'auto'
              }}
              onClick={() => {
                console.log('Clicked apartment:', apt.id, apt.name);
                setSelectedApartment(apt.id);
              }}
              onMouseEnter={() => {
                console.log('Hovering apartment:', apt.id, apt.name);
                setHoveredApartment(apt.id);
              }}
              onMouseLeave={() => setHoveredApartment(null)}
            >
              {/* Main apartment marker */}
              <div
                className="rounded-full border-3 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm"
                style={{
                  width: `${markerSize}px`,
                  height: `${markerSize}px`,
                  backgroundColor: color,
                  transform: isSelected ? 'scale(1.4)' : isHovered ? 'scale(1.2)' : 'scale(1)',
                  opacity: markerOpacity,
                  zIndex: 60,
                  pointerEvents: 'none'
                }}
              >
                {apt.id}
              </div>
              
              {/* Apartment name label - always visible */}
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-bold text-center bg-white px-2 py-1 rounded shadow border"
                style={{ 
                  whiteSpace: 'nowrap',
                  zIndex: 40,
                  pointerEvents: 'none'
                }}
              >
                {apt.name}
              </div>
              
              {/* Enhanced hover tooltip */}
              {isHovered && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded shadow-xl text-xs whitespace-nowrap z-40 border-2 border-gray-300">
                  <div className="font-bold text-sm text-gray-800">{apt.name}</div>
                  <div className="text-green-600 font-semibold text-base">${apt.rent}/mo</div>
                  <div className="text-gray-600">{apt.bedrooms}bd • {apt.bathrooms}ba • {apt.sqft}ft²</div>
                  <div className="text-blue-600 font-medium">{apt.neighborhood}</div>
                  <div className="text-gray-500">{apt.distance}mi from campus</div>
                </div>
              )}
            </div>
          );
        })}

        {/* Utility Markers */}
        {showUtilities && utilityLocations
          .filter(util => utilityType === "all" || util.type === utilityType)
          .map((util) => {
            const pos = coordToPixel(util.coordinates.lat, util.coordinates.lng);
            const getUtilityIcon = (type: string) => {
              switch (type) {
                case "supermarket": return "🛒";
                case "gym": return "💪";
                case "school": return "🎓";
                default: return "📍";
              }
            };

            const getUtilityColor = (type: string) => {
              switch (type) {
                case "supermarket": return "#10b981";
                case "gym": return "#f59e0b";
                case "school": return "#3b82f6";
                default: return "#6b7280";
              }
            };

            return (
              <div
                key={util.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: pos.x, top: pos.y }}
              >
                <div
                  className="rounded-full border-2 border-white shadow-lg flex items-center justify-center text-xs"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: getUtilityColor(util.type),
                  }}
                >
                  {getUtilityIcon(util.type)}
                </div>
              </div>
            );
          })}

        {/* 3. Neighborhood Clustering - Show ALL neighborhoods */}
        {visualizationMode === "neighborhood-clustering" && neighborhoods.map((neighborhood, idx) => {
          const neighborhoodApts = filteredApartments.filter(apt => apt.neighborhood === neighborhood.name);
          
          // Fixed positions for each neighborhood to ensure they're all visible
          const neighborhoodPositions = [
            { x: 200, y: 150 }, // Lebanon - top left
            { x: 600, y: 200 }, // Norwich - top right  
            { x: 400, y: 300 }, // On Campus - center
            { x: 300, y: 450 }  // Summit on Juniper - bottom left
          ];
          
          const centerPos = neighborhoodPositions[idx] || { x: 400, y: 300 };
          const avgRent = neighborhoodApts.length > 0 
            ? neighborhoodApts.reduce((sum, apt) => sum + apt.rent, 0) / neighborhoodApts.length
            : neighborhood.averageRent;
          const totalStudents = neighborhoodApts.length > 0
            ? neighborhoodApts.reduce((sum, apt) => sum + apt.studentCount, 0)
            : 50; // Default student count
          
          return (
            <div
              key={neighborhood.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ left: centerPos.x, top: centerPos.y }}
              onClick={() => {
                if (neighborhoodApts.length > 0) {
                  setSelectedApartment(neighborhoodApts[0].id);
                }
              }}
            >
              {/* Cluster circle with count - smaller to not interfere */}
              <div
                className="rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs transition-all duration-200 group-hover:scale-110"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: getNeighborhoodColor(neighborhood.name),
                  opacity: neighborhoodApts.length > 0 ? 0.8 : 0.5,
                  zIndex: 5
                }}
              >
                {neighborhoodApts.length || '0'}
              </div>
              
              {/* Neighborhood info popup */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded shadow-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 border">
                <div className="font-bold text-sm">{neighborhood.name}</div>
                <div className="text-gray-600">{neighborhoodApts.length} properties</div>
                <div className="font-bold text-green-600">Avg: ${Math.round(avgRent)}/mo</div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {totalStudents} students
                </div>
                <div className="text-gray-500">{neighborhood.atmosphere} atmosphere</div>
                {neighborhoodApts.length === 0 && (
                  <div className="text-red-500 text-xs">No apartments in current filter</div>
                )}
              </div>
              
              {/* Neighborhood label */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs font-bold text-center whitespace-nowrap bg-white px-2 py-1 rounded shadow border">
                {neighborhood.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Debug Info - Show apartment count and list */}
      <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto">
        <div className="text-sm font-bold text-gray-800">
          📊 {filteredApartments.length} Apartments Found
        </div>
        <div className="text-xs text-gray-600 mb-2">
          Mode: {visualizationMode}
        </div>
        <div className="text-xs space-y-1">
          {filteredApartments.map(apt => {
            const pos = coordToPixel(apt.coordinates.lat, apt.coordinates.lng);
            return (
              <div key={apt.id} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: getHeatmapColor(apt) }}
                />
                <span>{apt.name}</span>
                <span className="text-gray-500">({pos.x.toFixed(0)}, {pos.y.toFixed(0)})</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Bar Sidebar */}
      {visualizationMode === "price-bars" && (
        <div className="absolute top-20 left-4 bg-white p-4 rounded-lg shadow-lg max-h-96 overflow-y-auto max-w-xs">
          <h3 className="text-sm font-bold mb-2">Price Bars</h3>
          <p className="text-xs text-gray-600 mb-3">Height = Rent Amount</p>
          <div className="space-y-2">
            {filteredApartments
              .sort((a, b) => b.rent - a.rent)
              .map((apt) => {
                const barHeight = Math.max(10, (apt.rent / 2000) * 40);
                const color = getRentColor(apt.rent);
                
                return (
                  <div key={apt.id} className="flex items-center gap-2">
                    <div 
                      className="w-3 rounded-sm"
                      style={{ 
                        height: `${barHeight}px`, 
                        backgroundColor: color,
                        minHeight: '10px'
                      }}
                    />
                    <div className="text-xs">
                      <div className="font-bold" style={{ color }}>${apt.rent}</div>
                      <div className="text-gray-600">{apt.name}</div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}