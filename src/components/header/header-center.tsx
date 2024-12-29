'use client'
import { headerInterface, playerInterface } from "@/interface"
import { useState } from "react"
import { IoMdOptions } from "react-icons/io"
import { HeaderCenterModal } from "./header-center-modal"
import { HeaderForm } from "./header-form"

export default function HeaderCenter({ player1, player2, setPlayer1, setPlayer2 }: headerInterface) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [tempPlayer1, setTempPlayer1] = useState<playerInterface>(player1)
  const [tempPlayer2, setTempPlayer2] = useState<playerInterface>(player2)
  const handleSave = () => {
    //validacion de que no tenga igual elementos
    //no puede haber elemntos vacios
    setPlayer1({ ...tempPlayer1 });
    setPlayer2({ ...tempPlayer2 });
    closeModal();
  }
  return (
    <div>
      <button onClick={openModal}>
        <IoMdOptions size={28} className="mx-1" style={{color: '#3B82F6'}} />
      </button>
      <HeaderCenterModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex mb-4 items-center">
          <IoMdOptions size={20} />
          <h2 className="text-lg font-semibold ml-4">Edit perfiles</h2>
        </div>
        <div className="grid grid-cols-[1fr_0.1fr_1fr] gap-3">
          <HeaderForm tempPlayer={tempPlayer1} setTempPlayer={setTempPlayer1}/>
          <div className="flex justify-center items-center">
            <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
            <span className="h-4/5 w-0.5 bg-gray-500 m-auto" />
            <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
          </div>
          <HeaderForm tempPlayer={tempPlayer2} setTempPlayer={setTempPlayer2}/>
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 mr-3 rounded-md"
            onClick={handleSave}>
            Save
          </button>
          <button className="bg-blue-500 text-white hover:bg-blue-600 px-2 py-1 rounded-md mb-5" onClick={closeModal}>Close</button>
        </div>
      </HeaderCenterModal>
    </div>
  )
}
