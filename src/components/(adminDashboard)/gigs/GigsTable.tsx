"use client";;
import { TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownWideNarrowIcon, Eye } from "lucide-react";
import GigsDetailsModal from "./GigsDetailsModal";
import moment from "moment";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  address: string;
  title: string;
  status: "Completed" | "On Going";
};


const GigsTable = ({ data, limit, page }: any) => {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState<any>(null);


  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      render: (text, record, index) =>
        (Number(page) - 1) * Number(limit) + (index + 1),
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Stage Type",
      dataIndex: "stageType",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Privacy",
      dataIndex: "privacy",
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <p>{moment(text).format("ll")}</p>,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) => <p>{text?.split("_").join(" ")}</p>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex gap-2 ">
          <Eye
            size={22}
            color="var(--color-text-color)"
            onClick={() => { setOpen(!open); setCurrentData(record); }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-md">
      <DataTable columns={columns} data={data?.data} pageSize={Number(limit)}
        total={data?.meta?.total} ></DataTable>
      <GigsDetailsModal open={open} setOpen={setOpen} gig={currentData}></GigsDetailsModal>
    </div>
  );
};

export default GigsTable;
