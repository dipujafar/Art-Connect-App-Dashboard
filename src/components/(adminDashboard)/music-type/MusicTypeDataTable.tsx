"use client";;
import { TableProps } from "antd";
import DataTable from "@/utils/DataTable";
import { SquarePen, Trash2 } from "lucide-react";
import TableSkeleton from "@/components/shared/TableSkeleton";
import { useDeleteMusicTypeMutation, useGetMusicTypeQuery } from "@/redux/api/musicTypeApi";
import moment from "moment";
import EditMusicTypeModal from "./EditMusicTypeModal";
import { useState } from "react";
import DeleteData from "@/components/shared/DeleteData";

type TDataType = {
    id: string;
    serial: number;
    name: string;
    date: string;
};

const MusicTypeDataTable = () => {
    const [openEditModal, setOpenEditModal] = useState(false);
    const { data: musicsTypeData, isLoading } = useGetMusicTypeQuery({});
    const [deleteMusicType] = useDeleteMusicTypeMutation();
    const [currentData, setCurrentData] = useState<any>(null);


    if (isLoading) return <TableSkeleton />

    const data: TDataType[] = musicsTypeData?.data?.map((musicsType: any, inx: number) => ({
        id: musicsType?.id,
        serial: inx + 1,
        name: musicsType?.name,
        date: moment(musicsType?.createdAt).format("ll"),
        count: musicsType?._count?.userFavoriteMusicType
    }));


    const columns: TableProps<TDataType>["columns"] = [
        {
            title: "Serial",
            dataIndex: "serial",
            align: "center",
            render: (text) => <p>#{text}</p>,
        },

        {
            title: "Music Type",
            dataIndex: "name",
        },
        {
            title: "How Many People Linked",
            dataIndex: "count",
            align: "center",
        },
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "Action",
            render: (_, record) => <div className="flex gap-x-1 cursor-pointer ">
               <DeleteData id={record?.id} api={deleteMusicType} />
                <div onClick={() => {setOpenEditModal(true); setCurrentData(record)}} className="size-8 rounded-full bg-green-700 flex justify-center items-center" ><SquarePen size={18} /></div>
            </div>
        }
    ];

    return (
        <>
            <div className="bg-section-bg rounded-md">
                <h1 className="py-5 px-5 text-2xl text-text-color">Music Types</h1>
                <DataTable columns={columns} data={data} ></DataTable>
            </div>
            <EditMusicTypeModal open={openEditModal} setOpen={setOpenEditModal} data={currentData} />
        </>
    );
};

export default MusicTypeDataTable;
