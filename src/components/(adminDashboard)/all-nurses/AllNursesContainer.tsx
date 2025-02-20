"use client";
import { Button, Input } from "antd";
import { Search, Star } from "lucide-react";
import nurseImage from "@/assets/image/nurseImage.png";
import Image from "next/image";
import NurseDetailsModal from "./NurseDetailsModal";
import { useState } from "react";

const AllNursesContainer = () => {
  const [nurseDetailsModal, setNurseDetailsModal] = useState(false);
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3">Request Id: #897</h1>
      <div className="mt-5">
        <hr />
        <hr />
      </div>

      <div className="mt-3  flex justify-end gap-x-2 items-center">
        <Input
          style={{
            width: "230px",
            borderRadius: "80px",
            backgroundColor: "#f5f5f5",
          }}
          prefix={<Search size={16} color="#959697"></Search>}
          placeholder="search nurse"
        ></Input>
        <div className="bg-main-color p-2 rounded-full cursor-pointer">
          <Search size={18} color="#fff"></Search>
        </div>
      </div>

      {/* _________all nurses__________ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-5 mt-5">
        {Array(10)
          .fill(0)
          .map((_, index) => (
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
                  <div className="flex gap-x-2 justify-between items-center">
                    <h1 className="font-medium">Kane Smith</h1>
                    <div className="flex gap-x-1 items-center justify-center">
                      <Star size={16} fill="#8D2E7D" color="#8D2E7D" />
                      <p>4.5</p>
                    </div>
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
                onClick={() => setNurseDetailsModal(true)}
                className="w-full mt-3"
              >
                See Details
              </Button>
            </div>
          ))}
      </div>
      <NurseDetailsModal
        open={nurseDetailsModal}
        setOpen={setNurseDetailsModal}
      ></NurseDetailsModal>
    </div>
  );
};

export default AllNursesContainer;
