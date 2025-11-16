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
    "id": 1,
    "name": "Apartment 1",
    "rent": 1500,
    "distance": 2.05,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712461,
      "lng": -72.32809
    },
    "image": "https://images.unsplash.com/photo-1502672260267?w=800",
    "neighborhood": "Hanover",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 2,
    "name": 5,
    "rent": 1500,
    "distance": 2.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.733121,
      "lng": -72.29751
    },
    "image": "https://images.unsplash.com/photo-1502672260268?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "mixed",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 3,
    "name": "1 Austin Ave",
    "rent": 1500,
    "distance": 0.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689651,
      "lng": -72.282347
    },
    "image": "https://images.unsplash.com/photo-1502672260269?w=800",
    "neighborhood": "Hanover",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 4,
    "name": "1 N. Park St - 1N",
    "rent": 1500,
    "distance": 0.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701159,
      "lng": -72.282801
    },
    "image": "https://images.unsplash.com/photo-1502672260270?w=800",
    "neighborhood": "Hanover",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 5,
    "name": "1 N. Park St - 1S",
    "rent": 1500,
    "distance": 1.14,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.696098,
      "lng": -72.26839
    },
    "image": "https://images.unsplash.com/photo-1502672260271?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 6,
    "name": "1 N. Park St - 2N",
    "rent": 1500,
    "distance": 2.47,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.736345,
      "lng": -72.304436
    },
    "image": "https://images.unsplash.com/photo-1502672260272?w=800",
    "neighborhood": "Hanover",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 7,
    "name": "1 N. Park St -2S",
    "rent": 1500,
    "distance": 3.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65239,
      "lng": -72.308406
    },
    "image": "https://images.unsplash.com/photo-1502672260273?w=800",
    "neighborhood": "Hanover",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 8,
    "name": "1 N. Park St Apt 5",
    "rent": 1500,
    "distance": 2.67,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.677474,
      "lng": -72.248512
    },
    "image": "https://images.unsplash.com/photo-1502672260274?w=800",
    "neighborhood": "Hanover",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 9,
    "name": "1 S. Park St-Apt A",
    "rent": 1500,
    "distance": 2.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729008,
      "lng": -72.245416
    },
    "image": "https://images.unsplash.com/photo-1502672260275?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 10,
    "name": "1 S. Park St-Apt B",
    "rent": 1500,
    "distance": 3.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655739,
      "lng": -72.283971
    },
    "image": "https://images.unsplash.com/photo-1502672260276?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 11,
    "name": "1 S. Park St-Apt C",
    "rent": 1500,
    "distance": 2.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671899,
      "lng": -72.289986
    },
    "image": "https://images.unsplash.com/photo-1502672260277?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 12,
    "name": "1 S. Park St-Apt D",
    "rent": 1500,
    "distance": 1.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70285,
      "lng": -72.265986
    },
    "image": "https://images.unsplash.com/photo-1502672260278?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 13,
    "name": "1 S. Park St -Apt E",
    "rent": 1500,
    "distance": 2.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680216,
      "lng": -72.240506
    },
    "image": "https://images.unsplash.com/photo-1502672260279?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 14,
    "name": "1 Sanborn Rd Apt 1",
    "rent": 1500,
    "distance": 3.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749033,
      "lng": -72.289472
    },
    "image": "https://images.unsplash.com/photo-1502672260280?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 15,
    "name": "1 Sanborn Rd Apt 2",
    "rent": 1500,
    "distance": 0.48,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699109,
      "lng": -72.281046
    },
    "image": "https://images.unsplash.com/photo-1502672260281?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 16,
    "name": "1 Sanborn Rd Apt 3",
    "rent": 1500,
    "distance": 3.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662724,
      "lng": -72.327249
    },
    "image": "https://images.unsplash.com/photo-1502672260282?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 17,
    "name": "1 Sanborn Rd Apt 4",
    "rent": 1500,
    "distance": 3.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671405,
      "lng": -72.243935
    },
    "image": "https://images.unsplash.com/photo-1502672260283?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 18,
    "name": "1 South St (Apts 204) - VP",
    "rent": 1500,
    "distance": 3.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749379,
      "lng": -72.332558
    },
    "image": "https://images.unsplash.com/photo-1502672260284?w=800",
    "neighborhood": "South Block",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 19,
    "name": "1 South St (Apts 206) - VP",
    "rent": 1500,
    "distance": 1.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.682221,
      "lng": -72.296248
    },
    "image": "https://images.unsplash.com/photo-1502672260285?w=800",
    "neighborhood": "South Block",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 20,
    "name": "1 South St (Apts 207) - VP",
    "rent": 1500,
    "distance": 3.66,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748945,
      "lng": -72.324268
    },
    "image": "https://images.unsplash.com/photo-1502672260286?w=800",
    "neighborhood": "South Block",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 21,
    "name": "1 South St (Apts 205) - VP",
    "rent": 1500,
    "distance": 2.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693794,
      "lng": -72.338187
    },
    "image": "https://images.unsplash.com/photo-1502672260287?w=800",
    "neighborhood": "South Block",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 22,
    "name": "1 South St (Apts 208) - VP",
    "rent": 1500,
    "distance": 1.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721642,
      "lng": -72.314721
    },
    "image": "https://images.unsplash.com/photo-1502672260288?w=800",
    "neighborhood": "South Block",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 23,
    "name": "1 South St (Apts 209) - VP",
    "rent": 1500,
    "distance": 2.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729671,
      "lng": -72.268386
    },
    "image": "https://images.unsplash.com/photo-1502672260289?w=800",
    "neighborhood": "South Block",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 24,
    "name": "1 South St (Apts 210) - VP",
    "rent": 1500,
    "distance": 1.3,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.686677,
      "lng": -72.274832
    },
    "image": "https://images.unsplash.com/photo-1502672260290?w=800",
    "neighborhood": "South Block",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 25,
    "name": "1 South St (Apts 211) - VP",
    "rent": 1500,
    "distance": 3.46,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655375,
      "lng": -72.264807
    },
    "image": "https://images.unsplash.com/photo-1502672260291?w=800",
    "neighborhood": "South Block",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 26,
    "name": "1 South St Apt 201",
    "rent": 1500,
    "distance": 4.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65406,
      "lng": -72.336896
    },
    "image": "https://images.unsplash.com/photo-1502672260292?w=800",
    "neighborhood": "South Block",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 27,
    "name": "1 South St Apt 202",
    "rent": 1500,
    "distance": 1.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680316,
      "lng": -72.307874
    },
    "image": "https://images.unsplash.com/photo-1502672260293?w=800",
    "neighborhood": "South Block",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 28,
    "name": "1 South St Apt 203",
    "rent": 1500,
    "distance": 1.64,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.725102,
      "lng": -72.280752
    },
    "image": "https://images.unsplash.com/photo-1502672260294?w=800",
    "neighborhood": "South Block",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 29,
    "name": "1 South St Apt 301",
    "rent": 1500,
    "distance": 3.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.656659,
      "lng": -72.240923
    },
    "image": "https://images.unsplash.com/photo-1502672260295?w=800",
    "neighborhood": "South Block",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 30,
    "name": "1 South St Apt 302",
    "rent": 1500,
    "distance": 2.62,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.676154,
      "lng": -72.251588
    },
    "image": "https://images.unsplash.com/photo-1502672260296?w=800",
    "neighborhood": "South Block",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 31,
    "name": "1 South St Apt 303",
    "rent": 1500,
    "distance": 2.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.742146,
      "lng": -72.283532
    },
    "image": "https://images.unsplash.com/photo-1502672260297?w=800",
    "neighborhood": "South Block",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 32,
    "name": "1 South St Apt 304",
    "rent": 1500,
    "distance": 2.72,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738351,
      "lng": -72.267993
    },
    "image": "https://images.unsplash.com/photo-1502672260298?w=800",
    "neighborhood": "South Block",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 33,
    "name": "1 South St Apt 305",
    "rent": 1500,
    "distance": 2.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729679,
      "lng": -72.275719
    },
    "image": "https://images.unsplash.com/photo-1502672260299?w=800",
    "neighborhood": "South Block",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 34,
    "name": "1 South St Apt 306",
    "rent": 1500,
    "distance": 3.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.660037,
      "lng": -72.32971
    },
    "image": "https://images.unsplash.com/photo-1502672260300?w=800",
    "neighborhood": "South Block",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 35,
    "name": "1 South St Apt 307",
    "rent": 1500,
    "distance": 2.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671956,
      "lng": -72.296989
    },
    "image": "https://images.unsplash.com/photo-1502672260301?w=800",
    "neighborhood": "South Block",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 36,
    "name": "1 South St Apt 308",
    "rent": 1500,
    "distance": 2.14,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69383,
      "lng": -72.330836
    },
    "image": "https://images.unsplash.com/photo-1502672260302?w=800",
    "neighborhood": "South Block",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 37,
    "name": "1 South St Apt 309",
    "rent": 1500,
    "distance": 2.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683795,
      "lng": -72.338383
    },
    "image": "https://images.unsplash.com/photo-1502672260303?w=800",
    "neighborhood": "South Block",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 38,
    "name": "1 South St Apt 310",
    "rent": 1500,
    "distance": 3.39,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654207,
      "lng": -72.303557
    },
    "image": "https://images.unsplash.com/photo-1502672260304?w=800",
    "neighborhood": "South Block",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 39,
    "name": "1 South St Apt 311",
    "rent": 1500,
    "distance": 1.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.676457,
      "lng": -72.289538
    },
    "image": "https://images.unsplash.com/photo-1502672260305?w=800",
    "neighborhood": "South Block",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 40,
    "name": "1 South St Apt 401",
    "rent": 1500,
    "distance": 2.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.6719,
      "lng": -72.284345
    },
    "image": "https://images.unsplash.com/photo-1502672260306?w=800",
    "neighborhood": "South Block",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 41,
    "name": "1 South St Apt 402",
    "rent": 1500,
    "distance": 1.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702061,
      "lng": -72.322234
    },
    "image": "https://images.unsplash.com/photo-1502672260307?w=800",
    "neighborhood": "South Block",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 42,
    "name": "10 Valley Rd Unit 1",
    "rent": 1500,
    "distance": 1.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697993,
      "lng": -72.268141
    },
    "image": "https://images.unsplash.com/photo-1502672260308?w=800",
    "neighborhood": "Hanover",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 43,
    "name": "10 Valley Rd Unit 2",
    "rent": 1500,
    "distance": 2.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.682356,
      "lng": -72.324459
    },
    "image": "https://images.unsplash.com/photo-1502672260309?w=800",
    "neighborhood": "Hanover",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 44,
    "name": "13 Lyme Rd",
    "rent": 1500,
    "distance": 3.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655822,
      "lng": -72.265267
    },
    "image": "https://images.unsplash.com/photo-1502672260310?w=800",
    "neighborhood": "Hanover",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 45,
    "name": "1 S. Balch St",
    "rent": 1500,
    "distance": 3.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.750261,
      "lng": -72.268401
    },
    "image": "https://images.unsplash.com/photo-1502672260311?w=800",
    "neighborhood": "Hanover",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 46,
    "name": "3 S. Balch St.",
    "rent": 1500,
    "distance": 1.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695618,
      "lng": -72.314219
    },
    "image": "https://images.unsplash.com/photo-1502672260312?w=800",
    "neighborhood": "Hanover",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 47,
    "name": "13 Summer St",
    "rent": 1500,
    "distance": 2.8,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.672145,
      "lng": -72.327226
    },
    "image": "https://images.unsplash.com/photo-1502672260313?w=800",
    "neighborhood": "Hanover",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 48,
    "name": "13 Teagan Ave",
    "rent": 1500,
    "distance": 2.53,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670464,
      "lng": -72.314899
    },
    "image": "https://images.unsplash.com/photo-1502672260314?w=800",
    "neighborhood": "Hanover",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 49,
    "name": "14 Valley Rd",
    "rent": 1500,
    "distance": 0.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693549,
      "lng": -72.280187
    },
    "image": "https://images.unsplash.com/photo-1502672260315?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 50,
    "name": "16 Valley Rd",
    "rent": 1500,
    "distance": 3.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670293,
      "lng": -72.337203
    },
    "image": "https://images.unsplash.com/photo-1502672260316?w=800",
    "neighborhood": "Hanover",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 51,
    "name": "17 W. Wheelock St -A",
    "rent": 1500,
    "distance": 2.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718817,
      "lng": -72.325182
    },
    "image": "https://images.unsplash.com/photo-1502672260317?w=800",
    "neighborhood": "Hanover",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 52,
    "name": "17 W. Wheelock St -B",
    "rent": 1500,
    "distance": 3.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727942,
      "lng": -72.240714
    },
    "image": "https://images.unsplash.com/photo-1502672260318?w=800",
    "neighborhood": "Hanover",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 53,
    "name": "17 W. Wheelock St - C",
    "rent": 1500,
    "distance": 1.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690413,
      "lng": -72.307119
    },
    "image": "https://images.unsplash.com/photo-1502672260319?w=800",
    "neighborhood": "Hanover",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 54,
    "name": "17 W. Wheelock St - D",
    "rent": 1500,
    "distance": 3.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655415,
      "lng": -72.277855
    },
    "image": "https://images.unsplash.com/photo-1502672260320?w=800",
    "neighborhood": "Hanover",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 55,
    "name": "17 W. Wheelock St -E",
    "rent": 1500,
    "distance": 2.61,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.726492,
      "lng": -72.249451
    },
    "image": "https://images.unsplash.com/photo-1502672260321?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 56,
    "name": "17 W. Wheelock St - F",
    "rent": 1500,
    "distance": 1.52,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709812,
      "lng": -72.261075
    },
    "image": "https://images.unsplash.com/photo-1502672260322?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 57,
    "name": "17 W. Wheelock St - G",
    "rent": 1500,
    "distance": 2.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666659,
      "lng": -72.259894
    },
    "image": "https://images.unsplash.com/photo-1502672260323?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 58,
    "name": "17 W. Wheelock St - H",
    "rent": 1500,
    "distance": 1.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.674976,
      "lng": -72.284221
    },
    "image": "https://images.unsplash.com/photo-1502672260324?w=800",
    "neighborhood": "Hanover",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 59,
    "name": "17 W. Wheelock St -I",
    "rent": 1500,
    "distance": 0.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.704594,
      "lng": -72.284352
    },
    "image": "https://images.unsplash.com/photo-1502672260325?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 60,
    "name": "17 W. Wheelock St -J",
    "rent": 1500,
    "distance": 2.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663927,
      "lng": -72.305677
    },
    "image": "https://images.unsplash.com/photo-1502672260326?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 61,
    "name": "17 W. Wheelock St Apt K",
    "rent": 1500,
    "distance": 1.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70887,
      "lng": -72.325618
    },
    "image": "https://images.unsplash.com/photo-1502672260327?w=800",
    "neighborhood": "Hanover",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 62,
    "name": "17 W. Wheelock St Apt L",
    "rent": 1500,
    "distance": 0.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71345,
      "lng": -72.290047
    },
    "image": "https://images.unsplash.com/photo-1502672260328?w=800",
    "neighborhood": "Hanover",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 63,
    "name": "17  Valley Rd",
    "rent": 1500,
    "distance": 2.53,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666321,
      "lng": -72.279081
    },
    "image": "https://images.unsplash.com/photo-1502672260329?w=800",
    "neighborhood": "Hanover",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 64,
    "name": "19  Valley Rd",
    "rent": 1500,
    "distance": 0.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70899,
      "lng": -72.272658
    },
    "image": "https://images.unsplash.com/photo-1502672260330?w=800",
    "neighborhood": "Hanover",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 65,
    "name": "19 W. Wheelock St - 1W",
    "rent": 1500,
    "distance": 0.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708303,
      "lng": -72.304607
    },
    "image": "https://images.unsplash.com/photo-1502672260331?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 66,
    "name": "19 W. Wheelock St - 1E",
    "rent": 1500,
    "distance": 2.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.716889,
      "lng": -72.24946
    },
    "image": "https://images.unsplash.com/photo-1502672260332?w=800",
    "neighborhood": "Hanover",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 67,
    "name": "19 W. Wheelock St - 2W",
    "rent": 1500,
    "distance": 3.39,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.653754,
      "lng": -72.27878
    },
    "image": "https://images.unsplash.com/photo-1502672260333?w=800",
    "neighborhood": "Hanover",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 68,
    "name": "19 W. Wheelock St- 2E",
    "rent": 1500,
    "distance": 1.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.687425,
      "lng": -72.304455
    },
    "image": "https://images.unsplash.com/photo-1502672260334?w=800",
    "neighborhood": "Hanover",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 69,
    "name": "19 W. Wheelock St Apt 3E ",
    "rent": 1500,
    "distance": 0.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690261,
      "lng": -72.28661
    },
    "image": "https://images.unsplash.com/photo-1502672260335?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 70,
    "name": "19 W. Wheelock St Apt 3W",
    "rent": 1500,
    "distance": 2.14,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.732881,
      "lng": -72.284108
    },
    "image": "https://images.unsplash.com/photo-1502672260336?w=800",
    "neighborhood": "Hanover",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 71,
    "name": "2 S. Balch St - A",
    "rent": 1500,
    "distance": 1.82,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680796,
      "lng": -72.268237
    },
    "image": "https://images.unsplash.com/photo-1502672260337?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 72,
    "name": "2 S. Balch St - B",
    "rent": 1500,
    "distance": 2.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679852,
      "lng": -72.260899
    },
    "image": "https://images.unsplash.com/photo-1502672260338?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 73,
    "name": "21 S. Park St Apt A",
    "rent": 1500,
    "distance": 2.79,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664303,
      "lng": -72.30864
    },
    "image": "https://images.unsplash.com/photo-1502672260339?w=800",
    "neighborhood": "Hanover",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 74,
    "name": "21 S. Park St Apt B",
    "rent": 1500,
    "distance": 2.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728956,
      "lng": -72.315709
    },
    "image": "https://images.unsplash.com/photo-1502672260340?w=800",
    "neighborhood": "Hanover",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 75,
    "name": "22 E. Wheelock St - A",
    "rent": 1500,
    "distance": 0.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701551,
      "lng": -72.278807
    },
    "image": "https://images.unsplash.com/photo-1502672260341?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 76,
    "name": "22 E. Wheelock St -B",
    "rent": 1500,
    "distance": 2.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.669608,
      "lng": -72.277063
    },
    "image": "https://images.unsplash.com/photo-1502672260342?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 77,
    "name": "22 E. Wheelock St Apt C",
    "rent": 1500,
    "distance": 0.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691774,
      "lng": -72.284176
    },
    "image": "https://images.unsplash.com/photo-1502672260343?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 78,
    "name": "23 S. Park St -1",
    "rent": 1500,
    "distance": 2.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.737307,
      "lng": -72.28995
    },
    "image": "https://images.unsplash.com/photo-1502672260344?w=800",
    "neighborhood": "Hanover",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 79,
    "name": "23 S. Park St -2",
    "rent": 1500,
    "distance": 2.72,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662914,
      "lng": -72.285707
    },
    "image": "https://images.unsplash.com/photo-1502672260345?w=800",
    "neighborhood": "Hanover",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 80,
    "name": "23 S. Park St -3",
    "rent": 1500,
    "distance": 3.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.751338,
      "lng": -72.249673
    },
    "image": "https://images.unsplash.com/photo-1502672260346?w=800",
    "neighborhood": "Hanover",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 81,
    "name": "23 S. Park St -4",
    "rent": 1500,
    "distance": 2.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703939,
      "lng": -72.336294
    },
    "image": "https://images.unsplash.com/photo-1502672260347?w=800",
    "neighborhood": "Hanover",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 82,
    "name": "23 S. Park St -5",
    "rent": 1500,
    "distance": 1.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.681926,
      "lng": -72.275155
    },
    "image": "https://images.unsplash.com/photo-1502672260348?w=800",
    "neighborhood": "Hanover",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 83,
    "name": "23 S. Park St -6",
    "rent": 1500,
    "distance": 2.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.668976,
      "lng": -72.294152
    },
    "image": "https://images.unsplash.com/photo-1502672260349?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 84,
    "name": "25 Lebanon St Apt 4",
    "rent": 1500,
    "distance": 3.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748939,
      "lng": -72.31403
    },
    "image": "https://images.unsplash.com/photo-1502672260350?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 85,
    "name": "25 Lebanon St Apt 5",
    "rent": 1500,
    "distance": 2.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662194,
      "lng": -72.304327
    },
    "image": "https://images.unsplash.com/photo-1502672260351?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 86,
    "name": "25 Lebanon St Apt 6",
    "rent": 1500,
    "distance": 3.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749165,
      "lng": -72.280919
    },
    "image": "https://images.unsplash.com/photo-1502672260352?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 87,
    "name": "25 Lebanon St Apt 7",
    "rent": 1500,
    "distance": 1.8,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695024,
      "lng": -72.324315
    },
    "image": "https://images.unsplash.com/photo-1502672260353?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 88,
    "name": "25 S. Park St",
    "rent": 1500,
    "distance": 2.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721494,
      "lng": -72.33289
    },
    "image": "https://images.unsplash.com/photo-1502672260354?w=800",
    "neighborhood": "Hanover",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 89,
    "name": "26 E. Wheelock St-A",
    "rent": 1500,
    "distance": 3.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748867,
      "lng": -72.289089
    },
    "image": "https://images.unsplash.com/photo-1502672260355?w=800",
    "neighborhood": "Hanover",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 90,
    "name": "26 E. Wheelock St-B",
    "rent": 1500,
    "distance": 2.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.736935,
      "lng": -72.284424
    },
    "image": "https://images.unsplash.com/photo-1502672260356?w=800",
    "neighborhood": "Hanover",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 91,
    "name": "27 S. Park St",
    "rent": 1500,
    "distance": 1.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705057,
      "lng": -72.251124
    },
    "image": "https://images.unsplash.com/photo-1502672260357?w=800",
    "neighborhood": "Hanover",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 92,
    "name": "28 E. Wheelock St Apt E",
    "rent": 1500,
    "distance": 2.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.726911,
      "lng": -72.257715
    },
    "image": "https://images.unsplash.com/photo-1502672260358?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 93,
    "name": "28 E. Wheelock St Apt G",
    "rent": 1500,
    "distance": 1.61,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.719784,
      "lng": -72.26859
    },
    "image": "https://images.unsplash.com/photo-1502672260359?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 94,
    "name": "28 E. Wheelock St Apt W",
    "rent": 1500,
    "distance": 1.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697918,
      "lng": -72.315911
    },
    "image": "https://images.unsplash.com/photo-1502672260360?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 95,
    "name": "29 S. Park St",
    "rent": 1500,
    "distance": 2.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.737294,
      "lng": -72.286369
    },
    "image": "https://images.unsplash.com/photo-1502672260361?w=800",
    "neighborhood": "Hanover",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 96,
    "name": "3 S. Park St -Apt A",
    "rent": 1500,
    "distance": 2.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666298,
      "lng": -72.268192
    },
    "image": "https://images.unsplash.com/photo-1502672260362?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 97,
    "name": "3 S. Park St-Apt B",
    "rent": 1500,
    "distance": 2.07,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728359,
      "lng": -72.30989
    },
    "image": "https://images.unsplash.com/photo-1502672260363?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 98,
    "name": "3 Sanborn Rd Apt 1",
    "rent": 1500,
    "distance": 2.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.732514,
      "lng": -72.309049
    },
    "image": "https://images.unsplash.com/photo-1502672260364?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 99,
    "name": "3 Sanborn Rd Apt 2",
    "rent": 1500,
    "distance": 1.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.72424,
      "lng": -72.311282
    },
    "image": "https://images.unsplash.com/photo-1502672260365?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 100,
    "name": "3 Sanborn Rd Apt 3",
    "rent": 1500,
    "distance": 0.52,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.6964,
      "lng": -72.296323
    },
    "image": "https://images.unsplash.com/photo-1502672260366?w=800",
    "neighborhood": "Sargent Block",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 101,
    "name": "3 South St Apt A",
    "rent": 1500,
    "distance": 3.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658978,
      "lng": -72.305463
    },
    "image": "https://images.unsplash.com/photo-1502672260367?w=800",
    "neighborhood": "South Block",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 102,
    "name": "3 South St Apt B",
    "rent": 1500,
    "distance": 2.19,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671317,
      "lng": -72.28018
    },
    "image": "https://images.unsplash.com/photo-1502672260368?w=800",
    "neighborhood": "South Block",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 103,
    "name": "3 South St Apt C",
    "rent": 1500,
    "distance": 3.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670919,
      "lng": -72.240807
    },
    "image": "https://images.unsplash.com/photo-1502672260369?w=800",
    "neighborhood": "South Block",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 104,
    "name": "3 Valley Rd Apt A ",
    "rent": 1500,
    "distance": 2.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673212,
      "lng": -72.273219
    },
    "image": "https://images.unsplash.com/photo-1502672260370?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 105,
    "name": "3 Valley Rd Apt B",
    "rent": 1500,
    "distance": 2.44,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.686577,
      "lng": -72.245695
    },
    "image": "https://images.unsplash.com/photo-1502672260371?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 106,
    "name": "3 Valley Rd Apt C ",
    "rent": 1500,
    "distance": 2.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673658,
      "lng": -72.257511
    },
    "image": "https://images.unsplash.com/photo-1502672260372?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 107,
    "name": "3 Valley Rd Apt D",
    "rent": 1500,
    "distance": 2.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.668957,
      "lng": -72.312794
    },
    "image": "https://images.unsplash.com/photo-1502672260373?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 108,
    "name": "4 S. Balch St",
    "rent": 1500,
    "distance": 2.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.744451,
      "lng": -72.291245
    },
    "image": "https://images.unsplash.com/photo-1502672260374?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 109,
    "name": "4 Valley Rd Apt 1",
    "rent": 1500,
    "distance": 3.64,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65529,
      "lng": -72.256636
    },
    "image": "https://images.unsplash.com/photo-1502672260375?w=800",
    "neighborhood": "Hanover",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 110,
    "name": "4 Valley Rd Apt 2",
    "rent": 1500,
    "distance": 1.99,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.714153,
      "lng": -72.325951
    },
    "image": "https://images.unsplash.com/photo-1502672260376?w=800",
    "neighborhood": "Hanover",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 111,
    "name": "419 Mt. Support Rd",
    "rent": 1500,
    "distance": 1.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673557,
      "lng": -72.292152
    },
    "image": "https://images.unsplash.com/photo-1502672260377?w=800",
    "neighborhood": "Hanover",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 112,
    "name": "44 E. Wheelock St",
    "rent": 1500,
    "distance": 3.15,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738982,
      "lng": -72.252493
    },
    "image": "https://images.unsplash.com/photo-1502672260378?w=800",
    "neighborhood": "Hanover",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 113,
    "name": "5 S. Park St Apt 1N ",
    "rent": 1500,
    "distance": 2.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684071,
      "lng": -72.2407
    },
    "image": "https://images.unsplash.com/photo-1502672260379?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 114,
    "name": "5 S. Park St Apt  2N",
    "rent": 1500,
    "distance": 2.64,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.67178,
      "lng": -72.257791
    },
    "image": "https://images.unsplash.com/photo-1502672260380?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 115,
    "name": "5 S. Park St Apt 1S ",
    "rent": 1500,
    "distance": 1.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697,
      "lng": -72.314104
    },
    "image": "https://images.unsplash.com/photo-1502672260381?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 116,
    "name": "5 S. Park St Apt  2S",
    "rent": 1500,
    "distance": 2.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.672284,
      "lng": -72.248232
    },
    "image": "https://images.unsplash.com/photo-1502672260382?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 117,
    "name": "5 S. Park St Apt 3",
    "rent": 1500,
    "distance": 1.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698417,
      "lng": -72.321896
    },
    "image": "https://images.unsplash.com/photo-1502672260383?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 118,
    "name": "5 South St Apt A",
    "rent": 1500,
    "distance": 0.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.710337,
      "lng": -72.274557
    },
    "image": "https://images.unsplash.com/photo-1502672260384?w=800",
    "neighborhood": "South Block",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 119,
    "name": "5 South St Apt B",
    "rent": 1500,
    "distance": 0.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.715186,
      "lng": -72.297033
    },
    "image": "https://images.unsplash.com/photo-1502672260385?w=800",
    "neighborhood": "South Block",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 120,
    "name": "5 Teagan Ave",
    "rent": 1500,
    "distance": 0.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703356,
      "lng": -72.304617
    },
    "image": "https://images.unsplash.com/photo-1502672260386?w=800",
    "neighborhood": "Hanover",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 121,
    "name": "5 Valley Rd Apt A ",
    "rent": 1500,
    "distance": 2.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.733124,
      "lng": -72.324421
    },
    "image": "https://images.unsplash.com/photo-1502672260387?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 122,
    "name": "5 Valley Rd Apt B",
    "rent": 1500,
    "distance": 1.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675538,
      "lng": -72.287218
    },
    "image": "https://images.unsplash.com/photo-1502672260388?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 123,
    "name": "5 Valley Rd Apt C",
    "rent": 1500,
    "distance": 3.67,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66193,
      "lng": -72.337454
    },
    "image": "https://images.unsplash.com/photo-1502672260389?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 124,
    "name": "5 Valley Rd Apt  D",
    "rent": 1500,
    "distance": 0.65,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694304,
      "lng": -72.282435
    },
    "image": "https://images.unsplash.com/photo-1502672260390?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 125,
    "name": "5 S. Balch St",
    "rent": 1500,
    "distance": 3.44,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.659356,
      "lng": -72.254556
    },
    "image": "https://images.unsplash.com/photo-1502672260391?w=800",
    "neighborhood": "Hanover",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 126,
    "name": "7 S. Balch St",
    "rent": 1500,
    "distance": 2.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731361,
      "lng": -72.299952
    },
    "image": "https://images.unsplash.com/photo-1502672260392?w=800",
    "neighborhood": "Hanover",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 127,
    "name": "6 S. Balch St Apt A",
    "rent": 1500,
    "distance": 3.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655891,
      "lng": -72.277645
    },
    "image": "https://images.unsplash.com/photo-1502672260393?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 128,
    "name": "6 S. Balch St Apt B",
    "rent": 1500,
    "distance": 3.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738165,
      "lng": -72.255074
    },
    "image": "https://images.unsplash.com/photo-1502672260394?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 129,
    "name": "7 South St Apt A",
    "rent": 1500,
    "distance": 2.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.713835,
      "lng": -72.331809
    },
    "image": "https://images.unsplash.com/photo-1502672260395?w=800",
    "neighborhood": "South Block",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 130,
    "name": "7 South St Apt B",
    "rent": 1500,
    "distance": 3.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747181,
      "lng": -72.325107
    },
    "image": "https://images.unsplash.com/photo-1502672260396?w=800",
    "neighborhood": "South Block",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 131,
    "name": "7 South St Apt C",
    "rent": 1500,
    "distance": 0.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709661,
      "lng": -72.305313
    },
    "image": "https://images.unsplash.com/photo-1502672260397?w=800",
    "neighborhood": "South Block",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 132,
    "name": "7 South St Apt D",
    "rent": 1500,
    "distance": 0.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701573,
      "lng": -72.29488
    },
    "image": "https://images.unsplash.com/photo-1502672260398?w=800",
    "neighborhood": "South Block",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 133,
    "name": "7 South St Apt E",
    "rent": 1500,
    "distance": 0.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690429,
      "lng": -72.280229
    },
    "image": "https://images.unsplash.com/photo-1502672260399?w=800",
    "neighborhood": "South Block",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 134,
    "name": "7 South St Apt F",
    "rent": 1500,
    "distance": 1.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690496,
      "lng": -72.305447
    },
    "image": "https://images.unsplash.com/photo-1502672260400?w=800",
    "neighborhood": "South Block",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 135,
    "name": "7 Teagan Ave",
    "rent": 1500,
    "distance": 2.19,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693325,
      "lng": -72.331755
    },
    "image": "https://images.unsplash.com/photo-1502672260401?w=800",
    "neighborhood": "Hanover",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 136,
    "name": "8 S. Balch St Apt A",
    "rent": 1500,
    "distance": 1.4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721208,
      "lng": -72.299154
    },
    "image": "https://images.unsplash.com/photo-1502672260402?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 137,
    "name": "8 S. Balch St Apt B",
    "rent": 1500,
    "distance": 2.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.667236,
      "lng": -72.271654
    },
    "image": "https://images.unsplash.com/photo-1502672260403?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 138,
    "name": "8 Valley Rd Apt A",
    "rent": 1500,
    "distance": 3.62,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65427,
      "lng": -72.318682
    },
    "image": "https://images.unsplash.com/photo-1502672260404?w=800",
    "neighborhood": "Hanover",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 139,
    "name": "8 Valley Rd Apt B",
    "rent": 1500,
    "distance": 2.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.672205,
      "lng": -72.330177
    },
    "image": "https://images.unsplash.com/photo-1502672260405?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 140,
    "name": "9 South St Apt A",
    "rent": 1500,
    "distance": 3.36,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.653971,
      "lng": -72.297695
    },
    "image": "https://images.unsplash.com/photo-1502672260406?w=800",
    "neighborhood": "South Block",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 141,
    "name": "9 South St Apt B",
    "rent": 1500,
    "distance": 1.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684505,
      "lng": -72.309523
    },
    "image": "https://images.unsplash.com/photo-1502672260407?w=800",
    "neighborhood": "South Block",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 142,
    "name": "9 South St Apt C",
    "rent": 1500,
    "distance": 1.61,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705292,
      "lng": -72.321524
    },
    "image": "https://images.unsplash.com/photo-1502672260408?w=800",
    "neighborhood": "South Block",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 143,
    "name": "9 South St Apt D",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658098,
      "lng": -72.312212
    },
    "image": "https://images.unsplash.com/photo-1502672260409?w=800",
    "neighborhood": "South Block",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 144,
    "name": "9 S. Balch St",
    "rent": 1500,
    "distance": 2.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.700131,
      "lng": -72.33078
    },
    "image": "https://images.unsplash.com/photo-1502672260410?w=800",
    "neighborhood": "Hanover",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 145,
    "name": "11 S. Balch St",
    "rent": 1500,
    "distance": 0.8,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697201,
      "lng": -72.275062
    },
    "image": "https://images.unsplash.com/photo-1502672260411?w=800",
    "neighborhood": "Hanover",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 146,
    "name": "12 Cedar Dr",
    "rent": 1500,
    "distance": 1.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712902,
      "lng": -72.313525
    },
    "image": "https://images.unsplash.com/photo-1502672260412?w=800",
    "neighborhood": "Hanover",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 147,
    "name": "15 Cedar Dr",
    "rent": 1500,
    "distance": 0.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691328,
      "lng": -72.286101
    },
    "image": "https://images.unsplash.com/photo-1502672260413?w=800",
    "neighborhood": "Hanover",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 148,
    "name": "19 Cedar Dr",
    "rent": 1500,
    "distance": 3.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747631,
      "lng": -72.308305
    },
    "image": "https://images.unsplash.com/photo-1502672260414?w=800",
    "neighborhood": "Hanover",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 149,
    "name": "20 Cedar Dr",
    "rent": 1500,
    "distance": 0.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689309,
      "lng": -72.282092
    },
    "image": "https://images.unsplash.com/photo-1502672260415?w=800",
    "neighborhood": "Hanover",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 150,
    "name": "23 Cedar Dr",
    "rent": 1500,
    "distance": 3.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.751313,
      "lng": -72.327727
    },
    "image": "https://images.unsplash.com/photo-1502672260416?w=800",
    "neighborhood": "Hanover",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 151,
    "name": "24 Cedar Dr",
    "rent": 1500,
    "distance": 0.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690935,
      "lng": -72.291517
    },
    "image": "https://images.unsplash.com/photo-1502672260417?w=800",
    "neighborhood": "Hanover",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 152,
    "name": "29 Cedar Dr",
    "rent": 1500,
    "distance": 2.36,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697091,
      "lng": -72.242907
    },
    "image": "https://images.unsplash.com/photo-1502672260418?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 153,
    "name": "30 Cedar Dr",
    "rent": 1500,
    "distance": 4.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654355,
      "lng": -72.337586
    },
    "image": "https://images.unsplash.com/photo-1502672260419?w=800",
    "neighborhood": "Hanover",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 154,
    "name": "33 Cedar Dr",
    "rent": 1500,
    "distance": 1.03,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.692523,
      "lng": -72.305289
    },
    "image": "https://images.unsplash.com/photo-1502672260420?w=800",
    "neighborhood": "Hanover",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 155,
    "name": "35 Cedar Dr",
    "rent": 1500,
    "distance": 3.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749205,
      "lng": -72.254168
    },
    "image": "https://images.unsplash.com/photo-1502672260421?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 156,
    "name": "37 Cedar Dr",
    "rent": 1500,
    "distance": 3.14,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.73949,
      "lng": -72.253791
    },
    "image": "https://images.unsplash.com/photo-1502672260422?w=800",
    "neighborhood": "Hanover",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 157,
    "name": "39 Cedar Dr",
    "rent": 1500,
    "distance": 2.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.672792,
      "lng": -72.272461
    },
    "image": "https://images.unsplash.com/photo-1502672260423?w=800",
    "neighborhood": "Hanover",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 158,
    "name": "43 Cedar Dr",
    "rent": 1500,
    "distance": 0.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705111,
      "lng": -72.287711
    },
    "image": "https://images.unsplash.com/photo-1502672260424?w=800",
    "neighborhood": "Hanover",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 159,
    "name": "1 Fletcher Cir",
    "rent": 1500,
    "distance": 2.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662158,
      "lng": -72.271246
    },
    "image": "https://images.unsplash.com/photo-1502672260425?w=800",
    "neighborhood": "Hanover",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 160,
    "name": "10 Fletcher Cir",
    "rent": 1500,
    "distance": 0.96,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.713838,
      "lng": -72.30016
    },
    "image": "https://images.unsplash.com/photo-1502672260426?w=800",
    "neighborhood": "Hanover",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 161,
    "name": "11 Fletcher Cir",
    "rent": 1500,
    "distance": 2.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698416,
      "lng": -72.240082
    },
    "image": "https://images.unsplash.com/photo-1502672260427?w=800",
    "neighborhood": "Hanover",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 162,
    "name": "13 Fletcher Cir",
    "rent": 1500,
    "distance": 1.04,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70058,
      "lng": -72.310319
    },
    "image": "https://images.unsplash.com/photo-1502672260428?w=800",
    "neighborhood": "Hanover",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 163,
    "name": "15 Fletcher Cir",
    "rent": 1500,
    "distance": 1.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679479,
      "lng": -72.266631
    },
    "image": "https://images.unsplash.com/photo-1502672260429?w=800",
    "neighborhood": "Hanover",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 164,
    "name": "17 Fletcher Cir",
    "rent": 1500,
    "distance": 3.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.744683,
      "lng": -72.338297
    },
    "image": "https://images.unsplash.com/photo-1502672260430?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 165,
    "name": "19 Fletcher Cir",
    "rent": 1500,
    "distance": 2.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.73341,
      "lng": -72.295097
    },
    "image": "https://images.unsplash.com/photo-1502672260431?w=800",
    "neighborhood": "Hanover",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 166,
    "name": "2 Fletcher Cir",
    "rent": 1500,
    "distance": 1.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.678882,
      "lng": -72.303293
    },
    "image": "https://images.unsplash.com/photo-1502672260432?w=800",
    "neighborhood": "Hanover",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 167,
    "name": "23 Fletcher Cir",
    "rent": 1500,
    "distance": 3.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.742817,
      "lng": -72.314787
    },
    "image": "https://images.unsplash.com/photo-1502672260433?w=800",
    "neighborhood": "Hanover",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 168,
    "name": "25 Fletcher Cir",
    "rent": 1500,
    "distance": 0.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702586,
      "lng": -72.272667
    },
    "image": "https://images.unsplash.com/photo-1502672260434?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 169,
    "name": "27 Fletcher Cir",
    "rent": 1500,
    "distance": 0.6,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698917,
      "lng": -72.300718
    },
    "image": "https://images.unsplash.com/photo-1502672260435?w=800",
    "neighborhood": "Hanover",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 170,
    "name": "29 Fletcher Cir",
    "rent": 1500,
    "distance": 0.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702499,
      "lng": -72.270155
    },
    "image": "https://images.unsplash.com/photo-1502672260436?w=800",
    "neighborhood": "Hanover",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 171,
    "name": "3 Fletcher Cir",
    "rent": 1500,
    "distance": 2.99,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66155,
      "lng": -72.268831
    },
    "image": "https://images.unsplash.com/photo-1502672260437?w=800",
    "neighborhood": "Hanover",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 172,
    "name": "4 Fletcher Cir",
    "rent": 1500,
    "distance": 1.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728825,
      "lng": -72.297192
    },
    "image": "https://images.unsplash.com/photo-1502672260438?w=800",
    "neighborhood": "Hanover",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 173,
    "name": "5 Fletcher Cir",
    "rent": 1500,
    "distance": 3.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654841,
      "lng": -72.326817
    },
    "image": "https://images.unsplash.com/photo-1502672260439?w=800",
    "neighborhood": "Hanover",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 174,
    "name": "6 Fletcher Cir",
    "rent": 1500,
    "distance": 2.38,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66785,
      "lng": -72.285437
    },
    "image": "https://images.unsplash.com/photo-1502672260440?w=800",
    "neighborhood": "Hanover",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 175,
    "name": "7 Fletcher Cir",
    "rent": 1500,
    "distance": 1.64,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.67864,
      "lng": -72.2936
    },
    "image": "https://images.unsplash.com/photo-1502672260441?w=800",
    "neighborhood": "Hanover",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 176,
    "name": "8 Fletcher Cir",
    "rent": 1500,
    "distance": 2.65,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664967,
      "lng": -72.302282
    },
    "image": "https://images.unsplash.com/photo-1502672260442?w=800",
    "neighborhood": "Hanover",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 177,
    "name": "9 Fletcher Cir",
    "rent": 1500,
    "distance": 3.47,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658309,
      "lng": -72.323159
    },
    "image": "https://images.unsplash.com/photo-1502672260443?w=800",
    "neighborhood": "Hanover",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 178,
    "name": "7 Ivy Lane  101",
    "rent": 1500,
    "distance": 1.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.685424,
      "lng": -72.257827
    },
    "image": "https://images.unsplash.com/photo-1502672260444?w=800",
    "neighborhood": "Hanover",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 179,
    "name": "9 Ivy Lane Unit  101",
    "rent": 1500,
    "distance": 1.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689853,
      "lng": -72.324441
    },
    "image": "https://images.unsplash.com/photo-1502672260445?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 180,
    "name": "9 Ivy Lane Unit  102",
    "rent": 1500,
    "distance": 3.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.665432,
      "lng": -72.249943
    },
    "image": "https://images.unsplash.com/photo-1502672260446?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 181,
    "name": "8 N. Park Unit  101",
    "rent": 1500,
    "distance": 3.39,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65429,
      "lng": -72.274745
    },
    "image": "https://images.unsplash.com/photo-1502672260447?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 182,
    "name": "8 N. Park Unit  102",
    "rent": 1500,
    "distance": 1.47,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.685196,
      "lng": -72.307319
    },
    "image": "https://images.unsplash.com/photo-1502672260448?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 183,
    "name": "8 N. Park Unit  103",
    "rent": 1500,
    "distance": 1.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690684,
      "lng": -72.321326
    },
    "image": "https://images.unsplash.com/photo-1502672260449?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 184,
    "name": "10 N. Park Unit 101",
    "rent": 1500,
    "distance": 2.8,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.737994,
      "lng": -72.315792
    },
    "image": "https://images.unsplash.com/photo-1502672260450?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 185,
    "name": "10 N. Park Unit  102",
    "rent": 1500,
    "distance": 2.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670747,
      "lng": -72.290599
    },
    "image": "https://images.unsplash.com/photo-1502672260451?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 186,
    "name": "10 N. Park Unit  201",
    "rent": 1500,
    "distance": 0.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69234,
      "lng": -72.300757
    },
    "image": "https://images.unsplash.com/photo-1502672260452?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 187,
    "name": "10 N. Park Unit  202",
    "rent": 1500,
    "distance": 1.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727825,
      "lng": -72.274708
    },
    "image": "https://images.unsplash.com/photo-1502672260453?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 188,
    "name": "10 N. Park Unit  203",
    "rent": 1500,
    "distance": 2.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.713109,
      "lng": -72.339245
    },
    "image": "https://images.unsplash.com/photo-1502672260454?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 189,
    "name": "12 N. Park Unit  101",
    "rent": 1500,
    "distance": 1.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727529,
      "lng": -72.289603
    },
    "image": "https://images.unsplash.com/photo-1502672260455?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 190,
    "name": "12 N. Park Unit  102",
    "rent": 1500,
    "distance": 1.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69426,
      "lng": -72.31417
    },
    "image": "https://images.unsplash.com/photo-1502672260456?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 191,
    "name": "14 N. Park",
    "rent": 1500,
    "distance": 1.19,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708774,
      "lng": -72.311668
    },
    "image": "https://images.unsplash.com/photo-1502672260457?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 192,
    "name": "14 N. Park",
    "rent": 1500,
    "distance": 1.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694044,
      "lng": -72.263809
    },
    "image": "https://images.unsplash.com/photo-1502672260458?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 193,
    "name": "16 N. Park Unit  101",
    "rent": 1500,
    "distance": 1.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.715672,
      "lng": -72.254683
    },
    "image": "https://images.unsplash.com/photo-1502672260459?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 194,
    "name": "16 N. Park Unit  102",
    "rent": 1500,
    "distance": 2.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.733413,
      "lng": -72.274549
    },
    "image": "https://images.unsplash.com/photo-1502672260460?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 195,
    "name": "  16 N. Park Unit 201",
    "rent": 1500,
    "distance": 2.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675536,
      "lng": -72.250148
    },
    "image": "https://images.unsplash.com/photo-1502672260461?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 196,
    "name": "16 N. Park Unit  202",
    "rent": 1500,
    "distance": 2.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671007,
      "lng": -72.257205
    },
    "image": "https://images.unsplash.com/photo-1502672260462?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 197,
    "name": "16 N. Park Unit  203",
    "rent": 1500,
    "distance": 2.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.722865,
      "lng": -72.248444
    },
    "image": "https://images.unsplash.com/photo-1502672260463?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 198,
    "name": "18 N. Park Unit  101",
    "rent": 1500,
    "distance": 1.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709807,
      "lng": -72.257377
    },
    "image": "https://images.unsplash.com/photo-1502672260464?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 199,
    "name": "18 N. Park Unit  102",
    "rent": 1500,
    "distance": 1.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.717925,
      "lng": -72.258402
    },
    "image": "https://images.unsplash.com/photo-1502672260465?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 200,
    "name": "18 N. Park Unit  103",
    "rent": 1500,
    "distance": 1.65,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723914,
      "lng": -72.275855
    },
    "image": "https://images.unsplash.com/photo-1502672260466?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 201,
    "name": "20 N. Park Unit",
    "rent": 1500,
    "distance": 1.07,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699411,
      "lng": -72.268477
    },
    "image": "https://images.unsplash.com/photo-1502672260467?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 202,
    "name": "20 N. Park Unit",
    "rent": 1500,
    "distance": 3.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663373,
      "lng": -72.257313
    },
    "image": "https://images.unsplash.com/photo-1502672260468?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 203,
    "name": "20 N. Park Unit",
    "rent": 1500,
    "distance": 1.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.720159,
      "lng": -72.272711
    },
    "image": "https://images.unsplash.com/photo-1502672260469?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 204,
    "name": "22 N. Park Unit  101",
    "rent": 1500,
    "distance": 3.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.653007,
      "lng": -72.26085
    },
    "image": "https://images.unsplash.com/photo-1502672260470?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 205,
    "name": "22 N. Park Unit  102",
    "rent": 1500,
    "distance": 1.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.716722,
      "lng": -72.297374
    },
    "image": "https://images.unsplash.com/photo-1502672260471?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 206,
    "name": "22 N. Park Unit  201",
    "rent": 1500,
    "distance": 2.07,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697577,
      "lng": -72.330592
    },
    "image": "https://images.unsplash.com/photo-1502672260472?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 207,
    "name": "22 N. Park Unit  202",
    "rent": 1500,
    "distance": 2.3,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701398,
      "lng": -72.243472
    },
    "image": "https://images.unsplash.com/photo-1502672260473?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 208,
    "name": "22 N. Park Unit  203",
    "rent": 1500,
    "distance": 0.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691725,
      "lng": -72.280685
    },
    "image": "https://images.unsplash.com/photo-1502672260474?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 209,
    "name": "24 N. Park Unit  101",
    "rent": 1500,
    "distance": 1.72,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698681,
      "lng": -72.323733
    },
    "image": "https://images.unsplash.com/photo-1502672260475?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 210,
    "name": "24 N. Park Unit  102",
    "rent": 1500,
    "distance": 3.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749494,
      "lng": -72.275516
    },
    "image": "https://images.unsplash.com/photo-1502672260476?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 211,
    "name": "24 N. Park Unit 103",
    "rent": 1500,
    "distance": 1.55,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679817,
      "lng": -72.29155
    },
    "image": "https://images.unsplash.com/photo-1502672260477?w=800",
    "neighborhood": "Park & Wheelock",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 212,
    "name": "1 Drake Lane",
    "rent": 1500,
    "distance": 2.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.741047,
      "lng": -72.311909
    },
    "image": "https://images.unsplash.com/photo-1502672260478?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 213,
    "name": "3 Drake Lane",
    "rent": 1500,
    "distance": 1.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711581,
      "lng": -72.263708
    },
    "image": "https://images.unsplash.com/photo-1502672260479?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 214,
    "name": "4 Drake Lane",
    "rent": 1500,
    "distance": 1.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694152,
      "lng": -72.327684
    },
    "image": "https://images.unsplash.com/photo-1502672260480?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 215,
    "name": "5 Drake Lane",
    "rent": 1500,
    "distance": 3.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.734069,
      "lng": -72.33392
    },
    "image": "https://images.unsplash.com/photo-1502672260481?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 216,
    "name": "6 Drake Lane",
    "rent": 1500,
    "distance": 1.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71286,
      "lng": -72.268698
    },
    "image": "https://images.unsplash.com/photo-1502672260482?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 217,
    "name": "7 Drake Lane",
    "rent": 1500,
    "distance": 2.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.668009,
      "lng": -72.268938
    },
    "image": "https://images.unsplash.com/photo-1502672260483?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 218,
    "name": "8 Drake Lane",
    "rent": 1500,
    "distance": 2.05,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.730445,
      "lng": -72.302116
    },
    "image": "https://images.unsplash.com/photo-1502672260484?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 219,
    "name": "9 Drake Lane",
    "rent": 1500,
    "distance": 1.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.719281,
      "lng": -72.299696
    },
    "image": "https://images.unsplash.com/photo-1502672260485?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 220,
    "name": "11 Drake Lane",
    "rent": 1500,
    "distance": 1.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71665,
      "lng": -72.273097
    },
    "image": "https://images.unsplash.com/photo-1502672260486?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 221,
    "name": "13 Drake Lane",
    "rent": 1500,
    "distance": 1.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680037,
      "lng": -72.28288
    },
    "image": "https://images.unsplash.com/photo-1502672260487?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 222,
    "name": "15 Drake Lane",
    "rent": 1500,
    "distance": 0.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.700096,
      "lng": -72.271274
    },
    "image": "https://images.unsplash.com/photo-1502672260488?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 223,
    "name": "17 Drake Lane",
    "rent": 1500,
    "distance": 1.47,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680983,
      "lng": -72.291625
    },
    "image": "https://images.unsplash.com/photo-1502672260489?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 224,
    "name": "18 Drake Lane",
    "rent": 1500,
    "distance": 3.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.74603,
      "lng": -72.264749
    },
    "image": "https://images.unsplash.com/photo-1502672260490?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 225,
    "name": "19 Drake Lane",
    "rent": 1500,
    "distance": 3.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657885,
      "lng": -72.256096
    },
    "image": "https://images.unsplash.com/photo-1502672260491?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 226,
    "name": "20 Drake Lane",
    "rent": 1500,
    "distance": 1.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.722831,
      "lng": -72.288441
    },
    "image": "https://images.unsplash.com/photo-1502672260492?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 227,
    "name": "21 Drake Lane",
    "rent": 1500,
    "distance": 1.82,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728473,
      "lng": -72.290402
    },
    "image": "https://images.unsplash.com/photo-1502672260493?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 228,
    "name": "22 Drake Lane",
    "rent": 1500,
    "distance": 0.95,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688457,
      "lng": -72.2907
    },
    "image": "https://images.unsplash.com/photo-1502672260494?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 229,
    "name": "23 Drake Lane",
    "rent": 1500,
    "distance": 3.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.659844,
      "lng": -72.259515
    },
    "image": "https://images.unsplash.com/photo-1502672260495?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 230,
    "name": "24 Drake Lane",
    "rent": 1500,
    "distance": 2.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711939,
      "lng": -72.243219
    },
    "image": "https://images.unsplash.com/photo-1502672260496?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 231,
    "name": "25 Drake Lane",
    "rent": 1500,
    "distance": 2.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718988,
      "lng": -72.324477
    },
    "image": "https://images.unsplash.com/photo-1502672260497?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 232,
    "name": "26 Drake Lane",
    "rent": 1500,
    "distance": 2.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.668064,
      "lng": -72.278575
    },
    "image": "https://images.unsplash.com/photo-1502672260498?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 233,
    "name": "27 Drake Lane",
    "rent": 1500,
    "distance": 3.38,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.659054,
      "lng": -72.257789
    },
    "image": "https://images.unsplash.com/photo-1502672260499?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 234,
    "name": "28 Drake Lane",
    "rent": 1500,
    "distance": 1.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.720795,
      "lng": -72.297099
    },
    "image": "https://images.unsplash.com/photo-1502672260500?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 235,
    "name": "29 Drake Lane",
    "rent": 1500,
    "distance": 1.66,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.678758,
      "lng": -72.282755
    },
    "image": "https://images.unsplash.com/photo-1502672260501?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 236,
    "name": "30 Drake Lane",
    "rent": 1500,
    "distance": 1.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69435,
      "lng": -72.318823
    },
    "image": "https://images.unsplash.com/photo-1502672260502?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 237,
    "name": "31 Drake Lane",
    "rent": 1500,
    "distance": 2.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694169,
      "lng": -72.247075
    },
    "image": "https://images.unsplash.com/photo-1502672260503?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 238,
    "name": "32 Drake Lane",
    "rent": 1500,
    "distance": 1.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.714392,
      "lng": -72.275629
    },
    "image": "https://images.unsplash.com/photo-1502672260504?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 239,
    "name": "33 Drake Lane",
    "rent": 1500,
    "distance": 1.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721291,
      "lng": -72.291917
    },
    "image": "https://images.unsplash.com/photo-1502672260505?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 240,
    "name": "34 Drake Lane",
    "rent": 1500,
    "distance": 2.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729413,
      "lng": -72.332874
    },
    "image": "https://images.unsplash.com/photo-1502672260506?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 241,
    "name": "35 Drake Lane",
    "rent": 1500,
    "distance": 3.3,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.656183,
      "lng": -72.307246
    },
    "image": "https://images.unsplash.com/photo-1502672260507?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 242,
    "name": "36 Drake Lane",
    "rent": 1500,
    "distance": 2.55,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675111,
      "lng": -72.324365
    },
    "image": "https://images.unsplash.com/photo-1502672260508?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 243,
    "name": "37 Drake Lane",
    "rent": 1500,
    "distance": 0.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694399,
      "lng": -72.296298
    },
    "image": "https://images.unsplash.com/photo-1502672260509?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 244,
    "name": "38 Drake Lane",
    "rent": 1500,
    "distance": 2.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.733566,
      "lng": -72.305757
    },
    "image": "https://images.unsplash.com/photo-1502672260510?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 245,
    "name": "39 Drake Lane",
    "rent": 1500,
    "distance": 1.73,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.710925,
      "lng": -72.322141
    },
    "image": "https://images.unsplash.com/photo-1502672260511?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 246,
    "name": "40 Drake Lane",
    "rent": 1500,
    "distance": 0.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703506,
      "lng": -72.30721
    },
    "image": "https://images.unsplash.com/photo-1502672260512?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 247,
    "name": "41 Drake Lane",
    "rent": 1500,
    "distance": 3.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.740714,
      "lng": -72.255544
    },
    "image": "https://images.unsplash.com/photo-1502672260513?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 248,
    "name": "43 Drake Lane",
    "rent": 1500,
    "distance": 2.4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671202,
      "lng": -72.26802
    },
    "image": "https://images.unsplash.com/photo-1502672260514?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 249,
    "name": "45 Drake Lane",
    "rent": 1500,
    "distance": 3.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.744725,
      "lng": -72.328995
    },
    "image": "https://images.unsplash.com/photo-1502672260515?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 250,
    "name": "47 Drake Lane",
    "rent": 1500,
    "distance": 3.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748621,
      "lng": -72.287593
    },
    "image": "https://images.unsplash.com/photo-1502672260516?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 251,
    "name": "49 Drake Lane",
    "rent": 1500,
    "distance": 2.07,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691136,
      "lng": -72.251086
    },
    "image": "https://images.unsplash.com/photo-1502672260517?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 252,
    "name": "51 Drake Lane",
    "rent": 1500,
    "distance": 0.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709642,
      "lng": -72.276953
    },
    "image": "https://images.unsplash.com/photo-1502672260518?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 253,
    "name": "53 Drake Lane",
    "rent": 1500,
    "distance": 2.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689528,
      "lng": -72.332497
    },
    "image": "https://images.unsplash.com/photo-1502672260519?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 254,
    "name": "55 Drake Lane",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662197,
      "lng": -72.255221
    },
    "image": "https://images.unsplash.com/photo-1502672260520?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 255,
    "name": "57 Drake Lane",
    "rent": 1500,
    "distance": 3.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749242,
      "lng": -72.252247
    },
    "image": "https://images.unsplash.com/photo-1502672260521?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 256,
    "name": "59 Drake Lane",
    "rent": 1500,
    "distance": 1.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679414,
      "lng": -72.291471
    },
    "image": "https://images.unsplash.com/photo-1502672260522?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 257,
    "name": "61 Drake Lane",
    "rent": 1500,
    "distance": 1.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.692251,
      "lng": -72.253804
    },
    "image": "https://images.unsplash.com/photo-1502672260523?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 258,
    "name": "63 Drake Lane",
    "rent": 1500,
    "distance": 2.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712201,
      "lng": -72.338591
    },
    "image": "https://images.unsplash.com/photo-1502672260524?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 259,
    "name": "65 Drake Lane",
    "rent": 1500,
    "distance": 1.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707699,
      "lng": -72.317651
    },
    "image": "https://images.unsplash.com/photo-1502672260525?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 260,
    "name": "67 Drake Lane",
    "rent": 1500,
    "distance": 3.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.74295,
      "lng": -72.243739
    },
    "image": "https://images.unsplash.com/photo-1502672260526?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 261,
    "name": "69 Drake Lane",
    "rent": 1500,
    "distance": 3.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658372,
      "lng": -72.254608
    },
    "image": "https://images.unsplash.com/photo-1502672260527?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 262,
    "name": "71 Drake Lane",
    "rent": 1500,
    "distance": 4.15,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.75086,
      "lng": -72.240771
    },
    "image": "https://images.unsplash.com/photo-1502672260528?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 263,
    "name": "73 Drake Lane",
    "rent": 1500,
    "distance": 0.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703977,
      "lng": -72.282997
    },
    "image": "https://images.unsplash.com/photo-1502672260529?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 264,
    "name": "75 Drake Lane",
    "rent": 1500,
    "distance": 1.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711975,
      "lng": -72.307432
    },
    "image": "https://images.unsplash.com/photo-1502672260530?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 265,
    "name": "1 Field Road",
    "rent": 1500,
    "distance": 1.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693866,
      "lng": -72.308752
    },
    "image": "https://images.unsplash.com/photo-1502672260531?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 266,
    "name": "2 Field Road",
    "rent": 1500,
    "distance": 1.6,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.722901,
      "lng": -72.304144
    },
    "image": "https://images.unsplash.com/photo-1502672260532?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 267,
    "name": "3 Field Road",
    "rent": 1500,
    "distance": 1.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699082,
      "lng": -72.326413
    },
    "image": "https://images.unsplash.com/photo-1502672260533?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 268,
    "name": "4 Field Road",
    "rent": 1500,
    "distance": 1.82,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.706155,
      "lng": -72.253535
    },
    "image": "https://images.unsplash.com/photo-1502672260534?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 269,
    "name": "5 Field Road",
    "rent": 1500,
    "distance": 1.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.706772,
      "lng": -72.324659
    },
    "image": "https://images.unsplash.com/photo-1502672260535?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 270,
    "name": "6 Field Road",
    "rent": 1500,
    "distance": 2.1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.730616,
      "lng": -72.304306
    },
    "image": "https://images.unsplash.com/photo-1502672260536?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 271,
    "name": "7 Field Road",
    "rent": 1500,
    "distance": 2.68,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671786,
      "lng": -72.25624
    },
    "image": "https://images.unsplash.com/photo-1502672260537?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 272,
    "name": "8 Field Road",
    "rent": 1500,
    "distance": 2.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671618,
      "lng": -72.251148
    },
    "image": "https://images.unsplash.com/photo-1502672260538?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 273,
    "name": "9 Field Road",
    "rent": 1500,
    "distance": 2.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675037,
      "lng": -72.306358
    },
    "image": "https://images.unsplash.com/photo-1502672260539?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 274,
    "name": "10 Field Road",
    "rent": 1500,
    "distance": 2.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.665812,
      "lng": -72.302012
    },
    "image": "https://images.unsplash.com/photo-1502672260540?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 275,
    "name": "11 Field Road",
    "rent": 1500,
    "distance": 2.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673318,
      "lng": -72.306516
    },
    "image": "https://images.unsplash.com/photo-1502672260541?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 276,
    "name": "12 Field Road",
    "rent": 1500,
    "distance": 1.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688335,
      "lng": -72.280678
    },
    "image": "https://images.unsplash.com/photo-1502672260542?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 277,
    "name": "13 Field Road",
    "rent": 1500,
    "distance": 0.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694912,
      "lng": -72.275694
    },
    "image": "https://images.unsplash.com/photo-1502672260543?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 278,
    "name": "14 Field Road",
    "rent": 1500,
    "distance": 2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727041,
      "lng": -72.269201
    },
    "image": "https://images.unsplash.com/photo-1502672260544?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 279,
    "name": "15 Field Road",
    "rent": 1500,
    "distance": 2.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.735737,
      "lng": -72.323056
    },
    "image": "https://images.unsplash.com/photo-1502672260545?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 280,
    "name": "16 Field Road",
    "rent": 1500,
    "distance": 1.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.681408,
      "lng": -72.316788
    },
    "image": "https://images.unsplash.com/photo-1502672260546?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 281,
    "name": "17 Field Road",
    "rent": 1500,
    "distance": 3.52,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657425,
      "lng": -72.323126
    },
    "image": "https://images.unsplash.com/photo-1502672260547?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 282,
    "name": "18 Field Road",
    "rent": 1500,
    "distance": 2.96,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.672127,
      "lng": -72.331707
    },
    "image": "https://images.unsplash.com/photo-1502672260548?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 283,
    "name": "19 Field Road",
    "rent": 1500,
    "distance": 3.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.745308,
      "lng": -72.335198
    },
    "image": "https://images.unsplash.com/photo-1502672260549?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 284,
    "name": "20 Field Road",
    "rent": 1500,
    "distance": 3.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738223,
      "lng": -72.244981
    },
    "image": "https://images.unsplash.com/photo-1502672260550?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 285,
    "name": "26 Field Road",
    "rent": 1500,
    "distance": 3.03,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662861,
      "lng": -72.316222
    },
    "image": "https://images.unsplash.com/photo-1502672260551?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 286,
    "name": "28 Field Road",
    "rent": 1500,
    "distance": 3.79,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.659481,
      "lng": -72.24215
    },
    "image": "https://images.unsplash.com/photo-1502672260552?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 287,
    "name": "30 Field Road",
    "rent": 1500,
    "distance": 0.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691524,
      "lng": -72.297976
    },
    "image": "https://images.unsplash.com/photo-1502672260553?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 288,
    "name": "32 Field Road",
    "rent": 1500,
    "distance": 1.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702536,
      "lng": -72.317791
    },
    "image": "https://images.unsplash.com/photo-1502672260554?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 289,
    "name": "34 Field Road",
    "rent": 1500,
    "distance": 2.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727488,
      "lng": -72.269491
    },
    "image": "https://images.unsplash.com/photo-1502672260555?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 290,
    "name": "36 Field Road",
    "rent": 1500,
    "distance": 1.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71207,
      "lng": -72.253992
    },
    "image": "https://images.unsplash.com/photo-1502672260556?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 291,
    "name": "64 Gould Road",
    "rent": 1500,
    "distance": 0.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712871,
      "lng": -72.281441
    },
    "image": "https://images.unsplash.com/photo-1502672260557?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 292,
    "name": "66 Gould Road",
    "rent": 1500,
    "distance": 1.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.726751,
      "lng": -72.280385
    },
    "image": "https://images.unsplash.com/photo-1502672260558?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 293,
    "name": "68 Gould Road",
    "rent": 1500,
    "distance": 1.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680004,
      "lng": -72.303585
    },
    "image": "https://images.unsplash.com/photo-1502672260559?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 294,
    "name": "70 Gould Road",
    "rent": 1500,
    "distance": 2.79,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.737284,
      "lng": -72.261888
    },
    "image": "https://images.unsplash.com/photo-1502672260560?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 295,
    "name": "72 Gould Road",
    "rent": 1500,
    "distance": 1.08,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.706823,
      "lng": -72.268863
    },
    "image": "https://images.unsplash.com/photo-1502672260561?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 296,
    "name": "74 Gould Road",
    "rent": 1500,
    "distance": 2.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.6617,
      "lng": -72.27554
    },
    "image": "https://images.unsplash.com/photo-1502672260562?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 297,
    "name": "76 Gould Road",
    "rent": 1500,
    "distance": 3.19,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657693,
      "lng": -72.306849
    },
    "image": "https://images.unsplash.com/photo-1502672260563?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 298,
    "name": "77 Gould Road",
    "rent": 1500,
    "distance": 2.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738515,
      "lng": -72.259028
    },
    "image": "https://images.unsplash.com/photo-1502672260564?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 299,
    "name": "78 Gould Road",
    "rent": 1500,
    "distance": 3.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658356,
      "lng": -72.239886
    },
    "image": "https://images.unsplash.com/photo-1502672260565?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 300,
    "name": "79 Gould Road",
    "rent": 1500,
    "distance": 0.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.713413,
      "lng": -72.281159
    },
    "image": "https://images.unsplash.com/photo-1502672260566?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 301,
    "name": "80 Gould Road",
    "rent": 1500,
    "distance": 1.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723744,
      "lng": -72.279645
    },
    "image": "https://images.unsplash.com/photo-1502672260567?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 302,
    "name": "81 Gould Road",
    "rent": 1500,
    "distance": 1.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711349,
      "lng": -72.268205
    },
    "image": "https://images.unsplash.com/photo-1502672260568?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 303,
    "name": "82 Gould Road",
    "rent": 1500,
    "distance": 3.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664658,
      "lng": -72.323323
    },
    "image": "https://images.unsplash.com/photo-1502672260569?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 304,
    "name": "84 Gould Road",
    "rent": 1500,
    "distance": 3.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747107,
      "lng": -72.283258
    },
    "image": "https://images.unsplash.com/photo-1502672260570?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 305,
    "name": "86 Gould Road",
    "rent": 1500,
    "distance": 2.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684323,
      "lng": -72.252611
    },
    "image": "https://images.unsplash.com/photo-1502672260571?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 306,
    "name": "88 Gould Road",
    "rent": 1500,
    "distance": 2.26,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721433,
      "lng": -72.32609
    },
    "image": "https://images.unsplash.com/photo-1502672260572?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 307,
    "name": "90 Gould Road",
    "rent": 1500,
    "distance": 1.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.720776,
      "lng": -72.307572
    },
    "image": "https://images.unsplash.com/photo-1502672260573?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 308,
    "name": "92 Gould Road",
    "rent": 1500,
    "distance": 2.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721314,
      "lng": -72.247288
    },
    "image": "https://images.unsplash.com/photo-1502672260574?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 18,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 309,
    "name": "94 Gould Road",
    "rent": 1500,
    "distance": 2.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729516,
      "lng": -72.319783
    },
    "image": "https://images.unsplash.com/photo-1502672260575?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 310,
    "name": "96 Gould Road, Apt. 1",
    "rent": 1500,
    "distance": 1.44,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693684,
      "lng": -72.315881
    },
    "image": "https://images.unsplash.com/photo-1502672260576?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 311,
    "name": "96 Gould Road, Apt. 2",
    "rent": 1500,
    "distance": 3.79,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.750442,
      "lng": -72.253441
    },
    "image": "https://images.unsplash.com/photo-1502672260577?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 312,
    "name": "96 Gould Road, Apt. 3",
    "rent": 1500,
    "distance": 1.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.682839,
      "lng": -72.289874
    },
    "image": "https://images.unsplash.com/photo-1502672260578?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 313,
    "name": "96 Gould Road, Apt. 4",
    "rent": 1500,
    "distance": 2.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.669149,
      "lng": -72.288687
    },
    "image": "https://images.unsplash.com/photo-1502672260579?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 314,
    "name": "96 Gould Road, Apt. 5",
    "rent": 1500,
    "distance": 3.17,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.659308,
      "lng": -72.312206
    },
    "image": "https://images.unsplash.com/photo-1502672260580?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 315,
    "name": "96 Gould Road, Apt. 6",
    "rent": 1500,
    "distance": 1.37,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.717559,
      "lng": -72.272412
    },
    "image": "https://images.unsplash.com/photo-1502672260581?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 316,
    "name": "100 Gould Road",
    "rent": 1500,
    "distance": 3.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.669521,
      "lng": -72.246523
    },
    "image": "https://images.unsplash.com/photo-1502672260582?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 317,
    "name": "102 Gould Road",
    "rent": 1500,
    "distance": 2.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.674011,
      "lng": -72.318831
    },
    "image": "https://images.unsplash.com/photo-1502672260583?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 318,
    "name": "104 Gould Road",
    "rent": 1500,
    "distance": 2.66,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663933,
      "lng": -72.295009
    },
    "image": "https://images.unsplash.com/photo-1502672260584?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 319,
    "name": "106 Gould Road",
    "rent": 1500,
    "distance": 2.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.665203,
      "lng": -72.268631
    },
    "image": "https://images.unsplash.com/photo-1502672260585?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 320,
    "name": "108 Gould Road",
    "rent": 1500,
    "distance": 3.03,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662584,
      "lng": -72.315598
    },
    "image": "https://images.unsplash.com/photo-1502672260586?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 321,
    "name": "110 Gould Road",
    "rent": 1500,
    "distance": 2.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.737883,
      "lng": -72.297262
    },
    "image": "https://images.unsplash.com/photo-1502672260587?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 322,
    "name": "114 Gould Road",
    "rent": 1500,
    "distance": 2.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.74114,
      "lng": -72.286754
    },
    "image": "https://images.unsplash.com/photo-1502672260588?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 323,
    "name": "116 Gould Road",
    "rent": 1500,
    "distance": 1.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.687151,
      "lng": -72.305734
    },
    "image": "https://images.unsplash.com/photo-1502672260589?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 324,
    "name": "118 Gould Road",
    "rent": 1500,
    "distance": 0.79,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697522,
      "lng": -72.303947
    },
    "image": "https://images.unsplash.com/photo-1502672260590?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 325,
    "name": "120 Gould Road",
    "rent": 1500,
    "distance": 2.44,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70698,
      "lng": -72.241169
    },
    "image": "https://images.unsplash.com/photo-1502672260591?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 326,
    "name": "122 Gould Road",
    "rent": 1500,
    "distance": 2.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731516,
      "lng": -72.321128
    },
    "image": "https://images.unsplash.com/photo-1502672260592?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 327,
    "name": "124 Gould Road",
    "rent": 1500,
    "distance": 4.04,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654067,
      "lng": -72.335329
    },
    "image": "https://images.unsplash.com/photo-1502672260593?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 328,
    "name": "126 Gould Road",
    "rent": 1500,
    "distance": 2.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.725459,
      "lng": -72.338279
    },
    "image": "https://images.unsplash.com/photo-1502672260594?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 329,
    "name": "128 Gould Road",
    "rent": 1500,
    "distance": 1.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699643,
      "lng": -72.319122
    },
    "image": "https://images.unsplash.com/photo-1502672260595?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 330,
    "name": "130 Gould Road",
    "rent": 1500,
    "distance": 1.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71593,
      "lng": -72.30593
    },
    "image": "https://images.unsplash.com/photo-1502672260596?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 331,
    "name": "132 Gould Road",
    "rent": 1500,
    "distance": 2.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.682501,
      "lng": -72.253941
    },
    "image": "https://images.unsplash.com/photo-1502672260597?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 332,
    "name": "134 Gould Road",
    "rent": 1500,
    "distance": 1.62,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.715954,
      "lng": -72.315803
    },
    "image": "https://images.unsplash.com/photo-1502672260598?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 333,
    "name": "136 Gould Road",
    "rent": 1500,
    "distance": 1.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683834,
      "lng": -72.28945
    },
    "image": "https://images.unsplash.com/photo-1502672260599?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 334,
    "name": "1 Haddock Lane",
    "rent": 1500,
    "distance": 2.52,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707395,
      "lng": -72.239663
    },
    "image": "https://images.unsplash.com/photo-1502672260600?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 335,
    "name": "2 Haddock Lane",
    "rent": 1500,
    "distance": 3.3,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.7496,
      "lng": -72.282104
    },
    "image": "https://images.unsplash.com/photo-1502672260601?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 336,
    "name": "3 Haddock Lane",
    "rent": 1500,
    "distance": 3.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.735839,
      "lng": -72.242879
    },
    "image": "https://images.unsplash.com/photo-1502672260602?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 337,
    "name": "4 Haddock Lane",
    "rent": 1500,
    "distance": 2.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723761,
      "lng": -72.328142
    },
    "image": "https://images.unsplash.com/photo-1502672260603?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 338,
    "name": "5 Haddock Lane",
    "rent": 1500,
    "distance": 2.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666989,
      "lng": -72.300665
    },
    "image": "https://images.unsplash.com/photo-1502672260604?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 339,
    "name": "6 Haddock Lane",
    "rent": 1500,
    "distance": 1.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703327,
      "lng": -72.251502
    },
    "image": "https://images.unsplash.com/photo-1502672260605?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 340,
    "name": "7 Haddock Lane",
    "rent": 1500,
    "distance": 3.23,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670496,
      "lng": -72.337026
    },
    "image": "https://images.unsplash.com/photo-1502672260606?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 341,
    "name": "8 Haddock Lane",
    "rent": 1500,
    "distance": 2.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.720232,
      "lng": -72.251048
    },
    "image": "https://images.unsplash.com/photo-1502672260607?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 342,
    "name": "9 Haddock Lane",
    "rent": 1500,
    "distance": 2.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.671762,
      "lng": -72.2485
    },
    "image": "https://images.unsplash.com/photo-1502672260608?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 343,
    "name": "11 Haddock Lane",
    "rent": 1500,
    "distance": 2.46,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711177,
      "lng": -72.241904
    },
    "image": "https://images.unsplash.com/photo-1502672260609?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 344,
    "name": "13 Haddock Lane",
    "rent": 1500,
    "distance": 2.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684735,
      "lng": -72.331283
    },
    "image": "https://images.unsplash.com/photo-1502672260610?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 345,
    "name": "15 Haddock Lane",
    "rent": 1500,
    "distance": 1.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695639,
      "lng": -72.327248
    },
    "image": "https://images.unsplash.com/photo-1502672260611?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 346,
    "name": "17 Haddock Lane",
    "rent": 1500,
    "distance": 3.65,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.743816,
      "lng": -72.244468
    },
    "image": "https://images.unsplash.com/photo-1502672260612?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 347,
    "name": "19 Haddock Lane",
    "rent": 1500,
    "distance": 4.07,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.74888,
      "lng": -72.240004
    },
    "image": "https://images.unsplash.com/photo-1502672260613?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 348,
    "name": "21 Haddock Lane",
    "rent": 1500,
    "distance": 1.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.725103,
      "lng": -72.290864
    },
    "image": "https://images.unsplash.com/photo-1502672260614?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 349,
    "name": "23 Haddock Lane",
    "rent": 1500,
    "distance": 1.71,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.685323,
      "lng": -72.264464
    },
    "image": "https://images.unsplash.com/photo-1502672260615?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 350,
    "name": "2 Ralston Lane",
    "rent": 1500,
    "distance": 3.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.745859,
      "lng": -72.311958
    },
    "image": "https://images.unsplash.com/photo-1502672260616?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 351,
    "name": "4 Ralston Lane",
    "rent": 1500,
    "distance": 1.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.687211,
      "lng": -72.280642
    },
    "image": "https://images.unsplash.com/photo-1502672260617?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 352,
    "name": "6 Ralston Lane",
    "rent": 1500,
    "distance": 2.31,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707718,
      "lng": -72.243994
    },
    "image": "https://images.unsplash.com/photo-1502672260618?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 353,
    "name": "8 Ralston Lane",
    "rent": 1500,
    "distance": 3.8,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.751445,
      "lng": -72.255859
    },
    "image": "https://images.unsplash.com/photo-1502672260619?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 354,
    "name": "10 Ralston Lane",
    "rent": 1500,
    "distance": 0.6,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71092,
      "lng": -72.28954
    },
    "image": "https://images.unsplash.com/photo-1502672260620?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 355,
    "name": "12 Ralston Lane",
    "rent": 1500,
    "distance": 2.29,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.735177,
      "lng": -72.285986
    },
    "image": "https://images.unsplash.com/photo-1502672260621?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 356,
    "name": "14 Ralston Lane",
    "rent": 1500,
    "distance": 2.62,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.73634,
      "lng": -72.266669
    },
    "image": "https://images.unsplash.com/photo-1502672260622?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 357,
    "name": "16 Ralston Lane",
    "rent": 1500,
    "distance": 2.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705342,
      "lng": -72.24754
    },
    "image": "https://images.unsplash.com/photo-1502672260623?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 358,
    "name": "18 Ralston Lane",
    "rent": 1500,
    "distance": 2.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708377,
      "lng": -72.245914
    },
    "image": "https://images.unsplash.com/photo-1502672260624?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 359,
    "name": "20 Ralston Lane",
    "rent": 1500,
    "distance": 1.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690595,
      "lng": -72.257062
    },
    "image": "https://images.unsplash.com/photo-1502672260625?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 360,
    "name": "22 Ralston Lane",
    "rent": 1500,
    "distance": 2.65,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738672,
      "lng": -72.306266
    },
    "image": "https://images.unsplash.com/photo-1502672260626?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 361,
    "name": "24 Ralston Lane",
    "rent": 1500,
    "distance": 2.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727181,
      "lng": -72.24614
    },
    "image": "https://images.unsplash.com/photo-1502672260627?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 362,
    "name": "26 Ralston Lane",
    "rent": 1500,
    "distance": 2.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.72525,
      "lng": -72.257274
    },
    "image": "https://images.unsplash.com/photo-1502672260628?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 363,
    "name": "28 Ralston Lane",
    "rent": 1500,
    "distance": 1.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.730607,
      "lng": -72.295429
    },
    "image": "https://images.unsplash.com/photo-1502672260629?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 364,
    "name": "30 Ralston Lane",
    "rent": 1500,
    "distance": 2.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727148,
      "lng": -72.242168
    },
    "image": "https://images.unsplash.com/photo-1502672260630?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 365,
    "name": "32 Ralston Lane",
    "rent": 1500,
    "distance": 3.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747231,
      "lng": -72.319501
    },
    "image": "https://images.unsplash.com/photo-1502672260631?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 366,
    "name": "34 Ralston Lane",
    "rent": 1500,
    "distance": 3.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655879,
      "lng": -72.269938
    },
    "image": "https://images.unsplash.com/photo-1502672260632?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 367,
    "name": "36 Ralston Lane",
    "rent": 1500,
    "distance": 2.03,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731114,
      "lng": -72.297228
    },
    "image": "https://images.unsplash.com/photo-1502672260633?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 368,
    "name": "38 Ralston Lane",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.665667,
      "lng": -72.330521
    },
    "image": "https://images.unsplash.com/photo-1502672260634?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 369,
    "name": "40 Ralston Lane",
    "rent": 1500,
    "distance": 0.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708189,
      "lng": -72.290423
    },
    "image": "https://images.unsplash.com/photo-1502672260635?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 370,
    "name": "1 Sachem Circle",
    "rent": 1500,
    "distance": 2.73,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673008,
      "lng": -72.252688
    },
    "image": "https://images.unsplash.com/photo-1502672260636?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 371,
    "name": "2 Sachem Circle",
    "rent": 1500,
    "distance": 1.68,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688269,
      "lng": -72.262068
    },
    "image": "https://images.unsplash.com/photo-1502672260637?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 372,
    "name": "3 Sachem Circle",
    "rent": 1500,
    "distance": 3.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657197,
      "lng": -72.294772
    },
    "image": "https://images.unsplash.com/photo-1502672260638?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 373,
    "name": "4 Sachem Circle",
    "rent": 1500,
    "distance": 2.41,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.714956,
      "lng": -72.244678
    },
    "image": "https://images.unsplash.com/photo-1502672260639?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 374,
    "name": "5 Sachem Circle",
    "rent": 1500,
    "distance": 2.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.733333,
      "lng": -72.271481
    },
    "image": "https://images.unsplash.com/photo-1502672260640?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 375,
    "name": "6 Sachem Circle",
    "rent": 1500,
    "distance": 1.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.687408,
      "lng": -72.297361
    },
    "image": "https://images.unsplash.com/photo-1502672260641?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 16,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 376,
    "name": "7 Sachem Circle",
    "rent": 1500,
    "distance": 1.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728194,
      "lng": -72.297573
    },
    "image": "https://images.unsplash.com/photo-1502672260642?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 377,
    "name": "8 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 1.23,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.719942,
      "lng": -72.288516
    },
    "image": "https://images.unsplash.com/photo-1502672260643?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 378,
    "name": "8 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 1.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683735,
      "lng": -72.302469
    },
    "image": "https://images.unsplash.com/photo-1502672260644?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 379,
    "name": "8 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 1.37,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683189,
      "lng": -72.281745
    },
    "image": "https://images.unsplash.com/photo-1502672260645?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 380,
    "name": "8 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 1.83,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702055,
      "lng": -72.252886
    },
    "image": "https://images.unsplash.com/photo-1502672260646?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 381,
    "name": "8 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 2.4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723776,
      "lng": -72.327152
    },
    "image": "https://images.unsplash.com/photo-1502672260647?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 382,
    "name": "8 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 1.71,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694102,
      "lng": -72.257266
    },
    "image": "https://images.unsplash.com/photo-1502672260648?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 383,
    "name": "9 Sachem Circle",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.655352,
      "lng": -72.295385
    },
    "image": "https://images.unsplash.com/photo-1502672260649?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 384,
    "name": "10 Sachem Circle",
    "rent": 1500,
    "distance": 1.47,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695104,
      "lng": -72.317256
    },
    "image": "https://images.unsplash.com/photo-1502672260650?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 385,
    "name": "11 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 2.12,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680372,
      "lng": -72.259783
    },
    "image": "https://images.unsplash.com/photo-1502672260651?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 386,
    "name": "11 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 0.94,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689246,
      "lng": -72.283812
    },
    "image": "https://images.unsplash.com/photo-1502672260652?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 387,
    "name": "11 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 3.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.660346,
      "lng": -72.331693
    },
    "image": "https://images.unsplash.com/photo-1502672260653?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 388,
    "name": "11 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 4.03,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65255,
      "lng": -72.247318
    },
    "image": "https://images.unsplash.com/photo-1502672260654?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 389,
    "name": "11 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 2.95,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675828,
      "lng": -72.243269
    },
    "image": "https://images.unsplash.com/photo-1502672260655?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 390,
    "name": "11 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 2.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.72358,
      "lng": -72.317159
    },
    "image": "https://images.unsplash.com/photo-1502672260656?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 391,
    "name": "12 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 2.37,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731305,
      "lng": -72.264408
    },
    "image": "https://images.unsplash.com/photo-1502672260657?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 392,
    "name": "12 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 1.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703689,
      "lng": -72.318115
    },
    "image": "https://images.unsplash.com/photo-1502672260658?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 393,
    "name": "12 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 2.15,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698592,
      "lng": -72.332344
    },
    "image": "https://images.unsplash.com/photo-1502672260659?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 394,
    "name": "12 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 2.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.719735,
      "lng": -72.256156
    },
    "image": "https://images.unsplash.com/photo-1502672260660?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 395,
    "name": "12 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 1.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.722475,
      "lng": -72.270817
    },
    "image": "https://images.unsplash.com/photo-1502672260661?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 15,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 396,
    "name": "12 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 2.83,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.73227,
      "lng": -72.251264
    },
    "image": "https://images.unsplash.com/photo-1502672260662?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 22,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 397,
    "name": "12 Sachem Circle, Apt. 7",
    "rent": 1500,
    "distance": 2.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.734129,
      "lng": -72.288906
    },
    "image": "https://images.unsplash.com/photo-1502672260663?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 398,
    "name": "12 Sachem Circle, Apt. 8",
    "rent": 1500,
    "distance": 1.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.724844,
      "lng": -72.293424
    },
    "image": "https://images.unsplash.com/photo-1502672260664?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 399,
    "name": "13 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 2.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.726104,
      "lng": -72.314189
    },
    "image": "https://images.unsplash.com/photo-1502672260665?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 400,
    "name": "13 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 1.46,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723284,
      "lng": -72.292008
    },
    "image": "https://images.unsplash.com/photo-1502672260666?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 401,
    "name": "13 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 1.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705651,
      "lng": -72.263059
    },
    "image": "https://images.unsplash.com/photo-1502672260667?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 402,
    "name": "13 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 1.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675599,
      "lng": -72.283046
    },
    "image": "https://images.unsplash.com/photo-1502672260668?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 403,
    "name": "13 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 2.86,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679254,
      "lng": -72.242072
    },
    "image": "https://images.unsplash.com/photo-1502672260669?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 404,
    "name": "13 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 2.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66022,
      "lng": -72.291664
    },
    "image": "https://images.unsplash.com/photo-1502672260670?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 405,
    "name": "13 Sachem Circle, Apt. 7",
    "rent": 1500,
    "distance": 1.55,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689384,
      "lng": -72.314967
    },
    "image": "https://images.unsplash.com/photo-1502672260671?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 25,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 406,
    "name": "13 Sachem Circle, Apt. 8",
    "rent": 1500,
    "distance": 2.51,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666232,
      "lng": -72.296431
    },
    "image": "https://images.unsplash.com/photo-1502672260672?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 407,
    "name": "14 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 2.88,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.674488,
      "lng": -72.332617
    },
    "image": "https://images.unsplash.com/photo-1502672260673?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 408,
    "name": "14 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 2.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.722739,
      "lng": -72.338058
    },
    "image": "https://images.unsplash.com/photo-1502672260674?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 409,
    "name": "14 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 3.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654003,
      "lng": -72.255125
    },
    "image": "https://images.unsplash.com/photo-1502672260675?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 410,
    "name": "14 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 3.72,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749697,
      "lng": -72.254652
    },
    "image": "https://images.unsplash.com/photo-1502672260676?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 411,
    "name": "14 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 3.51,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.652969,
      "lng": -72.272147
    },
    "image": "https://images.unsplash.com/photo-1502672260677?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 412,
    "name": "14 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 3.99,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749978,
      "lng": -72.244793
    },
    "image": "https://images.unsplash.com/photo-1502672260678?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 413,
    "name": "14 Sachem Circle, Apt. 7",
    "rent": 1500,
    "distance": 2.6,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666936,
      "lng": -72.30779
    },
    "image": "https://images.unsplash.com/photo-1502672260679?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 414,
    "name": "14 Sachem Circle, Apt. 8",
    "rent": 1500,
    "distance": 1.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703563,
      "lng": -72.251052
    },
    "image": "https://images.unsplash.com/photo-1502672260680?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 13,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 415,
    "name": "15 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 2.48,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680709,
      "lng": -72.249899
    },
    "image": "https://images.unsplash.com/photo-1502672260681?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 416,
    "name": "15 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 2.23,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727907,
      "lng": -72.262493
    },
    "image": "https://images.unsplash.com/photo-1502672260682?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 417,
    "name": "15 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747297,
      "lng": -72.271235
    },
    "image": "https://images.unsplash.com/photo-1502672260683?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 418,
    "name": "15 Sachem Circle, Apt. 4",
    "rent": 1500,
    "distance": 2.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.726019,
      "lng": -72.244797
    },
    "image": "https://images.unsplash.com/photo-1502672260684?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 419,
    "name": "15 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 2.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.667255,
      "lng": -72.277128
    },
    "image": "https://images.unsplash.com/photo-1502672260685?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 420,
    "name": "15 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 2.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.724024,
      "lng": -72.321687
    },
    "image": "https://images.unsplash.com/photo-1502672260686?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 421,
    "name": "15 Sachem Circle, Apt. 7",
    "rent": 1500,
    "distance": 2.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.717648,
      "lng": -72.249839
    },
    "image": "https://images.unsplash.com/photo-1502672260687?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 11,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 422,
    "name": "15 Sachem Circle, Apt. 8",
    "rent": 1500,
    "distance": 2.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718188,
      "lng": -72.329434
    },
    "image": "https://images.unsplash.com/photo-1502672260688?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 423,
    "name": "22 Sachem Circle",
    "rent": 1500,
    "distance": 2.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690509,
      "lng": -72.24847
    },
    "image": "https://images.unsplash.com/photo-1502672260689?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 28,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 424,
    "name": "23 Sachem Circle",
    "rent": 1500,
    "distance": 0.68,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69681,
      "lng": -72.300905
    },
    "image": "https://images.unsplash.com/photo-1502672260690?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 425,
    "name": "24 Sachem Circle",
    "rent": 1500,
    "distance": 2.36,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.678169,
      "lng": -72.323042
    },
    "image": "https://images.unsplash.com/photo-1502672260691?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 426,
    "name": "25 Sachem Circle",
    "rent": 1500,
    "distance": 3.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664779,
      "lng": -72.326073
    },
    "image": "https://images.unsplash.com/photo-1502672260692?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 427,
    "name": "26 Sachem Circle",
    "rent": 1500,
    "distance": 3.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.656,
      "lng": -72.297192
    },
    "image": "https://images.unsplash.com/photo-1502672260693?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 428,
    "name": "27 Sachem Circle",
    "rent": 1500,
    "distance": 2.71,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663381,
      "lng": -72.281232
    },
    "image": "https://images.unsplash.com/photo-1502672260694?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 429,
    "name": "28 Sachem Circle",
    "rent": 1500,
    "distance": 0.57,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697623,
      "lng": -72.280181
    },
    "image": "https://images.unsplash.com/photo-1502672260695?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 29,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 430,
    "name": "29 Sachem Circle",
    "rent": 1500,
    "distance": 0.27,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701379,
      "lng": -72.294933
    },
    "image": "https://images.unsplash.com/photo-1502672260696?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 431,
    "name": "30 Sachem Circle",
    "rent": 1500,
    "distance": 1.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.696614,
      "lng": -72.254197
    },
    "image": "https://images.unsplash.com/photo-1502672260697?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 21,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 432,
    "name": "31 Sachem Circle",
    "rent": 1500,
    "distance": 2.1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.693468,
      "lng": -72.249434
    },
    "image": "https://images.unsplash.com/photo-1502672260698?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 433,
    "name": "32 Sachem Circle",
    "rent": 1500,
    "distance": 3.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.752034,
      "lng": -72.306362
    },
    "image": "https://images.unsplash.com/photo-1502672260699?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 434,
    "name": "33 Sachem Circle",
    "rent": 1500,
    "distance": 2.1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.719292,
      "lng": -72.324464
    },
    "image": "https://images.unsplash.com/photo-1502672260700?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 435,
    "name": "34 Sachem Circle",
    "rent": 1500,
    "distance": 2.22,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.715012,
      "lng": -72.330433
    },
    "image": "https://images.unsplash.com/photo-1502672260701?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 436,
    "name": "35 Sachem Circle",
    "rent": 1500,
    "distance": 2.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.721268,
      "lng": -72.245665
    },
    "image": "https://images.unsplash.com/photo-1502672260702?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 437,
    "name": "36 Sachem CIrcle",
    "rent": 1500,
    "distance": 3.28,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670941,
      "lng": -72.338946
    },
    "image": "https://images.unsplash.com/photo-1502672260703?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 438,
    "name": "37 Sachem Circle",
    "rent": 1500,
    "distance": 1.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709167,
      "lng": -72.326728
    },
    "image": "https://images.unsplash.com/photo-1502672260704?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 439,
    "name": "38 Sachem Circle",
    "rent": 1500,
    "distance": 1.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.723495,
      "lng": -72.294314
    },
    "image": "https://images.unsplash.com/photo-1502672260705?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 23,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 440,
    "name": "39 Sachem Circle",
    "rent": 1500,
    "distance": 0.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701267,
      "lng": -72.292626
    },
    "image": "https://images.unsplash.com/photo-1502672260706?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 441,
    "name": "40 Sachem Circle",
    "rent": 1500,
    "distance": 3.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657583,
      "lng": -72.32782
    },
    "image": "https://images.unsplash.com/photo-1502672260707?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 442,
    "name": "41 Sachem Circle",
    "rent": 1500,
    "distance": 3.05,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.746394,
      "lng": -72.289127
    },
    "image": "https://images.unsplash.com/photo-1502672260708?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 37,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 443,
    "name": "42 Sachem Circle",
    "rent": 1500,
    "distance": 2.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731814,
      "lng": -72.280724
    },
    "image": "https://images.unsplash.com/photo-1502672260709?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 444,
    "name": "43 Sachem Circle",
    "rent": 1500,
    "distance": 2.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.669094,
      "lng": -72.259161
    },
    "image": "https://images.unsplash.com/photo-1502672260710?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 34,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 445,
    "name": "44 Sachem Circle",
    "rent": 1500,
    "distance": 2.76,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.741524,
      "lng": -72.298729
    },
    "image": "https://images.unsplash.com/photo-1502672260711?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 446,
    "name": "45 Sachem Circle",
    "rent": 1500,
    "distance": 0.96,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70104,
      "lng": -72.270419
    },
    "image": "https://images.unsplash.com/photo-1502672260712?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 447,
    "name": "46 Sachem Circle",
    "rent": 1500,
    "distance": 2.09,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.720086,
      "lng": -72.255914
    },
    "image": "https://images.unsplash.com/photo-1502672260713?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 36,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 448,
    "name": "47 Sachem Circle",
    "rent": 1500,
    "distance": 2.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.743368,
      "lng": -72.296997
    },
    "image": "https://images.unsplash.com/photo-1502672260714?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 449,
    "name": "48 Sachem Circle",
    "rent": 1500,
    "distance": 1.75,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688816,
      "lng": -72.259794
    },
    "image": "https://images.unsplash.com/photo-1502672260715?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 12,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 450,
    "name": "49 Sachem Circle",
    "rent": 1500,
    "distance": 3.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.743785,
      "lng": -72.331071
    },
    "image": "https://images.unsplash.com/photo-1502672260716?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 32,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 451,
    "name": "50 Sachem Circle",
    "rent": 1500,
    "distance": 2.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.735963,
      "lng": -72.268343
    },
    "image": "https://images.unsplash.com/photo-1502672260717?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 452,
    "name": "51 Sachem Circle",
    "rent": 1500,
    "distance": 2.97,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.744365,
      "lng": -72.301214
    },
    "image": "https://images.unsplash.com/photo-1502672260718?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 453,
    "name": "52 Sachem Circle",
    "rent": 1500,
    "distance": 2.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705573,
      "lng": -72.239686
    },
    "image": "https://images.unsplash.com/photo-1502672260719?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 26,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 454,
    "name": "53 Sachem Circle",
    "rent": 1500,
    "distance": 2.69,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.685522,
      "lng": -72.338247
    },
    "image": "https://images.unsplash.com/photo-1502672260720?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 39,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 455,
    "name": "54 Sachem Circle",
    "rent": 1500,
    "distance": 0.81,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690554,
      "lng": -72.290233
    },
    "image": "https://images.unsplash.com/photo-1502672260721?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 27,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 456,
    "name": "55 Sachem Circle",
    "rent": 1500,
    "distance": 1.95,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718356,
      "lng": -72.257624
    },
    "image": "https://images.unsplash.com/photo-1502672260722?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 19,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 457,
    "name": "56 Sachem Circle",
    "rent": 1500,
    "distance": 3.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.750338,
      "lng": -72.26034
    },
    "image": "https://images.unsplash.com/photo-1502672260723?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 38,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 458,
    "name": "57 Sachem Circle",
    "rent": 1500,
    "distance": 1.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.686383,
      "lng": -72.294946
    },
    "image": "https://images.unsplash.com/photo-1502672260724?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 31,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 459,
    "name": "58 Sachem Circle",
    "rent": 1500,
    "distance": 3.36,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748394,
      "lng": -72.268626
    },
    "image": "https://images.unsplash.com/photo-1502672260725?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 33,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 460,
    "name": "59 Sachem Circle",
    "rent": 1500,
    "distance": 1.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702771,
      "lng": -72.26323
    },
    "image": "https://images.unsplash.com/photo-1502672260726?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 24,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 461,
    "name": "60 Sachem Circle",
    "rent": 1500,
    "distance": 1.48,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718321,
      "lng": -72.270022
    },
    "image": "https://images.unsplash.com/photo-1502672260727?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 17,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 462,
    "name": "61 Sachem Circle",
    "rent": 1500,
    "distance": 1.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728613,
      "lng": -72.299119
    },
    "image": "https://images.unsplash.com/photo-1502672260728?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 10,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 463,
    "name": "62 Sachem Circle",
    "rent": 1500,
    "distance": 3.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662454,
      "lng": -72.324219
    },
    "image": "https://images.unsplash.com/photo-1502672260729?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 35,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 464,
    "name": "63 Sachem Circle",
    "rent": 1500,
    "distance": 0.23,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705423,
      "lng": -72.288572
    },
    "image": "https://images.unsplash.com/photo-1502672260730?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 20,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 465,
    "name": "64 Sachem Circle",
    "rent": 1500,
    "distance": 3.43,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.740527,
      "lng": -72.333396
    },
    "image": "https://images.unsplash.com/photo-1502672260731?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 14,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  },
  {
    "id": 466,
    "name": "65 Sachem Circle",
    "rent": 1500,
    "distance": 1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711632,
      "lng": -72.304655
    },
    "image": "https://images.unsplash.com/photo-1502672260732?w=800",
    "neighborhood": "Sachem Village",
    "studentCount": 30,
    "atmosphere": "quiet",
    "nearbySchools": [
      "Dartmouth College"
    ],
    "utilities": {
      "supermarkets": [
        "Hannaford",
        "Price Chopper"
      ],
      "gyms": [
        "Dartmouth Gym",
        "Alumni Gym"
      ],
      "restaurants": [
        "Collis Center",
        "Hop"
      ],
      "publicTransport": [
        "Dartmouth Shuttle",
        "Advance Transit"
      ]
    }
  }
];

export const trendData = [
  { month: "Jan", avgRent: 1150 },
  { month: "Feb", avgRent: 1175 },
  { month: "Mar", avgRent: 1200 },
  { month: "Apr", avgRent: 1225 },
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

export const neighborhoods = [
  { name: "Hanover", description: "Premium location closest to Dartmouth campus", averageRent: 1967, studentDensity: "very high", atmosphere: "social" },
  { name: "Lebanon", description: "Affordable and quiet residential area", averageRent: 1420, studentDensity: "medium", atmosphere: "quiet" },
  { name: "Norwich", description: "Scenic Vermont town across the river", averageRent: 1685, studentDensity: "low", atmosphere: "quiet" },
  { name: "West Lebanon", description: "Budget-friendly with shopping nearby", averageRent: 1238, studentDensity: "high", atmosphere: "mixed" }
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
