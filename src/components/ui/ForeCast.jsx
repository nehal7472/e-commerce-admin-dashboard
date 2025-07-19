import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ForeCast = () => {
  const forecast = [
    { title: "Growth", value: "+24.2%", color: "text-green-600" },
    { title: "Returns", value: "-2.5%", color: "text-red-600" },
    { title: "Revenue", value: "+32.8%", color: "text-green-600" },
    { title: "Conversion", value: "+60%", color: "text-green-600" },
  ];
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Sales Forecast</CardTitle>
        <Button variant="link" className="text-xs px-0 cursor-pointer">
          More →
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        {forecast.map((item, i) => (
          <div key={i} className="p-2 border rounded-lg">
            <p className="text-sm text-muted-foreground">{item.title}</p>
            <h3 className={`text-lg font-bold ${item.color}`}>{item.value}</h3>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ForeCast;
