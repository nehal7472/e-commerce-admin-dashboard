import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const BestSeller = () => {
  const bestSellers = [
    { name: "iPhone 14 Pro", price: "$999", sold: 342, profit: "$150K" },
    { name: 'MacBook Pro 16"', price: "$2399", sold: 189, profit: "$250K" },
    { name: "AirPods Pro", price: "$249", sold: 312, profit: "$90K" },
    { name: "iPad Air", price: "$599", sold: 215, profit: "$125K" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Best Sellers</CardTitle>
        <Button variant="link" className="text-xs px-0">
          More →
        </Button>
      </CardHeader>
      <CardContent className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-muted-foreground text-left">
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Sold</th>
              <th className="py-2">Profit</th>
            </tr>
          </thead>
          <tbody>
            {bestSellers.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.price}</td>
                <td className="py-2">{item.sold}</td>
                <td className="py-2">{item.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default BestSeller;
