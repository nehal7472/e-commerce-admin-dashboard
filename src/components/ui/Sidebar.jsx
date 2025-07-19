import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChartBar,
  FaShoppingCart,
  FaUsers,
  FaSearch,
  FaBox,
} from "react-icons/fa";

const sidebarLinks = [
  { name: "Dashboard", icon: <FaHome />, path: "/admin" },
  { name: "Analytics", icon: <FaChartBar />, path: "order" },
  { name: "Orders", icon: <FaShoppingCart />, path: "products" },
  { name: "Users", icon: <FaUsers />, path: "customer" },
  { name: "Search", icon: <FaSearch />, path: "/admin/search" },
  { name: "Products", icon: <FaBox />, path: "create-new-customer" },
];

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="w-20 min-h-screen flex flex-col items-center py-6 space-y-8">
      <div className="text-2xl font-bold">M</div>
      <nav className="flex flex-col gap-6">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `text-2xl p-2 rounded-lg transition-all ${
                isActive ? "bg-white text-orange-500" : "hover:bg-orange-600"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
