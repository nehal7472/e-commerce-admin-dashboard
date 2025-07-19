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
import ThemeToggle from "../../features/themeToggle";

const sidebarLinks = [
  { name: "Dashboard", icon: <FaHome />, path: "dashboard" },
  { name: "Analytics", icon: <FaChartBar />, path: "order" },
  { name: "Orders", icon: <FaShoppingCart />, path: "products" },
  { name: "Users", icon: <FaUsers />, path: "customer" },
  { name: "Search", icon: <FaSearch />, path: "search" },
  { name: "Products", icon: <FaBox />, path: "create-new-customer" },
];

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside
      className="w-20 min-h-screen flex flex-col items-center py-6 space-y-8
      bg-[#FF8901] dark:bg-[#171717]"
    >
      <div
        className="text-2xl font-bold
        text-white dark:text-yellow-400"
      >
        M
      </div>
      <nav className="flex flex-col gap-6">
        {sidebarLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={closeSidebar}
            className={({ isActive }) =>
              `text-2xl p-2 rounded-lg transition-all
              ${
                isActive
                  ? "bg-white text-yellow-500 dark:bg-[#FF8901] dark:text-[#171717]"
                  : "hover:bg-yellow-500 dark:hover:bg-gray-700 text-white dark:text-yellow-400"
              }`
            }
          >
            {link.icon}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;
