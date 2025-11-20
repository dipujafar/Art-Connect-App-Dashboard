import { Button, Form, Input, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";
import { Error_Modal } from "@/utils/modals";
import { toast } from "sonner";
import { useUpdateMusicTypeMutation } from "@/redux/api/musicTypeApi";
import { useEffect, useState } from "react";

type TPropsType = {
    open: boolean;
    setOpen: (collapsed: boolean) => void;
    data: any
};

const EditMusicTypeModal = ({ open, setOpen, data }: TPropsType) => {
    const [form] = Form.useForm();
    const [updateMusicType, { isLoading }] = useUpdateMusicTypeMutation();
    const [currentData, setCurrentData] = useState<any>({});

    useEffect(() => {
        setCurrentData(data);
        form.setFieldsValue({ musicTypeName: data?.name });
    }, [data]);





    // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
    const handleSubmit = async (values) => {
        const formattedData = { name: values?.musicTypeName };
        try {
            await updateMusicType({ id: currentData?.id, data: formattedData }).unwrap();
            toast.success("Successfully update the music type", { duration: 1000 });
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
                        Edit Music Type
                    </h4>

                    {/* form */}
                    <Form
                        form={form}
                        onFinish={handleSubmit}
                        layout="vertical"
                        initialValues={{ musicTypeName: currentData?.name }}
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
                            Update
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default EditMusicTypeModal;
