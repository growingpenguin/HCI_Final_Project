import { useState, useEffect, useRef } from "react";
import { MapPin, DollarSign, Users, School, ShoppingCart, Dumbbell } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FilterPanel } from "./FilterPanel";
import { apartments, USD_TO_KRW, neighborhoods } from "../data/mockData";
import RealGeoreferencedHeatmap from "./RealGeoreferencedHeatmap";

// Leaflet types
declare global {
  interface Window {
    L: any;
  }
}

export function MapView() {
  const [selectedApartment, setSelectedApartment] = useState<number | null>(null);
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");

  // New UI state for filters and interactions
  const [rentMax, setRentMax] = useState<number>(2000);
  const [bedroomsFilter, setBedroomsFilter] = useState<number | null>(null);
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);
  const [tooltip] = useState<{x:number,y:number,html:string}|null>(null);

  // Enhanced map features
  const [heatmapType, setHeatmapType] = useState<"price" | "distance" | "neighborhood">("price");
  const [showUtilities, setShowUtilities] = useState<boolean>(false);
  const [utilityType, setUtilityType] = useState<"all" | "supermarket" | "gym" | "school">("all");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string | null>(null);

  // Four specific visualization modes
  const [visualizationMode, setVisualizationMode] = useState<"price-bars" | "location-popup" | "neighborhood-clustering" | "heatmap">("price-bars");

  // Leaflet map state
  const [map, setMap] = useState<any>(null);
  const [diningAreaToggle, setDiningAreaToggle] = useState<number>(0); // 0: South Main, 1: 53 Commons, 2: Pepsico, 3: Norwich Dining, 4: Jesse's Steak House, 5: SNAX, 6: Lebanon Dining 1, 7: Lebanon Dining 2, 8: Lebanon Dining 3, 9: Vermont Dining
  // const [campusAreaToggle] = useState<number>(0); // 0: Dartmouth Green
  const [residentialToggle, setResidentialToggle] = useState<number>(0); // 0: Residential Zone, 1: Summit On Juniper, 2: Sachem Village
  const [connectorToggle, setConnectorToggle] = useState<number>(0); // 0: DHMC East Entrance, 1: Hanover Coop, 2: DMS-Vail, 3: Webster Ave SB, 4: Tuck Circle, 5: Blunt Alumni Center, 6: Hanover Inn
  const mapRef = useRef<HTMLDivElement>(null);

  // Function to focus map on Dartmouth Green
  const focusOnDartmouth = () => {
    if (map) {
      map.setView([43.70353336255995, -72.2885570030165], 16); // Dartmouth Green coordinates (the iconic central quad)
    } else {
      // If map isn't ready yet, wait a bit and try again
      setTimeout(() => {
        if (map) {
          map.setView([43.70353336255995, -72.2885570030165], 12);
        }
      }, 500);
    }
  };

  // Enhanced color functions for different heatmap types
  const getRentColor = (rent: number) => {
    if (rent < 1000) return "#4ade80"; // green
    if (rent < 1400) return "#fbbf24"; // yellow
    return "#ef4444"; // red
  };

  const getDistanceColor = (distance: number) => {
    if (distance < 0.5) return "#4ade80"; // green - close
    if (distance < 1.0) return "#fbbf24"; // yellow - medium
    return "#ef4444"; // red - far
  };

  const getNeighborhoodColor = (neighborhood: string) => {
    const colors: { [key: string]: string } = {
      "Lebanon": "#3b82f6", // blue
      "Norwich": "#8b5cf6", // purple
      "On Campus": "#f59e0b", // orange
      "Summit on Juniper": "#10b981" // emerald
    };
    return colors[neighborhood] || "#6b7280"; // gray default
  };

  // const getHeatmapColor = (apt: any) => {
  //   switch (heatmapType) {
  //     case "price": return getRentColor(apt.rent);
  //     case "distance": return getDistanceColor(apt.distance);
  //     case "neighborhood": return getNeighborhoodColor(apt.neighborhood);
  //     default: return getRentColor(apt.rent);
  //   }
  // };

  // Initialize Leaflet Map
  useEffect(() => {
    if (mapRef.current && !map) {
      const initMap = () => {
        const newMap = window.L.map(mapRef.current!, {
          center: [43.7615, -72.2772], // Hanover, NH (Dartmouth College)
          zoom: 10,
          maxBounds: [
            [42.7, -72.6],  // Southwest corner of NH
            [45.3, -70.6]   // Northeast corner of NH
          ],
          maxBoundsViscosity: 1.0
        });
        
        // Add OpenStreetMap tiles
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors'
        }).addTo(newMap);
        
        // Add Dartmouth College marker
        const dartmouthMarker = window.L.marker([43.7615, -72.2772]).addTo(newMap);
        dartmouthMarker.bindPopup(`
          <div class="text-center">
            <h3 class="font-bold text-lg text-red-600">Dartmouth College</h3>
            <p class="text-sm text-gray-600">Main Campus</p>
          </div>
        `);
        
        // Add apartment markers using real data from mockData.ts
        apartments.forEach(apt => {
          // Use different colors based on visualization mode
          let color;
          if (visualizationMode === "location-popup") {
            color = getDistanceColor(apt.distance);
          } else if (visualizationMode === "neighborhood-clustering") {
            color = getNeighborhoodColor(apt.neighborhood);
          } else {
            color = getRentColor(apt.rent);
          }
          
          const marker = window.L.marker([apt.coordinates.lat, apt.coordinates.lng]).addTo(newMap);
          
          marker.bindPopup(`
            <div class="text-center p-2">
              <h3 class="font-bold text-lg">${apt.name}</h3>
              <p class="text-sm text-gray-600">Rent: $${apt.rent}/month</p>
              <p class="text-xs text-gray-500">${apt.bedrooms} bed, ${apt.bathrooms} bath</p>
              <p class="text-xs text-gray-500">${apt.distance} miles from campus</p>
              <div class="w-4 h-4 mx-auto mt-2 rounded" style="background-color: ${color}"></div>
            </div>
          `);
          
          // Add click handler to select apartment
          marker.on('click', () => {
            setSelectedApartment(apt.id);
          });
        });
        
        setMap(newMap);
        
        // Focus on Dartmouth Green after map is initialized
        setTimeout(() => {
          newMap.setView([43.70353336255995, -72.2885570030165], 12);
        }, 100);
      };

      // Initialize map when Leaflet is loaded
      if (window.L) {
        initMap();
      } else {
        // Wait for Leaflet to load
        const checkLeaflet = setInterval(() => {
          if (window.L) {
            clearInterval(checkLeaflet);
            initMap();
          }
        }, 100);
      }
    }
  }, [map]);

  // Update marker colors when visualization mode changes
  useEffect(() => {
    if (map) {
      // Clear existing markers, distance rings, and neighborhood polygons
      map.eachLayer((layer: any) => {
        if (layer instanceof window.L.Marker || 
            layer instanceof window.L.Polygon || 
            layer instanceof window.L.Circle ||
            layer.options?.isDistanceRing ||
            layer.options?.isNeighborhoodPolygon) {
          map.removeLayer(layer);
        }
      });
      
      // Add distance rings for location-popup mode
      if (visualizationMode === "location-popup") {
        // Dartmouth Green coordinates
        const dartmouthGreen = [43.70353336255995, -72.2885570030165];
        
        // Create distance rings using Leaflet circles
        const rings = [
          { radius: 805, color: '#3b82f6', label: '0.5 mi' }, // 0.5 miles in meters
          { radius: 1609, color: '#eab308', label: '1.0 mi' }, // 1.0 miles in meters
          { radius: 2414, color: '#ef4444', label: '1.5 mi' }, // 1.5 miles in meters
          { radius: 3218, color: '#a855f7', label: '2.0 mi' }  // 2.0 miles in meters
        ];
        
        rings.forEach(ring => {
            window.L.circle(dartmouthGreen, {
            radius: ring.radius,
            color: ring.color,
            weight: 3,
            opacity: 0.8,
            fillColor: ring.color,
            fillOpacity: 0.15,
            dashArray: '10, 10',
            isDistanceRing: true
          }).addTo(map);
          
        });
      }
      
        // Add colored segments/areas for neighborhood clustering
        if (visualizationMode === "neighborhood-clustering") {
          // Create colored polygons for different neighborhoods
          const neighborhoodAreas = [
            {
              name: "Dining District",
              coordinates: [
                [43.7015, -72.2895],
                [43.7015, -72.2885],
                [43.7005, -72.2885],
                [43.7005, -72.2895]
              ],
              color: "#ff6b6b",
              opacity: 0.2
            },
            {
              name: "53 Commons Area",
              coordinates: [
                [43.7035, -72.2915],
                [43.7035, -72.2905],
                [43.7025, -72.2905],
                [43.7025, -72.2915]
              ],
              color: "#f59e0b",
              opacity: 0.2
            },
            {
              name: "Pepsico Dining Hall",
              coordinates: [
                [43.7060, -72.2958],
                [43.7060, -72.2948],
                [43.7050, -72.2948],
                [43.7050, -72.2958]
              ],
              color: "#8b5cf6",
              opacity: 0.2
            },
            {
              name: "Norwich Dining",
              coordinates: [
                [43.7155, -72.3091],
                [43.7155, -72.3081],
                [43.7145, -72.3081],
                [43.7145, -72.3091]
              ],
              color: "#f97316",
              opacity: 0.2
            },
            {
              name: "Jesse's Steak House",
              coordinates: [
                [43.6848, -72.2681],
                [43.6848, -72.2672],
                [43.6838, -72.2672],
                [43.6838, -72.2681]
              ],
              color: "#06b6d4",
              opacity: 0.2
            },
            {
              name: "SNAX",
              coordinates: [
                [43.6775, -72.2629],
                [43.6775, -72.2620],
                [43.6765, -72.2620],
                [43.6765, -72.2629]
              ],
              color: "#84cc16",
              opacity: 0.2
            },
            {
              name: "Lebanon Dining 1",
              coordinates: [
                [43.6343, -72.3180],
                [43.6343, -72.3172],
                [43.6333, -72.3172],
                [43.6333, -72.3180]
              ],
              color: "#ec4899",
              opacity: 0.2
            },
            {
              name: "Lebanon Dining 2",
              coordinates: [
                [43.6309, -72.3243],
                [43.6309, -72.3235],
                [43.6299, -72.3235],
                [43.6299, -72.3243]
              ],
              color: "#6366f1",
              opacity: 0.2
            },
            {
              name: "Lebanon Dining 3",
              coordinates: [
                [43.6292, -72.3246],
                [43.6292, -72.3238],
                [43.6282, -72.3238],
                [43.6282, -72.3246]
              ],
              color: "#f43f5e",
              opacity: 0.2
            },
            {
              name: "Vermont Dining",
              coordinates: [
                [43.6467, -72.3425],
                [43.6467, -72.3415],
                [43.6457, -72.3415],
                [43.6457, -72.3425]
              ],
              color: "#dc2626",
              opacity: 0.2
            },
        ];

        neighborhoodAreas.forEach(area => {
          const polygon = window.L.polygon(area.coordinates, {
            color: area.color,
            weight: 3,
            fillColor: area.color,
            fillOpacity: 0.2,
            opacity: 1,
            isNeighborhoodPolygon: true
          }).addTo(map);

          polygon.bindPopup(`
            <div class="p-2">
              <h3 class="font-bold text-sm">${area.name}</h3>
              <p class="text-xs text-gray-600">Click to explore listings in this area</p>
            </div>
          `);
        });

        // Add Dartmouth Connector polygons
        const connectorAreas = [
          {
            name: "DHMC East Entrance",
            coordinates: [
              [43.6769, -72.2727],
              [43.6769, -72.2717],
              [43.6759, -72.2717],
              [43.6759, -72.2727]
            ],
            color: "#10b981"
          },
          {
            name: "Hanover Coop",
            coordinates: [
              [43.6992, -72.2813],
              [43.6992, -72.2803],
              [43.6982, -72.2803],
              [43.6982, -72.2813]
            ],
            color: "#059669"
          },
          {
            name: "DMS-Vail",
            coordinates: [
              [43.7086, -72.2851],
              [43.7086, -72.2841],
              [43.7076, -72.2841],
              [43.7076, -72.2851]
            ],
            color: "#047857"
          },
          {
            name: "Webster Ave SB",
            coordinates: [
              [43.7063, -72.2902],
              [43.7063, -72.2892],
              [43.7053, -72.2892],
              [43.7053, -72.2902]
            ],
            color: "#065f46"
          },
          {
            name: "Tuck Circle",
            coordinates: [
              [43.7057, -72.2950],
              [43.7057, -72.2940],
              [43.7047, -72.2940],
              [43.7047, -72.2950]
            ],
            color: "#064e3b"
          },
          {
            name: "Blunt Alumni Center",
            coordinates: [
              [43.7054, -72.2905],
              [43.7054, -72.2895],
              [43.7044, -72.2895],
              [43.7044, -72.2905]
            ],
            color: "#022c22"
          },
          {
            name: "Hanover Inn",
            coordinates: [
              [43.7030, -72.2887],
              [43.7030, -72.2877],
              [43.7020, -72.2877],
              [43.7020, -72.2887]
            ],
            color: "#14532d"
          }
        ];

        connectorAreas.forEach(area => {
          const polygon = window.L.polygon(area.coordinates, {
            color: area.color,
            weight: 3,
            fillColor: area.color,
            fillOpacity: 0.2,
            opacity: 1,
            isNeighborhoodPolygon: true
          }).addTo(map);

          polygon.bindPopup(`
            <div class="p-2">
              <h3 class="font-bold text-sm">${area.name}</h3>
              <p class="text-xs text-gray-600">Dartmouth Connector stop</p>
            </div>
          `);
        });

        // Add Campus Area and Residential Zone separately
        const campusArea = {
          name: "Campus Area",
          coordinates: [
            [43.7045, -72.2890],
            [43.7045, -72.2880],
            [43.7035, -72.2880],
            [43.7035, -72.2890]
          ],
          color: "#4ecdc4",
          opacity: 0.2
        };

        const residentialZone = {
          name: "Residential Zone",
          coordinates: [
            [43.7025, -72.2900],
            [43.7025, -72.2890],
            [43.7015, -72.2890],
            [43.7015, -72.2900]
          ],
          color: "#45b7d1",
          opacity: 0.2
        };

        // Add Campus Area
        const campusPolygon = window.L.polygon(campusArea.coordinates, {
          color: campusArea.color,
          weight: 3,
          fillColor: campusArea.color,
          fillOpacity: 0.2,
          opacity: 1,
          isNeighborhoodPolygon: true
        }).addTo(map);

        campusPolygon.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${campusArea.name}</h3>
            <p class="text-xs text-gray-600">Dartmouth Green campus area</p>
          </div>
        `);

        // Add Residential Zone
        const residentialPolygon = window.L.polygon(residentialZone.coordinates, {
          color: residentialZone.color,
          weight: 3,
          fillColor: residentialZone.color,
          fillOpacity: 0.2,
          opacity: 1,
          isNeighborhoodPolygon: true
        }).addTo(map);

        residentialPolygon.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${residentialZone.name}</h3>
            <p class="text-xs text-gray-600">Housing neighborhoods</p>
          </div>
        `);

        // Add Summit On Juniper and Sachem Village locations
        const summitOnJuniper = {
          name: "Summit On Juniper",
          coordinates: [
            [43.6704, -72.2630],
            [43.6704, -72.2621],
            [43.6694, -72.2621],
            [43.6694, -72.2630]
          ],
          color: "#3b82f6",
          opacity: 0.2
        };

        const sachemVillage = {
          name: "Sachem Village",
          coordinates: [
            [43.6843, -72.2861],
            [43.6843, -72.2852],
            [43.6833, -72.2852],
            [43.6833, -72.2861]
          ],
          color: "#1d4ed8",
          opacity: 0.2
        };

        // Add Summit On Juniper
        const summitPolygon = window.L.polygon(summitOnJuniper.coordinates, {
          color: summitOnJuniper.color,
          weight: 3,
          fillColor: summitOnJuniper.color,
          fillOpacity: 0.2,
          opacity: 1,
          isNeighborhoodPolygon: true
        }).addTo(map);

        summitPolygon.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${summitOnJuniper.name}</h3>
            <p class="text-xs text-gray-600">Summit On Juniper residential area</p>
          </div>
        `);

        // Add Sachem Village
        const sachemPolygon = window.L.polygon(sachemVillage.coordinates, {
          color: sachemVillage.color,
          weight: 3,
          fillColor: sachemVillage.color,
          fillOpacity: 0.2,
          opacity: 1,
          isNeighborhoodPolygon: true
        }).addTo(map);

        sachemPolygon.bindPopup(`
          <div class="p-2">
            <h3 class="font-bold text-sm">${sachemVillage.name}</h3>
            <p class="text-xs text-gray-600">Sachem Village residential area</p>
          </div>
        `);

        // Add pinpoint markers for exact coordinates of each location
        // Dining Area pinpoints
        const diningCoordinates = [
          { name: "South Main Street", coords: [43.701734, -72.289382] },
          { name: "53 Commons", coords: [43.70306366477553, -72.29102031780414] },
          { name: "Pepsico Dining Hall", coords: [43.70550769244332, -72.29531228547573] },
          { name: "Norwich Dining", coords: [43.715107, -72.308609] },
          { name: "Jesse's Steak House", coords: [43.684333785732214, -72.26767524344636] },
          { name: "SNAX", coords: [43.676993649279424, -72.26245870785604] },
          { name: "Lebanon Dining 1", coords: [43.63381701043088, -72.31758581843766] },
          { name: "Lebanon Dining 2", coords: [43.630420834425536, -72.32386865262568] },
          { name: "Lebanon Dining 3", coords: [43.628693891668256, -72.32410724126572] },
          { name: "Vermont Dining", coords: [43.64615929598391, -72.34196706826144] }
        ];

        diningCoordinates.forEach(location => {
          const diningIcon = window.L.divIcon({
            className: 'dining-pin',
            html: `<div style="
              background: linear-gradient(135deg, #f97316, #ea580c);
              width: 20px;
              height: 20px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                color: white;
                font-size: 10px;
                font-weight: bold;
              ">🍽️</div>
            </div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 20]
          });

          window.L.marker([location.coords[0], location.coords[1]], { icon: diningIcon })
            .addTo(map)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold text-sm text-orange-700">${location.name}</h3>
                <p class="text-xs text-gray-600">Dining Location</p>
              </div>
            `);
        });

        // Campus Area pinpoint
        const campusIcon = window.L.divIcon({
          className: 'campus-pin',
          html: `<div style="
            background: linear-gradient(135deg, #4ecdc4, #26a69a);
            width: 20px;
            height: 20px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <div style="
              transform: rotate(45deg);
              color: white;
              font-size: 10px;
              font-weight: bold;
            ">🏛️</div>
          </div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 20]
        });

        window.L.marker([43.70353336255995, -72.2885570030165], { icon: campusIcon })
          .addTo(map)
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold text-sm text-teal-700">Dartmouth Green</h3>
              <p class="text-xs text-gray-600">Campus Area</p>
            </div>
          `);

        // Residential Zone pinpoints
        const residentialCoordinates = [
          { name: "Undergraduate Housing", coords: [43.7020, -72.2895] },
          { name: "Summit On Juniper", coords: [43.66988510472125, -72.26254738952582] },
          { name: "Sachem Village", coords: [43.683777021539306, -72.28564634791711] }
        ];

        residentialCoordinates.forEach(location => {
          const residentialIcon = window.L.divIcon({
            className: 'residential-pin',
            html: `<div style="
              background: linear-gradient(135deg, #3b82f6, #1d4ed8);
              width: 20px;
              height: 20px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                color: white;
                font-size: 10px;
                font-weight: bold;
              ">🏠</div>
            </div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 20]
          });

          window.L.marker([location.coords[0], location.coords[1]], { icon: residentialIcon })
            .addTo(map)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold text-sm text-blue-700">${location.name}</h3>
                <p class="text-xs text-gray-600">Residential Area</p>
              </div>
            `);
        });

        // Dartmouth Connector pinpoints
        const connectorCoordinates = [
          { name: "DHMC East Entrance", coords: [43.67644904318833, -72.27220350331908] },
          { name: "Hanover Coop", coords: [43.69871266876056, -72.28079399547744] },
          { name: "DMS-Vail", coords: [43.70807832674773, -72.28454390301636] },
          { name: "Webster Ave SB", coords: [43.70581995300266, -72.28965000301638] },
          { name: "Tuck Circle", coords: [43.70516691364978, -72.29451861836019] },
          { name: "Blunt Alumni Center", coords: [43.704861558607554, -72.28996148767268] },
          { name: "Hanover Inn", coords: [43.70252974836068, -72.2881792016961] }
        ];

        connectorCoordinates.forEach(location => {
          const connectorIcon = window.L.divIcon({
            className: 'connector-pin',
            html: `<div style="
              background: linear-gradient(135deg, #10b981, #059669);
              width: 20px;
              height: 20px;
              border-radius: 50% 50% 50% 0;
              transform: rotate(-45deg);
              border: 3px solid white;
              box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              display: flex;
              align-items: center;
              justify-content: center;
            ">
              <div style="
                transform: rotate(45deg);
                color: white;
                font-size: 10px;
                font-weight: bold;
              ">🚌</div>
            </div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 20]
          });

          window.L.marker([location.coords[0], location.coords[1]], { icon: connectorIcon })
            .addTo(map)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold text-sm text-green-700">${location.name}</h3>
                <p class="text-xs text-gray-600">Dartmouth Connector Stop</p>
              </div>
            `);
        });

        // Group apartments by proximity and create cluster markers
        const clusters: Array<{
          center: { lat: number; lng: number };
          apartments: Array<typeof apartments[0]>;
        }> = [];
        const clusterRadius = 0.001; // Small radius for clustering

        apartments.forEach(apt => {
          let addedToCluster = false;
          
          // Check if apartment is near any existing cluster
          for (let cluster of clusters) {
            const distance = Math.sqrt(
              Math.pow(apt.coordinates.lat - cluster.center.lat, 2) +
              Math.pow(apt.coordinates.lng - cluster.center.lng, 2)
            );
            
            if (distance < clusterRadius) {
              cluster.apartments.push(apt);
              addedToCluster = true;
          break;
        }
      }
          
          // Create new cluster if not added to existing one
          if (!addedToCluster) {
            clusters.push({
              center: { lat: apt.coordinates.lat, lng: apt.coordinates.lng },
              apartments: [apt]
            });
          }
        });

        // Create cluster markers
        clusters.forEach((cluster) => {
          if (cluster.apartments.length > 1) {
            // Create cluster marker for multiple apartments
            const clusterMarker = window.L.marker([cluster.center.lat, cluster.center.lng], {
              icon: window.L.divIcon({
                className: 'cluster-marker',
                html: `
                  <div style="
                    background: #10b981;
                    color: white;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 14px;
                    border: 3px solid white;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
                  ">${cluster.apartments.length}</div>
                `,
                iconSize: [40, 40],
                iconAnchor: [20, 20]
              })
            }).addTo(map);

            clusterMarker.bindPopup(`
              <div class="p-3">
                <h3 class="font-bold text-lg mb-2">Show ${cluster.apartments.length} listings in this area</h3>
                <div class="space-y-2">
                  ${cluster.apartments.map((apt: typeof apartments[0]) => `
                    <div class="flex items-center gap-2 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100" onclick="window.selectApartment('${apt.id}')">
                      <div class="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                        <span class="text-sm">🏠</span>
                      </div>
                      <div class="flex-1">
                        <p class="font-medium text-sm">${apt.name}</p>
                        <p class="text-xs text-gray-600">$${apt.rent.toLocaleString()}/month</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `);
          } else {
            // Single apartment marker
            const apt = cluster.apartments[0];
            // const color = getNeighborhoodColor(apt.neighborhood);
            
            const marker = window.L.marker([apt.coordinates.lat, apt.coordinates.lng]).addTo(map);
            
            marker.bindPopup(`
              <div class="p-3 max-w-xs">
                <div class="flex gap-3">
                  <div class="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <span class="text-2xl">🏠</span>
                  </div>
                  <div class="flex-1">
                    <h3 class="font-bold text-lg">${apt.name}</h3>
                    <p class="text-sm text-gray-600">$${apt.rent.toLocaleString()}/month</p>
                    <p class="text-xs text-gray-500">${apt.bedrooms} bds • ${apt.bathrooms} ba • ${apt.sqft} sqft</p>
                    <p class="text-xs text-gray-500">${apt.distance} miles from campus</p>
                    <div class="mt-2">
                      <span class="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">${apt.neighborhood}</span>
                    </div>
                  </div>
                </div>
              </div>
            `);
            
            marker.on('click', () => {
              setSelectedApartment(apt.id);
            });
          }
        });
      } else {
        // Regular markers for other modes
        apartments.forEach(apt => {
          let color;
          if (visualizationMode === "location-popup") {
            color = getDistanceColor(apt.distance);
          } else {
            color = getRentColor(apt.rent);
          }
          
          const marker = window.L.marker([apt.coordinates.lat, apt.coordinates.lng]).addTo(map);
          
          marker.bindPopup(`
            <div class="text-center p-2">
              <h3 class="font-bold text-lg">${apt.name}</h3>
              <p class="text-sm text-gray-600">Rent: $${apt.rent}/month</p>
              <p class="text-xs text-gray-500">${apt.bedrooms} bed, ${apt.bathrooms} bath</p>
              <p class="text-xs text-gray-500">${apt.distance} miles from campus</p>
              <div class="w-4 h-4 mx-auto mt-2 rounded" style="background-color: ${color}"></div>
            </div>
          `);
          
          marker.on('click', () => {
            setSelectedApartment(apt.id);
          });
        });
      }
    }
  }, [visualizationMode, map]);

  const selected = selectedApartment !== null 
    ? apartments.find(a => a.id === selectedApartment) 
    : null;

  // Apply lightweight filters without removing existing behavior
  // const filteredApartments = useMemo(() => {
  //   return apartments.filter(a =>
  //     a.rent <= rentMax &&
  //     (bedroomsFilter == null || a.bedrooms === bedroomsFilter) &&
  //     (selectedNeighborhood == null || a.neighborhood === selectedNeighborhood)
  //   );
  // }, [rentMax, bedroomsFilter, selectedNeighborhood]);

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

        {/* Visualization Mode Selector - SEPARATE FROM MAP */}
        <div className="mb-6">
          <Card className="p-4">
            <div className="text-lg font-bold mb-4 text-gray-800">🎯 Choose Visualization Mode</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <button
                onClick={() => {
                  setVisualizationMode("price-bars");
                  focusOnDartmouth();
                }}
                className={`px-6 py-4 text-sm rounded-lg text-left transition-all duration-200 border-2 ${
                  visualizationMode === "price-bars"
                    ? 'bg-[#A4D7A7] text-white border-[#A4D7A7] shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border-gray-300'
                }`}
              >
                <div className="font-bold text-base">📊 Price Bars</div>
                <div className="text-xs opacity-75">Vertical bars showing rent levels</div>
              </button>
              <button
                onClick={() => {
                  setVisualizationMode("location-popup");
                  focusOnDartmouth();
                }}
                className={`px-6 py-4 text-sm rounded-lg text-left transition-all duration-200 border-2 ${
                  visualizationMode === "location-popup"
                    ? 'bg-[#A4D7A7] text-white border-[#A4D7A7] shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border-gray-300'
                }`}
              >
                <div className="font-bold text-base">📍 Distance Rings</div>
                <div className="text-xs opacity-75">Concentric rings from campus</div>
              </button>
              <button
                onClick={() => {
                  setVisualizationMode("neighborhood-clustering");
                  focusOnDartmouth();
                }}
                className={`px-6 py-4 text-sm rounded-lg text-left transition-all duration-200 border-2 ${
                  visualizationMode === "neighborhood-clustering"
                    ? 'bg-[#A4D7A7] text-white border-[#A4D7A7] shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border-gray-300'
                }`}
              >
                <div className="font-bold text-base">🏘️ Neighborhood Clusters</div>
                <div className="text-xs opacity-75">Clickable areas with neighborhood info</div>
              </button>
              <button
                onClick={() => {
                  setVisualizationMode("heatmap");
                }}
                className={`px-6 py-4 text-sm rounded-lg text-left transition-all duration-200 border-2 ${
                  visualizationMode === "heatmap"
                    ? 'bg-[#A4D7A7] text-white border-[#A4D7A7] shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md border-gray-300'
                }`}
              >
                <div className="font-bold text-base">🔥 Price Heatmap</div>
                <div className="text-xs opacity-75">Heat-coded map of New Hampshire</div>
                  </button>
            </div>
          </Card>
                </div>

        {/* Neighborhood Category Selection - Only show for neighborhood-clustering mode */}
        {visualizationMode === "neighborhood-clustering" && (
          <div className="mb-4">
            <Card className="p-4">
              <h3 className="text-lg font-bold mb-3">🏘️ Select Neighborhood Area</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    // Cycle through all 9 dining locations
                    if (map) {
                      const nextToggle = (diningAreaToggle + 1) % 9;
                      
                      if (nextToggle === 0) {
                        // South Main Street
                        map.setView([43.701734, -72.289382], 30);
                      } else if (nextToggle === 1) {
                        // 53 Commons
                        map.setView([43.70306366477553, -72.29102031780414], 30);
                      } else if (nextToggle === 2) {
                        // Pepsico Dining Hall
                        map.setView([43.70550769244332, -72.29531228547573], 30);
                      } else if (nextToggle === 3) {
                        // New Location
                        map.setView([43.715107, -72.308609], 30);
                      } else if (nextToggle === 4) {
                        // Location 5
                        map.setView([43.684333785732214, -72.26767524344636], 30);
                      } else if (nextToggle === 5) {
                        // Location 6
                        map.setView([43.676993649279424, -72.26245870785604], 30);
                      } else if (nextToggle === 6) {
                        // Location 7
                        map.setView([43.63381701043088, -72.31758581843766], 30);
                      } else if (nextToggle === 7) {
                        // Location 8
                        map.setView([43.630420834425536, -72.32386865262568], 30);
                      } else if (nextToggle === 8) {
                        // Location 9
                        map.setView([43.628693891668256, -72.32410724126572], 30);
                      } else {
                        // Vermont Dining
                        map.setView([43.64615929598391, -72.34196706826144], 30);
                      }
                      
                      setDiningAreaToggle(nextToggle);
                    }
                  }}
                  className="flex-1 px-2 py-1.5 text-xs rounded-lg text-left transition-all duration-300 border-2 bg-gradient-to-br from-orange-50 to-red-50 text-orange-800 hover:from-orange-100 hover:to-red-100 hover:shadow-lg border-orange-200 hover:border-orange-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="text-sm">🍽️</div>
                    <div className="font-bold text-xs">Dining Area</div>
                  </div>
                  <div className="text-xs font-medium text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded-full inline-block">
                    {diningAreaToggle === 0 ? "South Main Street" : 
                     diningAreaToggle === 1 ? "53 Commons" : 
                     diningAreaToggle === 2 ? "Pepsico Dining Hall" : 
                     diningAreaToggle === 3 ? "Norwich Dining" :
                     diningAreaToggle === 4 ? "Jesse's Steak House" : 
                     diningAreaToggle === 5 ? "SNAX" :
                     diningAreaToggle === 6 ? "Lebanon Dining 1" :
                     diningAreaToggle === 7 ? "Lebanon Dining 2" : 
                     diningAreaToggle === 8 ? "Lebanon Dining 3" : "Vermont Dining"}
                  </div>
                </button>
                <button
                  onClick={() => {
                    // Focus on Campus Area (Dartmouth Green)
                    if (map) {
                      map.setView([43.70353336255995, -72.2885570030165], 40); // Dartmouth Green coordinates
                    }
                  }}
                  className="flex-1 px-2 py-1.5 text-xs rounded-lg text-left transition-all duration-300 border-2 bg-gradient-to-br from-teal-50 to-cyan-50 text-teal-800 hover:from-teal-100 hover:to-cyan-100 hover:shadow-lg border-teal-200 hover:border-teal-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="text-sm">🏛️</div>
                    <div className="font-bold text-xs">Campus Area</div>
                  </div>
                  <div className="text-xs font-medium text-teal-700 bg-teal-100 px-1.5 py-0.5 rounded-full inline-block">
                    Dartmouth Green
                  </div>
                </button>
                <button
                  onClick={() => {
                    // Cycle through Residential Zone and Sachem Village locations
                    if (map) {
                      const nextToggle = (residentialToggle + 1) % 3;
                      
                      if (nextToggle === 0) {
                        // Residential Zone
                        map.setView([43.7020, -72.2895], 40);
                      } else if (nextToggle === 1) {
                        // Summit On Juniper
                        map.setView([43.66988510472125, -72.26254738952582], 40);
                      } else {
                        // Sachem Village
                        map.setView([43.683777021539306, -72.28564634791711], 40);
                      }
                      
                      setResidentialToggle(nextToggle);
                    }
                  }}
                  className="flex-1 px-2 py-1.5 text-xs rounded-lg text-left transition-all duration-300 border-2 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-800 hover:from-blue-100 hover:to-indigo-100 hover:shadow-lg border-blue-200 hover:border-blue-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="text-sm">🏠</div>
                    <div className="font-bold text-xs">Residential Zone</div>
                  </div>
                  <div className="text-xs font-medium text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded-full inline-block">
                    {residentialToggle === 0 ? "Undergraduate Housing" : 
                     residentialToggle === 1 ? "Summit On Juniper" : "Sachem Village"}
                  </div>
                </button>
                <button
                  onClick={() => {
                    // Toggle through Dartmouth Connector locations
                    const connectorLocations = [
                      { name: "DHMC East Entrance", coords: [43.67644904318833, -72.27220350331908], zoom: 18 },
                      { name: "Hanover Coop", coords: [43.69871266876056, -72.28079399547744], zoom: 18 },
                      { name: "DMS-Vail", coords: [43.70807832674773, -72.28454390301636], zoom: 18 },
                      { name: "Webster Ave SB", coords: [43.70581995300266, -72.28965000301638], zoom: 18 },
                      { name: "Tuck Circle", coords: [43.70516691364978, -72.29451861836019], zoom: 18 },
                      { name: "Blunt Alumni Center", coords: [43.704861558607554, -72.28996148767268], zoom: 18 },
                      { name: "Hanover Inn", coords: [43.70252974836068, -72.2881792016961], zoom: 18 }
                    ];
                    
                    const nextToggle = (connectorToggle + 1) % connectorLocations.length;
                    setConnectorToggle(nextToggle);
                    
                    if (map) {
                      const location = connectorLocations[nextToggle];
                      map.setView(location.coords, location.zoom);
                    }
                  }}
                  className="flex-1 px-2 py-1.5 text-xs rounded-lg text-left transition-all duration-300 border-2 bg-gradient-to-br from-green-50 to-emerald-50 text-green-800 hover:from-green-100 hover:to-emerald-100 hover:shadow-lg border-green-200 hover:border-green-300 transform hover:scale-105"
                >
                  <div className="flex items-center gap-1 mb-1">
                    <div className="text-sm">🚌</div>
                    <div className="font-bold text-xs">Dartmouth Connector</div>
                  </div>
                  <div className="text-xs font-medium text-green-700 bg-green-100 px-1.5 py-0.5 rounded-full inline-block">
                    {connectorToggle === 0 ? "DHMC East" : 
                     connectorToggle === 1 ? "Hanover Coop" : 
                     connectorToggle === 2 ? "DMS-Vail" : 
                     connectorToggle === 3 ? "Webster Ave" : 
                     connectorToggle === 4 ? "Tuck Circle" : 
                     connectorToggle === 5 ? "Blunt Alumni" : "Hanover Inn"}
                  </div>
                </button>
              </div>
            </Card>
          </div>
        )}

        {/* Data Science Legend - FUNCTIONAL AND INFORMATIVE */}
        <div className="mb-4">
          <div className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-gray-800">
                {visualizationMode === "price-bars" && "📊 Rent Analysis + Spatial Distribution"}
                {visualizationMode === "location-popup" && "📍 Proximity Analysis"}
                {visualizationMode === "neighborhood-clustering" && "🏘️ Neighborhood Analysis"}
              </div>
              <div className="flex items-center gap-6">
                {visualizationMode === "price-bars" && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#4ade80] rounded-sm"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Close to Campus</div>
                        <div className="text-gray-500">&lt; 0.5 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#fbbf24] rounded-sm"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Medium Distance</div>
                        <div className="text-gray-500">0.5-1.0 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#ef4444] rounded-sm"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Far from Campus</div>
                        <div className="text-gray-500">&gt; 1.0 miles</div>
                      </div>
                    </div>
                  </>
                )}
                {visualizationMode === "location-popup" && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ backgroundColor: '#3b82f6' }}></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Very Close</div>
                        <div className="text-gray-500">0.5 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ backgroundColor: '#eab308' }}></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Close</div>
                        <div className="text-gray-500">1.0 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ backgroundColor: '#ef4444' }}></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Moderate</div>
                        <div className="text-gray-500">1.5 miles</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4" style={{ backgroundColor: '#a855f7' }}></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Far</div>
                        <div className="text-gray-500">2.0 miles</div>
                      </div>
                    </div>
                  </>
                )}
                {visualizationMode === "neighborhood-clustering" && (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#3b82f6]"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Lebanon</div>
                        <div className="text-gray-500">Suburban</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#8b5cf6]"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Norwich</div>
                        <div className="text-gray-500">Urban</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#f59e0b]"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">On Campus</div>
                        <div className="text-gray-500">University</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#10b981]"></div>
                      <div className="text-xs">
                        <div className="font-medium text-gray-800">Summit</div>
                        <div className="text-gray-500">Residential</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Data Insights */}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-600">
                {visualizationMode === "price-bars" && "💡 Insight: Bar chart shows rent distribution (Y-axis: rent amount, X-axis: apartments sorted by rent). Map shows spatial distribution (colors = distance from campus). Two complementary views - rent analysis + location analysis!"}
                {visualizationMode === "location-popup" && "💡 Insight: Concentric rings show walking distance from Dartmouth campus - inner rings are more convenient"}
                {visualizationMode === "neighborhood-clustering" && "💡 Insight: Click clusters to see neighborhood statistics and average rent data"}
              </div>
            </div>
          </div>
        </div>

        {/* Separate Graph and Map Sections */}
        <div className="space-y-8">
          {/* Bar Chart Section - Compact and Fixed Height */}
          {visualizationMode === "price-bars" && (
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Rent Distribution Analysis</h3>

              {/* ---- COMPACT CHART WITH FIXED HEIGHT ---- */}
              <div className="max-w-full mx-auto px-4">
                {/* Chart area with fixed height */}
                <div className="flex" style={{ marginRight: '220px' }}>
                  <div className="flex gap-4 items-center">
                  {/* Y-axis labels - CORRECT ORDER: $2000 at top, $0 at bottom */}
                  <div className="w-12 flex-shrink-0 flex flex-col justify-between pr-2" style={{ height: '300px' }}>
                    <div className="text-xs text-right font-mono font-semibold text-gray-800">$2000</div>
                    <div className="text-xs text-right font-mono font-semibold text-gray-800">$1500</div>
                    <div className="text-xs text-right font-mono font-semibold text-gray-800">$1000</div>
                    <div className="text-xs text-right font-mono font-semibold text-gray-800">$500</div>
                    <div className="text-xs text-right font-mono font-mono font-semibold text-gray-800">$0</div>
                  </div>

                  {/* Plot area with fixed height */}
                  <div className="relative bg-white" style={{ height: '300px', width: '500px' }}>
                    {/* Grid lines */}
                    <div className="absolute left-0 right-0 inset-y-0 flex flex-col justify-between pointer-events-none">
                      <div className="w-full border-t border-gray-300"></div>
                      <div className="w-full border-t border-gray-300"></div>
                      <div className="w-full border-t border-gray-300"></div>
                      <div className="w-full border-t border-gray-300"></div>
                      <div className="w-full border-t border-gray-300"></div>
                    </div>

                    {/* Y axis */}
                    <div className="absolute left-0 inset-y-0 w-[2px] bg-gray-800"></div>

                    {/* X axis at bottom */}
                    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-gray-800"></div>

                    {/* Combined Bars and Labels Container */}
                    <div className="absolute left-0 right-0 top-0 h-full flex items-start justify-center px-4">
                      <div className="flex items-start gap-6">
                        {apartments
                          .sort((a, b) => a.rent - b.rent)
                          .map((apt) => {
                            const maxRent = 2000;
                            const barHeightPx = (apt.rent / maxRent) * 300;
                            const color = getRentColor(apt.rent);
                            const topPosition = 300 - barHeightPx;
                    return (
                              <div
                                key={`bar-wrapper-${apt.id}`}
                                className="flex flex-col items-center"
                                style={{
                                  width: '60px',
                                  flex: '0 0 60px'
                                }}
                              >
                                {/* Bar */}
                                <div
                                  className="w-full rounded-t-sm transition-all hover:opacity-80 cursor-pointer"
                                  style={{
                                    height: `${barHeightPx}px`,
                                    backgroundColor: color,
                                    marginTop: `${topPosition}px`
                                  }}
                                  onClick={() => setSelectedApartment(apt.id)}
                                  title={`${apt.name}: $${apt.rent}`}
                                />
                                
                                {/* Label - in same container as bar */}
                                <div className="text-xs font-semibold text-gray-700 text-center leading-tight mt-2">
                                  {apt.name.split(' ').length > 2 ? (
                                    <>
                                      {apt.name.split(' ')[0]} {apt.name.split(' ')[1]}
                                      <br />
                                      {apt.name.split(' ').slice(2).join(' ')}
                                    </>
                                  ) : apt.name.split(' ').length > 1 ? (
                                    <>
                                      {apt.name.split(' ')[0]}
                                      <br />
                                      {apt.name.split(' ')[1]}
                                    </>
                                  ) : (
                                    apt.name
                                  )}
                                </div>
                              </div>
                    );
                  })}
                      </div>
                    </div>
                  </div>
                  </div>
                </div>

              </div>

              {/* Legend */}
              <div className="flex justify-center gap-8 text-sm" style={{ marginTop: '22px' }}>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="font-medium">Low (&lt; $1,000)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="font-medium">Medium ($1,000-$1,400)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="font-medium">High (&gt; $1,400)</span>
                </div>
              </div>
            </Card>
          )}

          {/* Map Section - Full Width, No Sticky */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              {visualizationMode === "heatmap" ? (
                <div className="relative bg-[#EAEAEA] rounded-lg overflow-hidden" style={{ height: "600px" }}>
                  <RealGeoreferencedHeatmap />
                </div>
              ) : (
                <div className="relative bg-[#EAEAEA] rounded-lg overflow-hidden" style={{ height: "600px" }}>
                  {/* Leaflet Map Container - Always visible as background */}
                  <div 
                    ref={mapRef}
                    className="absolute inset-0 w-full h-full"
                    style={{ minHeight: '600px' }}
                  ></div>
                  
                  {/* Overlay content for different visualization modes */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    {/* Distance scale indicator - Only show for location-popup mode */}
                    {visualizationMode === "location-popup" && (
                      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-50">
                        <div className="text-sm font-bold text-gray-800 mb-3">Distance Scale</div>
                        <div className="flex justify-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4" style={{ backgroundColor: '#3b82f6' }}></div>
                            <span className="font-medium">Very Close (0.5 miles)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4" style={{ backgroundColor: '#eab308' }}></div>
                            <span className="font-medium">Close (1.0 miles)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4" style={{ backgroundColor: '#ef4444' }}></div>
                            <span className="font-medium">Moderate (1.5 miles)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4" style={{ backgroundColor: '#a855f7' }}></div>
                            <span className="font-medium">Far (2.0 miles)</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Heat Map Visualization */}
                    {visualizationMode === "neighborhood-clustering" && showHeatmap && (
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-yellow-500 to-green-500 opacity-30"></div>
                    )}
                  </div>

                  {/* Enhanced FilterPanel with new controls */}
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

                  {/* Enhanced Map Controls */}
                  <div className="absolute top-4 right-4 space-y-2">
                    {/* Heatmap Toggle */}
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-sm font-medium mb-2">Heatmap</div>
                      <label className="flex items-center gap-2 text-xs">
                        <input
                          type="checkbox"
                          checked={showHeatmap}
                          onChange={(e) => setShowHeatmap(e.target.checked)}
                          className="rounded"
                        />
                        Show heatmap
                      </label>
                    </div>

                    {/* Heatmap Type Selector */}
                    {showHeatmap && (
                      <div className="bg-white p-3 rounded-lg shadow-md">
                        <div className="text-sm font-medium mb-2">Heatmap Type</div>
                        <div className="flex gap-1">
                          {["price", "distance", "neighborhood"].map((type) => (
                            <button
                              key={type}
                              onClick={() => setHeatmapType(type as any)}
                              className={`px-2 py-1 text-xs rounded ${
                                heatmapType === type
                                  ? 'bg-[#A4D7A7] text-white'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}
                            </button>
                          ))}
                    </div>
                  </div>
                )}

                    {/* Utility Controls */}
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-sm font-medium mb-2">Utilities</div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-xs">
                          <input
                            type="checkbox"
                            checked={showUtilities}
                            onChange={(e) => setShowUtilities(e.target.checked)}
                            className="rounded"
                          />
                          Show utilities
                        </label>
                        {showUtilities && (
                          <select
                            value={utilityType}
                            onChange={(e) => setUtilityType(e.target.value as any)}
                            className="w-full text-xs border rounded px-2 py-1"
                          >
                            <option value="all">All utilities</option>
                            <option value="supermarket">Supermarkets</option>
                            <option value="gym">Gyms</option>
                            <option value="school">Schools</option>
                          </select>
                        )}
                    </div>
                    </div>

                    {/* Neighborhood Filter */}
                    <div className="bg-white p-3 rounded-lg shadow-md">
                      <div className="text-sm font-medium mb-2">Neighborhood</div>
                      <select
                        value={selectedNeighborhood || ""}
                        onChange={(e) => setSelectedNeighborhood(e.target.value || null)}
                        className="w-full text-xs border rounded px-2 py-1"
                      >
                        <option value="">All neighborhoods</option>
                        {neighborhoods.map((neighborhood) => (
                          <option key={neighborhood.name} value={neighborhood.name}>
                            {neighborhood.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tooltip */}
                  {tooltip && (
                    <div
                      className="absolute"
                      role="tooltip"
                      aria-hidden={tooltip ? "false" : "true"}
                      style={{ left: tooltip.x, top: tooltip.y, transform: "translate(-50%, -100%)", pointerEvents: 'none' }}
                    >
                      <div className="bg-white text-xs p-2 rounded shadow">
                        <div dangerouslySetInnerHTML={{ __html: tooltip.html }} />
                </div>
              </div>
                  )}
              </div>
                )}
            </Card>
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-1">
              <Card className="p-6">
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
                        <span className="text-gray-600">Neighborhood</span>
                        <span className="flex items-center gap-1">
                          <div
                            className={`w-3 h-3 rounded-full`}
                            style={{ backgroundColor: getNeighborhoodColor(selected.neighborhood) }}
                          ></div>
                          {selected.neighborhood}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Atmosphere</span>
                        <span className="capitalize">{selected.atmosphere}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Students in area</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {selected.studentCount}
                        </span>
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

                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-600 mb-2">Nearby Schools</div>
                      <div className="flex flex-wrap gap-2">
                        {selected.nearbySchools.map((school, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            <School className="w-3 h-3" />
                            {school}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="text-sm text-gray-600 mb-2">Nearby Utilities</div>
                      <div className="space-y-2">
                        {selected.utilities.supermarkets.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <ShoppingCart className="w-3 h-3" />
                              Supermarkets
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selected.utilities.supermarkets.map((market, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {market}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {selected.utilities.gyms.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                              <Dumbbell className="w-3 h-3" />
                              Gyms
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {selected.utilities.gyms.map((gym, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {gym}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
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
    </div>
  );
}