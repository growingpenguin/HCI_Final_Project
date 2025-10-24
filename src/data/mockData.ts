export interface Apartment {
  id: number;
  name: string;
  rent: number; // USD per month
  distance: number; // miles from campus
  bedrooms: number;
  bathrooms: number;
  privateBathroom: boolean;
  sqft: number;
  amenities: string[];
  coordinates: { lat: number; lng: number };
  image: string;
}

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Pine Park Apartments",
    rent: 1200,
    distance: 0.5,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 850,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.7044, lng: -72.2887 },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
  },
  {
    id: 2,
    name: "Dartmouth Commons",
    rent: 1500,
    distance: 0.3,
    bedrooms: 3,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 1100,
    amenities: ["Parking", "Laundry", "WiFi", "Gym"],
    coordinates: { lat: 43.7034, lng: -72.2877 },
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"
  },
  {
    id: 3,
    name: "Green Valley Housing",
    rent: 950,
    distance: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 600,
    amenities: ["Parking", "WiFi"],
    coordinates: { lat: 43.7014, lng: -72.2907 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
  },
  {
    id: 4,
    name: "Riverside Residences",
    rent: 1800,
    distance: 0.4,
    bedrooms: 4,
    bathrooms: 3,
    privateBathroom: true,
    sqft: 1500,
    amenities: ["Parking", "Laundry", "WiFi", "Gym", "Pool"],
    coordinates: { lat: 43.7054, lng: -72.2867 },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800"
  },
  {
    id: 5,
    name: "Campus Edge Studios",
    rent: 850,
    distance: 0.6,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 450,
    amenities: ["Laundry", "WiFi"],
    coordinates: { lat: 43.7024, lng: -72.2897 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800"
  },
  {
    id: 6,
    name: "Hanover Heights",
    rent: 1350,
    distance: 0.8,
    bedrooms: 2,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 950,
    amenities: ["Parking", "Laundry", "WiFi", "Gym"],
    coordinates: { lat: 43.7004, lng: -72.2917 },
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800"
  },
  {
    id: 7,
    name: "College View Apartments",
    rent: 1100,
    distance: 0.7,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 800,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.7044, lng: -72.2927 },
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800"
  },
  {
    id: 8,
    name: "The Maples",
    rent: 1650,
    distance: 0.5,
    bedrooms: 3,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 1250,
    amenities: ["Parking", "Laundry", "WiFi", "Gym", "Pet-Friendly"],
    coordinates: { lat: 43.7064, lng: -72.2857 },
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800"
  }
];

export const trendData = [
  { month: "Jan", avgRent: 1150 },
  { month: "Feb", avgRent: 1180 },
  { month: "Mar", avgRent: 1200 },
  { month: "Apr", avgRent: 1220 },
  { month: "May", avgRent: 1280 },
  { month: "Jun", avgRent: 1350 },
  { month: "Jul", avgRent: 1400 },
  { month: "Aug", avgRent: 1450 },
  { month: "Sep", avgRent: 1380 },
  { month: "Oct", avgRent: 1320 },
  { month: "Nov", avgRent: 1280 },
  { month: "Dec", avgRent: 1250 }
];

export const USD_TO_KRW = 1350;
export const SQFT_TO_SQM = 0.092903;
