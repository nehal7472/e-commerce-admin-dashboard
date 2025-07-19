import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/ui/Sidebar";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const AdminLayout = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[2] || "Dashboard";

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="h-screen overflow-hidden flex bg-gray-100 relative">
      <div
        className={`fixed top-0 left-0 h-full z-30 bg-orange-500 text-white transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={closeSidebar}
        />
      )}

      <main className="flex flex-col flex-1 h-screen overflow-y-auto md:px-6 md:py-4">
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
