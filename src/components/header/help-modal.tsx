import { FaQuestion } from "react-icons/fa";

interface HelpModalInterface {
  isHelpModalOpen: boolean
  closeHelpModal: () => void
}

export function HelpModal({ isHelpModalOpen, closeHelpModal }: HelpModalInterface) {
  if (!isHelpModalOpen) {
    return null
  }

  const handleOverlayClick = () => {
    closeHelpModal();
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      style={{ boxShadow: 'inset -1px -4px 80px rgba(125, 166, 232, 0.8)' }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
      onClick={handleOverlayClick}>
      <div
        style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
        className="bg-white rounded-lg px-6 pt-6 max-w-sm w-full relative"
        onClick={handleModalClick}>
        <button
          className="absolute top-4 right-3 text-gray-500 hover:text-gray-700 text-3xl hover:animate-pulse"
          onClick={closeHelpModal}
        > &times;
        </button>
        <div>
          <div className="flex mb-4 items-center text-blue-800 ">
            <FaQuestion size={24} />
            <h2 className="md:text-lg text-base font-semibold ml-4 text-blue-500">Ayuda</h2>
          </div>
          <div className="text-blue-600 mb-4 grid gap-3">
            <span>
              1- The first player can place their symbol in any position they desire.
            </span>
            <span>
              2- The second player must place their symbol on the board corresponding to the previous move of the first player.
            </span>
            <span>
              3- If that position is not possible, then they can choose any position they want.
            </span>
            <span>
              4- If a player places 3 symbols in a horizontal, vertical, or diagonal line, they win that board, and no more elements can be placed there.
            </span>
            <span>
              5- The player who has 3 boards in a horizontal, vertical, or diagonal line wins. If no more symbols can be placed, the player with the most won boards wins.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
