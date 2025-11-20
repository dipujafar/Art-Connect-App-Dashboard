"use client";
import { useUserChartDataQuery } from "@/redux/api/metaDataApi";
import { Select } from "antd";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import UserOverviewChartSkeleton from "./UserOverviewChartSkeleton";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type TUserData = {
  month: string;
  count: number;
};

const UserOverviewChart = () => {
  const [selectedYear, setSelectedYear] = useState<string>(
    new Date().getFullYear().toString()
  );
  const [chartData, setChartData] = useState<TUserData[]>([]);
  const { data: userChartData, isLoading } = useUserChartDataQuery({ year: selectedYear });



  useEffect(() => {
    userChartData?.data?.forEach((data: any, index: number) => {
      const formattedData = { month: months[index], count: data?.count };
      setChartData((prevData) => [...prevData, formattedData]);
    });
  }, [userChartData, selectedYear]);



  if (isLoading) return <UserOverviewChartSkeleton />;




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
          data={chartData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="month"
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
            dataKey="count"
            fill="var(--color-main)"
            stroke="var(--color-main)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverviewChart;
