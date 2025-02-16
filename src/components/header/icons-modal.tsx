import { arrayIcons } from "@/constants";
import { playerInterface } from "@/interface";
import { IoMdOptions } from "react-icons/io";

interface IconsModalInterface {
  isIconsModalOpen: boolean
  tempPlayer: playerInterface
  setTempPlayer: (tempPlayer: playerInterface) => void
  closeIconsModal: () => void
}

export function IconsModal({ tempPlayer, setTempPlayer, isIconsModalOpen, closeIconsModal }: IconsModalInterface) {
  if (!isIconsModalOpen) {
    return null
  }

  const handleOverlayClick = () => {
    closeIconsModal();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 cursor-default" onClick={handleOverlayClick} >
      <div className="bg-white rounded-lg px-6 pt-6 max-w-sm w-full relative" onClick={handleModalClick}>
        <div className="flex mb-4 items-center text-blue-800 ">
          <IoMdOptions size={24} />
          <h2 className="md:text-lg text-base font-semibold ml-4 text-blue-500">Seleccione un ícono</h2>
        </div>
        <button
          className="absolute md:top-4 top-2 right-3 text-gray-500 hover:text-gray-700 text-3xl hover:animate-pulse"
          onClick={handleOverlayClick}
        > &times;
        </button>
        <div className="grid grid-cols-4 gap-5 mt-2 mb-4">
          {arrayIcons.map(icon => (
            <span
              key={icon.id}
              className="flex items-center justify-center cursor-pointer md:text-2xl text-xl m-auto p-2 rounded-lg transition-all duration-200 "
              style={{
                color: tempPlayer.color,
                boxShadow: tempPlayer.icon === icon.id ? 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' : 'none',
              }}
              onClick={() => {
                setTempPlayer({ ...tempPlayer, icon: icon.id });
                closeIconsModal();
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'inset 0px 0px 8px rgba(125, 166, 232, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = tempPlayer.icon === icon.id ? 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' : 'none';
              }}
            >
              {icon.component}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
