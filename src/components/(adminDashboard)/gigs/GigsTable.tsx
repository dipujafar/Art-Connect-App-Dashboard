"use client";
import { Image, message, PopconfirmProps, TableProps } from "antd";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { ArrowDownWideNarrowIcon, Eye, Search } from "lucide-react";
import GigsDetailsModal from "./GigsDetailsModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  address: string;
  status: "Completed" | "On Going";
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  email: "james1234@gmail.comm",
  phone: "12345678",
  date: "11 Oct, 2024",
  address: "New York, USA",
  status: inx % 2 === 0 ? "Completed" : "On Going",
}));

const GigsTable = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => (
        <div className="flex items-center gap-x-1">
          <Image
            src={"/user-profile.png"}
            alt="profile-picture"
            width={40}
            height={40}
            className="size-10"
          ></Image>
          <p>{text}</p>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Phone number",
      dataIndex: "phone",
    },

    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text) =>
        text == "Completed" ? (
          <span className="py-1 px-2  rounded-full bg-green-200 text-green-800">
            Completed
          </span>
        ) : (
          <span className="py-1 px-2  rounded-full bg-red-200 text-red-800">
            On Going
          </span>
        ),

      filters: [
        {
          text: "Completed",
          value: "Completed",
        },
        {
          text: "On Going",
          value: "On Going",
        },
      ],
      filterIcon: (value) => (
        <ArrowDownWideNarrowIcon
          size={20}
          color="#fff"
          className="flex justify-start items-start"
        />
      ),
      onFilter: (value, record) => record.status.indexOf(value as string) === 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex gap-2 ">
          <Eye
            size={22}
            color="var(--color-text-color)"
            onClick={() => setOpen(!open)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-md">
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <GigsDetailsModal open={open} setOpen={setOpen}></GigsDetailsModal>
    </div>
  );
};

export default GigsTable;
