import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaBars } from "react-icons/fa";

const Navbar = ({ pageTitle, toggleSidebar }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-4  dark:bg-black  rounded-lg transition-colors duration-300">
      {/* Sidebar toggle (mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 dark:text-gray-300 mr-2"
      >
        <FaBars size={20} />
      </button>

      {/* Page Title */}
      <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
        {pageTitle}
      </h1>

      {/* Right Menu */}
      <div className="flex items-center gap-4 relative" ref={menuRef}>
        <select className="text-sm bg-gray-100 dark:bg-zinc-800 dark:text-white px-3 py-1 rounded-md focus:outline-none cursor-pointer">
          <option>Jan 01 - Jan 26</option>
          <option>Last 7 days</option>
          <option>This month</option>
        </select>

        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
        >
          <FaEllipsisV size={20} />
        </button>

        {showMenu && (
          <div className="absolute top-12 right-0 bg-white dark:bg-zinc-800 shadow-lg rounded-md w-40 py-2 z-50 transition-all duration-200 border dark:border-zinc-700">
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer text-gray-800 dark:text-white">
              Profile
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer text-gray-800 dark:text-white">
              Settings
            </div>
            <div className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer text-gray-800 dark:text-white">
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
