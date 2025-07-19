import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black dark:text-white  shadow-inner p-4 text-sm text-gray-500">
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-center">
        <p>&copy; {new Date().getFullYear()} Mart Admin Dashboard</p>
        <p>Designed by Ahsanul Haque Nehal</p>
      </div>
    </footer>
  );
};

export default Footer;
