import { headerInterface } from "@/interface"
import HeaderCenter from "./header-center"
import { Player1 } from "./player-1"
import { Player2 } from "./player-2"
import { FaQuestion, FaRedo } from "react-icons/fa"

export function Header({ player1, player2, setPlayer1, setPlayer2, playPlayer, cleanTable }: headerInterface) {
  return (
    <div className="my-5">
      <div className="grid grid-cols-[1fr_0.1fr_1fr] gap-6">
        <div className=" flex justify-between items-center">
          <button onClick={cleanTable}><FaRedo size={20} style={{color: '#3B82F6'}}/></button>
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
          <button><FaQuestion size={20} style={{color: '#3B82F6'}}/></button>
        </div>
      </div>
    </div>
  )
}
