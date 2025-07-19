import React from "react";
import LineChartComponent from "@/components/ui/LineChartComponent";
import PieChartComponent from "@/components/ui/PieChart";
import CartChart from "@/components/ui/CartChart";
import BestSeller from "@/components/ui/BestSeller";
import ForeCast from "@/components/ui/ForeCast";
import StatCards from "@/components/ui/StatCards";
import ProductTable from "@/components/ui/ProductTable";

export default function Dashboard() {
  return (
    <d iv className="grid gap-6">
      {/* Top Cards */}
      <StatCards />

      {/* Chart and Cart Progress */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-2">
          <LineChartComponent name="Dashboard" color="#FFA500" />
        </div>
        <CartChart />
      </div>

      {/* Pie Chart + Line Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PieChartComponent />
        <LineChartComponent name="Traffic" color="#00C49F" />
      </div>
      {/* Best Sellers + Sales Forecast */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BestSeller />
        <ForeCast />
      </div>
      <div className="pb-6">
        <ProductTable name="Latest Orders" />
      </div> 
    </d>
  );
}
