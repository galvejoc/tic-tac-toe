import { headerInterface } from "@/interface"
import HeaderCenter from "./header-center"
import { Player1 } from "./player-1"
import { Player2 } from "./player-2"

export function Header({ player1, player2, setPlayer1, setPlayer2 }: headerInterface) {
  return (
    <div className="my-5">
      <div className="grid grid-cols-[1fr_0.1fr_1fr] gap-6">
        <div className=" flex justify-between items-center">
          <button>reiniciar</button>
          <Player1 {...player1}/>
        </div>
        <div className="flex justify-center items-center">
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto"/>
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto ml-0.5"/>
          <HeaderCenter player1= {player1} player2 = {player2} setPlayer1 = {setPlayer1} setPlayer2 ={setPlayer2}/>
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto mr-0.5"/>
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto"/>
        </div>
        <div className=" flex justify-between items-center">
          <Player2 {...player2}/>
          <button>ayuda</button>
        </div>
      </div>
    </div>
  )
}
