import { RiDashboardHorizontalFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { AudioLines, GalleryVertical, KeyboardMusic } from "lucide-react";
import Link from "next/link";

export const navLinks = [
  {
    key: "dashboard",
    icon: <RiDashboardHorizontalFill size={18} />,
    label: <Link href={"/dashboard"}>Dashboard</Link>,
  },

  {
    key: "users",
    icon: <GoPeople size={18} />,
    label: <Link href={"/user"}>Users</Link>,
  },
  {
    key: "instrument",
    icon: <KeyboardMusic size={18} />,
    label: <Link href={"/instruments"}>Instruments</Link>,
  },
  {
    key: "gigs",
    icon: <GalleryVertical size={18} />,
    label: <Link href={"/gigs"}>Gigs</Link>,
  },
  {
    key: "promotion",
    icon: <AudioLines size={18} />,
  label: <Link href={"/promotion"}>Promotion</Link>,
  },

  {
    key: "settings",
    icon: <IoSettingsOutline size={18} />,
    label: <Link href={"/settings"}>Settings</Link>,
  },
  {
    key: "logout",
    icon: <RiLogoutCircleLine size={18} />,
    label: <Link href={"/login"}>Logout</Link>,
  },
];
