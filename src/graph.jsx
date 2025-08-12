import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Day 1", value: 0 },
  { name: "Day 2", value: 0 },
  { name: "Day 3", value: 1 },
  { name: "Day 4", value: 1 },
  { name: "Day 5", value: 1 },
];

export default function MyChart() {
  return (
    <div style={{ width: "50%", height: 400,boxShadow: '0 0 5px 1px rgba(0,0,0,0.3)' }} className=" mt-[24px]">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: -20, bottom: 20 }}
        >
          <CartesianGrid stroke="rgba(0,0,0,0.1)" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}