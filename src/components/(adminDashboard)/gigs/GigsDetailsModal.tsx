import { Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import Image from "next/image";
import gigsCoverImage from "@/assets/image/GigsCoverImage.png";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const Instrument = {
  name: "Marc Martinez",
  image: "/GigsCoverImage.png",
  user: "Bass",
};

const GigsDetailsModal = ({ open, setOpen }: TPropsType) => {
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
        <h4 className="text-center text-2xl font-medium">Gig Details</h4>

        <div className="flex justify-center mt-10">
          <Image
            src={gigsCoverImage}
            alt="Gigs Cover Image"
            className="rounded-lg"
          />
        </div>

        <Divider></Divider>
        <div className="mt-10">
          <div className="flex justify-between">
            <h4>Band Leader name :</h4>
            <p className="font-medium">James Tracy</p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Date :</h4>
            <p className="font-medium">11 oct 24, 11.10PM</p>
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
            <h4>Address :</h4>
            <p className="font-medium">New York,USA</p>
          </div>

          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Status :</h4>
            <p className="font-medium bg-green-200 px-3 py-1 rounded-full text-green-800">
              Completed
            </p>
          </div>
          <Divider></Divider>
          <div className="flex justify-between">
            <h4>Instrument :</h4>
            <p className="max-w-sm">4</p>
          </div>
          <Divider></Divider>

          <div className="space-y-4">
            {Array.from({ length: 4 }).map((data, inx) => (
              <div
                key={inx}
                className="flex gap-x-4 items-center border rounded p-3"
              >
                <Image
                  src={Instrument?.image}
                  alt="instrument_image"
                  width={80}
                  height={75}
                ></Image>
                <div>
                  <p className="text-lg font-medium">{Instrument?.name}</p>
                  <p>For: {Instrument?.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GigsDetailsModal;
