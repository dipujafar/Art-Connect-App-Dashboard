"use client";
import React, { useState } from 'react'
import MusicTypeDataTable from './MusicTypeDataTable'
import { Button } from 'antd'
import { Plus } from 'lucide-react'
import AddMusicTypeModal from './AddMusicTypeModal';

export default function MusicTypeContainer() {
    const [openAddMusicTypeModal, setOpenAddInstrumentModal] = useState(false);
    return (
        <>
            <div>
                <div className="flex justify-end group">
                    <Button
                        style={{
                            backgroundColor: "var(--color-section-bg)",
                            color: "var(--color-text-color)",
                            border: "none",
                            marginBottom: "1rem",
                            padding: "20px 1rem",
                        }}
                        onClick={() => setOpenAddInstrumentModal(true)}
                    >
                        <Plus className="group-hover:animate-ping"></Plus> Add New Music Type
                    </Button>
                </div>
                <MusicTypeDataTable />
            </div>
            <AddMusicTypeModal open={openAddMusicTypeModal} setOpen={setOpenAddInstrumentModal} />
        </>
    )
}
