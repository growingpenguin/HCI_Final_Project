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
  },
  // Hanover apartments (closest, more expensive)
  {
    id: 9,
    name: "Hanover Square Apartments",
    rent: 1850,
    distance: 0.2,
    bedrooms: 2,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 950,
    amenities: ["Parking", "Laundry", "WiFi", "Gym"],
    coordinates: { lat: 43.7020, lng: -72.2870 },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
    neighborhood: "Hanover",
    studentCount: 95,
    atmosphere: "social",
    nearbySchools: ["Dartmouth College", "Hanover High School"],
    utilities: {
      supermarkets: ["Hanover Co-op", "Whole Foods"],
      gyms: ["Dartmouth Gym", "Alumni Gym"],
      restaurants: ["Lou's Restaurant", "Pine Restaurant"],
      publicTransport: ["Advance Transit", "Dartmouth Shuttle"]
    }
  },
  {
    id: 10,
    name: "Park Street Lofts",
    rent: 1950,
    distance: 0.3,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 700,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.7010, lng: -72.2880 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    neighborhood: "Hanover",
    studentCount: 80,
    atmosphere: "quiet",
    nearbySchools: ["Dartmouth College"],
    utilities: {
      supermarkets: ["Hanover Co-op"],
      gyms: ["Dartmouth Gym"],
      restaurants: ["Lou's Restaurant", "Canoe Club"],
      publicTransport: ["Advance Transit", "Dartmouth Coach"]
    }
  },
  {
    id: 11,
    name: "Main Street Residences",
    rent: 2100,
    distance: 0.1,
    bedrooms: 3,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 1300,
    amenities: ["Parking", "Laundry", "WiFi", "Gym", "Concierge"],
    coordinates: { lat: 43.7030, lng: -72.2890 },
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
    neighborhood: "Hanover",
    studentCount: 110,
    atmosphere: "social",
    nearbySchools: ["Dartmouth College", "Hanover High School"],
    utilities: {
      supermarkets: ["Hanover Co-op", "Whole Foods"],
      gyms: ["Dartmouth Gym", "Alumni Gym"],
      restaurants: ["Pine Restaurant", "Molly's"],
      publicTransport: ["Advance Transit", "Dartmouth Shuttle"]
    }
  },
  // Norwich apartments (closest, often more expensive)
  {
    id: 12,
    name: "Norwich Green Apartments",
    rent: 1750,
    distance: 0.4,
    bedrooms: 2,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 1000,
    amenities: ["Parking", "Laundry", "WiFi", "Pet-Friendly"],
    coordinates: { lat: 43.7000, lng: -72.2930 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    neighborhood: "Norwich",
    studentCount: 40,
    atmosphere: "quiet",
    nearbySchools: ["Norwich Elementary", "Dartmouth College"],
    utilities: {
      supermarkets: ["Dan & Whit's", "Norwich Farmers Market"],
      gyms: ["Norwich Recreation Center"],
      restaurants: ["Norwich Inn", "Jasper Murdock's Alehouse"],
      publicTransport: ["Advance Transit"]
    }
  },
  {
    id: 13,
    name: "River Valley Commons",
    rent: 1600,
    distance: 0.6,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 850,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.6990, lng: -72.2940 },
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    neighborhood: "Norwich",
    studentCount: 30,
    atmosphere: "quiet",
    nearbySchools: ["Norwich Elementary", "Marion Cross School"],
    utilities: {
      supermarkets: ["Dan & Whit's", "Shaws"],
      gyms: ["Norwich Recreation Center"],
      restaurants: ["King Arthur Flour", "Norwich Inn"],
      publicTransport: ["Advance Transit", "Dartmouth Coach"]
    }
  },
  {
    id: 14,
    name: "Beaver Meadow Apartments",
    rent: 1400,
    distance: 0.8,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 650,
    amenities: ["Parking", "WiFi"],
    coordinates: { lat: 43.6980, lng: -72.2950 },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    neighborhood: "Norwich",
    studentCount: 20,
    atmosphere: "quiet",
    nearbySchools: ["Norwich Elementary", "Marion Cross School"],
    utilities: {
      supermarkets: ["Dan & Whit's"],
      gyms: ["Norwich Recreation Center"],
      restaurants: ["Norwich Inn"],
      publicTransport: ["Advance Transit"]
    }
  },
  // Lebanon apartments
  {
    id: 15,
    name: "Lebanon Heights",
    rent: 1250,
    distance: 1.5,
    bedrooms: 2,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 900,
    amenities: ["Parking", "Laundry", "WiFi", "Gym"],
    coordinates: { lat: 43.6420, lng: -72.2517 },
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    neighborhood: "Lebanon",
    studentCount: 35,
    atmosphere: "mixed",
    nearbySchools: ["Lebanon High School"],
    utilities: {
      supermarkets: ["Price Chopper", "Hannaford"],
      gyms: ["Planet Fitness", "Lebanon Recreation Center"],
      restaurants: ["Salt hill Pub", "Thai Orchid"],
      publicTransport: ["Lebanon Transit", "Dartmouth Coach"]
    }
  },
  {
    id: 16,
    name: "Centerra Park Apartments",
    rent: 1150,
    distance: 2.0,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 800,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.6380, lng: -72.2580 },
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
    neighborhood: "Lebanon",
    studentCount: 25,
    atmosphere: "quiet",
    nearbySchools: ["Lebanon High School", "Dartmouth-Hitchcock"],
    utilities: {
      supermarkets: ["Hannaford", "Price Chopper"],
      gyms: ["Planet Fitness"],
      restaurants: ["Seven Barrel Brewery", "Airport Diner"],
      publicTransport: ["Lebanon Transit"]
    }
  },
  {
    id: 17,
    name: "Miracle Mile Studios",
    rent: 950,
    distance: 2.3,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 550,
    amenities: ["Parking", "Laundry"],
    coordinates: { lat: 43.6350, lng: -72.2620 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    neighborhood: "Lebanon",
    studentCount: 15,
    atmosphere: "quiet",
    nearbySchools: ["Lebanon High School"],
    utilities: {
      supermarkets: ["Price Chopper", "Walmart"],
      gyms: ["Planet Fitness"],
      restaurants: ["Applebee's", "99 Restaurant"],
      publicTransport: ["Lebanon Transit"]
    }
  },
  // West Lebanon apartments
  {
    id: 18,
    name: "Westgate Apartments",
    rent: 1100,
    distance: 3.0,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 850,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.6450, lng: -72.3200 },
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    neighborhood: "West Lebanon",
    studentCount: 20,
    atmosphere: "quiet",
    nearbySchools: ["Lebanon High School"],
    utilities: {
      supermarkets: ["Walmart", "Price Chopper"],
      gyms: ["Planet Fitness"],
      restaurants: ["Weathervane Restaurant", "Panda Garden"],
      publicTransport: ["Lebanon Transit", "Dartmouth Coach"]
    }
  },
  {
    id: 19,
    name: "Powerhouse Mall Lofts",
    rent: 1050,
    distance: 3.2,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 600,
    amenities: ["Parking", "WiFi"],
    coordinates: { lat: 43.6430, lng: -72.3250 },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    neighborhood: "West Lebanon",
    studentCount: 12,
    atmosphere: "quiet",
    nearbySchools: ["Lebanon High School"],
    utilities: {
      supermarkets: ["Walmart", "Shaws"],
      gyms: ["Planet Fitness"],
      restaurants: ["Taco Bell", "Olive Garden"],
      publicTransport: ["Lebanon Transit"]
    }
  },
  // Wilder apartments
  {
    id: 20,
    name: "Wilder Village Apartments",
    rent: 900,
    distance: 4.5,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: false,
    sqft: 750,
    amenities: ["Parking", "Laundry"],
    coordinates: { lat: 43.6740, lng: -72.3100 },
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
    neighborhood: "Wilder",
    studentCount: 8,
    atmosphere: "quiet",
    nearbySchools: ["Hartford High School"],
    utilities: {
      supermarkets: ["Price Chopper"],
      gyms: ["Hartford Recreation Center"],
      restaurants: ["Wilder Snack Bar"],
      publicTransport: ["Advance Transit"]
    }
  },
  {
    id: 21,
    name: "Dartmouth Terrace",
    rent: 850,
    distance: 4.8,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 500,
    amenities: ["Parking"],
    coordinates: { lat: 43.6720, lng: -72.3120 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    neighborhood: "Wilder",
    studentCount: 5,
    atmosphere: "quiet",
    nearbySchools: ["Hartford High School"],
    utilities: {
      supermarkets: ["Price Chopper"],
      gyms: ["Hartford Recreation Center"],
      restaurants: ["Wilder Snack Bar"],
      publicTransport: ["Advance Transit"]
    }
  },
  // White River Junction apartments
  {
    id: 22,
    name: "White River Junction Commons",
    rent: 950,
    distance: 5.0,
    bedrooms: 2,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 800,
    amenities: ["Parking", "Laundry", "WiFi"],
    coordinates: { lat: 43.6490, lng: -72.3190 },
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=800",
    neighborhood: "White River Junction",
    studentCount: 18,
    atmosphere: "mixed",
    nearbySchools: ["Hartford High School"],
    utilities: {
      supermarkets: ["Price Chopper", "Co-op Food Stores"],
      gyms: ["Upper Valley Aquatic Center"],
      restaurants: ["Elixir Restaurant", "Tip Top Cafe"],
      publicTransport: ["Advance Transit", "Amtrak"]
    }
  },
  {
    id: 23,
    name: "Railroad Row Studios",
    rent: 800,
    distance: 5.5,
    bedrooms: 1,
    bathrooms: 1,
    privateBathroom: true,
    sqft: 450,
    amenities: ["Parking", "WiFi"],
    coordinates: { lat: 43.6500, lng: -72.3210 },
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
    neighborhood: "White River Junction",
    studentCount: 10,
    atmosphere: "quiet",
    nearbySchools: ["Hartford High School"],
    utilities: {
      supermarkets: ["Co-op Food Stores"],
      gyms: ["Upper Valley Aquatic Center"],
      restaurants: ["Tip Top Cafe", "Big Fatty's BBQ"],
      publicTransport: ["Advance Transit", "Amtrak"]
    }
  },
  {
    id: 24,
    name: "Junction Flats",
    rent: 1000,
    distance: 5.2,
    bedrooms: 2,
    bathrooms: 2,
    privateBathroom: true,
    sqft: 900,
    amenities: ["Parking", "Laundry", "WiFi", "Pet-Friendly"],
    coordinates: { lat: 43.6480, lng: -72.3170 },
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
    neighborhood: "White River Junction",
    studentCount: 22,
    atmosphere: "social",
    nearbySchools: ["Hartford High School"],
    utilities: {
      supermarkets: ["Price Chopper", "Co-op Food Stores"],
      gyms: ["Upper Valley Aquatic Center"],
      restaurants: ["Elixir Restaurant", "Big Fatty's BBQ"],
      publicTransport: ["Advance Transit", "Amtrak"]
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
    name: "Hanover",
    description: "Premium location closest to Dartmouth campus",
    averageRent: 1967,
    studentDensity: "very high",
    atmosphere: "social"
  },
  {
    name: "Norwich", 
    description: "Quiet residential area with scenic views across the river",
    averageRent: 1583,
    studentDensity: "medium",
    atmosphere: "quiet"
  },
  {
    name: "Lebanon",
    description: "Vibrant area with good mix of students and families",
    averageRent: 1117,
    studentDensity: "high",
    atmosphere: "social"
  },
  {
    name: "West Lebanon",
    description: "Affordable suburban area with shopping centers",
    averageRent: 1075,
    studentDensity: "low",
    atmosphere: "quiet"
  },
  {
    name: "Wilder",
    description: "Quiet residential village along the Connecticut River",
    averageRent: 875,
    studentDensity: "low",
    atmosphere: "quiet"
  },
  {
    name: "White River Junction",
    description: "Historic rail town with affordable housing options",
    averageRent: 917,
    studentDensity: "low",
    atmosphere: "mixed"
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
