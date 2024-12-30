import { Home, Settings, BarChart2 } from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

export function Sidebar({ activeModule, setActiveModule }: SidebarProps) {
  const menuItems = [
    { id: "user", label: "Dashboard", icon: Home },
    { id: "admin", label: "Admin", icon: Settings },
    { id: "reporting", label: "Reports", icon: BarChart2 },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition-transform duration-200 ease-in-out">
      {/* Sidebar Header */}
      <h2 className="text-2xl font-semibold text-center">Calendar</h2>

      {/* Navigation Links */}
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={cn(
              "flex items-center w-full py-2.5 px-4 rounded transition-colors duration-200 hover:bg-gray-700",
              activeModule === item.id && "bg-gray-700"
            )}
          >
            <item.icon className="mr-2 h-5 w-5" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
