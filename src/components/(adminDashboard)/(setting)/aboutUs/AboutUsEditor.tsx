"use client";

import { useGetSettingsQuery, useUpdateSettingsMutation } from "@/redux/api/settingsApi";
import { Error_Modal } from "@/utils/modals";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import ContentSkeleton from "../skeleton/ContentSkeleton";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AboutUsEditor = () => {
  const route = useRouter();
  const { data, isLoading } = useGetSettingsQuery(undefined);
  const [value, setValue] = useState(data?.data?.about);
  const [updateSetting, { isLoading: isUpdating }] = useUpdateSettingsMutation();

  useEffect(() => {
    setValue(data?.data?.about);
  }, [data]);

  const toolbarOptions = [
    ["image"],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
  ];

  const moduleConest = {
    toolbar: toolbarOptions,
  };

  const handleUpdateContent = async () => {
    try {
      await updateSetting({ about: value }).unwrap();
      toast.success("Successfully updated content", { duration: 1000 });
    }
    catch (error: any) {
      Error_Modal({ title: error?.data?.message });
    }

  }

  if (isLoading) return <ContentSkeleton />

  return (
    <>
      <div className="flex items-center gap-2">
        <span onClick={() => route.back()} className="cursor-pointer">
          <FaArrowLeft size={24} color="#fff" />
        </span>
        <h4 className="text-2xl font-medium text-text-color">About Us</h4>
      </div>
      <ReactQuill
        modules={moduleConest}
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Start writing ......"
        style={{
          border: "1px solid #EFE8FD",
          marginTop: "20px",
          borderRadius: "10px",
        }}
      />
      <Button
        size="large"
        block
        style={{
          marginTop: "20px",
          border: "none",
        }}
        loading={isUpdating}
        onClick={handleUpdateContent}
      >
        Save Changes
      </Button>
    </>
  );
};

export default dynamic(() => Promise.resolve(AboutUsEditor), { ssr: false });
