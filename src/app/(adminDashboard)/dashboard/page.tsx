import LatestUser from "@/components/(adminDashboard)/dashboard/LatestUser";
import Statistic from "@/components/(adminDashboard)/dashboard/Statistic/Statistic";
import UserOverviewChart from "@/components/(adminDashboard)/dashboard/UserOverviewChart/UserOverviewChart";

const DashboardPage = () => {
  return (
    <div className="lg:space-y-10 space-y-5 ">
      <div className=" grid grid-cols-1 xl:grid-cols-3 xl:gap-x-3 gap-y-5  justify-center items-center ">
        <div className="col-span-2">
          <UserOverviewChart></UserOverviewChart>
        </div>
        <div>
          <Statistic></Statistic>
        </div>
      </div>
      <LatestUser></LatestUser>
    </div>
  );
};

export default DashboardPage;
