"use client";
import { Button, Image, message, Popconfirm, PopconfirmProps } from "antd";
import React, { useState } from "react";
import EditInstrumentModal from "./EditInstrumentModal";
import { TInstrument } from "@/types";
import { useDeleteInstrumentMutation } from "@/redux/api/instrumentsApi";
import { Error_Modal } from "@/utils/modals";

const InstrumentCard = ({ data }: { data: TInstrument }) => {
  const [openEditInstrumentModal, setOpenEditInstrumentModal] = useState(false);
  const [deleteInstrument] = useDeleteInstrumentMutation();

  const confirmBlock: PopconfirmProps["onConfirm"] = async (e) => {
    try {
      await deleteInstrument(data?.id).unwrap();
    }
    catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }

    message.success("Deleted the instrument");
  };

  return (
    <>
      <div className="px-7 py-4 bg-section-bg flex flex-col justify-center items-center rounded-md border hover:border-main-color gap-y-3 text-text-color">
        <div className="rounded-full border border-main-color flex justify-center items-center ">
          <Image src={data?.icon} alt="image" width={120} height={120} className="rounded-full"></Image>
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
        id={data?.id}
        data={data}
      ></EditInstrumentModal>
    </>
  );
};

export default InstrumentCard;
