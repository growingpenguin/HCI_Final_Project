import { useState, useMemo } from "react";
import { DollarSign, Ruler } from "lucide-react";
import { Button } from "./ui/button";
import { ApartmentCard } from "./ApartmentCard";
import { FilterPanel } from "./FilterPanel";
import { apartments } from "../data/mockData";

export function CompareListings() {
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");
  const [units, setUnits] = useState<"sqft" | "sqm">("sqft");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [privateBathroom, setPrivateBathroom] = useState(false);

  const filteredApartments = useMemo(() => {
    return apartments.filter(apt => {
      const inPriceRange = apt.rent >= priceRange[0] && apt.rent <= priceRange[1];
      const bathroomMatch = !privateBathroom || apt.privateBathroom;
      return inPriceRange && bathroomMatch;
    });
  }, [priceRange, privateBathroom]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Toggle Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Compare Listings</h1>
            <p className="text-gray-600">
              Showing {filteredApartments.length} of {apartments.length} apartments
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant={currency === "USD" ? "default" : "outline"}
              onClick={() => setCurrency(currency === "USD" ? "KRW" : "USD")}
              className={currency === "USD" ? "bg-[#A4D7A7] hover:bg-[#92c595] text-gray-900" : ""}
            >
              <DollarSign className="w-4 h-4 mr-2" />
              {currency === "USD" ? "USD ($)" : "KRW (₩)"}
            </Button>
            
            <Button
              variant={units === "sqft" ? "default" : "outline"}
              onClick={() => setUnits(units === "sqft" ? "sqm" : "sqft")}
              className={units === "sqft" ? "bg-[#A4D7A7] hover:bg-[#92c595] text-gray-900" : ""}
            >
              <Ruler className="w-4 h-4 mr-2" />
              {units === "sqft" ? "ft²" : "m²"}
            </Button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <FilterPanel
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              privateBathroom={privateBathroom}
              onPrivateBathroomChange={setPrivateBathroom}
              currency={currency}
              units={units}
            />
          </div>

          {/* Apartment Cards Grid */}
          <div className="lg:col-span-3">
            {filteredApartments.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border">
                <p className="text-gray-600">No apartments match your filters</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredApartments.map((apartment) => (
                  <ApartmentCard
                    key={apartment.id}
                    apartment={apartment}
                    currency={currency}
                    units={units}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
