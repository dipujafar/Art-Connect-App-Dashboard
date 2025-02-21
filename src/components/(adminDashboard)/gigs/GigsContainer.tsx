import React from "react";
import GigsTable from "./GigsTable";
import GigsStatistic from "./GigsStatistic";

const GigsContainer = () => {
  return (
    <div className="space-y-5">
      <GigsStatistic></GigsStatistic>
      <GigsTable></GigsTable>
    </div>
  );
};

export default GigsContainer;
