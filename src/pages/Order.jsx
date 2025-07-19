import LineChartComponent from "@/components/ui/LineChartComponent";
import ProductTable from "@/components/ui/ProductTable";
import StatCards from "@/components/ui/StatCards";
import React from "react";

const Order = () => {
  return (
    <div className="grid gap-6">
      <StatCards />
      <LineChartComponent name="Dashboard" color="#FFA500" />
      <div className="pb-6">
        <ProductTable name="Latest Orders" productsTable = 'OrderID' />
      </div>
    </div>
  );
};

export default Order;
