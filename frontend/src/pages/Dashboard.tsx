import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LogOut, LayoutDashboard, User, Settings } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-blue-700 text-white transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-blue-600">
          <h1
            className={`text-xl font-bold transition-all ${
              sidebarOpen ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            Dashboard
          </h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="focus:outline-none text-white"
          >
            ☰
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 p-4 space-y-2">
          <button className="flex items-center space-x-3 w-full py-2 px-3 rounded-md hover:bg-blue-600">
            <LayoutDashboard size={20} />
            {sidebarOpen && <span>Overview</span>}
          </button>

          <button className="flex items-center space-x-3 w-full py-2 px-3 rounded-md hover:bg-blue-600">
            <User size={20} />
            {sidebarOpen && <span>Profile</span>}
          </button>

          <button className="flex items-center space-x-3 w-full py-2 px-3 rounded-md hover:bg-blue-600">
            <Settings size={20} />
            {sidebarOpen && <span>Settings</span>}
          </button>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-blue-600">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 w-full py-2 px-3 rounded-md hover:bg-red-600 transition"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome to Dashboard
          </h2>
          <p className="text-gray-500">User Panel</p>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Dashboard Overview</h3>
            <p className="text-gray-600">
              You have successfully logged in. This is your dashboard area.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
