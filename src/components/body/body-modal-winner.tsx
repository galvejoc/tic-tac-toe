import { iconsReturn } from "@/function"
import { playerInterface } from "@/interface"
import { FaBalanceScale } from "react-icons/fa"
import { IoMdOptions } from "react-icons/io"

interface BodyModalWinnerInterface {
  isOpen: boolean
  setIsOpen: (data: boolean) => void
  playerWinner: playerInterface | undefined
  setClean: () => void
}
export function BodyModalWinner({ isOpen, setIsOpen, playerWinner, setClean }: BodyModalWinnerInterface) {
  if (!isOpen) {
    return null
  }
  const handleOverlayClick = () => {
    setClean()
    setIsOpen(false);
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
        className="bg-white rounded-lg md:px-6 md:pt-6 px-3 pt-3 max-w-sm w-full relative"
        onClick={handleModalClick}>
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl"
          onClick={handleOverlayClick}
        > &times;
        </button>
        <div className="flex mb-4 items-center">
          <IoMdOptions size={24} className="text-blue-800 " />
          <h2 className="md:text-lg text-base font-semibold ml-4 text-blue-600">Game Over</h2>
        </div>
        {playerWinner === undefined ?
          <div className="flex flex-col items-center">
            <div className="md:text-3xl text-2xl md:mb-5 mb-3 font-medium">Draw</div>
            <div className="md:text-6xl text-4xl animate-bounce">
              <FaBalanceScale />
            </div>
          </div>
          :
          <div className="flex flex-col items-center">
            <span
              style={{ color: playerWinner.color }}
              className="md:text-3xl text-2xl md:mb-5 mb-3 font-medium">
              Ganador
            </span>
            <span className="md:text-6xl text-4xl animate-bounce" style={{ color: playerWinner.color }}>
              {iconsReturn(playerWinner.icon)}
            </span>
            <span
              style={{ color: playerWinner.color }}
              className="md:text-3xl text-2xl mt-2">
              {playerWinner.name}
            </span>
          </div>
        }
        <div className="md:my-5 my-3">
          <button
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-100 px-4 py-1 mr-3 rounded-md"
            style={{ boxShadow: 'inset -1px -4px 12px rgba(125, 166, 232, 0.5)' }}
            onClick={() => {
              setClean();
              setIsOpen(false);
            }}>
            Reiniciar
          </button>
        </div>
      </div>
    </div >
  )
}
