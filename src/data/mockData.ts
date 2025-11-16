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
      "lat": 43.667697,
      "lng": -72.287554
    },
    "image": "https://images.unsplash.com/photo-1502672260267?w=800",
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
    "id": 2,
    "name": "Apartment 2",
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
      "lat": 43.654346,
      "lng": -72.25921
    },
    "image": "https://images.unsplash.com/photo-1502672260268?w=800",
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
    "id": 3,
    "name": "Apartment 3",
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
      "lat": 43.712817,
      "lng": -72.314619
    },
    "image": "https://images.unsplash.com/photo-1502672260269?w=800",
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
    "id": 4,
    "name": "Apartment 4",
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
      "lat": 43.682058,
      "lng": -72.247388
    },
    "image": "https://images.unsplash.com/photo-1502672260270?w=800",
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
    "id": 5,
    "name": "Apartment 5",
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
      "lat": 43.70205,
      "lng": -72.320117
    },
    "image": "https://images.unsplash.com/photo-1502672260271?w=800",
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
    "id": 6,
    "name": "Apartment 6",
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
      "lat": 43.738338,
      "lng": -72.284057
    },
    "image": "https://images.unsplash.com/photo-1502672260272?w=800",
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
    "id": 7,
    "name": "Apartment 7",
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
      "lat": 43.698309,
      "lng": -72.314371
    },
    "image": "https://images.unsplash.com/photo-1502672260273?w=800",
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
    "id": 8,
    "name": "Apartment 8",
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
      "lat": 43.662408,
      "lng": -72.332777
    },
    "image": "https://images.unsplash.com/photo-1502672260274?w=800",
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
    "id": 9,
    "name": "Apartment 9",
    "rent": 1500,
    "distance": 0.87,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.692468,
      "lng": -72.2786
    },
    "image": "https://images.unsplash.com/photo-1502672260275?w=800",
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
    "id": 10,
    "name": "Apartment 10",
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
      "lat": 43.67062,
      "lng": -72.318191
    },
    "image": "https://images.unsplash.com/photo-1502672260276?w=800",
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
    "id": 11,
    "name": "Apartment 11",
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
      "lat": 43.718175,
      "lng": -72.306051
    },
    "image": "https://images.unsplash.com/photo-1502672260277?w=800",
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
    "id": 12,
    "name": "Apartment 12",
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
      "lat": 43.73176,
      "lng": -72.246626
    },
    "image": "https://images.unsplash.com/photo-1502672260278?w=800",
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
    "id": 13,
    "name": "Apartment 13",
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
      "lat": 43.714832,
      "lng": -72.302747
    },
    "image": "https://images.unsplash.com/photo-1502672260279?w=800",
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
    "id": 14,
    "name": "Apartment 14",
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
      "lat": 43.736315,
      "lng": -72.309678
    },
    "image": "https://images.unsplash.com/photo-1502672260280?w=800",
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
    "id": 15,
    "name": "Apartment 15",
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
      "lat": 43.674057,
      "lng": -72.293458
    },
    "image": "https://images.unsplash.com/photo-1502672260281?w=800",
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
    "id": 16,
    "name": "Apartment 16",
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
      "lat": 43.694132,
      "lng": -72.305806
    },
    "image": "https://images.unsplash.com/photo-1502672260282?w=800",
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
    "id": 17,
    "name": "Apartment 17",
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
      "lat": 43.689471,
      "lng": -72.325886
    },
    "image": "https://images.unsplash.com/photo-1502672260283?w=800",
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
    "id": 18,
    "name": "Apartment 18",
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
      "lat": 43.724369,
      "lng": -72.311001
    },
    "image": "https://images.unsplash.com/photo-1502672260284?w=800",
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
    "id": 19,
    "name": "Apartment 19",
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
      "lat": 43.681168,
      "lng": -72.269765
    },
    "image": "https://images.unsplash.com/photo-1502672260285?w=800",
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
    "id": 20,
    "name": "Apartment 20",
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
      "lat": 43.657325,
      "lng": -72.301874
    },
    "image": "https://images.unsplash.com/photo-1502672260286?w=800",
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
    "id": 21,
    "name": "Apartment 21",
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
      "lat": 43.696045,
      "lng": -72.328215
    },
    "image": "https://images.unsplash.com/photo-1502672260287?w=800",
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
    "id": 22,
    "name": "Apartment 22",
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
      "lat": 43.69865,
      "lng": -72.259796
    },
    "image": "https://images.unsplash.com/photo-1502672260288?w=800",
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
    "id": 23,
    "name": "Apartment 23",
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
      "lat": 43.709403,
      "lng": -72.27945
    },
    "image": "https://images.unsplash.com/photo-1502672260289?w=800",
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
    "id": 24,
    "name": "Apartment 24",
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
      "lat": 43.657722,
      "lng": -72.315082
    },
    "image": "https://images.unsplash.com/photo-1502672260290?w=800",
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
    "id": 25,
    "name": "Apartment 25",
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
      "lat": 43.74108,
      "lng": -72.240699
    },
    "image": "https://images.unsplash.com/photo-1502672260291?w=800",
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
    "id": 26,
    "name": "Apartment 26",
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
      "lat": 43.659612,
      "lng": -72.298887
    },
    "image": "https://images.unsplash.com/photo-1502672260292?w=800",
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
    "id": 27,
    "name": "Apartment 27",
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
      "lat": 43.731173,
      "lng": -72.241173
    },
    "image": "https://images.unsplash.com/photo-1502672260293?w=800",
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
    "id": 28,
    "name": "Apartment 28",
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
      "lat": 43.747554,
      "lng": -72.249574
    },
    "image": "https://images.unsplash.com/photo-1502672260294?w=800",
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
    "id": 29,
    "name": "Apartment 29",
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
      "lat": 43.653572,
      "lng": -72.335546
    },
    "image": "https://images.unsplash.com/photo-1502672260295?w=800",
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
    "id": 30,
    "name": "Apartment 30",
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
      "lat": 43.673549,
      "lng": -72.31516
    },
    "image": "https://images.unsplash.com/photo-1502672260296?w=800",
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
    "id": 31,
    "name": "Apartment 31",
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
      "lat": 43.730819,
      "lng": -72.29505
    },
    "image": "https://images.unsplash.com/photo-1502672260297?w=800",
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
    "id": 32,
    "name": "Apartment 32",
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
      "lat": 43.748083,
      "lng": -72.30189
    },
    "image": "https://images.unsplash.com/photo-1502672260298?w=800",
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
    "id": 33,
    "name": "Apartment 33",
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
      "lat": 43.67221,
      "lng": -72.316336
    },
    "image": "https://images.unsplash.com/photo-1502672260299?w=800",
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
    "id": 34,
    "name": "Apartment 34",
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
      "lat": 43.699562,
      "lng": -72.315786
    },
    "image": "https://images.unsplash.com/photo-1502672260300?w=800",
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
    "id": 35,
    "name": "Apartment 35",
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
      "lat": 43.667927,
      "lng": -72.241466
    },
    "image": "https://images.unsplash.com/photo-1502672260301?w=800",
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
    "id": 36,
    "name": "Apartment 36",
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
      "lat": 43.740822,
      "lng": -72.252922
    },
    "image": "https://images.unsplash.com/photo-1502672260302?w=800",
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
    "id": 37,
    "name": "Apartment 37",
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
      "lat": 43.728556,
      "lng": -72.320303
    },
    "image": "https://images.unsplash.com/photo-1502672260303?w=800",
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
    "id": 38,
    "name": "Apartment 38",
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
      "lat": 43.738777,
      "lng": -72.261507
    },
    "image": "https://images.unsplash.com/photo-1502672260304?w=800",
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
    "id": 39,
    "name": "Apartment 39",
    "rent": 1500,
    "distance": 3.71,
    "bedrooms": 1,
    "bathrooms": 1,
    "privateBathroom": true,
    "sqft": 700,
    "amenities": [
      "WiFi",
      "Heating",
      "Parking",
      "Private Bathroom"
    ],
    "coordinates": {
      "lat": 43.748716,
      "lng": -72.252312
    },
    "image": "https://images.unsplash.com/photo-1502672260305?w=800",
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
    "id": 40,
    "name": "Apartment 40",
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
      "lat": 43.711547,
      "lng": -72.26636
    },
    "image": "https://images.unsplash.com/photo-1502672260306?w=800",
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
    "id": 41,
    "name": "Apartment 41",
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
      "lat": 43.72585,
      "lng": -72.255205
    },
    "image": "https://images.unsplash.com/photo-1502672260307?w=800",
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
