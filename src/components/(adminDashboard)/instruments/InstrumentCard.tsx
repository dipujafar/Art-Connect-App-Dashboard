"use client";
import { TInstrumentsData } from "@/types";
import { Button, Image, message, Popconfirm, PopconfirmProps } from "antd";
import React, { useState } from "react";
import EditInstrumentModal from "./EditInstrumentModal";

const InstrumentCard = ({ data }: { data: TInstrumentsData }) => {
  const [openEditInstrumentModal, setOpenEditInstrumentModal] = useState(false);

  const confirmBlock: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Deleted the instrument");
  };

  return (
    <>
      <div className="px-7 py-4 bg-section-bg flex flex-col justify-center items-center rounded-md border hover:border-main-color gap-y-3 text-text-color">
        <div className="bg-white rounded-full border border-main-color ">
          <Image src={data?.image}></Image>
        </div>
        <h3 className="text-xl font-medium">{data?.name}</h3>
        <div className="flex  gap-x-2">
          <Popconfirm
            title="Are you sure?"
            description=" You want to delete this instrument?"
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
          >
            <Button
              style={{
                border: "none",
                backgroundColor: "#FFEDE6",
                color: "var(--color-main)",
              }}
            >
              Delete
            </Button>
          </Popconfirm>

          <Button
            style={{ border: "none" }}
            onClick={() => setOpenEditInstrumentModal(true)}
          >
            Edit
          </Button>
        </div>
      </div>
      <EditInstrumentModal
        open={openEditInstrumentModal}
        setOpen={setOpenEditInstrumentModal}
      ></EditInstrumentModal>
    </>
  );
};

export default InstrumentCard;
