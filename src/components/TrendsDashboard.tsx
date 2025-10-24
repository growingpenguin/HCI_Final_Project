import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "./ui/card";
import { trendData, USD_TO_KRW } from "../data/mockData";

export function TrendsDashboard() {
  const [currency, setCurrency] = useState<"USD" | "KRW">("USD");

  const chartData = trendData.map(item => ({
    month: item.month,
    avgRent: currency === "USD" ? item.avgRent : item.avgRent * USD_TO_KRW
  }));

  // Calculate trend statistics
  const firstMonth = trendData[0].avgRent;
  const lastMonth = trendData[trendData.length - 1].avgRent;
  const percentChange = ((lastMonth - firstMonth) / firstMonth) * 100;
  const isIncreasing = percentChange > 0;

  const currentAvg = currency === "USD" 
    ? lastMonth 
    : lastMonth * USD_TO_KRW;

  const peakMonth = trendData.reduce((max, item) => 
    item.avgRent > max.avgRent ? item : max
  );

  const lowMonth = trendData.reduce((min, item) => 
    item.avgRent < min.avgRent ? item : min
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Trends Dashboard</h1>
            <p className="text-gray-600">Average rent trends throughout the year</p>
          </div>
          
          <button
            onClick={() => setCurrency(currency === "USD" ? "KRW" : "USD")}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#A4D7A7] hover:bg-[#92c595] text-gray-900 transition-colors"
          >
            <DollarSign className="w-4 h-4" />
            {currency}
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Current Average</span>
              {isIncreasing ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-red-500" />
              )}
            </div>
            <div className="text-3xl text-[#A4D7A7]">
              {currency === "USD" ? "$" : "₩"}
              {currentAvg.toLocaleString()}
            </div>
            <div className={`text-sm ${isIncreasing ? "text-green-500" : "text-red-500"}`}>
              {isIncreasing ? "+" : ""}{percentChange.toFixed(1)}% from January
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-gray-600 mb-2">Peak Month</div>
            <div className="text-3xl">{peakMonth.month}</div>
            <div className="text-sm text-gray-500">
              {currency === "USD" ? "$" : "₩"}
              {(currency === "USD" ? peakMonth.avgRent : peakMonth.avgRent * USD_TO_KRW).toLocaleString()}
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-gray-600 mb-2">Lowest Month</div>
            <div className="text-3xl">{lowMonth.month}</div>
            <div className="text-sm text-gray-500">
              {currency === "USD" ? "$" : "₩"}
              {(currency === "USD" ? lowMonth.avgRent : lowMonth.avgRent * USD_TO_KRW).toLocaleString()}
            </div>
          </Card>

          <Card className="p-6">
            <div className="text-gray-600 mb-2">Total Listings</div>
            <div className="text-3xl">8</div>
            <div className="text-sm text-gray-500">Available apartments</div>
          </Card>
        </div>

        {/* Chart */}
        <Card className="p-6">
          <h3 className="mb-6">Average Rent Over Time</h3>
          
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEA" />
              <XAxis 
                dataKey="month" 
                stroke="#6b7280"
                style={{ fontSize: "14px" }}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: "14px" }}
                tickFormatter={(value) => 
                  currency === "USD" 
                    ? `$${(value / 1000).toFixed(1)}k` 
                    : `₩${(value / 1000000).toFixed(1)}M`
                }
              />
              <Tooltip 
                formatter={(value: number) => [
                  `${currency === "USD" ? "$" : "₩"}${value.toLocaleString()}`,
                  "Avg Rent"
                ]}
                contentStyle={{
                  backgroundColor: "white",
                  border: "1px solid #EAEAEA",
                  borderRadius: "8px"
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="avgRent" 
                stroke="#A4D7A7" 
                strokeWidth={3}
                dot={{ fill: "#A4D7A7", r: 5 }}
                activeDot={{ r: 7 }}
                name="Average Rent"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="mt-6 p-4 bg-[#EAEAEA] rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Insight:</strong> Rent prices typically peak during August, coinciding with the start of the academic year. 
              The best time to search for housing is between November and March when prices are lower.
            </p>
          </div>
        </Card>

        {/* Additional Analysis */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Card className="p-6">
            <h3 className="mb-4">Price Distribution</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Budget (&lt; $1000)</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#4ade80] h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Mid-range ($1000-$1500)</span>
                  <span>50%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#fbbf24] h-2 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm">
                  <span>Premium (&gt; $1500)</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#ef4444] h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="mb-4">Quick Conversions</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-[#EAEAEA] rounded-lg">
                <span>$1000 USD</span>
                <span>≈ ₩1,350,000 KRW</span>
              </div>
              <div className="flex justify-between p-3 bg-[#EAEAEA] rounded-lg">
                <span>$1500 USD</span>
                <span>≈ ₩2,025,000 KRW</span>
              </div>
              <div className="flex justify-between p-3 bg-[#EAEAEA] rounded-lg">
                <span>500 ft²</span>
                <span>≈ 46.5 m²</span>
              </div>
              <div className="flex justify-between p-3 bg-[#EAEAEA] rounded-lg">
                <span>1000 ft²</span>
                <span>≈ 92.9 m²</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
