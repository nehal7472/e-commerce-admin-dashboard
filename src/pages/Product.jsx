import LineChartComponent from "@/components/ui/LineChartComponent";
import ProductTable from "@/components/ui/ProductTable";
import ProfileCard from "@/components/ui/ProfileCard";
import StatCards from "@/components/ui/StatCards";
import React from "react";

const Product = () => {
  return (
    <div className="grid gap-6">
      <StatCards />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProfileCard
          name="Analog Table Clock"
          subName="General"
          title="In Stock"
          subtitle="Colors"
          text="Start Time"
          subText="Life Time Sells"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR36agg7Zp9UfhwPZW73IfPsXDk1ahEaEtVg&s"
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
        <ProductTable name="Orders" productsTable= 'Orders'/>
      </div>
    </div>
  );
};

export default Product;
