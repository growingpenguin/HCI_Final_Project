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
    "distance": 2.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.662726,
      "lng": -72.274091
    },
    "image": "https://images.unsplash.com/photo-1502672260267?w=800",
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
    "id": 2,
    "name": 5,
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
      "lat": 43.751181,
      "lng": -72.272555
    },
    "image": "https://images.unsplash.com/photo-1502672260268?w=800",
    "neighborhood": "Hanover",
    "studentCount": 29,
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
      "lat": 43.748004,
      "lng": -72.338319
    },
    "image": "https://images.unsplash.com/photo-1502672260269?w=800",
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
    "id": 4,
    "name": "1 N. Park St - 1N",
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
      "lat": 43.708036,
      "lng": -72.320218
    },
    "image": "https://images.unsplash.com/photo-1502672260270?w=800",
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
    "id": 5,
    "name": "1 N. Park St - 1S",
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
      "lat": 43.741315,
      "lng": -72.294446
    },
    "image": "https://images.unsplash.com/photo-1502672260271?w=800",
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
    "id": 6,
    "name": "1 N. Park St - 2N",
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
      "lat": 43.681519,
      "lng": -72.301502
    },
    "image": "https://images.unsplash.com/photo-1502672260272?w=800",
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
    "id": 7,
    "name": "1 N. Park St -2S",
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
      "lat": 43.742137,
      "lng": -72.277389
    },
    "image": "https://images.unsplash.com/photo-1502672260273?w=800",
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
    "id": 8,
    "name": "1 N. Park St Apt 5",
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
      "lat": 43.707201,
      "lng": -72.249706
    },
    "image": "https://images.unsplash.com/photo-1502672260274?w=800",
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
    "id": 9,
    "name": "1 S. Park St-Apt A",
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
      "lat": 43.731196,
      "lng": -72.241466
    },
    "image": "https://images.unsplash.com/photo-1502672260275?w=800",
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
    "id": 10,
    "name": "1 S. Park St-Apt B",
    "rent": 1500,
    "distance": 2.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.691422,
      "lng": -72.3364
    },
    "image": "https://images.unsplash.com/photo-1502672260276?w=800",
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
    "id": 11,
    "name": "1 S. Park St-Apt C",
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
      "lat": 43.716328,
      "lng": -72.244437
    },
    "image": "https://images.unsplash.com/photo-1502672260277?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 12,
    "name": "1 S. Park St-Apt D",
    "rent": 1500,
    "distance": 3.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663379,
      "lng": -72.247094
    },
    "image": "https://images.unsplash.com/photo-1502672260278?w=800",
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
    "id": 13,
    "name": "1 S. Park St -Apt E",
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
      "lat": 43.715845,
      "lng": -72.311927
    },
    "image": "https://images.unsplash.com/photo-1502672260279?w=800",
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
    "id": 14,
    "name": "1 Sanborn Rd Apt 1",
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
      "lat": 43.652753,
      "lng": -72.268188
    },
    "image": "https://images.unsplash.com/photo-1502672260280?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 15,
    "name": "1 Sanborn Rd Apt 2",
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
      "lat": 43.708532,
      "lng": -72.310399
    },
    "image": "https://images.unsplash.com/photo-1502672260281?w=800",
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
    "id": 16,
    "name": "1 Sanborn Rd Apt 3",
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
      "lat": 43.667205,
      "lng": -72.280573
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
    "distance": 3.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.666009,
      "lng": -72.250164
    },
    "image": "https://images.unsplash.com/photo-1502672260283?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 18,
    "name": "1 South St (Apts 204) - VP",
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
      "lat": 43.737009,
      "lng": -72.33488
    },
    "image": "https://images.unsplash.com/photo-1502672260284?w=800",
    "neighborhood": "South Block",
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
    "id": 19,
    "name": "1 South St (Apts 206) - VP",
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
      "lat": 43.693752,
      "lng": -72.329428
    },
    "image": "https://images.unsplash.com/photo-1502672260285?w=800",
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
    "id": 20,
    "name": "1 South St (Apts 207) - VP",
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
      "lat": 43.654838,
      "lng": -72.28163
    },
    "image": "https://images.unsplash.com/photo-1502672260286?w=800",
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
    "id": 21,
    "name": "1 South St (Apts 205) - VP",
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
      "lat": 43.686197,
      "lng": -72.263121
    },
    "image": "https://images.unsplash.com/photo-1502672260287?w=800",
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
    "id": 22,
    "name": "1 South St (Apts 208) - VP",
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
      "lat": 43.664283,
      "lng": -72.247769
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
      "lat": 43.657113,
      "lng": -72.282739
    },
    "image": "https://images.unsplash.com/photo-1502672260289?w=800",
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
    "id": 24,
    "name": "1 South St (Apts 210) - VP",
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
      "lat": 43.721543,
      "lng": -72.263336
    },
    "image": "https://images.unsplash.com/photo-1502672260290?w=800",
    "neighborhood": "South Block",
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
    "id": 25,
    "name": "1 South St (Apts 211) - VP",
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
      "lat": 43.726992,
      "lng": -72.278751
    },
    "image": "https://images.unsplash.com/photo-1502672260291?w=800",
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
    "id": 26,
    "name": "1 South St Apt 201",
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
      "lat": 43.726284,
      "lng": -72.247535
    },
    "image": "https://images.unsplash.com/photo-1502672260292?w=800",
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
    "id": 27,
    "name": "1 South St Apt 202",
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
      "lat": 43.743767,
      "lng": -72.291332
    },
    "image": "https://images.unsplash.com/photo-1502672260293?w=800",
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
    "id": 28,
    "name": "1 South St Apt 203",
    "rent": 1500,
    "distance": 2.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.743355,
      "lng": -72.293098
    },
    "image": "https://images.unsplash.com/photo-1502672260294?w=800",
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
    "id": 29,
    "name": "1 South St Apt 301",
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
      "lat": 43.653105,
      "lng": -72.307745
    },
    "image": "https://images.unsplash.com/photo-1502672260295?w=800",
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
    "id": 30,
    "name": "1 South St Apt 302",
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
      "lat": 43.72971,
      "lng": -72.290094
    },
    "image": "https://images.unsplash.com/photo-1502672260296?w=800",
    "neighborhood": "South Block",
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
    "id": 31,
    "name": "1 South St Apt 303",
    "rent": 1500,
    "distance": 0.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703304,
      "lng": -72.309098
    },
    "image": "https://images.unsplash.com/photo-1502672260297?w=800",
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
    "id": 32,
    "name": "1 South St Apt 304",
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
      "lat": 43.677466,
      "lng": -72.293235
    },
    "image": "https://images.unsplash.com/photo-1502672260298?w=800",
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
    "id": 33,
    "name": "1 South St Apt 305",
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
      "lat": 43.675211,
      "lng": -72.299799
    },
    "image": "https://images.unsplash.com/photo-1502672260299?w=800",
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
    "id": 34,
    "name": "1 South St Apt 306",
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
      "lat": 43.706829,
      "lng": -72.246689
    },
    "image": "https://images.unsplash.com/photo-1502672260300?w=800",
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
    "id": 35,
    "name": "1 South St Apt 307",
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
      "lat": 43.690946,
      "lng": -72.251024
    },
    "image": "https://images.unsplash.com/photo-1502672260301?w=800",
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
    "id": 36,
    "name": "1 South St Apt 308",
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
      "lat": 43.699363,
      "lng": -72.257459
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
      "lat": 43.688755,
      "lng": -72.32283
    },
    "image": "https://images.unsplash.com/photo-1502672260303?w=800",
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
    "id": 38,
    "name": "1 South St Apt 310",
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
      "lat": 43.729305,
      "lng": -72.25526
    },
    "image": "https://images.unsplash.com/photo-1502672260304?w=800",
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
    "id": 39,
    "name": "1 South St Apt 311",
    "rent": 1500,
    "distance": 2.39,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.728555,
      "lng": -72.258603
    },
    "image": "https://images.unsplash.com/photo-1502672260305?w=800",
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
    "id": 40,
    "name": "1 South St Apt 401",
    "rent": 1500,
    "distance": 3.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.656673,
      "lng": -72.33165
    },
    "image": "https://images.unsplash.com/photo-1502672260306?w=800",
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
    "id": 41,
    "name": "1 South St Apt 402",
    "rent": 1500,
    "distance": 0.44,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699895,
      "lng": -72.281477
    },
    "image": "https://images.unsplash.com/photo-1502672260307?w=800",
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
    "id": 42,
    "name": "10 Valley Rd Unit 1",
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
      "lat": 43.704001,
      "lng": -72.248039
    },
    "image": "https://images.unsplash.com/photo-1502672260308?w=800",
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
    "id": 43,
    "name": "10 Valley Rd Unit 2",
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
      "lat": 43.654129,
      "lng": -72.314087
    },
    "image": "https://images.unsplash.com/photo-1502672260309?w=800",
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
    "id": 44,
    "name": "13 Lyme Rd",
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
      "lat": 43.751892,
      "lng": -72.293736
    },
    "image": "https://images.unsplash.com/photo-1502672260310?w=800",
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
    "id": 45,
    "name": "1 S. Balch St",
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
      "lat": 43.715328,
      "lng": -72.313173
    },
    "image": "https://images.unsplash.com/photo-1502672260311?w=800",
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
    "id": 46,
    "name": "3 S. Balch St.",
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
      "lat": 43.721518,
      "lng": -72.287965
    },
    "image": "https://images.unsplash.com/photo-1502672260312?w=800",
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
    "id": 47,
    "name": "13 Summer St",
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
      "lat": 43.69108,
      "lng": -72.316775
    },
    "image": "https://images.unsplash.com/photo-1502672260313?w=800",
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
    "id": 48,
    "name": "13 Teagan Ave",
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
      "lat": 43.715878,
      "lng": -72.326362
    },
    "image": "https://images.unsplash.com/photo-1502672260314?w=800",
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
    "id": 49,
    "name": "14 Valley Rd",
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
      "lat": 43.697148,
      "lng": -72.307552
    },
    "image": "https://images.unsplash.com/photo-1502672260315?w=800",
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
    "id": 50,
    "name": "16 Valley Rd",
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
      "lat": 43.681991,
      "lng": -72.307018
    },
    "image": "https://images.unsplash.com/photo-1502672260316?w=800",
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
    "id": 51,
    "name": "17 W. Wheelock St -A",
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
      "lat": 43.743501,
      "lng": -72.276769
    },
    "image": "https://images.unsplash.com/photo-1502672260317?w=800",
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
    "id": 52,
    "name": "17 W. Wheelock St -B",
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
      "lat": 43.665314,
      "lng": -72.266218
    },
    "image": "https://images.unsplash.com/photo-1502672260318?w=800",
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
    "id": 53,
    "name": "17 W. Wheelock St - C",
    "rent": 1500,
    "distance": 3.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.745052,
      "lng": -72.336607
    },
    "image": "https://images.unsplash.com/photo-1502672260319?w=800",
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
    "id": 54,
    "name": "17 W. Wheelock St - D",
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
      "lat": 43.66334,
      "lng": -72.256755
    },
    "image": "https://images.unsplash.com/photo-1502672260320?w=800",
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
    "id": 55,
    "name": "17 W. Wheelock St -E",
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
      "lat": 43.655935,
      "lng": -72.303727
    },
    "image": "https://images.unsplash.com/photo-1502672260321?w=800",
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
    "id": 56,
    "name": "17 W. Wheelock St - F",
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
      "lat": 43.675772,
      "lng": -72.253694
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
    "distance": 1.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.71399,
      "lng": -72.319502
    },
    "image": "https://images.unsplash.com/photo-1502672260323?w=800",
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
    "id": 58,
    "name": "17 W. Wheelock St - H",
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
      "lat": 43.667618,
      "lng": -72.244782
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
    "distance": 2.01,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694922,
      "lng": -72.328554
    },
    "image": "https://images.unsplash.com/photo-1502672260325?w=800",
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
    "id": 60,
    "name": "17 W. Wheelock St -J",
    "rent": 1500,
    "distance": 2.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66256,
      "lng": -72.305623
    },
    "image": "https://images.unsplash.com/photo-1502672260326?w=800",
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
    "id": 61,
    "name": "17 W. Wheelock St Apt K",
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
      "lat": 43.652605,
      "lng": -72.279038
    },
    "image": "https://images.unsplash.com/photo-1502672260327?w=800",
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
    "id": 62,
    "name": "17 W. Wheelock St Apt L",
    "rent": 1500,
    "distance": 2.04,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694539,
      "lng": -72.328967
    },
    "image": "https://images.unsplash.com/photo-1502672260328?w=800",
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
    "id": 63,
    "name": "17  Valley Rd",
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
      "lat": 43.720885,
      "lng": -72.313538
    },
    "image": "https://images.unsplash.com/photo-1502672260329?w=800",
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
    "id": 64,
    "name": "19  Valley Rd",
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
      "lat": 43.681067,
      "lng": -72.287804
    },
    "image": "https://images.unsplash.com/photo-1502672260330?w=800",
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
    "id": 65,
    "name": "19 W. Wheelock St - 1W",
    "rent": 1500,
    "distance": 3.01,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.741403,
      "lng": -72.263124
    },
    "image": "https://images.unsplash.com/photo-1502672260331?w=800",
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
    "id": 66,
    "name": "19 W. Wheelock St - 1E",
    "rent": 1500,
    "distance": 0.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712129,
      "lng": -72.278237
    },
    "image": "https://images.unsplash.com/photo-1502672260332?w=800",
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
    "id": 67,
    "name": "19 W. Wheelock St - 2W",
    "rent": 1500,
    "distance": 0.25,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705044,
      "lng": -72.292534
    },
    "image": "https://images.unsplash.com/photo-1502672260333?w=800",
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
    "id": 68,
    "name": "19 W. Wheelock St- 2E",
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
      "lat": 43.72824,
      "lng": -72.290057
    },
    "image": "https://images.unsplash.com/photo-1502672260334?w=800",
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
    "id": 69,
    "name": "19 W. Wheelock St Apt 3E ",
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
      "lat": 43.671043,
      "lng": -72.249266
    },
    "image": "https://images.unsplash.com/photo-1502672260335?w=800",
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
    "id": 70,
    "name": "19 W. Wheelock St Apt 3W",
    "rent": 1500,
    "distance": 1.96,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69053,
      "lng": -72.253929
    },
    "image": "https://images.unsplash.com/photo-1502672260336?w=800",
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
    "id": 71,
    "name": "2 S. Balch St - A",
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
      "lat": 43.751964,
      "lng": -72.291075
    },
    "image": "https://images.unsplash.com/photo-1502672260337?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 72,
    "name": "2 S. Balch St - B",
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
      "lat": 43.715995,
      "lng": -72.279067
    },
    "image": "https://images.unsplash.com/photo-1502672260338?w=800",
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
    "id": 73,
    "name": "21 S. Park St Apt A",
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
      "lat": 43.749014,
      "lng": -72.299798
    },
    "image": "https://images.unsplash.com/photo-1502672260339?w=800",
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
    "id": 74,
    "name": "21 S. Park St Apt B",
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
      "lat": 43.735865,
      "lng": -72.271658
    },
    "image": "https://images.unsplash.com/photo-1502672260340?w=800",
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
    "id": 75,
    "name": "22 E. Wheelock St - A",
    "rent": 1500,
    "distance": 4.01,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.750076,
      "lng": -72.334916
    },
    "image": "https://images.unsplash.com/photo-1502672260341?w=800",
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
    "id": 76,
    "name": "22 E. Wheelock St -B",
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
      "lat": 43.74226,
      "lng": -72.331017
    },
    "image": "https://images.unsplash.com/photo-1502672260342?w=800",
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
    "id": 77,
    "name": "22 E. Wheelock St Apt C",
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
      "lat": 43.733072,
      "lng": -72.335214
    },
    "image": "https://images.unsplash.com/photo-1502672260343?w=800",
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
    "id": 78,
    "name": "23 S. Park St -1",
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
      "lat": 43.659634,
      "lng": -72.325111
    },
    "image": "https://images.unsplash.com/photo-1502672260344?w=800",
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
    "id": 79,
    "name": "23 S. Park St -2",
    "rent": 1500,
    "distance": 3.68,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.742388,
      "lng": -72.338032
    },
    "image": "https://images.unsplash.com/photo-1502672260345?w=800",
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
    "id": 80,
    "name": "23 S. Park St -3",
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
      "lat": 43.71087,
      "lng": -72.284602
    },
    "image": "https://images.unsplash.com/photo-1502672260346?w=800",
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
    "id": 81,
    "name": "23 S. Park St -4",
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
      "lat": 43.671622,
      "lng": -72.247949
    },
    "image": "https://images.unsplash.com/photo-1502672260347?w=800",
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
    "id": 82,
    "name": "23 S. Park St -5",
    "rent": 1500,
    "distance": 0.37,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697966,
      "lng": -72.284946
    },
    "image": "https://images.unsplash.com/photo-1502672260348?w=800",
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
    "id": 83,
    "name": "23 S. Park St -6",
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
      "lat": 43.720429,
      "lng": -72.243191
    },
    "image": "https://images.unsplash.com/photo-1502672260349?w=800",
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
    "id": 84,
    "name": "25 Lebanon St Apt 4",
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
      "lat": 43.733861,
      "lng": -72.321782
    },
    "image": "https://images.unsplash.com/photo-1502672260350?w=800",
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
    "id": 85,
    "name": "25 Lebanon St Apt 5",
    "rent": 1500,
    "distance": 3.48,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748187,
      "lng": -72.261309
    },
    "image": "https://images.unsplash.com/photo-1502672260351?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 86,
    "name": "25 Lebanon St Apt 6",
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
      "lat": 43.739757,
      "lng": -72.262887
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
    "distance": 2.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683124,
      "lng": -72.330856
    },
    "image": "https://images.unsplash.com/photo-1502672260353?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 88,
    "name": "25 S. Park St",
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
      "lat": 43.683224,
      "lng": -72.295766
    },
    "image": "https://images.unsplash.com/photo-1502672260354?w=800",
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
    "id": 89,
    "name": "26 E. Wheelock St-A",
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
      "lat": 43.733379,
      "lng": -72.272961
    },
    "image": "https://images.unsplash.com/photo-1502672260355?w=800",
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
    "id": 90,
    "name": "26 E. Wheelock St-B",
    "rent": 1500,
    "distance": 0.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699686,
      "lng": -72.271685
    },
    "image": "https://images.unsplash.com/photo-1502672260356?w=800",
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
    "id": 91,
    "name": "27 S. Park St",
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
      "lat": 43.703812,
      "lng": -72.239673
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
    "distance": 2.04,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.731451,
      "lng": -72.295441
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
      "lat": 43.710146,
      "lng": -72.316142
    },
    "image": "https://images.unsplash.com/photo-1502672260359?w=800",
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
    "id": 94,
    "name": "28 E. Wheelock St Apt W",
    "rent": 1500,
    "distance": 1.38,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.68707,
      "lng": -72.307691
    },
    "image": "https://images.unsplash.com/photo-1502672260360?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 95,
    "name": "29 S. Park St",
    "rent": 1500,
    "distance": 3.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.735443,
      "lng": -72.24126
    },
    "image": "https://images.unsplash.com/photo-1502672260361?w=800",
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
    "id": 96,
    "name": "3 S. Park St -Apt A",
    "rent": 1500,
    "distance": 0.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.710282,
      "lng": -72.290316
    },
    "image": "https://images.unsplash.com/photo-1502672260362?w=800",
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
    "id": 97,
    "name": "3 S. Park St-Apt B",
    "rent": 1500,
    "distance": 1.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.725807,
      "lng": -72.280006
    },
    "image": "https://images.unsplash.com/photo-1502672260363?w=800",
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
    "id": 98,
    "name": "3 Sanborn Rd Apt 1",
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
      "lat": 43.747769,
      "lng": -72.283159
    },
    "image": "https://images.unsplash.com/photo-1502672260364?w=800",
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
    "id": 99,
    "name": "3 Sanborn Rd Apt 2",
    "rent": 1500,
    "distance": 1.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.712255,
      "lng": -72.269725
    },
    "image": "https://images.unsplash.com/photo-1502672260365?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 100,
    "name": "3 Sanborn Rd Apt 3",
    "rent": 1500,
    "distance": 0.4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.698118,
      "lng": -72.295414
    },
    "image": "https://images.unsplash.com/photo-1502672260366?w=800",
    "neighborhood": "Sargent Block",
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
    "id": 101,
    "name": "3 South St Apt A",
    "rent": 1500,
    "distance": 1.51,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.700359,
      "lng": -72.319739
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
    "distance": 2.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.679504,
      "lng": -72.3319
    },
    "image": "https://images.unsplash.com/photo-1502672260368?w=800",
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
    "id": 103,
    "name": "3 South St Apt C",
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
      "lat": 43.673187,
      "lng": -72.259361
    },
    "image": "https://images.unsplash.com/photo-1502672260369?w=800",
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
    "id": 104,
    "name": "3 Valley Rd Apt A ",
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
      "lat": 43.687897,
      "lng": -72.241194
    },
    "image": "https://images.unsplash.com/photo-1502672260370?w=800",
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
    "id": 105,
    "name": "3 Valley Rd Apt B",
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
      "lat": 43.740039,
      "lng": -72.33506
    },
    "image": "https://images.unsplash.com/photo-1502672260371?w=800",
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
    "id": 106,
    "name": "3 Valley Rd Apt C ",
    "rent": 1500,
    "distance": 2.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.732473,
      "lng": -72.281608
    },
    "image": "https://images.unsplash.com/photo-1502672260372?w=800",
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
    "id": 107,
    "name": "3 Valley Rd Apt D",
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
      "lat": 43.746501,
      "lng": -72.31374
    },
    "image": "https://images.unsplash.com/photo-1502672260373?w=800",
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
    "id": 108,
    "name": "4 S. Balch St",
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
      "lat": 43.743881,
      "lng": -72.288242
    },
    "image": "https://images.unsplash.com/photo-1502672260374?w=800",
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
    "id": 109,
    "name": "4 Valley Rd Apt 1",
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
      "lat": 43.722512,
      "lng": -72.259575
    },
    "image": "https://images.unsplash.com/photo-1502672260375?w=800",
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
    "id": 110,
    "name": "4 Valley Rd Apt 2",
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
      "lat": 43.747676,
      "lng": -72.287684
    },
    "image": "https://images.unsplash.com/photo-1502672260376?w=800",
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
    "id": 111,
    "name": "419 Mt. Support Rd",
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
      "lat": 43.723786,
      "lng": -72.330668
    },
    "image": "https://images.unsplash.com/photo-1502672260377?w=800",
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
    "id": 112,
    "name": "44 E. Wheelock St",
    "rent": 1500,
    "distance": 1.02,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.715626,
      "lng": -72.298182
    },
    "image": "https://images.unsplash.com/photo-1502672260378?w=800",
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
    "id": 113,
    "name": "5 S. Park St Apt 1N ",
    "rent": 1500,
    "distance": 2.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.743198,
      "lng": -72.292701
    },
    "image": "https://images.unsplash.com/photo-1502672260379?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 114,
    "name": "5 S. Park St Apt  2N",
    "rent": 1500,
    "distance": 2.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70284,
      "lng": -72.246948
    },
    "image": "https://images.unsplash.com/photo-1502672260380?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 115,
    "name": "5 S. Park St Apt 1S ",
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
      "lat": 43.702033,
      "lng": -72.25356
    },
    "image": "https://images.unsplash.com/photo-1502672260381?w=800",
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
    "id": 116,
    "name": "5 S. Park St Apt  2S",
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
      "lat": 43.660201,
      "lng": -72.32154
    },
    "image": "https://images.unsplash.com/photo-1502672260382?w=800",
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
    "id": 117,
    "name": "5 S. Park St Apt 3",
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
      "lat": 43.67813,
      "lng": -72.284971
    },
    "image": "https://images.unsplash.com/photo-1502672260383?w=800",
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
    "id": 118,
    "name": "5 South St Apt A",
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
      "lat": 43.711365,
      "lng": -72.308087
    },
    "image": "https://images.unsplash.com/photo-1502672260384?w=800",
    "neighborhood": "South Block",
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
    "id": 119,
    "name": "5 South St Apt B",
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
      "lat": 43.66404,
      "lng": -72.295677
    },
    "image": "https://images.unsplash.com/photo-1502672260385?w=800",
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
    "id": 120,
    "name": "5 Teagan Ave",
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
      "lat": 43.718656,
      "lng": -72.266419
    },
    "image": "https://images.unsplash.com/photo-1502672260386?w=800",
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
    "id": 121,
    "name": "5 Valley Rd Apt A ",
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
      "lat": 43.707926,
      "lng": -72.334549
    },
    "image": "https://images.unsplash.com/photo-1502672260387?w=800",
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
    "id": 122,
    "name": "5 Valley Rd Apt B",
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
      "lat": 43.716626,
      "lng": -72.25789
    },
    "image": "https://images.unsplash.com/photo-1502672260388?w=800",
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
    "id": 123,
    "name": "5 Valley Rd Apt C",
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
      "lat": 43.660019,
      "lng": -72.279461
    },
    "image": "https://images.unsplash.com/photo-1502672260389?w=800",
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
    "id": 124,
    "name": "5 Valley Rd Apt  D",
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
      "lat": 43.701303,
      "lng": -72.328927
    },
    "image": "https://images.unsplash.com/photo-1502672260390?w=800",
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
    "id": 125,
    "name": "5 S. Balch St",
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
      "lat": 43.71094,
      "lng": -72.242649
    },
    "image": "https://images.unsplash.com/photo-1502672260391?w=800",
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
    "id": 126,
    "name": "7 S. Balch St",
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
      "lat": 43.667626,
      "lng": -72.273089
    },
    "image": "https://images.unsplash.com/photo-1502672260392?w=800",
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
    "id": 127,
    "name": "6 S. Balch St Apt A",
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
      "lat": 43.671618,
      "lng": -72.290781
    },
    "image": "https://images.unsplash.com/photo-1502672260393?w=800",
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
    "id": 128,
    "name": "6 S. Balch St Apt B",
    "rent": 1500,
    "distance": 1.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688141,
      "lng": -72.256741
    },
    "image": "https://images.unsplash.com/photo-1502672260394?w=800",
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
    "id": 129,
    "name": "7 South St Apt A",
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
      "lat": 43.740305,
      "lng": -72.301955
    },
    "image": "https://images.unsplash.com/photo-1502672260395?w=800",
    "neighborhood": "South Block",
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
    "id": 130,
    "name": "7 South St Apt B",
    "rent": 1500,
    "distance": 3.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.661353,
      "lng": -72.324453
    },
    "image": "https://images.unsplash.com/photo-1502672260396?w=800",
    "neighborhood": "South Block",
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
    "id": 131,
    "name": "7 South St Apt C",
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
      "lat": 43.664025,
      "lng": -72.333373
    },
    "image": "https://images.unsplash.com/photo-1502672260397?w=800",
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
    "id": 132,
    "name": "7 South St Apt D",
    "rent": 1500,
    "distance": 0.49,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.696856,
      "lng": -72.296185
    },
    "image": "https://images.unsplash.com/photo-1502672260398?w=800",
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
    "id": 133,
    "name": "7 South St Apt E",
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
      "lat": 43.719294,
      "lng": -72.334886
    },
    "image": "https://images.unsplash.com/photo-1502672260399?w=800",
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
    "id": 134,
    "name": "7 South St Apt F",
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
      "lat": 43.65618,
      "lng": -72.326212
    },
    "image": "https://images.unsplash.com/photo-1502672260400?w=800",
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
    "id": 135,
    "name": "7 Teagan Ave",
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
      "lat": 43.71342,
      "lng": -72.258568
    },
    "image": "https://images.unsplash.com/photo-1502672260401?w=800",
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
    "id": 136,
    "name": "8 S. Balch St Apt A",
    "rent": 1500,
    "distance": 2.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.683574,
      "lng": -72.323523
    },
    "image": "https://images.unsplash.com/photo-1502672260402?w=800",
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
    "id": 137,
    "name": "8 S. Balch St Apt B",
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
      "lat": 43.718808,
      "lng": -72.318934
    },
    "image": "https://images.unsplash.com/photo-1502672260403?w=800",
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
    "id": 138,
    "name": "8 Valley Rd Apt A",
    "rent": 1500,
    "distance": 1.96,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.72759,
      "lng": -72.307298
    },
    "image": "https://images.unsplash.com/photo-1502672260404?w=800",
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
    "id": 139,
    "name": "8 Valley Rd Apt B",
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
      "lat": 43.68969,
      "lng": -72.302006
    },
    "image": "https://images.unsplash.com/photo-1502672260405?w=800",
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
    "id": 140,
    "name": "9 South St Apt A",
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
      "lat": 43.750048,
      "lng": -72.303842
    },
    "image": "https://images.unsplash.com/photo-1502672260406?w=800",
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
    "id": 141,
    "name": "9 South St Apt B",
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
      "lat": 43.744273,
      "lng": -72.28993
    },
    "image": "https://images.unsplash.com/photo-1502672260407?w=800",
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
    "id": 142,
    "name": "9 South St Apt C",
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
      "lat": 43.679459,
      "lng": -72.338245
    },
    "image": "https://images.unsplash.com/photo-1502672260408?w=800",
    "neighborhood": "South Block",
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
    "id": 143,
    "name": "9 South St Apt D",
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
      "lat": 43.739714,
      "lng": -72.283729
    },
    "image": "https://images.unsplash.com/photo-1502672260409?w=800",
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
    "id": 144,
    "name": "9 S. Balch St",
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
      "lat": 43.670711,
      "lng": -72.300529
    },
    "image": "https://images.unsplash.com/photo-1502672260410?w=800",
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
    "id": 145,
    "name": "11 S. Balch St",
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
      "lat": 43.6851,
      "lng": -72.329065
    },
    "image": "https://images.unsplash.com/photo-1502672260411?w=800",
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
    "id": 146,
    "name": "12 Cedar Dr",
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
      "lat": 43.666561,
      "lng": -72.241086
    },
    "image": "https://images.unsplash.com/photo-1502672260412?w=800",
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
    "id": 147,
    "name": "15 Cedar Dr",
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
      "lat": 43.713238,
      "lng": -72.33693
    },
    "image": "https://images.unsplash.com/photo-1502672260413?w=800",
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
    "id": 148,
    "name": "19 Cedar Dr",
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
      "lat": 43.673707,
      "lng": -72.273053
    },
    "image": "https://images.unsplash.com/photo-1502672260414?w=800",
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
    "id": 149,
    "name": "20 Cedar Dr",
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
      "lat": 43.704533,
      "lng": -72.335074
    },
    "image": "https://images.unsplash.com/photo-1502672260415?w=800",
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
    "id": 150,
    "name": "23 Cedar Dr",
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
      "lat": 43.699359,
      "lng": -72.304163
    },
    "image": "https://images.unsplash.com/photo-1502672260416?w=800",
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
    "id": 151,
    "name": "24 Cedar Dr",
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
      "lat": 43.685546,
      "lng": -72.260224
    },
    "image": "https://images.unsplash.com/photo-1502672260417?w=800",
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
    "id": 152,
    "name": "29 Cedar Dr",
    "rent": 1500,
    "distance": 3.73,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65872,
      "lng": -72.333919
    },
    "image": "https://images.unsplash.com/photo-1502672260418?w=800",
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
    "id": 153,
    "name": "30 Cedar Dr",
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
      "lat": 43.704457,
      "lng": -72.319893
    },
    "image": "https://images.unsplash.com/photo-1502672260419?w=800",
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
    "id": 154,
    "name": "33 Cedar Dr",
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
      "lat": 43.667846,
      "lng": -72.291966
    },
    "image": "https://images.unsplash.com/photo-1502672260420?w=800",
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
    "id": 155,
    "name": "35 Cedar Dr",
    "rent": 1500,
    "distance": 1.05,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.690863,
      "lng": -72.275725
    },
    "image": "https://images.unsplash.com/photo-1502672260421?w=800",
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
    "id": 156,
    "name": "37 Cedar Dr",
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
      "lat": 43.672784,
      "lng": -72.250705
    },
    "image": "https://images.unsplash.com/photo-1502672260422?w=800",
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
    "id": 157,
    "name": "39 Cedar Dr",
    "rent": 1500,
    "distance": 0.83,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711331,
      "lng": -72.300507
    },
    "image": "https://images.unsplash.com/photo-1502672260423?w=800",
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
    "id": 158,
    "name": "43 Cedar Dr",
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
      "lat": 43.673874,
      "lng": -72.252447
    },
    "image": "https://images.unsplash.com/photo-1502672260424?w=800",
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
    "id": 159,
    "name": "1 Fletcher Cir",
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
      "lat": 43.66246,
      "lng": -72.306656
    },
    "image": "https://images.unsplash.com/photo-1502672260425?w=800",
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
    "id": 160,
    "name": "10 Fletcher Cir",
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
      "lat": 43.699904,
      "lng": -72.331696
    },
    "image": "https://images.unsplash.com/photo-1502672260426?w=800",
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
    "id": 161,
    "name": "11 Fletcher Cir",
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
      "lat": 43.665293,
      "lng": -72.24337
    },
    "image": "https://images.unsplash.com/photo-1502672260427?w=800",
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
    "id": 162,
    "name": "13 Fletcher Cir",
    "rent": 1500,
    "distance": 0.82,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697218,
      "lng": -72.274692
    },
    "image": "https://images.unsplash.com/photo-1502672260428?w=800",
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
    "id": 163,
    "name": "15 Fletcher Cir",
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
      "lat": 43.672671,
      "lng": -72.319218
    },
    "image": "https://images.unsplash.com/photo-1502672260429?w=800",
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
    "id": 164,
    "name": "17 Fletcher Cir",
    "rent": 1500,
    "distance": 1.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70266,
      "lng": -72.316161
    },
    "image": "https://images.unsplash.com/photo-1502672260430?w=800",
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
    "id": 165,
    "name": "19 Fletcher Cir",
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
      "lat": 43.729749,
      "lng": -72.305415
    },
    "image": "https://images.unsplash.com/photo-1502672260431?w=800",
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
    "id": 166,
    "name": "2 Fletcher Cir",
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
      "lat": 43.660708,
      "lng": -72.334301
    },
    "image": "https://images.unsplash.com/photo-1502672260432?w=800",
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
    "id": 167,
    "name": "23 Fletcher Cir",
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
      "lat": 43.665173,
      "lng": -72.296329
    },
    "image": "https://images.unsplash.com/photo-1502672260433?w=800",
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
    "id": 168,
    "name": "25 Fletcher Cir",
    "rent": 1500,
    "distance": 3.1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.744199,
      "lng": -72.311662
    },
    "image": "https://images.unsplash.com/photo-1502672260434?w=800",
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
    "id": 169,
    "name": "27 Fletcher Cir",
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
      "lat": 43.65393,
      "lng": -72.252661
    },
    "image": "https://images.unsplash.com/photo-1502672260435?w=800",
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
    "id": 170,
    "name": "29 Fletcher Cir",
    "rent": 1500,
    "distance": 3.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747585,
      "lng": -72.324721
    },
    "image": "https://images.unsplash.com/photo-1502672260436?w=800",
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
    "id": 171,
    "name": "3 Fletcher Cir",
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
      "lat": 43.706448,
      "lng": -72.253288
    },
    "image": "https://images.unsplash.com/photo-1502672260437?w=800",
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
    "id": 172,
    "name": "4 Fletcher Cir",
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
      "lat": 43.716956,
      "lng": -72.257023
    },
    "image": "https://images.unsplash.com/photo-1502672260438?w=800",
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
    "id": 173,
    "name": "5 Fletcher Cir",
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
      "lat": 43.724464,
      "lng": -72.264719
    },
    "image": "https://images.unsplash.com/photo-1502672260439?w=800",
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
    "id": 174,
    "name": "6 Fletcher Cir",
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
      "lat": 43.681485,
      "lng": -72.320275
    },
    "image": "https://images.unsplash.com/photo-1502672260440?w=800",
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
    "id": 175,
    "name": "7 Fletcher Cir",
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
      "lat": 43.71306,
      "lng": -72.300538
    },
    "image": "https://images.unsplash.com/photo-1502672260441?w=800",
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
    "id": 176,
    "name": "8 Fletcher Cir",
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
      "lat": 43.663634,
      "lng": -72.277448
    },
    "image": "https://images.unsplash.com/photo-1502672260442?w=800",
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
    "id": 177,
    "name": "9 Fletcher Cir",
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
      "lat": 43.709517,
      "lng": -72.241268
    },
    "image": "https://images.unsplash.com/photo-1502672260443?w=800",
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
    "id": 178,
    "name": "7 Ivy Lane  101",
    "rent": 1500,
    "distance": 3.61,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654597,
      "lng": -72.319247
    },
    "image": "https://images.unsplash.com/photo-1502672260444?w=800",
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
    "id": 179,
    "name": "9 Ivy Lane Unit  101",
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
      "lat": 43.690096,
      "lng": -72.334223
    },
    "image": "https://images.unsplash.com/photo-1502672260445?w=800",
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
    "id": 180,
    "name": "9 Ivy Lane Unit  102",
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
      "lat": 43.678521,
      "lng": -72.288353
    },
    "image": "https://images.unsplash.com/photo-1502672260446?w=800",
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
    "id": 181,
    "name": "8 N. Park Unit  101",
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
      "lat": 43.748459,
      "lng": -72.310515
    },
    "image": "https://images.unsplash.com/photo-1502672260447?w=800",
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
    "id": 182,
    "name": "8 N. Park Unit  102",
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
      "lat": 43.685235,
      "lng": -72.246909
    },
    "image": "https://images.unsplash.com/photo-1502672260448?w=800",
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
    "id": 183,
    "name": "8 N. Park Unit  103",
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
      "lat": 43.728328,
      "lng": -72.277608
    },
    "image": "https://images.unsplash.com/photo-1502672260449?w=800",
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
    "id": 184,
    "name": "10 N. Park Unit 101",
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
      "lat": 43.735554,
      "lng": -72.276426
    },
    "image": "https://images.unsplash.com/photo-1502672260450?w=800",
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
    "id": 185,
    "name": "10 N. Park Unit  102",
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
      "lat": 43.739393,
      "lng": -72.274078
    },
    "image": "https://images.unsplash.com/photo-1502672260451?w=800",
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
    "id": 186,
    "name": "10 N. Park Unit  201",
    "rent": 1500,
    "distance": 3.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658866,
      "lng": -72.337695
    },
    "image": "https://images.unsplash.com/photo-1502672260452?w=800",
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
    "id": 187,
    "name": "10 N. Park Unit  202",
    "rent": 1500,
    "distance": 0.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.705726,
      "lng": -72.276556
    },
    "image": "https://images.unsplash.com/photo-1502672260453?w=800",
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
    "id": 188,
    "name": "10 N. Park Unit  203",
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
      "lat": 43.728866,
      "lng": -72.32165
    },
    "image": "https://images.unsplash.com/photo-1502672260454?w=800",
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
    "id": 189,
    "name": "12 N. Park Unit  101",
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
      "lat": 43.659482,
      "lng": -72.245965
    },
    "image": "https://images.unsplash.com/photo-1502672260455?w=800",
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
    "id": 190,
    "name": "12 N. Park Unit  102",
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
      "lat": 43.656632,
      "lng": -72.309124
    },
    "image": "https://images.unsplash.com/photo-1502672260456?w=800",
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
    "id": 191,
    "name": "14 N. Park",
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
      "lat": 43.741777,
      "lng": -72.28035
    },
    "image": "https://images.unsplash.com/photo-1502672260457?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 192,
    "name": "14 N. Park",
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
      "lat": 43.714212,
      "lng": -72.336516
    },
    "image": "https://images.unsplash.com/photo-1502672260458?w=800",
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
    "id": 193,
    "name": "16 N. Park Unit  101",
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
      "lat": 43.681936,
      "lng": -72.285946
    },
    "image": "https://images.unsplash.com/photo-1502672260459?w=800",
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
    "id": 194,
    "name": "16 N. Park Unit  102",
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
      "lat": 43.722658,
      "lng": -72.335056
    },
    "image": "https://images.unsplash.com/photo-1502672260460?w=800",
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
    "id": 195,
    "name": "  16 N. Park Unit 201",
    "rent": 1500,
    "distance": 3.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738921,
      "lng": -72.250558
    },
    "image": "https://images.unsplash.com/photo-1502672260461?w=800",
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
    "id": 196,
    "name": "16 N. Park Unit  202",
    "rent": 1500,
    "distance": 4.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.653339,
      "lng": -72.24083
    },
    "image": "https://images.unsplash.com/photo-1502672260462?w=800",
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
    "id": 197,
    "name": "16 N. Park Unit  203",
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
      "lat": 43.726211,
      "lng": -72.251118
    },
    "image": "https://images.unsplash.com/photo-1502672260463?w=800",
    "neighborhood": "Park & Wheelock",
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
    "id": 198,
    "name": "18 N. Park Unit  101",
    "rent": 1500,
    "distance": 3.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654643,
      "lng": -72.260866
    },
    "image": "https://images.unsplash.com/photo-1502672260464?w=800",
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
    "id": 199,
    "name": "18 N. Park Unit  102",
    "rent": 1500,
    "distance": 3.93,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.653306,
      "lng": -72.329805
    },
    "image": "https://images.unsplash.com/photo-1502672260465?w=800",
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
    "id": 200,
    "name": "18 N. Park Unit  103",
    "rent": 1500,
    "distance": 1.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.681308,
      "lng": -72.300469
    },
    "image": "https://images.unsplash.com/photo-1502672260466?w=800",
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
    "id": 201,
    "name": "20 N. Park Unit",
    "rent": 1500,
    "distance": 0.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.706588,
      "lng": -72.280122
    },
    "image": "https://images.unsplash.com/photo-1502672260467?w=800",
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
    "id": 202,
    "name": "20 N. Park Unit",
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
      "lat": 43.685661,
      "lng": -72.265438
    },
    "image": "https://images.unsplash.com/photo-1502672260468?w=800",
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
    "id": 203,
    "name": "20 N. Park Unit",
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
      "lat": 43.675584,
      "lng": -72.304697
    },
    "image": "https://images.unsplash.com/photo-1502672260469?w=800",
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
    "id": 204,
    "name": "22 N. Park Unit  101",
    "rent": 1500,
    "distance": 0.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.696348,
      "lng": -72.306245
    },
    "image": "https://images.unsplash.com/photo-1502672260470?w=800",
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
    "id": 205,
    "name": "22 N. Park Unit  102",
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
      "lat": 43.679343,
      "lng": -72.298296
    },
    "image": "https://images.unsplash.com/photo-1502672260471?w=800",
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
    "id": 206,
    "name": "22 N. Park Unit  201",
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
      "lat": 43.741647,
      "lng": -72.315616
    },
    "image": "https://images.unsplash.com/photo-1502672260472?w=800",
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
    "id": 207,
    "name": "22 N. Park Unit  202",
    "rent": 1500,
    "distance": 1.38,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.697696,
      "lng": -72.262633
    },
    "image": "https://images.unsplash.com/photo-1502672260473?w=800",
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
    "id": 208,
    "name": "22 N. Park Unit  203",
    "rent": 1500,
    "distance": 2.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.673442,
      "lng": -72.307477
    },
    "image": "https://images.unsplash.com/photo-1502672260474?w=800",
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
    "id": 209,
    "name": "24 N. Park Unit  101",
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
      "lat": 43.719575,
      "lng": -72.308338
    },
    "image": "https://images.unsplash.com/photo-1502672260475?w=800",
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
    "id": 210,
    "name": "24 N. Park Unit  102",
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
      "lat": 43.739411,
      "lng": -72.29155
    },
    "image": "https://images.unsplash.com/photo-1502672260476?w=800",
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
    "id": 211,
    "name": "24 N. Park Unit 103",
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
      "lat": 43.738524,
      "lng": -72.249278
    },
    "image": "https://images.unsplash.com/photo-1502672260477?w=800",
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
    "id": 212,
    "name": "1 Drake Lane",
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
      "lat": 43.673314,
      "lng": -72.251065
    },
    "image": "https://images.unsplash.com/photo-1502672260478?w=800",
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
    "id": 213,
    "name": "3 Drake Lane",
    "rent": 1500,
    "distance": 0.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.700501,
      "lng": -72.271538
    },
    "image": "https://images.unsplash.com/photo-1502672260479?w=800",
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
    "id": 214,
    "name": "4 Drake Lane",
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
      "lat": 43.664228,
      "lng": -72.30856
    },
    "image": "https://images.unsplash.com/photo-1502672260480?w=800",
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
    "id": 215,
    "name": "5 Drake Lane",
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
      "lat": 43.721287,
      "lng": -72.290877
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
    "distance": 0.71,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707574,
      "lng": -72.277538
    },
    "image": "https://images.unsplash.com/photo-1502672260482?w=800",
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
    "id": 217,
    "name": "7 Drake Lane",
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
      "lat": 43.715225,
      "lng": -72.33353
    },
    "image": "https://images.unsplash.com/photo-1502672260483?w=800",
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
    "id": 218,
    "name": "8 Drake Lane",
    "rent": 1500,
    "distance": 0.73,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709327,
      "lng": -72.278848
    },
    "image": "https://images.unsplash.com/photo-1502672260484?w=800",
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
    "id": 219,
    "name": "9 Drake Lane",
    "rent": 1500,
    "distance": 1.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.685949,
      "lng": -72.295623
    },
    "image": "https://images.unsplash.com/photo-1502672260485?w=800",
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
    "id": 220,
    "name": "11 Drake Lane",
    "rent": 1500,
    "distance": 2.01,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.692602,
      "lng": -72.25153
    },
    "image": "https://images.unsplash.com/photo-1502672260486?w=800",
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
    "id": 221,
    "name": "13 Drake Lane",
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
      "lat": 43.692444,
      "lng": -72.326217
    },
    "image": "https://images.unsplash.com/photo-1502672260487?w=800",
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
    "id": 222,
    "name": "15 Drake Lane",
    "rent": 1500,
    "distance": 2.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.732343,
      "lng": -72.276729
    },
    "image": "https://images.unsplash.com/photo-1502672260488?w=800",
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
    "id": 223,
    "name": "17 Drake Lane",
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
      "lat": 43.740542,
      "lng": -72.326556
    },
    "image": "https://images.unsplash.com/photo-1502672260489?w=800",
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
    "id": 224,
    "name": "18 Drake Lane",
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
      "lat": 43.708783,
      "lng": -72.247126
    },
    "image": "https://images.unsplash.com/photo-1502672260490?w=800",
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
    "id": 225,
    "name": "19 Drake Lane",
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
      "lat": 43.692233,
      "lng": -72.273286
    },
    "image": "https://images.unsplash.com/photo-1502672260491?w=800",
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
    "id": 226,
    "name": "20 Drake Lane",
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
      "lat": 43.706367,
      "lng": -72.26566
    },
    "image": "https://images.unsplash.com/photo-1502672260492?w=800",
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
    "id": 227,
    "name": "21 Drake Lane",
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
      "lat": 43.749341,
      "lng": -72.280001
    },
    "image": "https://images.unsplash.com/photo-1502672260493?w=800",
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
    "id": 228,
    "name": "22 Drake Lane",
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
      "lat": 43.736535,
      "lng": -72.265183
    },
    "image": "https://images.unsplash.com/photo-1502672260494?w=800",
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
    "id": 229,
    "name": "23 Drake Lane",
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
      "lat": 43.688032,
      "lng": -72.266899
    },
    "image": "https://images.unsplash.com/photo-1502672260495?w=800",
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
    "id": 230,
    "name": "24 Drake Lane",
    "rent": 1500,
    "distance": 0.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709529,
      "lng": -72.304666
    },
    "image": "https://images.unsplash.com/photo-1502672260496?w=800",
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
    "id": 231,
    "name": "25 Drake Lane",
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
      "lat": 43.749657,
      "lng": -72.333179
    },
    "image": "https://images.unsplash.com/photo-1502672260497?w=800",
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
    "id": 232,
    "name": "26 Drake Lane",
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
      "lat": 43.689872,
      "lng": -72.320785
    },
    "image": "https://images.unsplash.com/photo-1502672260498?w=800",
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
    "id": 233,
    "name": "27 Drake Lane",
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
      "lat": 43.743647,
      "lng": -72.246825
    },
    "image": "https://images.unsplash.com/photo-1502672260499?w=800",
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
    "id": 234,
    "name": "28 Drake Lane",
    "rent": 1500,
    "distance": 0.7,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.711763,
      "lng": -72.285168
    },
    "image": "https://images.unsplash.com/photo-1502672260500?w=800",
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
    "id": 235,
    "name": "29 Drake Lane",
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
      "lat": 43.702923,
      "lng": -72.277562
    },
    "image": "https://images.unsplash.com/photo-1502672260501?w=800",
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
    "id": 236,
    "name": "30 Drake Lane",
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
      "lat": 43.713711,
      "lng": -72.325872
    },
    "image": "https://images.unsplash.com/photo-1502672260502?w=800",
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
    "id": 237,
    "name": "31 Drake Lane",
    "rent": 1500,
    "distance": 1.54,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.714767,
      "lng": -72.315012
    },
    "image": "https://images.unsplash.com/photo-1502672260503?w=800",
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
    "id": 238,
    "name": "32 Drake Lane",
    "rent": 1500,
    "distance": 0.38,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707286,
      "lng": -72.292544
    },
    "image": "https://images.unsplash.com/photo-1502672260504?w=800",
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
    "id": 239,
    "name": "33 Drake Lane",
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
      "lat": 43.700472,
      "lng": -72.246745
    },
    "image": "https://images.unsplash.com/photo-1502672260505?w=800",
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
    "id": 240,
    "name": "34 Drake Lane",
    "rent": 1500,
    "distance": 2.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66244,
      "lng": -72.312835
    },
    "image": "https://images.unsplash.com/photo-1502672260506?w=800",
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
    "id": 241,
    "name": "35 Drake Lane",
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
      "lat": 43.710424,
      "lng": -72.247795
    },
    "image": "https://images.unsplash.com/photo-1502672260507?w=800",
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
    "id": 242,
    "name": "36 Drake Lane",
    "rent": 1500,
    "distance": 1.74,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.704136,
      "lng": -72.324354
    },
    "image": "https://images.unsplash.com/photo-1502672260508?w=800",
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
    "id": 243,
    "name": "37 Drake Lane",
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
      "lat": 43.723784,
      "lng": -72.328031
    },
    "image": "https://images.unsplash.com/photo-1502672260509?w=800",
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
    "id": 244,
    "name": "38 Drake Lane",
    "rent": 1500,
    "distance": 1.67,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.694774,
      "lng": -72.257731
    },
    "image": "https://images.unsplash.com/photo-1502672260510?w=800",
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
    "id": 245,
    "name": "39 Drake Lane",
    "rent": 1500,
    "distance": 3.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.749457,
      "lng": -72.261085
    },
    "image": "https://images.unsplash.com/photo-1502672260511?w=800",
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
    "id": 246,
    "name": "40 Drake Lane",
    "rent": 1500,
    "distance": 1.16,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709737,
      "lng": -72.310376
    },
    "image": "https://images.unsplash.com/photo-1502672260512?w=800",
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
    "id": 247,
    "name": "41 Drake Lane",
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
      "lat": 43.654177,
      "lng": -72.277081
    },
    "image": "https://images.unsplash.com/photo-1502672260513?w=800",
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
    "id": 248,
    "name": "43 Drake Lane",
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
      "lat": 43.716834,
      "lng": -72.306671
    },
    "image": "https://images.unsplash.com/photo-1502672260514?w=800",
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
    "id": 249,
    "name": "45 Drake Lane",
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
      "lat": 43.714178,
      "lng": -72.254609
    },
    "image": "https://images.unsplash.com/photo-1502672260515?w=800",
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
    "id": 250,
    "name": "47 Drake Lane",
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
      "lat": 43.726703,
      "lng": -72.306796
    },
    "image": "https://images.unsplash.com/photo-1502672260516?w=800",
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
    "id": 251,
    "name": "49 Drake Lane",
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
      "lat": 43.669613,
      "lng": -72.243721
    },
    "image": "https://images.unsplash.com/photo-1502672260517?w=800",
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
    "id": 252,
    "name": "51 Drake Lane",
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
      "lat": 43.724019,
      "lng": -72.24802
    },
    "image": "https://images.unsplash.com/photo-1502672260518?w=800",
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
    "id": 253,
    "name": "53 Drake Lane",
    "rent": 1500,
    "distance": 1.36,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.702057,
      "lng": -72.262442
    },
    "image": "https://images.unsplash.com/photo-1502672260519?w=800",
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
    "id": 254,
    "name": "55 Drake Lane",
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
      "lat": 43.731659,
      "lng": -72.274718
    },
    "image": "https://images.unsplash.com/photo-1502672260520?w=800",
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
    "id": 255,
    "name": "57 Drake Lane",
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
      "lat": 43.72087,
      "lng": -72.312113
    },
    "image": "https://images.unsplash.com/photo-1502672260521?w=800",
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
    "id": 256,
    "name": "59 Drake Lane",
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
      "lat": 43.706972,
      "lng": -72.322872
    },
    "image": "https://images.unsplash.com/photo-1502672260522?w=800",
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
    "id": 257,
    "name": "61 Drake Lane",
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
      "lat": 43.70929,
      "lng": -72.309969
    },
    "image": "https://images.unsplash.com/photo-1502672260523?w=800",
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
    "id": 258,
    "name": "63 Drake Lane",
    "rent": 1500,
    "distance": 0.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695401,
      "lng": -72.293052
    },
    "image": "https://images.unsplash.com/photo-1502672260524?w=800",
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
    "id": 259,
    "name": "65 Drake Lane",
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
      "lat": 43.699901,
      "lng": -72.268337
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
      "lat": 43.721979,
      "lng": -72.307614
    },
    "image": "https://images.unsplash.com/photo-1502672260526?w=800",
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
    "id": 261,
    "name": "69 Drake Lane",
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
      "lat": 43.715609,
      "lng": -72.334599
    },
    "image": "https://images.unsplash.com/photo-1502672260527?w=800",
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
    "id": 262,
    "name": "71 Drake Lane",
    "rent": 1500,
    "distance": 3.85,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.751466,
      "lng": -72.325493
    },
    "image": "https://images.unsplash.com/photo-1502672260528?w=800",
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
    "id": 263,
    "name": "73 Drake Lane",
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
      "lat": 43.685995,
      "lng": -72.306676
    },
    "image": "https://images.unsplash.com/photo-1502672260529?w=800",
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
    "id": 264,
    "name": "75 Drake Lane",
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
      "lat": 43.668985,
      "lng": -72.280669
    },
    "image": "https://images.unsplash.com/photo-1502672260530?w=800",
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
    "id": 265,
    "name": "1 Field Road",
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
      "lat": 43.688899,
      "lng": -72.324643
    },
    "image": "https://images.unsplash.com/photo-1502672260531?w=800",
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
    "id": 266,
    "name": "2 Field Road",
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
      "lat": 43.698613,
      "lng": -72.336001
    },
    "image": "https://images.unsplash.com/photo-1502672260532?w=800",
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
    "id": 267,
    "name": "3 Field Road",
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
      "lat": 43.6778,
      "lng": -72.250225
    },
    "image": "https://images.unsplash.com/photo-1502672260533?w=800",
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
    "id": 268,
    "name": "4 Field Road",
    "rent": 1500,
    "distance": 0.62,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.709487,
      "lng": -72.282236
    },
    "image": "https://images.unsplash.com/photo-1502672260534?w=800",
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
    "id": 269,
    "name": "5 Field Road",
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
      "lat": 43.722736,
      "lng": -72.323178
    },
    "image": "https://images.unsplash.com/photo-1502672260535?w=800",
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
    "id": 270,
    "name": "6 Field Road",
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
      "lat": 43.686147,
      "lng": -72.287467
    },
    "image": "https://images.unsplash.com/photo-1502672260536?w=800",
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
    "id": 271,
    "name": "7 Field Road",
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
      "lat": 43.6686,
      "lng": -72.246359
    },
    "image": "https://images.unsplash.com/photo-1502672260537?w=800",
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
    "id": 272,
    "name": "8 Field Road",
    "rent": 1500,
    "distance": 3.56,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.745818,
      "lng": -72.251759
    },
    "image": "https://images.unsplash.com/photo-1502672260538?w=800",
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
      "lat": 43.675024,
      "lng": -72.306672
    },
    "image": "https://images.unsplash.com/photo-1502672260539?w=800",
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
    "id": 274,
    "name": "10 Field Road",
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
      "lat": 43.748123,
      "lng": -72.251618
    },
    "image": "https://images.unsplash.com/photo-1502672260540?w=800",
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
    "id": 275,
    "name": "11 Field Road",
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
      "lat": 43.700813,
      "lng": -72.270906
    },
    "image": "https://images.unsplash.com/photo-1502672260541?w=800",
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
    "id": 276,
    "name": "12 Field Road",
    "rent": 1500,
    "distance": 0.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.69889,
      "lng": -72.291292
    },
    "image": "https://images.unsplash.com/photo-1502672260542?w=800",
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
    "id": 277,
    "name": "13 Field Road",
    "rent": 1500,
    "distance": 1.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.716939,
      "lng": -72.313943
    },
    "image": "https://images.unsplash.com/photo-1502672260543?w=800",
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
    "id": 278,
    "name": "14 Field Road",
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
      "lat": 43.726735,
      "lng": -72.280019
    },
    "image": "https://images.unsplash.com/photo-1502672260544?w=800",
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
    "id": 279,
    "name": "15 Field Road",
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
      "lat": 43.743227,
      "lng": -72.32961
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
    "distance": 1.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684787,
      "lng": -72.291817
    },
    "image": "https://images.unsplash.com/photo-1502672260546?w=800",
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
    "id": 281,
    "name": "17 Field Road",
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
      "lat": 43.740043,
      "lng": -72.298075
    },
    "image": "https://images.unsplash.com/photo-1502672260547?w=800",
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
    "id": 282,
    "name": "18 Field Road",
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
      "lat": 43.677438,
      "lng": -72.312583
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
    "distance": 3.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657239,
      "lng": -72.261128
    },
    "image": "https://images.unsplash.com/photo-1502672260549?w=800",
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
    "id": 284,
    "name": "20 Field Road",
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
      "lat": 43.666522,
      "lng": -72.271848
    },
    "image": "https://images.unsplash.com/photo-1502672260550?w=800",
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
    "id": 285,
    "name": "26 Field Road",
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
      "lat": 43.663469,
      "lng": -72.30328
    },
    "image": "https://images.unsplash.com/photo-1502672260551?w=800",
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
    "id": 286,
    "name": "28 Field Road",
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
      "lat": 43.681184,
      "lng": -72.289486
    },
    "image": "https://images.unsplash.com/photo-1502672260552?w=800",
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
    "id": 287,
    "name": "30 Field Road",
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
      "lat": 43.688939,
      "lng": -72.256968
    },
    "image": "https://images.unsplash.com/photo-1502672260553?w=800",
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
    "id": 288,
    "name": "32 Field Road",
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
      "lat": 43.655191,
      "lng": -72.273314
    },
    "image": "https://images.unsplash.com/photo-1502672260554?w=800",
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
    "id": 289,
    "name": "34 Field Road",
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
      "lat": 43.720208,
      "lng": -72.247536
    },
    "image": "https://images.unsplash.com/photo-1502672260555?w=800",
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
    "id": 290,
    "name": "36 Field Road",
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
      "lat": 43.727972,
      "lng": -72.259365
    },
    "image": "https://images.unsplash.com/photo-1502672260556?w=800",
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
    "id": 291,
    "name": "64 Gould Road",
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
      "lat": 43.676307,
      "lng": -72.246913
    },
    "image": "https://images.unsplash.com/photo-1502672260557?w=800",
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
    "id": 292,
    "name": "66 Gould Road",
    "rent": 1500,
    "distance": 0.89,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.689869,
      "lng": -72.294962
    },
    "image": "https://images.unsplash.com/photo-1502672260558?w=800",
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
    "id": 293,
    "name": "68 Gould Road",
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
      "lat": 43.709845,
      "lng": -72.255834
    },
    "image": "https://images.unsplash.com/photo-1502672260559?w=800",
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
    "id": 294,
    "name": "70 Gould Road",
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
      "lat": 43.716814,
      "lng": -72.24978
    },
    "image": "https://images.unsplash.com/photo-1502672260560?w=800",
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
    "id": 295,
    "name": "72 Gould Road",
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
      "lat": 43.734035,
      "lng": -72.334718
    },
    "image": "https://images.unsplash.com/photo-1502672260561?w=800",
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
    "id": 296,
    "name": "74 Gould Road",
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
      "lat": 43.714205,
      "lng": -72.316058
    },
    "image": "https://images.unsplash.com/photo-1502672260562?w=800",
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
    "id": 297,
    "name": "76 Gould Road",
    "rent": 1500,
    "distance": 3,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.73149,
      "lng": -72.245229
    },
    "image": "https://images.unsplash.com/photo-1502672260563?w=800",
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
    "id": 298,
    "name": "77 Gould Road",
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
      "lat": 43.750093,
      "lng": -72.287113
    },
    "image": "https://images.unsplash.com/photo-1502672260564?w=800",
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
    "id": 299,
    "name": "78 Gould Road",
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
      "lat": 43.678563,
      "lng": -72.254216
    },
    "image": "https://images.unsplash.com/photo-1502672260565?w=800",
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
    "id": 300,
    "name": "79 Gould Road",
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
      "lat": 43.666713,
      "lng": -72.269183
    },
    "image": "https://images.unsplash.com/photo-1502672260566?w=800",
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
    "id": 301,
    "name": "80 Gould Road",
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
      "lat": 43.701202,
      "lng": -72.249217
    },
    "image": "https://images.unsplash.com/photo-1502672260567?w=800",
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
    "id": 302,
    "name": "81 Gould Road",
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
      "lat": 43.672039,
      "lng": -72.315104
    },
    "image": "https://images.unsplash.com/photo-1502672260568?w=800",
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
    "id": 303,
    "name": "82 Gould Road",
    "rent": 1500,
    "distance": 4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654541,
      "lng": -72.334955
    },
    "image": "https://images.unsplash.com/photo-1502672260569?w=800",
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
    "id": 304,
    "name": "84 Gould Road",
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
      "lat": 43.729764,
      "lng": -72.324144
    },
    "image": "https://images.unsplash.com/photo-1502672260570?w=800",
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
      "lat": 43.67847,
      "lng": -72.319482
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
    "distance": 3.32,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654332,
      "lng": -72.282989
    },
    "image": "https://images.unsplash.com/photo-1502672260572?w=800",
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
    "id": 307,
    "name": "90 Gould Road",
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
      "lat": 43.668554,
      "lng": -72.241415
    },
    "image": "https://images.unsplash.com/photo-1502672260573?w=800",
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
    "id": 308,
    "name": "92 Gould Road",
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
      "lat": 43.67977,
      "lng": -72.320816
    },
    "image": "https://images.unsplash.com/photo-1502672260574?w=800",
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
    "id": 309,
    "name": "94 Gould Road",
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
      "lat": 43.672725,
      "lng": -72.312654
    },
    "image": "https://images.unsplash.com/photo-1502672260575?w=800",
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
    "id": 310,
    "name": "96 Gould Road, Apt. 1",
    "rent": 1500,
    "distance": 0.1,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703228,
      "lng": -72.288106
    },
    "image": "https://images.unsplash.com/photo-1502672260576?w=800",
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
    "id": 311,
    "name": "96 Gould Road, Apt. 2",
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
      "lat": 43.704125,
      "lng": -72.333597
    },
    "image": "https://images.unsplash.com/photo-1502672260577?w=800",
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
    "id": 312,
    "name": "96 Gould Road, Apt. 3",
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
      "lat": 43.658164,
      "lng": -72.267903
    },
    "image": "https://images.unsplash.com/photo-1502672260578?w=800",
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
    "id": 313,
    "name": "96 Gould Road, Apt. 4",
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
      "lat": 43.690638,
      "lng": -72.275366
    },
    "image": "https://images.unsplash.com/photo-1502672260579?w=800",
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
    "id": 314,
    "name": "96 Gould Road, Apt. 5",
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
      "lat": 43.715694,
      "lng": -72.280584
    },
    "image": "https://images.unsplash.com/photo-1502672260580?w=800",
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
    "id": 315,
    "name": "96 Gould Road, Apt. 6",
    "rent": 1500,
    "distance": 3.78,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.746875,
      "lng": -72.245829
    },
    "image": "https://images.unsplash.com/photo-1502672260581?w=800",
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
    "id": 316,
    "name": "100 Gould Road",
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
      "lat": 43.67522,
      "lng": -72.324174
    },
    "image": "https://images.unsplash.com/photo-1502672260582?w=800",
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
    "id": 317,
    "name": "102 Gould Road",
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
      "lat": 43.730331,
      "lng": -72.280713
    },
    "image": "https://images.unsplash.com/photo-1502672260583?w=800",
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
    "id": 318,
    "name": "104 Gould Road",
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
      "lat": 43.703195,
      "lng": -72.250784
    },
    "image": "https://images.unsplash.com/photo-1502672260584?w=800",
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
    "id": 319,
    "name": "106 Gould Road",
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
      "lat": 43.678743,
      "lng": -72.26676
    },
    "image": "https://images.unsplash.com/photo-1502672260585?w=800",
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
    "id": 320,
    "name": "108 Gould Road",
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
      "lat": 43.697304,
      "lng": -72.263552
    },
    "image": "https://images.unsplash.com/photo-1502672260586?w=800",
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
    "id": 321,
    "name": "110 Gould Road",
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
      "lat": 43.725581,
      "lng": -72.338573
    },
    "image": "https://images.unsplash.com/photo-1502672260587?w=800",
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
    "id": 322,
    "name": "114 Gould Road",
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
      "lat": 43.743859,
      "lng": -72.260048
    },
    "image": "https://images.unsplash.com/photo-1502672260588?w=800",
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
    "id": 323,
    "name": "116 Gould Road",
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
      "lat": 43.692166,
      "lng": -72.263573
    },
    "image": "https://images.unsplash.com/photo-1502672260589?w=800",
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
    "id": 324,
    "name": "118 Gould Road",
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
      "lat": 43.662393,
      "lng": -72.267108
    },
    "image": "https://images.unsplash.com/photo-1502672260590?w=800",
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
    "id": 325,
    "name": "120 Gould Road",
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
      "lat": 43.736415,
      "lng": -72.249872
    },
    "image": "https://images.unsplash.com/photo-1502672260591?w=800",
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
    "id": 326,
    "name": "122 Gould Road",
    "rent": 1500,
    "distance": 3.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.661496,
      "lng": -72.319983
    },
    "image": "https://images.unsplash.com/photo-1502672260592?w=800",
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
    "id": 327,
    "name": "124 Gould Road",
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
      "lat": 43.715419,
      "lng": -72.328633
    },
    "image": "https://images.unsplash.com/photo-1502672260593?w=800",
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
    "id": 328,
    "name": "126 Gould Road",
    "rent": 1500,
    "distance": 0.24,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.704895,
      "lng": -72.292474
    },
    "image": "https://images.unsplash.com/photo-1502672260594?w=800",
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
    "id": 329,
    "name": "128 Gould Road",
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
      "lat": 43.725247,
      "lng": -72.322961
    },
    "image": "https://images.unsplash.com/photo-1502672260595?w=800",
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
    "id": 330,
    "name": "130 Gould Road",
    "rent": 1500,
    "distance": 1.51,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.680497,
      "lng": -72.285832
    },
    "image": "https://images.unsplash.com/photo-1502672260596?w=800",
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
    "id": 331,
    "name": "132 Gould Road",
    "rent": 1500,
    "distance": 0.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.699581,
      "lng": -72.29016
    },
    "image": "https://images.unsplash.com/photo-1502672260597?w=800",
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
    "id": 332,
    "name": "134 Gould Road",
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
      "lat": 43.661002,
      "lng": -72.279675
    },
    "image": "https://images.unsplash.com/photo-1502672260598?w=800",
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
    "id": 333,
    "name": "136 Gould Road",
    "rent": 1500,
    "distance": 0.5,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.701171,
      "lng": -72.279696
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
    "distance": 3.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.74803,
      "lng": -72.245034
    },
    "image": "https://images.unsplash.com/photo-1502672260600?w=800",
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
    "id": 335,
    "name": "2 Haddock Lane",
    "rent": 1500,
    "distance": 3.18,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.658651,
      "lng": -72.310092
    },
    "image": "https://images.unsplash.com/photo-1502672260601?w=800",
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
    "id": 336,
    "name": "3 Haddock Lane",
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
      "lat": 43.731467,
      "lng": -72.250475
    },
    "image": "https://images.unsplash.com/photo-1502672260602?w=800",
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
    "id": 337,
    "name": "4 Haddock Lane",
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
      "lat": 43.750374,
      "lng": -72.276777
    },
    "image": "https://images.unsplash.com/photo-1502672260603?w=800",
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
    "id": 338,
    "name": "5 Haddock Lane",
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
      "lat": 43.734098,
      "lng": -72.312519
    },
    "image": "https://images.unsplash.com/photo-1502672260604?w=800",
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
    "id": 339,
    "name": "6 Haddock Lane",
    "rent": 1500,
    "distance": 3.53,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664734,
      "lng": -72.337718
    },
    "image": "https://images.unsplash.com/photo-1502672260605?w=800",
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
    "id": 340,
    "name": "7 Haddock Lane",
    "rent": 1500,
    "distance": 1.74,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.716476,
      "lng": -72.260928
    },
    "image": "https://images.unsplash.com/photo-1502672260606?w=800",
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
    "id": 341,
    "name": "8 Haddock Lane",
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
      "lat": 43.696638,
      "lng": -72.309381
    },
    "image": "https://images.unsplash.com/photo-1502672260607?w=800",
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
    "id": 342,
    "name": "9 Haddock Lane",
    "rent": 1500,
    "distance": 2.13,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.675515,
      "lng": -72.268367
    },
    "image": "https://images.unsplash.com/photo-1502672260608?w=800",
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
    "id": 343,
    "name": "11 Haddock Lane",
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
      "lat": 43.739019,
      "lng": -72.290989
    },
    "image": "https://images.unsplash.com/photo-1502672260609?w=800",
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
    "id": 344,
    "name": "13 Haddock Lane",
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
      "lat": 43.705714,
      "lng": -72.313121
    },
    "image": "https://images.unsplash.com/photo-1502672260610?w=800",
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
    "id": 345,
    "name": "15 Haddock Lane",
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
      "lat": 43.668146,
      "lng": -72.322475
    },
    "image": "https://images.unsplash.com/photo-1502672260611?w=800",
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
    "id": 346,
    "name": "17 Haddock Lane",
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
      "lat": 43.738058,
      "lng": -72.335741
    },
    "image": "https://images.unsplash.com/photo-1502672260612?w=800",
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
    "id": 347,
    "name": "19 Haddock Lane",
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
      "lat": 43.716384,
      "lng": -72.246951
    },
    "image": "https://images.unsplash.com/photo-1502672260613?w=800",
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
    "id": 348,
    "name": "21 Haddock Lane",
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
      "lat": 43.660068,
      "lng": -72.267413
    },
    "image": "https://images.unsplash.com/photo-1502672260614?w=800",
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
    "id": 349,
    "name": "23 Haddock Lane",
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
      "lat": 43.716995,
      "lng": -72.247045
    },
    "image": "https://images.unsplash.com/photo-1502672260615?w=800",
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
    "id": 350,
    "name": "2 Ralston Lane",
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
      "lat": 43.681892,
      "lng": -72.333401
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
      "lat": 43.693383,
      "lng": -72.243052
    },
    "image": "https://images.unsplash.com/photo-1502672260617?w=800",
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
    "id": 352,
    "name": "6 Ralston Lane",
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
      "lat": 43.733612,
      "lng": -72.284068
    },
    "image": "https://images.unsplash.com/photo-1502672260618?w=800",
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
    "id": 353,
    "name": "8 Ralston Lane",
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
      "lat": 43.683498,
      "lng": -72.318755
    },
    "image": "https://images.unsplash.com/photo-1502672260619?w=800",
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
    "id": 354,
    "name": "10 Ralston Lane",
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
      "lat": 43.736015,
      "lng": -72.242896
    },
    "image": "https://images.unsplash.com/photo-1502672260620?w=800",
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
    "id": 355,
    "name": "12 Ralston Lane",
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
      "lat": 43.67852,
      "lng": -72.279073
    },
    "image": "https://images.unsplash.com/photo-1502672260621?w=800",
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
    "id": 356,
    "name": "14 Ralston Lane",
    "rent": 1500,
    "distance": 1.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.692834,
      "lng": -72.269112
    },
    "image": "https://images.unsplash.com/photo-1502672260622?w=800",
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
    "id": 357,
    "name": "16 Ralston Lane",
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
      "lat": 43.737389,
      "lng": -72.245149
    },
    "image": "https://images.unsplash.com/photo-1502672260623?w=800",
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
    "id": 358,
    "name": "18 Ralston Lane",
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
      "lat": 43.71922,
      "lng": -72.301137
    },
    "image": "https://images.unsplash.com/photo-1502672260624?w=800",
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
    "id": 359,
    "name": "20 Ralston Lane",
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
      "lat": 43.678704,
      "lng": -72.252554
    },
    "image": "https://images.unsplash.com/photo-1502672260625?w=800",
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
    "id": 360,
    "name": "22 Ralston Lane",
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
      "lat": 43.727022,
      "lng": -72.294275
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
      "lat": 43.707502,
      "lng": -72.271903
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
      "lat": 43.65644,
      "lng": -72.276954
    },
    "image": "https://images.unsplash.com/photo-1502672260628?w=800",
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
    "id": 363,
    "name": "28 Ralston Lane",
    "rent": 1500,
    "distance": 3.01,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.740223,
      "lng": -72.260126
    },
    "image": "https://images.unsplash.com/photo-1502672260629?w=800",
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
    "id": 364,
    "name": "30 Ralston Lane",
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
      "lat": 43.679875,
      "lng": -72.285285
    },
    "image": "https://images.unsplash.com/photo-1502672260630?w=800",
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
    "id": 365,
    "name": "32 Ralston Lane",
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
      "lat": 43.659768,
      "lng": -72.287181
    },
    "image": "https://images.unsplash.com/photo-1502672260631?w=800",
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
    "id": 366,
    "name": "34 Ralston Lane",
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
      "lat": 43.677592,
      "lng": -72.257482
    },
    "image": "https://images.unsplash.com/photo-1502672260632?w=800",
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
    "id": 367,
    "name": "36 Ralston Lane",
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
      "lat": 43.693882,
      "lng": -72.300613
    },
    "image": "https://images.unsplash.com/photo-1502672260633?w=800",
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
    "id": 368,
    "name": "38 Ralston Lane",
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
      "lat": 43.740767,
      "lng": -72.321966
    },
    "image": "https://images.unsplash.com/photo-1502672260634?w=800",
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
    "id": 369,
    "name": "40 Ralston Lane",
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
      "lat": 43.654939,
      "lng": -72.271878
    },
    "image": "https://images.unsplash.com/photo-1502672260635?w=800",
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
    "id": 370,
    "name": "1 Sachem Circle",
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
      "lat": 43.653391,
      "lng": -72.256969
    },
    "image": "https://images.unsplash.com/photo-1502672260636?w=800",
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
    "id": 371,
    "name": "2 Sachem Circle",
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
      "lat": 43.697221,
      "lng": -72.337599
    },
    "image": "https://images.unsplash.com/photo-1502672260637?w=800",
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
    "id": 372,
    "name": "3 Sachem Circle",
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
      "lat": 43.748877,
      "lng": -72.268953
    },
    "image": "https://images.unsplash.com/photo-1502672260638?w=800",
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
    "id": 373,
    "name": "4 Sachem Circle",
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
      "lat": 43.685664,
      "lng": -72.25592
    },
    "image": "https://images.unsplash.com/photo-1502672260639?w=800",
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
    "id": 374,
    "name": "5 Sachem Circle",
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
      "lat": 43.656473,
      "lng": -72.306581
    },
    "image": "https://images.unsplash.com/photo-1502672260640?w=800",
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
    "id": 375,
    "name": "6 Sachem Circle",
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
      "lat": 43.743799,
      "lng": -72.283523
    },
    "image": "https://images.unsplash.com/photo-1502672260641?w=800",
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
    "id": 376,
    "name": "7 Sachem Circle",
    "rent": 1500,
    "distance": 0.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.713017,
      "lng": -72.300099
    },
    "image": "https://images.unsplash.com/photo-1502672260642?w=800",
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
    "id": 377,
    "name": "8 Sachem Circle, Apt. 1",
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
      "lat": 43.664318,
      "lng": -72.300291
    },
    "image": "https://images.unsplash.com/photo-1502672260643?w=800",
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
    "id": 378,
    "name": "8 Sachem Circle, Apt. 2",
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
      "lat": 43.687326,
      "lng": -72.311347
    },
    "image": "https://images.unsplash.com/photo-1502672260644?w=800",
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
    "id": 379,
    "name": "8 Sachem Circle, Apt. 3",
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
      "lat": 43.683357,
      "lng": -72.291096
    },
    "image": "https://images.unsplash.com/photo-1502672260645?w=800",
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
    "id": 380,
    "name": "8 Sachem Circle, Apt. 4",
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
      "lat": 43.672067,
      "lng": -72.250417
    },
    "image": "https://images.unsplash.com/photo-1502672260646?w=800",
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
    "id": 381,
    "name": "8 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 3.2,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.747171,
      "lng": -72.274544
    },
    "image": "https://images.unsplash.com/photo-1502672260647?w=800",
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
    "id": 382,
    "name": "8 Sachem Circle, Apt. 6",
    "rent": 1500,
    "distance": 2.74,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.741626,
      "lng": -72.284641
    },
    "image": "https://images.unsplash.com/photo-1502672260648?w=800",
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
    "id": 383,
    "name": "9 Sachem Circle",
    "rent": 1500,
    "distance": 0.19,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703565,
      "lng": -72.2862
    },
    "image": "https://images.unsplash.com/photo-1502672260649?w=800",
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
    "id": 384,
    "name": "10 Sachem Circle",
    "rent": 1500,
    "distance": 1.91,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.695457,
      "lng": -72.326609
    },
    "image": "https://images.unsplash.com/photo-1502672260650?w=800",
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
    "id": 385,
    "name": "11 Sachem Circle, Apt. 1",
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
      "lat": 43.659899,
      "lng": -72.273882
    },
    "image": "https://images.unsplash.com/photo-1502672260651?w=800",
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
    "id": 386,
    "name": "11 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 3.37,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.66771,
      "lng": -72.33716
    },
    "image": "https://images.unsplash.com/photo-1502672260652?w=800",
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
    "id": 387,
    "name": "11 Sachem Circle, Apt. 3",
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
      "lat": 43.745098,
      "lng": -72.290648
    },
    "image": "https://images.unsplash.com/photo-1502672260653?w=800",
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
    "id": 388,
    "name": "11 Sachem Circle, Apt. 4",
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
      "lat": 43.709755,
      "lng": -72.240958
    },
    "image": "https://images.unsplash.com/photo-1502672260654?w=800",
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
    "id": 389,
    "name": "11 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 3.6,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.65388,
      "lng": -72.262912
    },
    "image": "https://images.unsplash.com/photo-1502672260655?w=800",
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
    "id": 390,
    "name": "11 Sachem Circle, Apt. 6",
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
      "lat": 43.65936,
      "lng": -72.317493
    },
    "image": "https://images.unsplash.com/photo-1502672260656?w=800",
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
    "id": 391,
    "name": "12 Sachem Circle, Apt. 1",
    "rent": 1500,
    "distance": 3.06,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.67552,
      "lng": -72.338518
    },
    "image": "https://images.unsplash.com/photo-1502672260657?w=800",
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
    "id": 392,
    "name": "12 Sachem Circle, Apt. 2",
    "rent": 1500,
    "distance": 2.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.729697,
      "lng": -72.32602
    },
    "image": "https://images.unsplash.com/photo-1502672260658?w=800",
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
    "id": 393,
    "name": "12 Sachem Circle, Apt. 3",
    "rent": 1500,
    "distance": 3.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.751142,
      "lng": -72.279354
    },
    "image": "https://images.unsplash.com/photo-1502672260659?w=800",
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
    "id": 394,
    "name": "12 Sachem Circle, Apt. 4",
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
      "lat": 43.715209,
      "lng": -72.245141
    },
    "image": "https://images.unsplash.com/photo-1502672260660?w=800",
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
    "id": 395,
    "name": "12 Sachem Circle, Apt. 5",
    "rent": 1500,
    "distance": 2.84,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.663276,
      "lng": -72.271551
    },
    "image": "https://images.unsplash.com/photo-1502672260661?w=800",
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
    "id": 396,
    "name": "12 Sachem Circle, Apt. 6",
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
      "lat": 43.675734,
      "lng": -72.297766
    },
    "image": "https://images.unsplash.com/photo-1502672260662?w=800",
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
    "id": 397,
    "name": "12 Sachem Circle, Apt. 7",
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
      "lat": 43.703249,
      "lng": -72.306489
    },
    "image": "https://images.unsplash.com/photo-1502672260663?w=800",
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
    "id": 398,
    "name": "12 Sachem Circle, Apt. 8",
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
      "lat": 43.654401,
      "lng": -72.325261
    },
    "image": "https://images.unsplash.com/photo-1502672260664?w=800",
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
    "id": 399,
    "name": "13 Sachem Circle, Apt. 1",
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
      "lat": 43.653789,
      "lng": -72.28638
    },
    "image": "https://images.unsplash.com/photo-1502672260665?w=800",
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
    "id": 400,
    "name": "13 Sachem Circle, Apt. 2",
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
      "lat": 43.732568,
      "lng": -72.275388
    },
    "image": "https://images.unsplash.com/photo-1502672260666?w=800",
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
    "id": 401,
    "name": "13 Sachem Circle, Apt. 3",
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
      "lat": 43.73523,
      "lng": -72.287904
    },
    "image": "https://images.unsplash.com/photo-1502672260667?w=800",
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
    "id": 402,
    "name": "13 Sachem Circle, Apt. 4",
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
      "lat": 43.745791,
      "lng": -72.309305
    },
    "image": "https://images.unsplash.com/photo-1502672260668?w=800",
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
    "id": 403,
    "name": "13 Sachem Circle, Apt. 5",
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
      "lat": 43.681806,
      "lng": -72.259924
    },
    "image": "https://images.unsplash.com/photo-1502672260669?w=800",
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
    "id": 404,
    "name": "13 Sachem Circle, Apt. 6",
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
      "lat": 43.736555,
      "lng": -72.255139
    },
    "image": "https://images.unsplash.com/photo-1502672260670?w=800",
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
    "id": 405,
    "name": "13 Sachem Circle, Apt. 7",
    "rent": 1500,
    "distance": 1.21,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.696254,
      "lng": -72.266739
    },
    "image": "https://images.unsplash.com/photo-1502672260671?w=800",
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
    "id": 406,
    "name": "13 Sachem Circle, Apt. 8",
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
      "lat": 43.733949,
      "lng": -72.250924
    },
    "image": "https://images.unsplash.com/photo-1502672260672?w=800",
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
    "id": 407,
    "name": "14 Sachem Circle, Apt. 1",
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
      "lat": 43.715981,
      "lng": -72.310661
    },
    "image": "https://images.unsplash.com/photo-1502672260673?w=800",
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
    "id": 408,
    "name": "14 Sachem Circle, Apt. 2",
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
      "lat": 43.675243,
      "lng": -72.273832
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
      "lat": 43.687359,
      "lng": -72.32823
    },
    "image": "https://images.unsplash.com/photo-1502672260675?w=800",
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
    "id": 410,
    "name": "14 Sachem Circle, Apt. 4",
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
      "lat": 43.737441,
      "lng": -72.311863
    },
    "image": "https://images.unsplash.com/photo-1502672260676?w=800",
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
    "id": 411,
    "name": "14 Sachem Circle, Apt. 5",
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
      "lat": 43.713638,
      "lng": -72.240051
    },
    "image": "https://images.unsplash.com/photo-1502672260677?w=800",
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
    "id": 412,
    "name": "14 Sachem Circle, Apt. 6",
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
      "lat": 43.729792,
      "lng": -72.322787
    },
    "image": "https://images.unsplash.com/photo-1502672260678?w=800",
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
    "id": 413,
    "name": "14 Sachem Circle, Apt. 7",
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
      "lat": 43.738859,
      "lng": -72.323075
    },
    "image": "https://images.unsplash.com/photo-1502672260679?w=800",
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
    "id": 414,
    "name": "14 Sachem Circle, Apt. 8",
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
      "lat": 43.745557,
      "lng": -72.32552
    },
    "image": "https://images.unsplash.com/photo-1502672260680?w=800",
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
    "id": 415,
    "name": "15 Sachem Circle, Apt. 1",
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
      "lat": 43.700462,
      "lng": -72.320859
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
      "lat": 43.697346,
      "lng": -72.260991
    },
    "image": "https://images.unsplash.com/photo-1502672260682?w=800",
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
    "id": 417,
    "name": "15 Sachem Circle, Apt. 3",
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
      "lat": 43.672571,
      "lng": -72.32482
    },
    "image": "https://images.unsplash.com/photo-1502672260683?w=800",
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
    "id": 418,
    "name": "15 Sachem Circle, Apt. 4",
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
      "lat": 43.674744,
      "lng": -72.288616
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
    "distance": 0.34,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.700589,
      "lng": -72.295987
    },
    "image": "https://images.unsplash.com/photo-1502672260685?w=800",
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
    "id": 420,
    "name": "15 Sachem Circle, Apt. 6",
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
      "lat": 43.67921,
      "lng": -72.280258
    },
    "image": "https://images.unsplash.com/photo-1502672260686?w=800",
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
    "id": 421,
    "name": "15 Sachem Circle, Apt. 7",
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
      "lat": 43.739846,
      "lng": -72.31691
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
      "lat": 43.733339,
      "lng": -72.287378
    },
    "image": "https://images.unsplash.com/photo-1502672260688?w=800",
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
    "id": 423,
    "name": "22 Sachem Circle",
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
      "lat": 43.667376,
      "lng": -72.295737
    },
    "image": "https://images.unsplash.com/photo-1502672260689?w=800",
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
    "id": 424,
    "name": "23 Sachem Circle",
    "rent": 1500,
    "distance": 4.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.750456,
      "lng": -72.337767
    },
    "image": "https://images.unsplash.com/photo-1502672260690?w=800",
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
    "id": 425,
    "name": "24 Sachem Circle",
    "rent": 1500,
    "distance": 2.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70279,
      "lng": -72.336676
    },
    "image": "https://images.unsplash.com/photo-1502672260691?w=800",
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
    "id": 426,
    "name": "25 Sachem Circle",
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
      "lat": 43.72633,
      "lng": -72.262639
    },
    "image": "https://images.unsplash.com/photo-1502672260692?w=800",
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
    "id": 427,
    "name": "26 Sachem Circle",
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
      "lat": 43.742168,
      "lng": -72.326181
    },
    "image": "https://images.unsplash.com/photo-1502672260693?w=800",
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
    "id": 428,
    "name": "27 Sachem Circle",
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
      "lat": 43.708775,
      "lng": -72.314768
    },
    "image": "https://images.unsplash.com/photo-1502672260694?w=800",
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
    "id": 429,
    "name": "28 Sachem Circle",
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
      "lat": 43.665126,
      "lng": -72.242783
    },
    "image": "https://images.unsplash.com/photo-1502672260695?w=800",
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
    "id": 430,
    "name": "29 Sachem Circle",
    "rent": 1500,
    "distance": 2.98,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.727183,
      "lng": -72.240847
    },
    "image": "https://images.unsplash.com/photo-1502672260696?w=800",
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
    "id": 431,
    "name": "30 Sachem Circle",
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
      "lat": 43.667691,
      "lng": -72.269015
    },
    "image": "https://images.unsplash.com/photo-1502672260697?w=800",
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
    "id": 432,
    "name": "31 Sachem Circle",
    "rent": 1500,
    "distance": 0.72,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.707888,
      "lng": -72.277609
    },
    "image": "https://images.unsplash.com/photo-1502672260698?w=800",
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
    "id": 433,
    "name": "32 Sachem Circle",
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
      "lat": 43.723093,
      "lng": -72.2949
    },
    "image": "https://images.unsplash.com/photo-1502672260699?w=800",
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
    "id": 434,
    "name": "33 Sachem Circle",
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
      "lat": 43.679987,
      "lng": -72.307488
    },
    "image": "https://images.unsplash.com/photo-1502672260700?w=800",
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
    "id": 435,
    "name": "34 Sachem Circle",
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
      "lat": 43.677049,
      "lng": -72.302735
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
    "distance": 3.4,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.738086,
      "lng": -72.243071
    },
    "image": "https://images.unsplash.com/photo-1502672260702?w=800",
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
    "id": 437,
    "name": "36 Sachem CIrcle",
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
      "lat": 43.717022,
      "lng": -72.252975
    },
    "image": "https://images.unsplash.com/photo-1502672260703?w=800",
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
    "id": 438,
    "name": "37 Sachem Circle",
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
      "lat": 43.75167,
      "lng": -72.281646
    },
    "image": "https://images.unsplash.com/photo-1502672260704?w=800",
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
    "id": 439,
    "name": "38 Sachem Circle",
    "rent": 1500,
    "distance": 3.77,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.752075,
      "lng": -72.258833
    },
    "image": "https://images.unsplash.com/photo-1502672260705?w=800",
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
    "id": 440,
    "name": "39 Sachem Circle",
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
      "lat": 43.738048,
      "lng": -72.325386
    },
    "image": "https://images.unsplash.com/photo-1502672260706?w=800",
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
    "id": 441,
    "name": "40 Sachem Circle",
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
      "lat": 43.737178,
      "lng": -72.267338
    },
    "image": "https://images.unsplash.com/photo-1502672260707?w=800",
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
    "id": 442,
    "name": "41 Sachem Circle",
    "rent": 1500,
    "distance": 3.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.652786,
      "lng": -72.292522
    },
    "image": "https://images.unsplash.com/photo-1502672260708?w=800",
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
    "id": 443,
    "name": "42 Sachem Circle",
    "rent": 1500,
    "distance": 3.42,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.656365,
      "lng": -72.315375
    },
    "image": "https://images.unsplash.com/photo-1502672260709?w=800",
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
    "id": 444,
    "name": "43 Sachem Circle",
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
      "lat": 43.660962,
      "lng": -72.319416
    },
    "image": "https://images.unsplash.com/photo-1502672260710?w=800",
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
    "id": 445,
    "name": "44 Sachem Circle",
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
      "lat": 43.667683,
      "lng": -72.313943
    },
    "image": "https://images.unsplash.com/photo-1502672260711?w=800",
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
    "id": 446,
    "name": "45 Sachem Circle",
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
      "lat": 43.732531,
      "lng": -72.252283
    },
    "image": "https://images.unsplash.com/photo-1502672260712?w=800",
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
    "id": 447,
    "name": "46 Sachem Circle",
    "rent": 1500,
    "distance": 3.83,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.657168,
      "lng": -72.334312
    },
    "image": "https://images.unsplash.com/photo-1502672260713?w=800",
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
    "id": 448,
    "name": "47 Sachem Circle",
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
      "lat": 43.68309,
      "lng": -72.299571
    },
    "image": "https://images.unsplash.com/photo-1502672260714?w=800",
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
    "id": 449,
    "name": "48 Sachem Circle",
    "rent": 1500,
    "distance": 2.63,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.670947,
      "lng": -72.319762
    },
    "image": "https://images.unsplash.com/photo-1502672260715?w=800",
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
    "id": 450,
    "name": "49 Sachem Circle",
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
      "lat": 43.695172,
      "lng": -72.25461
    },
    "image": "https://images.unsplash.com/photo-1502672260716?w=800",
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
    "id": 451,
    "name": "50 Sachem Circle",
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
      "lat": 43.69088,
      "lng": -72.293115
    },
    "image": "https://images.unsplash.com/photo-1502672260717?w=800",
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
    "id": 452,
    "name": "51 Sachem Circle",
    "rent": 1500,
    "distance": 0.92,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708966,
      "lng": -72.305528
    },
    "image": "https://images.unsplash.com/photo-1502672260718?w=800",
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
    "id": 453,
    "name": "52 Sachem Circle",
    "rent": 1500,
    "distance": 2.45,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.676371,
      "lng": -72.323221
    },
    "image": "https://images.unsplash.com/photo-1502672260719?w=800",
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
    "id": 454,
    "name": "53 Sachem Circle",
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
      "lat": 43.69188,
      "lng": -72.263467
    },
    "image": "https://images.unsplash.com/photo-1502672260720?w=800",
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
    "id": 455,
    "name": "54 Sachem Circle",
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
      "lat": 43.657812,
      "lng": -72.25121
    },
    "image": "https://images.unsplash.com/photo-1502672260721?w=800",
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
    "id": 456,
    "name": "55 Sachem Circle",
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
      "lat": 43.692454,
      "lng": -72.262826
    },
    "image": "https://images.unsplash.com/photo-1502672260722?w=800",
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
    "id": 457,
    "name": "56 Sachem Circle",
    "rent": 1500,
    "distance": 0.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.708668,
      "lng": -72.282147
    },
    "image": "https://images.unsplash.com/photo-1502672260723?w=800",
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
    "id": 458,
    "name": "57 Sachem Circle",
    "rent": 1500,
    "distance": 1.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.718246,
      "lng": -72.275072
    },
    "image": "https://images.unsplash.com/photo-1502672260724?w=800",
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
    "id": 459,
    "name": "58 Sachem Circle",
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
      "lat": 43.715308,
      "lng": -72.258904
    },
    "image": "https://images.unsplash.com/photo-1502672260725?w=800",
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
    "id": 460,
    "name": "59 Sachem Circle",
    "rent": 1500,
    "distance": 3.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.654846,
      "lng": -72.318925
    },
    "image": "https://images.unsplash.com/photo-1502672260726?w=800",
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
    "id": 461,
    "name": "60 Sachem Circle",
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
      "lat": 43.745104,
      "lng": -72.308913
    },
    "image": "https://images.unsplash.com/photo-1502672260727?w=800",
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
    "id": 462,
    "name": "61 Sachem Circle",
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
      "lat": 43.661907,
      "lng": -72.2845
    },
    "image": "https://images.unsplash.com/photo-1502672260728?w=800",
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
    "id": 463,
    "name": "62 Sachem Circle",
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
      "lat": 43.669069,
      "lng": -72.292166
    },
    "image": "https://images.unsplash.com/photo-1502672260729?w=800",
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
    "id": 464,
    "name": "63 Sachem Circle",
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
      "lat": 43.710467,
      "lng": -72.300987
    },
    "image": "https://images.unsplash.com/photo-1502672260730?w=800",
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
    "id": 465,
    "name": "64 Sachem Circle",
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
      "lat": 43.711724,
      "lng": -72.338341
    },
    "image": "https://images.unsplash.com/photo-1502672260731?w=800",
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
    "id": 466,
    "name": "65 Sachem Circle",
    "rent": 1500,
    "distance": 0.64,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70416,
      "lng": -72.277119
    },
    "image": "https://images.unsplash.com/photo-1502672260732?w=800",
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
    "id": 467,
    "name": "Apartment 467",
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
      "lat": 43.680379,
      "lng": -72.253771
    },
    "image": "https://images.unsplash.com/photo-1502672260733?w=800",
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
    "id": 468,
    "name": "Apartment 468",
    "rent": 1500,
    "distance": 0.9,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.703678,
      "lng": -72.271627
    },
    "image": "https://images.unsplash.com/photo-1502672260734?w=800",
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
    "id": 469,
    "name": "Apartment 469",
    "rent": 1500,
    "distance": 3.33,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.667018,
      "lng": -72.243926
    },
    "image": "https://images.unsplash.com/photo-1502672260735?w=800",
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
    "id": 470,
    "name": "Apartment 470",
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
      "lat": 43.738704,
      "lng": -72.285467
    },
    "image": "https://images.unsplash.com/photo-1502672260736?w=800",
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
    "id": 471,
    "name": "Apartment 471",
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
      "lat": 43.736517,
      "lng": -72.294074
    },
    "image": "https://images.unsplash.com/photo-1502672260737?w=800",
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
    "id": 472,
    "name": "Apartment 472",
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
      "lat": 43.689233,
      "lng": -72.258412
    },
    "image": "https://images.unsplash.com/photo-1502672260738?w=800",
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
    "id": 473,
    "name": "Apartment 473",
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
      "lat": 43.71022,
      "lng": -72.256209
    },
    "image": "https://images.unsplash.com/photo-1502672260739?w=800",
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
    "id": 474,
    "name": "Apartment 474",
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
      "lat": 43.656724,
      "lng": -72.335537
    },
    "image": "https://images.unsplash.com/photo-1502672260740?w=800",
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
    "id": 475,
    "name": "Apartment 475",
    "rent": 1500,
    "distance": 3.48,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.752053,
      "lng": -72.299686
    },
    "image": "https://images.unsplash.com/photo-1502672260741?w=800",
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
    "id": 476,
    "name": "Apartment 476",
    "rent": 1500,
    "distance": 3.11,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.664953,
      "lng": -72.324419
    },
    "image": "https://images.unsplash.com/photo-1502672260742?w=800",
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
    "id": 477,
    "name": "Apartment 477",
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
      "lat": 43.68463,
      "lng": -72.256632
    },
    "image": "https://images.unsplash.com/photo-1502672260743?w=800",
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
    "id": 478,
    "name": "Apartment 478",
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
      "lat": 43.654906,
      "lng": -72.273597
    },
    "image": "https://images.unsplash.com/photo-1502672260744?w=800",
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
    "id": 479,
    "name": "Apartment 479",
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
      "lat": 43.675123,
      "lng": -72.260149
    },
    "image": "https://images.unsplash.com/photo-1502672260745?w=800",
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
    "id": 480,
    "name": "Apartment 480",
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
      "lat": 43.718588,
      "lng": -72.279823
    },
    "image": "https://images.unsplash.com/photo-1502672260746?w=800",
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
    "id": 481,
    "name": "Apartment 481",
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
      "lat": 43.693045,
      "lng": -72.259039
    },
    "image": "https://images.unsplash.com/photo-1502672260747?w=800",
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
    "id": 482,
    "name": "Apartment 482",
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
      "lat": 43.719286,
      "lng": -72.253041
    },
    "image": "https://images.unsplash.com/photo-1502672260748?w=800",
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
    "id": 483,
    "name": "Apartment 483",
    "rent": 1500,
    "distance": 0.58,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.70508,
      "lng": -72.300472
    },
    "image": "https://images.unsplash.com/photo-1502672260749?w=800",
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
    "id": 484,
    "name": "Apartment 484",
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
      "lat": 43.679594,
      "lng": -72.287453
    },
    "image": "https://images.unsplash.com/photo-1502672260750?w=800",
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
    "id": 485,
    "name": "Apartment 485",
    "rent": 1500,
    "distance": 2.35,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.684166,
      "lng": -72.24982
    },
    "image": "https://images.unsplash.com/photo-1502672260751?w=800",
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
    "id": 486,
    "name": "Apartment 486",
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
      "lat": 43.697109,
      "lng": -72.244564
    },
    "image": "https://images.unsplash.com/photo-1502672260752?w=800",
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
    "id": 487,
    "name": "Apartment 487",
    "rent": 1500,
    "distance": 1.59,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.724558,
      "lng": -72.282486
    },
    "image": "https://images.unsplash.com/photo-1502672260753?w=800",
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
    "id": 488,
    "name": "Apartment 488",
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
      "lat": 43.67421,
      "lng": -72.314092
    },
    "image": "https://images.unsplash.com/photo-1502672260754?w=800",
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
    "id": 489,
    "name": "Apartment 489",
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
      "lat": 43.65671,
      "lng": -72.292583
    },
    "image": "https://images.unsplash.com/photo-1502672260755?w=800",
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
    "id": 490,
    "name": "Apartment 490",
    "rent": 1500,
    "distance": 0.99,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.688019,
      "lng": -72.291913
    },
    "image": "https://images.unsplash.com/photo-1502672260756?w=800",
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
    "id": 491,
    "name": "Apartment 491",
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
      "lat": 43.683929,
      "lng": -72.325673
    },
    "image": "https://images.unsplash.com/photo-1502672260757?w=800",
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
    "id": 492,
    "name": "Apartment 492",
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
      "lat": 43.71977,
      "lng": -72.298261
    },
    "image": "https://images.unsplash.com/photo-1502672260758?w=800",
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
    "id": 493,
    "name": "Apartment 493",
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
      "lat": 43.720176,
      "lng": -72.279058
    },
    "image": "https://images.unsplash.com/photo-1502672260759?w=800",
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
    "id": 494,
    "name": "Apartment 494",
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
      "lat": 43.722048,
      "lng": -72.243576
    },
    "image": "https://images.unsplash.com/photo-1502672260760?w=800",
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
    "id": 495,
    "name": "Apartment 495",
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
      "lat": 43.745409,
      "lng": -72.307831
    },
    "image": "https://images.unsplash.com/photo-1502672260761?w=800",
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
    "id": 496,
    "name": "Apartment 496",
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
      "lat": 43.669027,
      "lng": -72.288304
    },
    "image": "https://images.unsplash.com/photo-1502672260762?w=800",
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
    "id": 497,
    "name": "Apartment 497",
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
      "lat": 43.683324,
      "lng": -72.278185
    },
    "image": "https://images.unsplash.com/photo-1502672260763?w=800",
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
    "id": 498,
    "name": "Apartment 498",
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
      "lat": 43.696527,
      "lng": -72.316966
    },
    "image": "https://images.unsplash.com/photo-1502672260764?w=800",
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
    "id": 499,
    "name": "Apartment 499",
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
      "lat": 43.715117,
      "lng": -72.26694
    },
    "image": "https://images.unsplash.com/photo-1502672260765?w=800",
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
