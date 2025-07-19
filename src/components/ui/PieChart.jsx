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
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = () => {
  const pieData = [
    { name: "Desktop", value: 600 },
    { name: "Mobile", value: 300 },
    { name: "Tablet", value: 100 },
    { name: "Unknown", value: 50 },
  ];
  const COLORS = ["#FF6363", "#FFA63D", "#00C49F", "#8884d8"];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Device</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PieChartComponent;
