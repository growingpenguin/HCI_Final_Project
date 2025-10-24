import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Card } from "./ui/card";

interface FilterPanelProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  privateBathroom: boolean;
  onPrivateBathroomChange: (value: boolean) => void;
  currency: "USD" | "KRW";
  units: "sqft" | "sqm";
  // Optional map-specific controls
  rentMax?: number;
  onRentMaxChange?: (v: number) => void;
  bedroomsFilter?: number | null;
  onBedroomsFilterChange?: (v: number | null) => void;
  showHeatmap?: boolean;
  onShowHeatmapChange?: (v: boolean) => void;
}

export function FilterPanel({
  priceRange,
  onPriceRangeChange,
  privateBathroom,
  onPrivateBathroomChange,
  currency,
  units
  , rentMax, onRentMaxChange, bedroomsFilter, onBedroomsFilterChange, showHeatmap, onShowHeatmapChange
}: FilterPanelProps) {
  const currencySymbol = currency === "USD" ? "$" : "₩";
  const multiplier = currency === "USD" ? 1 : 1350;

  return (
    <Card className="p-6 sticky top-24">
      <h3 className="mb-6">Filters</h3>
      
      <div className="space-y-6">
        <div>
          <Label className="mb-4 block">Price Range</Label>
          <Slider
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onValueChange={(value: number[]) => onPriceRangeChange(value as [number, number])}
            className="mb-3"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{currencySymbol}{(priceRange[0] * multiplier).toLocaleString()}</span>
            <span>{currencySymbol}{(priceRange[1] * multiplier).toLocaleString()}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="private-bath">Private Bathroom Only</Label>
          <Switch
            id="private-bath"
            checked={privateBathroom}
            onCheckedChange={onPrivateBathroomChange}
          />
        </div>

        <div className="pt-4 border-t">
          <div className="text-sm text-gray-600 mb-2">Current Settings:</div>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Currency:</span>
              <span className="font-medium">{currency}</span>
            </div>
            <div className="flex justify-between">
              <span>Units:</span>
              <span className="font-medium">{units}</span>
            </div>
          </div>
        </div>

        {/* Optional Map Controls: rendered only if handlers are provided */}
        {typeof onRentMaxChange === "function" && (
          <div className="pt-4 border-t">
            <div className="text-sm text-gray-600 mb-2">Map Controls</div>
            <div className="text-xs text-gray-600 mb-2">Max Rent: ${rentMax ?? 2000}</div>
            <input aria-label="Max rent" type="range" min={500} max={3000} step={50} value={rentMax ?? 2000} onChange={(e) => onRentMaxChange(Number(e.target.value))} className="w-full mb-3" />

            <div className="text-xs text-gray-600 mb-2">Bedrooms</div>
            <select aria-label="Bedrooms filter" value={bedroomsFilter ?? "any"} onChange={(e) => onBedroomsFilterChange?.(e.target.value === "any" ? null : Number(e.target.value))} className="w-full mb-3 text-sm">
              <option value="any">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <label className="flex items-center gap-2 text-sm">
              <input aria-label="Toggle heatmap" type="checkbox" checked={showHeatmap ?? true} onChange={(e) => onShowHeatmapChange?.(e.target.checked)} />
              <span className="text-xs">Heatmap</span>
            </label>
          </div>
        )}
      </div>
    </Card>
  );
}
