import { arrayIcons } from "@/constants";
import { playerInterface } from "@/interface";

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
        <h2 className="text-lg font-semibold ml-4">Seleccione un ícono</h2>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={handleOverlayClick}
        > &times;
        </button>
        <div className="grid grid-cols-4 gap-5 mt-2 mb-4">
          {arrayIcons.map(icon => (
            <span
              key={icon.id}
              className="flex items-center justify-center cursor-pointer text-2xl m-auto p-2 rounded-lg transition-all duration-200 "
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
