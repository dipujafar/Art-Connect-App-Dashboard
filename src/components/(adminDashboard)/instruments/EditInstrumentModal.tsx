import { Button, Form, Input, Modal, Upload, UploadFile } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import { UploadOutlined } from "@ant-design/icons";
import { useUpdateInstrumentMutation } from "@/redux/api/instrumentsApi";
import { Error_Modal } from "@/utils/modals";
import { TInstrument } from "@/types";
import { useEffect } from "react";
import { UploadFileStatus } from "antd/es/upload/interface";
import { toast } from "sonner";

type TPropsType = {
  id: string;
  open: boolean;
  setOpen: (collapsed: boolean) => void;
  data: TInstrument;
};

const EditInstrumentModal = ({ open, setOpen, id, data }: TPropsType) => {
  const [updateInstrument, { isLoading }] = useUpdateInstrumentMutation();
  const [form] = Form.useForm();



  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = async (values) => {
    const formattedData = { name: values?.instrumentName };
    const formData = new FormData();
    
    formData.append("data", JSON.stringify(formattedData));
    formData.append("icon", values?.instrumentImage?.file?.originFileObj);

    try {
      await updateInstrument({ id, data: formData }).unwrap();
      toast.success("Successfully update an new instrument", { duration: 1000 });
      form.resetFields();
      setOpen(false);
    }
    catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };




  return (
    <>
      <Modal
        open={open}
        footer={null}
        centered={true}
        onCancel={() => setOpen(false)}
        closeIcon={false}
        style={{
          minWidth: "max-content",
        }}
      >
        <div className="py-14">
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

          {/* header */}

          <h4 className=" text-2xl font-medium text-center">Edit instrument</h4>

          {/* form */}
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
            initialValues={{ instrumentName: data?.name }}
          >
            {/*  input instrument name */}
            <Form.Item
              label="Instrument name"
              name="instrumentName"
              rules={[
                { required: true, message: "Please Enter instrument name" },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter instrument name "
                defaultValue={data?.name}
              />
            </Form.Item>

            {/*  input instrument name */}
            <Form.Item
              label="Upload New image"
              name="instrumentImage"

            >
              <Upload className="flex justify-center">
                <Button
                  icon={<UploadOutlined />}
                  style={{
                    backgroundColor: "var(--color-text-color)",
                    color: "var(--color-main)",
                  }}
                >
                  Click to Upload
                </Button>
              </Upload>
            </Form.Item>

            <Button loading={isLoading} htmlType="submit" size="large" block>
              Add Instrument
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default EditInstrumentModal;
