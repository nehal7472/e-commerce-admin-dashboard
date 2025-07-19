import LineChartComponent from "@/components/ui/LineChartComponent";
import ProductTable from "@/components/ui/ProductTable";
import ProfileCard from "@/components/ui/ProfileCard";
import StatCards from "@/components/ui/StatCards";
import React from "react";
import { ResponsiveContainer } from "recharts";

const Customer = () => {
  return (
    <div className="grid gap-6">
      <StatCards />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard
          name="Connie Robertson"
          subName="victoriasimmmons@2020.com"
          title="Group"
          subtitle="Location"
          text="First Order"
          subText="Latest Orders"
          image="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <div className="col-span-2 h-[400px]">
          <LineChartComponent
            name="Dashboard"
            height={"full"}
            color="#FFA500"
          />
        </div>
      </div>
      <div className="pb-6">
        <ProductTable name="Orders" />
      </div>
    </div>
  );
};

export default Customer;
