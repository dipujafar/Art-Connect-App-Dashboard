"use client";
import GigsTable from "./GigsTable";
import GigsStatistic from "./GigsStatistic";
import { useGetAllGigsQuery } from "@/redux/api/gigApi";
import GigsContainerSkeleton from "./GigsContainerSkeleton";
import { useSearchParams } from "next/navigation";

const GigsContainer = () => {

  const page = useSearchParams().get("page") || "1";
  const limit = useSearchParams().get("limit") || "10";

  const queries: Record<string, string> = {};
  if (page) queries.page = page;
  if (limit) queries.limit = limit;

  const { data, isLoading } = useGetAllGigsQuery(queries);

  if (isLoading) {
    return <GigsContainerSkeleton />
  }

  return (
    <div className="space-y-5">
      <GigsStatistic totalGigs={data?.meta?.total} ></GigsStatistic>
      <GigsTable data={data} page={page} limit={limit}></GigsTable>
    </div>
  );
};

export default GigsContainer;
