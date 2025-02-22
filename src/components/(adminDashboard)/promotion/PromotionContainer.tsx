"use client";
import Container from "@/components/shared/Container";
import { Button, ConfigProvider, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { toast } from "sonner";

const PromotionContainer = () => {
  const [form] = Form.useForm();
  // @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
  const handleSubmit = (values) => {
    console.log("Success:", values);
  };

  return (
    <Container className="flex justify-center items-center h-[calc(100vh-150px)]">
      {/* form */}
      <div className="w-full">
        <ConfigProvider
          theme={{
            components: {
              Input: {
                colorBgContainer: "#EFE8FD",
              },
              Form: {
                labelColor: "#fff",
                labelFontSize: 26,
              },
            },
          }}
        >
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            style={{
              marginTop: "25px",
            }}
          >
            {/*  input  name */}
            <Form.Item label="Subject" name="subject">
              <Input
                size="large"
                placeholder="Enter your subject"
                style={{ padding: "15px" }}
              ></Input>
            </Form.Item>

            {/* input  phone number  */}
            <Form.Item label="Description" name="description">
              <TextArea rows={10} placeholder="Write here"></TextArea>
            </Form.Item>

            <div>
              <Button
                htmlType="submit"
                size="large"
                block
                style={{ border: "none" }}
              >
                Save Change
              </Button>
            </div>
          </Form>
        </ConfigProvider>
      </div>
    </Container>
  );
};

export default PromotionContainer;
