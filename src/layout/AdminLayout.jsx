import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const location = useLocation();
  const pathName =
    location.pathname.split("/").filter(Boolean).pop() || "Dashboard";

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      className={`h-screen overflow-hidden flex relative ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Main content */}
      <main className="flex flex-col flex-1 h-screen overflow-y-auto md:px-6 md:py-4 bg-gray-100 dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
        <Navbar pageTitle={pathName} toggleSidebar={toggleSidebar} />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default AdminLayout;
