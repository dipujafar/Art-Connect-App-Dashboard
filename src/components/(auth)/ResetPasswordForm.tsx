"use client";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import { Error_Modal } from "@/utils/modals";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

type FieldType = {
  setPassword?: string;
  reSetPassword?: string;
};

const ResetPasswordForm = () => {
  const route = useRouter();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const formattedData = {
      password: values.setPassword,
    };

    try {
      await resetPassword(formattedData).unwrap();
      sessionStorage?.removeItem("forgotPasswordToken");
      route.replace("/login");
    } catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<FieldType>
        name="setPassword"
        rules={[
          { required: true, message: "Please set your password!" },
          {
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
            message:
              "Password must contain at least one lowercase, one uppercase, and one special character.",
          },
        ]}
      >
        <Input.Password size="large" placeholder="Set your password" />
      </Form.Item>

      <Form.Item<FieldType>
        name="reSetPassword"
        rules={[
          { required: true, message: "Please confirm your password!" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("setPassword") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("Passwords do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password size="large" placeholder="Re-enter password" />
      </Form.Item>
      <Button loading={isLoading} htmlType="submit" size="large" block style={{ border: "none" }}>
        Sign In
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;
