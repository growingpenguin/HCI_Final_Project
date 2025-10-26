import { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import { apartments } from '../data/mockData';
import type { Feature, FeatureCollection, LineString, MultiLineString, Polygon } from 'geojson';

/**
 * Simple approach: convert LineString to Polygon by closing the ring
 */
function convertLineStringToPolygon(feature: Feature<LineString>): Feature<Polygon> {
  const coords = feature.geometry.coordinates;
  
  // Check if already closed
  const isClosed = coords.length > 3 && 
    coords[0][0] === coords[coords.length - 1][0] && 
    coords[0][1] === coords[coords.length - 1][1];
  
  if (isClosed) {
    return {
      type: 'Feature',
      properties: feature.properties,
      geometry: {
        type: 'Polygon',
        coordinates: [coords]
      }
    };
  } else {
    // Close the ring by adding the first coordinate at the end
    const closedCoords = [...coords, coords[0]];
    return {
      type: 'Feature',
      properties: feature.properties,
      geometry: {
        type: 'Polygon',
        coordinates: [closedCoords]
      }
    };
  }
}


/**
 * 가격을 0-1 범위로 정규화
 * @param price - 현재 가격
 * @param minPrice - 최소 가격
 * @param maxPrice - 최대 가격
 * @returns {number} 정규화된 가격 (0-1)
 */
function normalizePrice(price: number, minPrice: number, maxPrice: number): number {
  if (maxPrice === minPrice) return 0.5;
  return (price - minPrice) / (maxPrice - minPrice);
}

/**
 * 히트맵 데이터 생성
 * @param apartments - 아파트 데이터 배열
 * @returns {Array} 히트맵 포인트 배열 [lat, lng, intensity]
 */
function createHeatmapData(apartments: any[]): [number, number, number][] {
  const prices = apartments.map(apt => apt.rent);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  console.log("💰 Price range:", minPrice, "~", maxPrice);
  
  return apartments.map(apt => {
    const intensity = normalizePrice(apt.rent, minPrice, maxPrice);
    console.log(`🏠 ${apt.name}: $${apt.rent} -> intensity ${intensity.toFixed(2)}`);
    return [apt.coordinates.lat, apt.coordinates.lng, intensity];
  });
}

/**
 * Convert LineStrings to a single Polygon
 */
function linesToSinglePolygon(
  lines: FeatureCollection<LineString | MultiLineString>
): Feature<Polygon> | null {
  console.log("🔧 linesToSinglePolygon called with", lines.features.length, "features");
  
  // Simple approach: convert the first LineString to Polygon
  if (lines.features.length > 0 && lines.features[0].geometry.type === 'LineString') {
    const polygon = convertLineStringToPolygon(lines.features[0] as Feature<LineString>);
    console.log("✅ Converted first LineString to Polygon");
    return polygon;
  }
  
  console.log("❌ No LineString features found");
  return null;
}

/**
 * Leaflet 히트맵 레이어 컴포넌트
 * @param points - 히트맵 포인트 배열 [lat, lng, intensity]
 */
interface HeatmapLayerProps {
  points: [number, number, number][];
}

const HeatmapLayer = ({ points }: HeatmapLayerProps) => {
  const map = useMap();
  const heatmapRef = useRef<any>(null);

  useEffect(() => {
    if (!map || points.length === 0) return;

    console.log("🔥 Creating heatmap with", points.length, "points");
    console.log("🔥 Sample point:", points[0]);

    // 히트맵 레이어 생성
    // @ts-ignore - leaflet.heat 타입 문제 무시
    const heatLayer = L.heatLayer(points, {
      radius: 70,      // 히트맵 반경
      blur: 50,        // 블러 효과 - 더 부드러운 경계
      maxZoom: 17,     // 최대 줌 레벨
      max: 1.0,        // 최대 intensity
      minOpacity: 0.5, // 최소 투명도를 높여서 낮은 가격대도 잘 보이게
      // 부드럽고 세련된 색상 그라디언트 (모든 가격대가 잘 보이도록 조정)
      gradient: {
        0.0: '#3182ce',  // 진한 파란색 (저렴) - 더 진하게
        0.15: '#48bb78', // 연한 초록색
        0.3: '#68d391',  // 밝은 초록색
        0.45: '#f6e05e', // 연한 노란색
        0.6: '#ed8936',  // 연한 주황색
        0.75: '#fc8181', // 연한 빨간색
        0.9: '#f56565',  // 부드러운 빨간색
        1.0: '#e53e3e'   // 진한 빨간색 (비쌈)
      }
    });

    console.log("🔥 HeatLayer created:", heatLayer);

    heatLayer.addTo(map);
    heatmapRef.current = heatLayer;

    console.log("✅ Heatmap layer added to map");

    // 클린업
    return () => {
      if (heatmapRef.current) {
        map.removeLayer(heatmapRef.current);
        console.log("🗑️ Heatmap layer removed");
      }
    };
  }, [map, points]);

  return null;
};

// Component to handle the georeferenced heatmap
const RealGeoreferencedHeatmap = () => {
  const [nhBoundary, setNhBoundary] = useState<any>(null);
  const [, setSelectedApartment] = useState<number | null>(null);
  const [heatmapData, setHeatmapData] = useState<[number, number, number][]>([]);

  // Hanover NH 중심점 (Dartmouth College 근처)
  const hanoverCenter = { lat: 43.7022, lng: -72.2896 };

  // Distance rings 설정 (마일 단위를 미터로 변환: 1 mile = 1609.34 meters)
  const distanceRings = [
    { radius: 1609.34 * 10, color: '#4A5568', opacity: 0.1 },  // 10 miles
    { radius: 1609.34 * 20, color: '#4A5568', opacity: 0.08 }, // 20 miles
    { radius: 1609.34 * 30, color: '#4A5568', opacity: 0.06 }, // 30 miles
    { radius: 1609.34 * 40, color: '#4A5568', opacity: 0.05 }, // 40 miles
    { radius: 1609.34 * 50, color: '#4A5568', opacity: 0.04 }, // 50 miles
  ];

  // Create custom blue pin icon for housing markers
  const housingIcon = new Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  // 히트맵 데이터 생성
  useEffect(() => {
    console.log("💰 Generating heatmap data from apartments");
    const data = createHeatmapData(apartments);
    setHeatmapData(data);
    console.log("✅ Heatmap data generated:", data.length, "points");
  }, []);

  useEffect(() => {
    console.log("🔥 RealGeoreferencedHeatmap component mounted");
    console.log("🏠 Apartments data:", apartments.length, "apartments");
    
    // Load New Hampshire boundary from local GeoJSON file
    const loadBoundary = async () => {
      try {
        console.log("🗺️ Loading NH boundary from local GeoJSON file");
        const response = await fetch('./src/data/New_Hampshire_State_Boundary.geojson');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("✅ Loaded GeoJSON data:", data);
        
        // LineString들을 Polygon으로 변환
        try {
          console.log("🔄 Converting LineStrings to Polygon...");
          console.log("📊 Input data features count:", data.features.length);
          console.log("📊 First feature type:", data.features[0]?.geometry?.type);
          
             const polygon = linesToSinglePolygon(data as FeatureCollection<LineString | MultiLineString>);
          
          console.log("📊 Conversion result:", polygon);
          
          if (polygon) {
            console.log("✅ Successfully converted to Polygon:", polygon);
            
            // FeatureCollection으로 감싸기
            const polygonFC: FeatureCollection<Polygon> = {
              type: 'FeatureCollection',
              features: [{
                ...polygon,
                properties: {
                  NAME: 'New Hampshire',
                  source: 'U.S. Census Bureau TIGER/Line Shapefiles',
                  projection: 'WGS 84'
                }
              }]
            };
            
            setNhBoundary(polygonFC);
          } else {
            console.error("❌ Failed to convert LineStrings to Polygon - polygon is null");
            setNhBoundary(data); // 실패시 원본 데이터 사용
          }
        } catch (conversionError) {
          console.error("❌ Error during conversion:", conversionError);
          console.error("Error stack:", (conversionError as Error).stack);
          setNhBoundary(data); // 실패시 원본 데이터 사용
        }
      } catch (error) {
        console.error("❌ Error loading GeoJSON:", error);
        console.log("🔄 Trying alternative path...");
        // Try alternative pathNew_Hampshire_State_Boundary.geojson
        try {
          const response = await fetch('/src/data/New_Hampshire_State_Boundary.geojson');
          const data = await response.json();
          console.log("✅ Loaded GeoJSON data with alternative path:", data);
          
          // LineString들을 Polygon으로 변환
          try {
            console.log("🔄 Converting LineStrings to Polygon (alt path)...");
            const polygon = linesToSinglePolygon(data as FeatureCollection<LineString | MultiLineString>);
            
            if (polygon) {
              console.log("✅ Successfully converted to Polygon (alt path):", polygon);
              
              // FeatureCollection으로 감싸기
              const polygonFC: FeatureCollection<Polygon> = {
                type: 'FeatureCollection',
                features: [{
                  ...polygon,
                  properties: {
                    NAME: 'New Hampshire',
                    source: 'U.S. Census Bureau TIGER/Line Shapefiles',
                    projection: 'WGS 84'
                  }
                }]
              };
              
              setNhBoundary(polygonFC);
            } else {
              console.error("❌ Failed to convert LineStrings to Polygon (alt path)");
              setNhBoundary(data);
            }
          } catch (conversionError) {
            console.error("❌ Error during conversion (alt path):", conversionError);
            setNhBoundary(data);
          }
        } catch (altError) {
          console.error("❌ Alternative path also failed:", altError);
        }
      }
    };
    
    loadBoundary();
  }, []);

  const boundaryStyle = {
    color: '#FFFFFF',
    weight: 2,
    opacity: 0.8,
    fillColor: 'transparent', // 투명하게 변경 (히트맵이 보이도록)
    fillOpacity: 0,
  };

  const onEachFeature = (feature: any, layer: any) => {
    const stateName = feature.properties.NAME;
    const source = feature.properties.source;
    const projection = feature.properties.projection;
    const popupContent = `
      <div class="p-2">
        <h3 class="font-bold text-sm">${stateName}</h3>
        <p class="text-xs text-gray-600">Price heatmap visualization</p>
        <p class="text-xs text-gray-500">Red areas = high rent areas</p>
        <p class="text-xs text-gray-500">Area: 9,350 sq mi</p>
        <p class="text-xs text-gray-500">Population: 1.4M</p>
        <div class="mt-2 pt-2 border-t border-gray-200">
          <p class="text-xs text-blue-600 font-medium">${source}</p>
          <p class="text-xs text-gray-500">${projection}</p>
        </div>
      </div>
    `;
    layer.bindPopup(popupContent);
  };

  console.log("🎯 Rendering RealGeoreferencedHeatmap component");
  console.log("🗺️ NH Boundary:", nhBoundary ? "Loaded" : "Not loaded");
  console.log("🏠 Apartments:", apartments.length, "apartments");
  console.log("🔥 Heatmap points:", heatmapData.length, "points");

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '10px', 
        background: 'white', 
        padding: '10px', 
        borderRadius: '5px',
        zIndex: 1000,
        fontSize: '12px'
      }}>
        🔥 Heatmap Debug: NH: {nhBoundary ? '✅' : '❌'} | Apartments: {apartments.length} | Heatmap: {heatmapData.length} points
      </div>
      
      {/* Price Gradient Legend */}
      <div style={{ 
        position: 'absolute', 
        top: '20px', 
        right: '20px', 
        background: 'rgba(255, 255, 255, 0.95)', 
        padding: '16px 20px', 
        borderRadius: '12px',
        zIndex: 1000,
        fontSize: '13px',
        minWidth: '200px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{ 
          fontWeight: '600', 
          marginBottom: '12px',
          color: '#2d3748',
          fontSize: '14px',
          letterSpacing: '0.3px'
        }}>
          Rent Price Range
        </div>
        <div style={{ 
          height: '12px', 
          background: 'linear-gradient(to right, #3182ce, #48bb78, #68d391, #f6e05e, #ed8936, #fc8181, #f56565, #e53e3e)',
          borderRadius: '6px',
          marginBottom: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }} />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '11px',
          color: '#718096',
          fontWeight: '500'
        }}>
          <span>$850</span>
          <span>$1,800+</span>
        </div>
      </div>
      
      <MapContainer 
        center={[44.0, -71.5]} // Center of New Hampshire
        zoom={7} 
        style={{ height: '600px', width: '100%' }}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
      {/* Distance Rings (Commute Distance Rings) */}
      {distanceRings.map((ring, index) => (
        <Circle
          key={`ring-${index}`}
          center={[hanoverCenter.lat, hanoverCenter.lng]}
          radius={ring.radius}
          pathOptions={{
            color: ring.color,
            weight: 1,
            opacity: ring.opacity,
            fillColor: ring.color,
            fillOpacity: ring.opacity * 0.5,
          }}
        />
      ))}
      
      {/* 히트맵 레이어 추가 */}
      {heatmapData.length > 0 && (
        <HeatmapLayer points={heatmapData} />
      )}
      
      {nhBoundary && (
        <GeoJSON 
          data={nhBoundary} 
          style={boundaryStyle}
          onEachFeature={onEachFeature}
        />
      )}
      
      {/* Housing Location Markers */}
      {console.log("Rendering", apartments.length, "apartment markers")}
      {apartments.map((apartment) => (
        <Marker
          key={apartment.id}
          position={[apartment.coordinates.lat, apartment.coordinates.lng]}
          icon={housingIcon}
          eventHandlers={{
            click: () => setSelectedApartment(apartment.id)
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-sm">{apartment.name}</h3>
              <p className="text-xs text-gray-600">${apartment.rent}/month</p>
              <p className="text-xs text-gray-500">{apartment.distance} mi from campus</p>
              <p className="text-xs text-gray-500">{apartment.bedrooms} bed, {apartment.bathrooms} bath</p>
              <div className="mt-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {apartment.neighborhood}
                </span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default RealGeoreferencedHeatmap;