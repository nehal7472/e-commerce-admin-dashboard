import React from "react";
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react";
import { Link } from "react-router-dom";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-950 text-center p-6 transition-colors">
      <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-xl max-w-md w-full">
        <div className="flex justify-center mb-4">
          <Construction className="w-12 h-12 text-orange-500" />
        </div>
        <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
          Page Under Construction
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We're currently working on this page. Please check back later!
        </p>
        <Button
          asChild
          className="bg-orange-500 hover:bg-orange-600 text-white w-full"
        >
          <Link to="/admin">Go Back Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default UnderConstruction;
