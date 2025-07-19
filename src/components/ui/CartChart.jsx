"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CartChart = () => {
  const percentage = 38;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Cart</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <div className="w-24 h-24">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textSize: "16px",
              pathColor: "#7c3aed", // purple
              textColor: "#7c3aed",
              trailColor: "#e5e7eb", // gray-200
            })}
          />
        </div>
        <div className="space-y-1 text-center text-sm">
          <p className="font-medium">
            Abandoned Cart: <span className="text-primary">720</span>
          </p>
          <p className="text-muted-foreground">
            Abandoned Revenue: <span className="text-primary">$5900</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CartChart;
