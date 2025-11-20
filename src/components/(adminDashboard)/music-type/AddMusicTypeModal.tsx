import { Button, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import { Error_Modal } from "@/utils/modals";
import { toast } from "sonner";
import { useCreateMusicTypeMutation } from "@/redux/api/musicTypeApi";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const AddMusicTypeModal = ({ open, setOpen }: TPropsType) => {
  const [form] = Form.useForm();
  const [createMusicType, { isLoading }] = useCreateMusicTypeMutation();

  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = async (values) => {
    const formattedData = { name: values?.musicTypeName};
    try {
      await createMusicType(formattedData).unwrap();
      toast.success("Successfully add an new Music Type", { duration: 1000 });
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

          <h4 className=" text-2xl font-medium text-center">
            Add New Music Type
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
            {/*  input music name */}
            <Form.Item
              label="Music Type"
              name="musicTypeName"
              rules={[
                { required: true, message: "Please Enter music type name" },
              ]}
            >
              <Input size="large" placeholder="Enter music type name" />
            </Form.Item>

        
            <Button loading={isLoading} htmlType="submit" size="large" block>
              Add Music Type
            </Button>
          </Form>
        </div>
      </Modal>
    </>
  );
};

export default AddMusicTypeModal;
