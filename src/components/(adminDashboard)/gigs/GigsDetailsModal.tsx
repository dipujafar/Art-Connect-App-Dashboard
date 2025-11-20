import { Avatar, Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import Image from "next/image";
import moment from "moment";
import gigsCoverImage from "@/assets/image/GigsCoverImage.png";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  gig:any
};



const GigsDetailsModal = ({ open, setOpen, gig }: TPropsType) => {
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
      {/* Date */}
      <p className="text-gray-700 mb-1">
        <strong>Date:</strong> {moment(gig?.date).format("ll")}
      </p>

      {/* Distance */}
      <p className="text-gray-700 mb-4">
        <strong>Distance:</strong> {gig?.distance} km
      </p>

      {/* Location / Map */}
      <div className="w-full h-40 bg-gray-200 rounded-lg mb-5 flex items-center justify-center">
        <span className="text-gray-500">Map Placeholder</span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mb-6">
        <Avatar src={gig?.user?.profilePicture} size={48} />
        <div>
          <p className="font-semibold">{gig?.user?.name}</p>
          <p className="text-sm text-gray-500">{gig?.user?.email}</p>
        </div>
      </div>

      {/* Instruments */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Instruments Needed</h3>

        <div className="space-y-3">
          {gig?.gigInstruments?.map((item: any) => (
            <div
              key={item?.id}
              className="flex items-center justify-between p-2 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item?.instrument.icon}
                  width={40}
                  height={40}
                  alt={item?.instrument.name}
                  className="rounded-md"
                />
                <p className="font-medium">{item?.instrument?.name}</p>
              </div>

              <p className="font-semibold">${item?.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Requests */}
      <div>
        <h3 className="font-semibold mb-2">Instrument Requests</h3>

        {gig?.gigInstruments?.map((inst: any) =>
          inst?.gigInstrumentRequests?.length > 0 ? (
            <div key={inst.id} className="mb-3">
              <p className="font-medium mb-1">{inst?.instrument?.name}:</p>

              {inst?.gigInstrumentRequests.map((user: any, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2 border rounded-lg"
                >
                  <Avatar src={user?.profilePicture} />
                  <div>
                    <p className="font-medium">{user?.name}</p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </Modal>
  );
};

export default GigsDetailsModal;
