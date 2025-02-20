"use client";
import React from "react";
import userProfile from "@/assets/image/userProfile.png";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import { Button } from "antd";
import Link from "next/link";
import nurseImage from "@/assets/image/nurseImage.png";
import NurseDetailsModal from "../all-nurses/NurseDetailsModal";

const RequestContainer = () => {
  const [openNurseDetails, setOpenNurseDetail] = React.useState(false);
  return (
    <div>
      <div className="space-y-8 flex-col min-h-[calc(100vh-200px)] ">
        {/* _________user and request details___________ */}
        <div className="flex flex-col xl:flex-row justify-between gap-5    ">
          {/* _________user detail___________ */}
          <div className="flex items-center gap-x-2">
            <Image
              src={userProfile}
              alt="user_profile"
              width={1200}
              height={1200}
              className="size-32"
            ></Image>
            <div>
              <h3 className="text-xl font-medium">James Tracy</h3>
              <p className="text-sm flex items-center  gap-x-1">
                <MapPin size={18} color="#959697"></MapPin>
                <span className="text-sm text-[#959697]">New York, USA</span>
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-medium mb-3">Request Id: #897</h1>
            <div className="flex items-center gap-x-2">
              <h2 className="text-lg font-medium">Category :</h2>
              <h5 className="bg-main-color p-2 text-white rounded">
                Book Per Medical Condition
              </h5>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <hr />
        </div>

        {/* problem details will show base on the category. there will be problem details or Schedule details  */}
        {/* ________ personal information and problem details_______ */}
        <div className="flex flex-col xl:flex-row justify-between gap-5">
          <div>
            <h4 className="text-2xl font-semibold mb-3">Patient Information</h4>
            <div className="flex gap-x-5  items-center text-lg">
              <h3 className="w-[150px]">Relationship: </h3>
              <p>Brother</p>
            </div>
            <div className="flex   gap-x-5 items-center text-lg">
              <h3 className="w-[150px]">Request Date: </h3>
              <p>August 15, 2024</p>
            </div>
            <div className="flex gap-x-5   items-center text-lg">
              <h3 className="w-[150px]">Specialist: </h3>
              <p>Critical care nursing</p>
            </div>
            <div className="flex gap-x-5   items-center text-lg">
              <h3 className="w-[150px]">Email: </h3>
              <p>james1234@gmail.com </p>
            </div>
            <div className="flex gap-x-5   items-center text-lg">
              <h3 className="w-[150px]">Contact: </h3>
              <p>+789 5669 0256</p>
            </div>
            <div className="flex   gap-x-5 items-center text-lg">
              <h3 className="w-[150px]">Age: </h3>
              <p>39</p>
            </div>
          </div>
          {/* _______problem details_______ */}
          <div>
            <h4 className="text-2xl font-semibold mb-3">Problem</h4>
            <p className="text-lg max-w-md">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* ____________if have any assigned nurse show here___________ */}
        <h4 className="text-2xl font-semibold mb-3">Assigned Nurses</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="p-3 bg-[#c4ebe9] rounded">
              <div className="flex justify-between items-center  gap-x-3 mt-3">
                <div className="space-y-1">
                  <Image
                    src={nurseImage}
                    alt="user-image"
                    width={1200}
                    height={1200}
                    className="size-32"
                  ></Image>
                  <div className="flex gap-x-2 justify-center items-center">
                    <h1 className="font-medium">Kane Smith</h1>
                    <div className="flex gap-x-1 items-center justify-center">
                      <Star size={16} fill="#8D2E7D" color="#8D2E7D" />
                      <p>4.5</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-main-color font-medium text-lg text-center mb-2s">
                    Main Nurse
                  </h4>
                  <div className="flex xl:gap-x-10 gap-6 justify-between">
                    <h5>Status :</h5>
                    <p className="text-main-color font-medium">Accepted</p>
                  </div>
                  <div className="flex xl:gap-x-10 gap-6 justify-between">
                    <h5>Specialist :</h5>
                    <p className="text-main-color font-medium">CNS</p>
                  </div>
                  <div className="flex xl:gap-x-10 gap-6 justify-between">
                    <h5>Experience :</h5>
                    <p className="text-main-color font-medium">6 years</p>
                  </div>
                  <div className="flex xl:gap-x-10 gap-6 justify-between">
                    <h5>Total Consultaion :</h5>
                    <p className="text-main-color font-medium">12</p>
                  </div>
                  <div className="flex xl:gap-x-10 gap-6 justify-between">
                    <h5>Patient :</h5>
                    <p className="text-main-color font-medium">02</p>
                  </div>
                </div>
              </div>
              {/* ____________________________________ Details Button ______________________________ */}
              <Button
                onClick={() => setOpenNurseDetail(true)}
                className="w-full mt-3"
              >
                See Details
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* _______action button_______ */}
      <div className="mt-10">
        <Link href={"/all-nurses"}>
          <Button style={{ padding: "20px 0px" }} className="w-full">
            Assign Nurse
          </Button>
        </Link>
      </div>
      <NurseDetailsModal
        open={openNurseDetails}
        setOpen={setOpenNurseDetail}
      ></NurseDetailsModal>
    </div>
  );
};

export default RequestContainer;
