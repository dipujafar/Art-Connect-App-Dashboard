import Image from "next/image";
import userImage from "@/assets/image/usersImage.png";
import statisticImage from "@/assets/image/statisticImage.png";

const GigsStatistic = ({totalGigs}:{totalGigs:number}) => {
  return (
    <div className="h-32 flex flex-col lg:flex-row gap-y-2  font-roboto text-primary-white">
      <div className="lg:w-1/2 h-full lg:mr-4 bg-section-bg rounded-xl flex gap-x-4 px-12 items-center ">
        <div className=" bg-main-color p-3 rounded-full">
          <Image src={userImage} alt="user" width={50} height={40} />
        </div>

        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl truncate text-main-color">
            Total Gigs
          </p>
          <h4 className="xl:text-3xl text-xl font-bold text-main-color">
            {totalGigs}
          </h4>
        </div>
      </div>
      <div className="lg:w-1/2 h-full lg:ml-4 bg-section-bg rounded-xl flex gap-x-4 px-12 items-center ">
        <div className=" bg-primary-green p-3 rounded-full">
          <Image src={statisticImage} alt="user" width={50} height={40} />
        </div>

        <div className="flex flex-col ">
          <p className="xl:text-3xl text-xl truncate text-primary-green">
            On Going Gigs
          </p>
          <h4 className="xl:text-3xl text-xl font-bold text-primary-green">
            1,021
          </h4>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GigsStatistic;
