"use client";
import { Input, TableProps } from "antd";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { Check } from "lucide-react";
import CustomMembershipPlanModal from "./CustomMembershipPlanModal";

type TDataType = {
  key?: number;
  serial: number;
  name: string;
  phone: string;
  email: string;
  description: string;
};
const data: TDataType[] = Array.from({ length: 18 }).map((data, inx) => ({
  key: inx,
  serial: inx + 1,
  name: "James Tracy",
  phone: "12345678",
  email: "james1234@gmail.comm",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
}));

const CustomMembershipContainer = () => {
  const [open, setOpen] = useState(false);

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "SL",
      dataIndex: "serial",
    },
    {
      title: "User Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
    },
    {
      title: "Description",
      dataIndex: "description",
      render: (value) => <div className="max-w-[300px]  ">{value}</div>,
    },
    {
      title: "amount",
      dataIndex: "amount",
      render: () => <Input style={{ width: "100px" }}></Input>,
    },

    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <div className="flex gap-x-2">
          <MdOutlineErrorOutline
            size={20}
            color="#8D2E7D"
            onClick={() => setOpen(!open)}
          />
          <div className="cursor-pointer">
            <Check size={20} color="#023020"></Check>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#EEE0EC] rounded-md">
      <h1 className="py-5 px-5 text-2xl text-black/80">Custom plan List</h1>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <CustomMembershipPlanModal
        open={open}
        setOpen={setOpen}
      ></CustomMembershipPlanModal>
    </div>
  );
};

export default CustomMembershipContainer;
