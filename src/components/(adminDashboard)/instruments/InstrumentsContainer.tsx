"use client";
import { Button, Pagination } from "antd";
import InstrumentCard from "./InstrumentCard";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddInstrumentModal from "./AddInstrumentModal";
import { useGetAllInstrumentsQuery } from "@/redux/api/instrumentsApi";
import InstrumentsContainerSkeleton from "./InstrumentsContainerSkeleton";
import { TInstrument } from "@/types";
import Empty from "@/components/shared/Empty";


const InstrumentsContainer = () => {
  const [openAddInstrumentModal, setOpenAddInstrumentModal] = useState(false);
  const { data, isLoading } = useGetAllInstrumentsQuery(undefined);



  return (
    <div>
      <div className="flex justify-end group">
        <Button
          style={{
            backgroundColor: "var(--color-section-bg)",
            color: "var(--color-text-color)",
            border: "none",
            marginBottom: "1rem",
            padding: "20px 1rem",
          }}
          onClick={() => setOpenAddInstrumentModal(true)}
        >
          <Plus className="group-hover:animate-ping"></Plus> Add Instrument
        </Button>
      </div>
      {
        isLoading ? <InstrumentsContainerSkeleton></InstrumentsContainerSkeleton> : <div>
          {/* show all instruments */}
          {
            data?.data?.length === 0 && <Empty message="No instrument found"></Empty>
          }

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {data?.data?.map((instrument: TInstrument) => (
              <InstrumentCard key={instrument?.id} data={instrument}></InstrumentCard>
            ))}
          </div>

        </div>
      }


      <AddInstrumentModal
        open={openAddInstrumentModal}
        setOpen={setOpenAddInstrumentModal}
      ></AddInstrumentModal>
    </div>
  );
};

export default InstrumentsContainer;
