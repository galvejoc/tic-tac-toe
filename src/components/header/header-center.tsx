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

  const setDefault = () => {
    setPlayer1({ name: 'Player 1', icon: 3, autoplayer: false, color: "#E9256C" });
    setPlayer2({ name: 'Player 2', icon: 4, autoplayer: false, color: "#83BEEC" });
    setTempPlayer1({ name: 'Player 1', icon: 3, autoplayer: false, color: "#E9256C" })
    setTempPlayer2({ name: 'Player 2', icon: 4, autoplayer: false, color: "#83BEEC" })
  }

  return (
    <div>
      <button onClick={openModal}>
        <IoMdOptions size={28} className="mx-1 hover:animate-pulse" style={{ color: '#3B82F6' }} />
      </button>
      <HeaderCenterModal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex mb-4 items-center text-blue-800">
          <IoMdOptions size={24} />
          <h2 className="text-lg font-semibold ml-4 text-blue-500">Edit perfiles</h2>
        </div>
        <div className="grid grid-cols-[1fr_0.1fr_1fr] gap-3">
          <HeaderForm tempPlayer={tempPlayer1} setTempPlayer={setTempPlayer1} />
          <div className="flex justify-center items-center">
            <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
            <span className="h-4/5 w-0.5 bg-gray-500 m-auto" />
            <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
          </div>
          <HeaderForm tempPlayer={tempPlayer2} setTempPlayer={setTempPlayer2} />
        </div>
        <div className="my-5 font-medium">
          <button
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-100 px-4 py-1 mr-3 rounded-md"
            style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
            onClick={handleSave}>
            Save
          </button>
          <button
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-100 px-4 mr-3 py-1 rounded-md "
            style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
            onClick={closeModal}>
            Close
          </button>
          <button
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-100 px-4 py-1 rounded-md"
            style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
            onClick={setDefault}>
            Default
          </button>
        </div>
      </HeaderCenterModal>
    </div>
  )
}
