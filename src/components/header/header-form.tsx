import { playerInterface } from "@/interface"
import { FaPencilAlt, FaRobot } from "react-icons/fa";

interface HeaderFormInterface {
  tempPlayer: playerInterface
  setTempPlayer: (player: playerInterface) => void
}

export function HeaderForm({ tempPlayer, setTempPlayer }: HeaderFormInterface) {
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
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input
        className="border border-gray-300 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-500 my-5"
        onChange={(e) => setTempPlayer({ ...tempPlayer, color: e.target.value })}
        value={tempPlayer.color}
        name="color"
        type="color"
      />
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleSwitch}>
        <span className="mr-2">{tempPlayer.autoplayer ? 'Auto' : 'Manual'}</span>
        <button
          onClick={toggleSwitch}
          className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-200 
          ${tempPlayer.autoplayer ? 'bg-blue-500' : 'bg-gray-300'}`}
        >
          <span
            className={`absolute left-0 inline-flex items-center justify-center w-6 h-6 transform transition-transform duration-200 
            ${tempPlayer.autoplayer ? 'translate-x-5' : 'translate-x-0'} bg-white rounded-full`}
          >
            {tempPlayer.autoplayer ? (
              <FaRobot className="text-blue-500" />
            ) : (
              <FaPencilAlt className="text-green-500" />
            )}
          </span>
        </button>
      </div>
      
    </div>
  )
}
