"use client";
import { Select } from "antd";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", user: 1200 },
  { name: "Feb", user: 1402 },
  { name: "Mar", user: 1525 },
  { name: "Apr", user: 1222 },
  { name: "May", user: 1553 },
  { name: "Jun", user: 1634 },
  { name: "Jul", user: 1923 },
  { name: "Aug", user: 1324 },
  { name: "Sep", user: 1834 },
  { name: "Oct", user: 1256 },
  { name: "Nov", user: 1634 },
  { name: "Dec", user: 2105 },
];

const UserOverviewChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setSelectedYear(value);
  };

  return (
    <div className="  rounded-lg p-8 bg-section-bg ">
      <div className=" flex justify-between items-center mb-10">
        <h1 className="text-xl text-text-color">User Overview</h1>

        <Select
          value={selectedYear}
          style={{ width: 120 }}
          onChange={handleChange}
          options={[
            { value: "2024", label: "2024" },
            { value: "2025", label: "2025" },
            { value: "2026", label: "2026" },
            { value: "2027", label: "2027" },
            { value: "2028", label: "2028" },
          ]}
        />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
            tickMargin={10}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--color-text-color)" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tick={{ fill: "var(--color-text-color)" }}
          />
          <Tooltip itemStyle={{ color: "#000" }} />
          <CartesianGrid
            opacity={0.2}
            horizontal={true}
            vertical={false}
            stroke="080E0E"
            strokeDasharray="0"
          />
          <Bar
            barSize={35}
            radius={[2, 2, 0, 0]}
            background={false}
            dataKey="user"
            fill="var(--color-main)"
            stroke="var(--color-main)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverviewChart;
