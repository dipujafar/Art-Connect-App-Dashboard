import { Button, Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const NurseDetailsModal = ({ open, setOpen }: TPropsType) => {
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
      <div className="pb-10">
        <h4 className="text-center text-2xl font-medium">Nurse Details</h4>
        <div className="mt-10">
          <div className="flex gap-x-2 justify-between">
            <h4>Patient :</h4>
            <p className="font-medium">02</p>
          </div>
          <Divider style={{ color: "#8d2e7d" }}></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>User Name : </h4>
            <p className="font-medium">Kane Smith</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Phone number :</h4>
            <p className="font-medium">12345678</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Email :</h4>
            <p className="font-medium">jamestracy@gmail.com</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4> Specialist :</h4>
            <p className="font-medium">Specialist</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Experience :</h4>
            <p className="font-medium">6 Years</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Working days :</h4>
            <p className="font-medium">Sat-Fri</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Working times :</h4>
            <p className="font-medium">08:00 am-07:00 pm</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Address :</h4>
            <p className="font-medium">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Nationality :</h4>
            <p className="font-medium">USA</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#8d2e7d",
              border: "1px solid #8d2e7d",
            }}
            className="flex-1"
          >
            Backup Nurse
          </Button>
          <Button className="flex-1">Main Nurse</Button>
        </div>
      </div>
    </Modal>
  );
};

export default NurseDetailsModal;
