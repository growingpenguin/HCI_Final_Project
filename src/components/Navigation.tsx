import { Link, useLocation } from "react-router-dom";
import { Home, GitCompare, Map, TrendingUp } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/compare", label: "Compare", icon: GitCompare },
    { path: "/map", label: "Map View", icon: Map },
    { path: "/trends", label: "Trends", icon: TrendingUp }
  ];

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#A4D7A7] flex items-center justify-center">
              <Home className="w-5 h-5 text-gray-800" />
            </div>
            <span className="text-xl font-semibold">Dartmouth Housing</span>
          </Link>
          
          <div className="flex gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#A4D7A7] text-gray-900"
                      : "text-gray-600 hover:bg-[#EAEAEA]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
