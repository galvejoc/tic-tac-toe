
import { headerInterface } from "@/interface"
import HeaderCenter from "./header-center"
import { Player1 } from "./player-1"
import { Player2 } from "./player-2"
import { FaRedo } from "react-icons/fa"
import { ButtonHelp } from "./button-help"
import { Tooltip } from "../ui/tooltip"

export function Header({ player1, player2, setPlayer1, setPlayer2, playPlayer, cleanTable }: headerInterface) {
  return (
    <div className="md:my-5 my-3">
      <div className="grid grid-cols-[1fr_0.1fr_1fr] md:gap-6 gap-3">
        <div className=" flex justify-between items-center">
          <Tooltip text="Restart">
            <button onClick={cleanTable} className="hover:animate-pulse">
              <FaRedo size={24} style={{ color: '#3B82F6' }} />
            </button>
          </Tooltip>
          <Player1 {...player1} playPlayer={playPlayer} />
        </div>
        <div className="flex justify-center items-center">
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto ml-0.5" />
          <HeaderCenter player1={player1} player2={player2} setPlayer1={setPlayer1} setPlayer2={setPlayer2} />
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto mr-0.5" />
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto" />
        </div>
        <div className=" flex justify-between items-center">
          <Player2 {...player2} playPlayer={playPlayer} />
          <Tooltip text="Help">
            <ButtonHelp />
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
