"use client";
import { Image, Input, Popconfirm, TableProps } from "antd";
import UserDetails from "./UserDetails";
import { useState } from "react";
import DataTable from "@/utils/DataTable";
import { CgUnblock } from "react-icons/cg";
import { Eye, Search } from "lucide-react";
import { useGetAllUsersQuery } from "@/redux/api/usersApi";
import TableSkeleton from "@/components/shared/TableSkeleton";
import moment from "moment";
import BlockUser from "@/components/shared/BlockUser";

type TDataType = {
  id: string;
  serial: number;
  name: string;
  email: string;
  date: string;
  profile: string;
  gigs: number;
  phoneNumber: string;
  address: string;
  bio: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  isActive: boolean
};



const UsersTable = () => {
  const [open, setOpen] = useState(false);
  const { data: usersData, isLoading } = useGetAllUsersQuery({});
  const [currentData, setCurrentData] = useState<any>(null);




  if (isLoading) return <TableSkeleton />

  const data: TDataType[] = usersData?.data?.map((user: any, inx: number) => ({
    id: user?.id,
    serial: inx + 1,
    name: user?.name,
    email: user?.email,
    date: moment(user?.createdAt).format("ll"),
    profile: user?.profilePicture,
    gigs: user?._count?.gigs,
    phoneNumber: user?.phoneNumber,
    address: `${user?.city}, ${user?.country}`,
    bio: user?.bio,
    facebookLink: user?.facebookLink,
    twitterLink: user?.twitterLink,
    instagramLink: user?.instagramLink,
    isActive: user?.isActive
  }));

  const columns: TableProps<TDataType>["columns"] = [
    {
      title: "#SL",
      dataIndex: "serial",
    },
    {
      title: "User Name",
      dataIndex: "name",
      render: (text, record) => (
        <div className="flex items-center gap-x-1">
          <Image
            src={record?.profile}
            alt="profile-picture"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <p>{text}</p>
          {!record?.isActive && <h4 className="ml-2 bg-red-400 px-2 rounded">Blocked</h4>}
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
    },
    {
      title: "Join Date",
      dataIndex: "date",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) => (
        <div className="flex gap-2 ">
          <Eye
            size={22}
            color="var(--color-text-color)"
            onClick={() => {
              setOpen(!open);
              setCurrentData(record);
            }}
          />
          <BlockUser id={record?.id} isActive={record?.isActive} />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-section-bg rounded-md">
      <div className="flex justify-between items-center px-10 py-5">
        <h1 className="  text-2xl text-text-color">Users</h1>
        <Input
          style={{ width: "220px", borderRadius: "20px" }}
          placeholder="Search Users..."
          prefix={<Search size={20} color="#959697"></Search>}
        ></Input>
      </div>
      <DataTable columns={columns} data={data} pageSize={10}></DataTable>
      <UserDetails open={open} setOpen={setOpen} data={currentData}></UserDetails>
    </div>
  );
};

export default UsersTable;
