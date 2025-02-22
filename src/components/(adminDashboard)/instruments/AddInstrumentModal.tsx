import { Button, Form, Input, Modal, Upload } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import { UploadOutlined } from "@ant-design/icons";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const AddInstrumentModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
    setOpen(false);
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

          <h4 className=" text-2xl font-medium text-center">
            Add new instrument
          </h4>

          {/* form */}
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              maxWidth: 500,
              marginTop: "25px",
            }}
          >
            {/*  input instrument name */}
            <Form.Item
              label="Instrument name"
              name="instrumentName"
              rules={[
                { required: true, message: "Please Enter instrument name" },
              ]}
            >
              <Input size="large" placeholder="Enter instrument name " />
            </Form.Item>

            {/*  input instrument name */}
            <Form.Item
              label="Upload instrument image"
              name="instrumentImage"
              rules={[
                { required: true, message: "Please Enter instrument name" },
              ]}
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

            <Button htmlType="submit" size="large" block>
              Add Instrument
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddInstrumentModal;
