"use client";
import { Button, Pagination } from "antd";
import InstrumentCard from "./InstrumentCard";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddInstrumentModal from "./AddInstrumentModal";

const instrumentsData = {
  name: "ELECTRIC GUITAR",
  image: "/electric-guitar.png",
};

const InstrumentsContainer = () => {
  const [openAddInstrumentModal, setOpenAddInstrumentModal] = useState(false);

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
      {/* show all instruments */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <InstrumentCard key={index} data={instrumentsData}></InstrumentCard>
          ))}
      </div>
      {/*============= pagination =============*/}
      <div className="mt-4 flex justify-end">
        <Pagination defaultCurrent={1} total={50} />
      </div>

      <AddInstrumentModal
        open={openAddInstrumentModal}
        setOpen={setOpenAddInstrumentModal}
      ></AddInstrumentModal>
    </div>
  );
};

export default InstrumentsContainer;
