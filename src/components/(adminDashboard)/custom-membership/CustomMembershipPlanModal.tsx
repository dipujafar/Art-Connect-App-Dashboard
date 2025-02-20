"use client";
import { Button, Divider, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const CustomMembershipPlanModal = ({ open, setOpen }: TPropsType) => {
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
        <h4 className="text-center text-2xl font-medium">Request Details</h4>
        <div className="mt-10">
          <div className="flex gap-x-2 justify-between">
            <h4>User Name</h4>
            <p className="font-medium">James Tracy</p>
          </div>
          <Divider style={{ color: "#8d2e7d" }}></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Email:</h4>
            <p className="font-medium">jamestracy@gmail.com</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Phone Number:</h4>
            <p className="font-medium">+1 234 567 890</p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Description</h4>
            <p className="font-medium max-w-[320px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <Divider></Divider>
          <div className="flex gap-x-2 justify-between">
            <h4>Amount</h4>
            <Input
              style={{ width: "100px", backgroundColor: "#e9dce7" }}
            ></Input>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-3 flex-wrap">
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#8d2e7d",
              border: "1px solid #8d2e7d",
            }}
            className="flex-1"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button className="flex-1">SUbmit</Button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomMembershipPlanModal;
