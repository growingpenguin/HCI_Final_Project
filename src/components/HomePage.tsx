import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Home, GitCompare, Map, TrendingUp } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { FilterPanel } from "./FilterPanel";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  // Add local state to demonstrate FilterPanel usage on the homepage
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 2000]);
  const [privateBathroom, setPrivateBathroom] = useState<boolean>(false);
  const [currency, _setCurrency] = useState<"USD" | "KRW">("USD");
  const [units, _setUnits] = useState<"sqft" | "sqm">("sqft");
  const navigate = useNavigate();

  const features = [
    {
      icon: GitCompare,
      title: "Compare Listings",
      description: "View apartments side-by-side with currency and unit conversion",
      color: "#A4D7A7",
      path: "/compare"
    },
    {
      icon: Map,
      title: "Map View",
      description: "Explore housing locations with color-coded rent levels",
      color: "#EAEAEA",
      path: "/map"
    },
    {
      icon: TrendingUp,
      title: "Trends Dashboard",
      description: "Analyze average rent trends over time",
      color: "#A4D7A7",
      path: "/trends"
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/compare");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 rounded-xl bg-[#A4D7A7] flex items-center justify-center">
              <Home className="w-6 h-6 text-gray-800" />
            </div>
          </div>
          <h1 className="text-5xl mb-4">Find Your Perfect Home</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare off-campus housing options with automatic currency and unit conversion for international students
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by location, price, or amenities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-white"
                />
              </div>
              <Button type="submit" className="h-12 px-8 bg-[#A4D7A7] hover:bg-[#92c595] text-gray-900">
                Search
              </Button>
            </div>
          </form>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                onClick={() => navigate(feature.path)}
                className="p-6 cursor-pointer hover:shadow-lg transition-shadow border-2 border-transparent hover:border-[#A4D7A7]"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: feature.color }}
                >
                  <Icon className="w-6 h-6 text-gray-800" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Example FilterPanel on homepage (non-intrusive) */}
        <div className="mb-8">
          <FilterPanel
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            privateBathroom={privateBathroom}
            onPrivateBathroomChange={setPrivateBathroom}
            currency={currency}
            units={units}
          />
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl p-8 shadow-sm border">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2 text-[#A4D7A7]">8+</div>
              <p className="text-gray-600">Available Listings</p>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#A4D7A7]">0.3mi</div>
              <p className="text-gray-600">Closest to Campus</p>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#A4D7A7]">$950+</div>
              <p className="text-gray-600">Starting From</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
