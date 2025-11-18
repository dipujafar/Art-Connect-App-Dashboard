"use client";
import React from "react";
import GigsTable from "./GigsTable";
import GigsStatistic from "./GigsStatistic";
import { useGetAllGigsQuery } from "@/redux/api/gigApi";
import GigsContainerSkeleton from "./GigsContainerSkeleton";

const GigsContainer = () => {
  const { data, isLoading } = useGetAllGigsQuery({});

  if (isLoading) {
    return <GigsContainerSkeleton />
  }

  console.log(data?.meta?.total);

  return (
    <div className="space-y-5">
      <GigsStatistic totalGigs={data?.meta?.total}></GigsStatistic>
      <GigsTable></GigsTable>
    </div>
  );
};

export default GigsContainer;
