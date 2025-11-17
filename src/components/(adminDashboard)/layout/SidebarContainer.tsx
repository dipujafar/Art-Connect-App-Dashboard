"use client";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { navLinks } from "@/utils/navLinks";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { logout } from "@/redux/features/authSlice";


const SidebarContainer = ({ collapsed }: { collapsed: boolean }) => {
  const [current, setCurrent] = useState("dashboard");
  const currentPath = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();


  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    if (e.key === "logout") {
      localStorage.removeItem("activeNav");
      dispatch(logout());
      router.refresh();
      return;
    }
    localStorage.setItem("activeNav", e.key);
  };

  useEffect(() => {
    const activeKey = localStorage.getItem("activeNav");
    if (!activeKey) return;
    if (activeKey && currentPath !== "/dashboard") {
      setCurrent(activeKey as string);
    } else {
      setCurrent("dashboard");
    }
  }, []);

  return (
    <Sider
      width={280}
      theme="light"
      collapsible
      collapsed={collapsed}
      trigger={null}
      style={{
        paddingInline: `${collapsed ? "5px" : "10px"}`,
        backgroundColor: "var(--color-secondary)",
        maxHeight: "100vh",
        overflow: "auto",
      }}
    >
      <div className="demo-logo-vertical" />
      {/* logo  */}
      <div className="mt-10 flex flex-col justify-center items-center gap-y-5">
        <Link href={"/"}>
          <Image src={logo} alt="logo_Image" />
        </Link>
        <h1
          className={`${
            collapsed ? "text-sm" : "text-xl"
          }   font-extrabold text-white`}
        ></h1>
      </div>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={["dashboard"]}
        selectedKeys={[current]}
        mode="inline"
        className="sidebar-menu text-lg bg-main-color"
        items={navLinks}
      />
    </Sider>
  );
};

export default SidebarContainer;
