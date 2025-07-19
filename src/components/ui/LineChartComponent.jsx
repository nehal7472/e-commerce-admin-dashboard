import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaArrowRight } from "react-icons/fa";

const LineChartComponent = ({ name, color }) => {
  const chartData = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 600 },
    { name: "Mar", value: 800 },
    { name: "Apr", value: 700 },
    { name: "May", value: 1000 },
    { name: "Jun", value: 1200 },
  ];

  return (
    <Card className="h-full">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{name}</CardTitle>
        <button className="cursor-pointer">
          <CardContent className="flex gap-2 items-center p-0">
            View Details <FaArrowRight className="text-gray-500" />
          </CardContent>
        </button>
      </CardHeader>
      <CardContent className="h-[300px] p-0 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;
