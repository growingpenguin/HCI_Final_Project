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
  // New enhanced properties
  neighborhood: string;
  studentCount: number; // estimated students in area
  atmosphere: string; // social, quiet, mixed
  nearbySchools: string[];
  utilities: {
    supermarkets: string[];
    gyms: string[];
    restaurants: string[];
    publicTransport: string[];
  };
}

export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Summit on Juniper",
    rent: 1200,
    distance: 0.5,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 850,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.7044, lng: -72.2887 },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    neighborhood: "Lebanon",
    studentCount: 45,
    atmosphere: "social",
    nearbySchools: ["Lebanon High School", "Dartmouth College"],
    utilities: {
      supermarkets: ["Hannaford", "Price Chopper"],
      gyms: ["Planet Fitness", "Lebanon Recreation Center"],
      restaurants: ["Murphy's", "Salt hill Pub", "Three Tomatoes"],
      publicTransport: ["Lebanon Transit", "Dartmouth Coach"]
    }
  },
  {
    id: 2,
    name: "Sachem Village",
    rent: 1500,
    distance: 0.3,
    bedrooms: 3,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 1100,
    amenities: ["Parking", "Laundry", "WiFi", "Gym"],
    coordinates: { lat: 43.7034, lng: -72.2877 },
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    neighborhood: "On Campus",
    studentCount: 120,
    atmosphere: "social",
    nearbySchools: ["Dartmouth College"],
    utilities: {
      supermarkets: ["Dartmouth Co-op", "Hannaford"],
      gyms: ["Dartmouth Gym", "Alumni Gym"],
      restaurants: ["Collis Center", "Hop", "Novack Cafe"],
      publicTransport: ["Dartmouth Shuttle", "Advance Transit"]
    }
  },
  {
    id: 3,
    name: "Pine Park Apartments",
    rent: 950,
    distance: 1.2,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 600,
    amenities: ["Parking", "WiFi"],
    coordinates: { lat: 43.7014, lng: -72.2907 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    neighborhood: "Norwich",
    studentCount: 25,
    atmosphere: "quiet",
    nearbySchools: ["Norwich Elementary", "Dartmouth College"],
    utilities: {
      supermarkets: ["Shaws", "Price Chopper"],
      gyms: ["Norwich Recreation Center"],
      restaurants: ["Norwich Inn", "King Arthur Flour"],
      publicTransport: ["Advance Transit", "Dartmouth Coach"]
    }
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
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    neighborhood: "Summit on Juniper",
    studentCount: 80,
    atmosphere: "mixed",
    nearbySchools: ["Dartmouth College", "Lebanon High School"],
    utilities: {
      supermarkets: ["Hannaford", "Whole Foods"],
      gyms: ["Planet Fitness", "Dartmouth Gym"],
      restaurants: ["Salt hill Pub", "Murphy's", "Three Tomatoes"],
      publicTransport: ["Lebanon Transit", "Dartmouth Shuttle"]
    }
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
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    neighborhood: "Lebanon",
    studentCount: 60,
    atmosphere: "social",
    nearbySchools: ["Dartmouth College", "Lebanon High School"],
    utilities: {
      supermarkets: ["Hannaford", "Price Chopper"],
      gyms: ["Planet Fitness", "Lebanon Recreation Center"],
      restaurants: ["Murphy's", "Salt hill Pub"],
      publicTransport: ["Lebanon Transit", "Dartmouth Coach"]
    }
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
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
    neighborhood: "Norwich",
    studentCount: 35,
    atmosphere: "quiet",
    nearbySchools: ["Norwich Elementary", "Dartmouth College"],
    utilities: {
      supermarkets: ["Shaws", "Price Chopper"],
      gyms: ["Norwich Recreation Center", "Dartmouth Gym"],
      restaurants: ["Norwich Inn", "King Arthur Flour"],
      publicTransport: ["Advance Transit", "Dartmouth Coach"]
    }
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
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    neighborhood: "Lebanon",
    studentCount: 50,
    atmosphere: "mixed",
    nearbySchools: ["Dartmouth College", "Lebanon High School"],
    utilities: {
      supermarkets: ["Hannaford", "Price Chopper"],
      gyms: ["Planet Fitness", "Lebanon Recreation Center"],
      restaurants: ["Murphy's", "Salt hill Pub", "Three Tomatoes"],
      publicTransport: ["Lebanon Transit", "Dartmouth Coach"]
    }
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
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    neighborhood: "Summit on Juniper",
    studentCount: 70,
    atmosphere: "social",
    nearbySchools: ["Dartmouth College", "Lebanon High School"],
    utilities: {
      supermarkets: ["Hannaford", "Whole Foods"],
      gyms: ["Planet Fitness", "Dartmouth Gym"],
      restaurants: ["Salt hill Pub", "Murphy's", "Three Tomatoes"],
      publicTransport: ["Lebanon Transit", "Dartmouth Shuttle"]
    }
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

// Enhanced data for neighborhoods and utilities
export const neighborhoods = [
  {
    name: "Lebanon",
    description: "Vibrant area with good mix of students and families",
    averageRent: 1200,
    studentDensity: "high",
    atmosphere: "social"
  },
  {
    name: "Norwich", 
    description: "Quiet residential area with scenic views",
    averageRent: 1100,
    studentDensity: "medium",
    atmosphere: "quiet"
  },
  {
    name: "On Campus",
    description: "Dartmouth College housing and nearby properties",
    averageRent: 1500,
    studentDensity: "very high",
    atmosphere: "social"
  },
  {
    name: "Summit on Juniper",
    description: "Upscale area with modern amenities",
    averageRent: 1600,
    studentDensity: "medium",
    atmosphere: "mixed"
  }
];

export const utilityLocations = [
  // Supermarkets
  { name: "Hannaford", type: "supermarket", coordinates: { lat: 43.7030, lng: -72.2880 } },
  { name: "Price Chopper", type: "supermarket", coordinates: { lat: 43.7010, lng: -72.2900 } },
  { name: "Whole Foods", type: "supermarket", coordinates: { lat: 43.7050, lng: -72.2860 } },
  { name: "Shaws", type: "supermarket", coordinates: { lat: 43.7000, lng: -72.2920 } },
  { name: "Dartmouth Co-op", type: "supermarket", coordinates: { lat: 43.7035, lng: -72.2875 } },
  
  // Gyms
  { name: "Planet Fitness", type: "gym", coordinates: { lat: 43.7040, lng: -72.2890 } },
  { name: "Dartmouth Gym", type: "gym", coordinates: { lat: 43.7035, lng: -72.2875 } },
  { name: "Alumni Gym", type: "gym", coordinates: { lat: 43.7030, lng: -72.2870 } },
  { name: "Lebanon Recreation Center", type: "gym", coordinates: { lat: 43.7025, lng: -72.2885 } },
  { name: "Norwich Recreation Center", type: "gym", coordinates: { lat: 43.7005, lng: -72.2915 } },
  
  // Schools
  { name: "Dartmouth College", type: "school", coordinates: { lat: 43.7035, lng: -72.2875 } },
  { name: "Lebanon High School", type: "school", coordinates: { lat: 43.7020, lng: -72.2890 } },
  { name: "Norwich Elementary", type: "school", coordinates: { lat: 43.7005, lng: -72.2910 } }
];
