import { Divider, Modal } from "antd";

import Link from "next/link";
import { RiCloseLargeLine } from "react-icons/ri";
import facebookIcon from "@/assets/icons/facebookIcon.png";
import instagramIcon from "@/assets/icons/instagram.png";
import twitterIcon from "@/assets/icons/x-icon.png";
import Image from "next/image";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const UserDetails = ({ open, setOpen }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
      }}
    >
      <div
        className="w-12 h-12 bg-[#D7263D]  absolute top-0 right-0 rounded-bl-3xl cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <RiCloseLargeLine
          size={18}
          color="#fff"
          className="absolute top-1/3 left-1/3"
        />
      </div>
      <div className="pb-20">
        <h4 className="text-center text-2xl font-medium">User Details</h4>
        <div className="mt-10">
          <div className="flex justify-between">
            <h4>User name :</h4>
            <p className="font-medium">James Tracy</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Total Gigs :</h4>
            <p className="font-medium">250</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Email :</h4>
            <p className="font-medium">james1234@gmail.com</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Phone Number :</h4>
            <p className="font-medium">+1-800-925-6278</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Join Date :</h4>
            <p className="font-medium">01-24-2024</p>
          </div>

          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Address :</h4>
            <p className="font-medium">New York,USA</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Bio :</h4>
            <p className=" max-w-sm">
              Marc Martinez is a multi-talented drummer and guitarist, blending
              powerful rhythms with melodic riffs. Known for energetic
              performances and a versatile style, Marc Martinez brings passion
              and precision to every beat and chord.
            </p>
          </div>
          <Divider></Divider>
          {/* social media links */}
          <div className="flex gap-x-2 justify-center items-center   w-full mt-2 ">
            <Link href="https://www.instagram.com" target="_blank">
              <Image
                src={instagramIcon}
                alt="instagramIcon"
                className="size-9"
              ></Image>
            </Link>
            <Link href="https://www.facebook.com" target="_blank">
              <Image
                src={facebookIcon}
                alt="facebookIcon"
                className="size-9"
              ></Image>
            </Link>
            <Link href="https://www.twitter.com" target="_blank">
              <Image
                src={twitterIcon}
                alt="twitterIcon"
                className="size-9"
              ></Image>
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UserDetails;
