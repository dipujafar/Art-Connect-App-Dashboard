"use client";
import { useGetStatDataQuery } from "@/redux/api/metaDataApi";
import StatisticSkeleton from "./StatisticSkeleton";

const Statistic = () => {
  const { data: statData, isLoading } = useGetStatDataQuery({});
  if (isLoading) return <StatisticSkeleton />;
  return (
    <div className="flex justify-between items-center xl:gap-3 gap-2 flex-wrap ">
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4 bg-section-bg rounded-xl text-main-color">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Total Users
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">
          {statData?.data?.totalUser}
        </p>
      </div>
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4  bg-section-bg rounded-xl text-main-color">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Total Gigs
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">
          {statData?.data?.totalGig}
        </p>
      </div>
      <div className="flex flex-col justify-center 2xl:px-10 px-5 h-[165px] flex-1 p-4  bg-section-bg rounded-xl text-main-color">
        <h3 className="2xl:text-3xl xl:text-2xl text-xl truncate">
          Ongoing Gigs
        </h3>
        <p className="xl:text-3xl text-2xl font-medium text-main-color">
          {statData?.data?.onGoingGig}
        </p>
      </div>
    </div>
  );
};

export default Statistic;
