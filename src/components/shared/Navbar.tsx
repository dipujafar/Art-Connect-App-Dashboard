"use client";
import { Avatar, Badge, Button, Flex } from "antd";
import { FaBars } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import avatarImg from "@/assets/image/profile.png";

import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";

type TNavbarProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
};

const Navbar = ({ collapsed, setCollapsed }: TNavbarProps) => {
  const {user} = useAppSelector((state) => state.auth);

  

  return (
    <div className="flex items-center justify-between w-[97%] font-poppins">
      {/* Header left side */}
      <Flex align="center" gap={52}>
        <button
          onClick={() => setCollapsed(collapsed ? false : true)}
          className="cursor-pointer hover:bg-gray-300 rounded-full duration-1000"
        >
          <FaBars size={28} />
        </button>
        <div className="flex flex-col ">
          <h2 className="text-2xl  font-medium">
            Welcome, James
            <span className="block  text-sm font-normal">Have a nice day!</span>
          </h2>
        </div>
      </Flex>

      {/* Header right side */}
      <Flex align="center" gap={20}>
        {/* Notification */}
        <Link href={"/notifications"}>
          <div className="flex justify-center items-center size-10 bg-main-color rounded-full cursor-pointer relative">
            <IoNotificationsOutline size={24} color="#fff" />

            <Badge
              count={1}
              style={{
                border: "none",
                boxShadow: "none",
                backgroundColor: "#fff",
                color: "var(--color-main)",
                position: "absolute",
                top: "-24px",
                right: "-8px",
              }}
            ></Badge>
          </div>
        </Link>

        <Link href={"/personalInformation"} className="flex items-center">
          <div className="flex text-black items-center gap-x-1 bg-text-color px-2 rounded-full py-[2px]">
           {/* @ts-ignore */}
            <p className="text-lg ">{user?.name}</p>
            <Avatar src={avatarImg.src} size={40}></Avatar>
          </div>
        </Link>
      </Flex>
    </div>
  );
};

export default Navbar;
