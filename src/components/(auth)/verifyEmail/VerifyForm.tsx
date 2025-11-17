"use client";
import { useVerifyOtpMutation } from "@/redux/api/authApi";
import { Error_Modal } from "@/utils/modals";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  otp?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const VerifyEmailForm = () => {
  const route = useRouter();
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation();

  //handle password change
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formattedData = { otp: Number(values?.otp) };
    try {
      await verifyOtp(formattedData).unwrap();
      route.replace("/reset-password");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType> name="otp">
        <Input.OTP size="large" />
      </Form.Item>

      <Button loading={isLoading} htmlType="submit" size="large" block style={{ border: "none" }}>
        Verify Email
      </Button>
    </Form>
  );
};

export default VerifyEmailForm;
