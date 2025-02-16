'use client'
import { playerInterface } from "@/interface"
import { useState } from "react";
import { FaPencilAlt, FaRobot } from "react-icons/fa";
import { IconsModal } from "./icons-modal";
import { iconsReturn } from '../../function/icons';

interface HeaderFormInterface {
  tempPlayer: playerInterface
  setTempPlayer: (player: playerInterface) => void
}

export function HeaderForm({ tempPlayer, setTempPlayer }: HeaderFormInterface) {
  const [isIconsModalOpen, setIconsModalOpen] = useState<boolean>(false)
  const openIconsModal = () => setIconsModalOpen(true);
  const closeIconsModal = () => setIconsModalOpen(false);

  const toggleSwitch = () => {
    setTempPlayer({ ...tempPlayer, autoplayer: !tempPlayer.autoplayer });
  };

  return (
    <div className="block justify-end">
      <input
        id="name_player1"
        type="text"
        defaultValue={tempPlayer.name}
        onChange={(e) => setTempPlayer({ ...tempPlayer, name: e.target.value })}
        className="border-2 text-blue-600 font-medium border-blue-400 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
      />
      <div className="flex items-center justify-between my-5 cursor-pointer" onClick={openIconsModal}>
        <span className="mr-2 text-blue-600 font-medium">Icon</span>
        <span className="text-2xl" style={{ color: tempPlayer.color }}>{iconsReturn(tempPlayer.icon)}</span>
        <IconsModal
          tempPlayer={tempPlayer}
          setTempPlayer={setTempPlayer}
          isIconsModalOpen={isIconsModalOpen}
          closeIconsModal={closeIconsModal}
        />
      </div>
      <input
        className="border border-gray-300 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTempPlayer({ ...tempPlayer, color: e.target.value })}
        value={tempPlayer.color}
        name="color"
        type="color"
      />
      <div className="flex items-center justify-between cursor-pointer my-5 text-blue-600 font-medium" onClick={toggleSwitch}>
        <span className="mr-2">{tempPlayer.autoplayer ? 'Auto' : 'Manual'}</span>
        <button
          onClick={toggleSwitch}
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 
          ${tempPlayer.autoplayer ? 'bg-blue-200' : 'bg-gray-300'}`}
        >
          <span
            className={`absolute left-0 inline-flex items-center justify-center w-6 h-6 transform transition-transform duration-200 
            ${tempPlayer.autoplayer ? 'translate-x-5' : 'translate-x-0'} bg-white rounded-full`}
          >
            {tempPlayer.autoplayer ? (
              <FaRobot style={{ color: tempPlayer.color }} />
            ) : (
              <FaPencilAlt style={{ color: tempPlayer.color }} />
            )}
          </span>
        </button>
      </div>
    </div>
  )
}
