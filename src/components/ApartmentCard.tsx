import { Bed, Bath, Ruler, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Apartment, USD_TO_KRW, SQFT_TO_SQM } from "../data/mockData";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ApartmentCardProps {
  apartment: Apartment;
  currency: "USD" | "KRW";
  units: "sqft" | "sqm";
}

export function ApartmentCard({ apartment, currency, units }: ApartmentCardProps) {
  const displayRent = currency === "USD" 
    ? `$${apartment.rent.toLocaleString()}` 
    : `₩${(apartment.rent * USD_TO_KRW).toLocaleString()}`;
  
  const displayArea = units === "sqft"
    ? `${apartment.sqft} ft²`
    : `${(apartment.sqft * SQFT_TO_SQM).toFixed(1)} m²`;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <ImageWithFallback
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="mb-1">{apartment.name}</h3>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>{apartment.distance} mi from campus</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl text-[#A4D7A7]">{displayRent}</div>
            <div className="text-sm text-gray-500">/month</div>
          </div>
        </div>

        <div className="flex gap-4 mb-4 pb-4 border-b">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-gray-500" />
            <span>{apartment.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-gray-500" />
            <span>{apartment.bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-gray-500" />
            <span>{displayArea}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {apartment.amenities.map((amenity, index) => (
            <Badge key={index} variant="secondary" className="bg-[#EAEAEA] text-gray-700">
              {amenity}
            </Badge>
          ))}
          {apartment.privateBathroom && (
            <Badge className="bg-[#A4D7A7] text-gray-900">Private Bath</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
