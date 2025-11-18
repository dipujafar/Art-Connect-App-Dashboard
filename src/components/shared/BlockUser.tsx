"use client";
import { useUserBlockMutation, useUserUnBlockMutation } from '@/redux/api/usersApi';
import { Error_Modal } from '@/utils/modals';
import { message, Popconfirm, PopconfirmProps } from 'antd'
import React from 'react'
import { CgUnblock } from 'react-icons/cg'

export default function BlockUser({ id, isActive }: any) {
    const [blockUser] = useUserBlockMutation();
    const [unblockUser] = useUserUnBlockMutation();


    const confirmBlock: PopconfirmProps["onConfirm"] = async () => {
        try {
            if (isActive) {
                await blockUser(id).unwrap();
                message.success("Blocked the user");
            } else {
                await unblockUser(id).unwrap();
                message.success("Unblocked the user");
            }
        }
        catch (error: any) {
            Error_Modal({ title: error?.data?.message });
        }

    };
    return (
        <Popconfirm
            title={isActive ? "Block the user" : "Unblock the user"}
            description={isActive ? "Are you sure to block this user?" : "Are you sure to unblock this user?"}
            onConfirm={confirmBlock}
            okText="Yes"
            cancelText="No"
        >
            <CgUnblock size={22} color="#CD0335" />
        </Popconfirm>
    )
}
