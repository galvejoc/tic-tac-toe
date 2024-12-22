'use client'
import { playerInterface } from "@/interface"
import { useState } from "react"
import HeaderCenter from "./header-center"
import { Player1 } from "./player-1"
import { Player2 } from "./player-2"

export function Header() {
  const [player1, setPlayer1] = useState<playerInterface>({ name: 'Player 1', icon: 'X', autoplayer: false, color:"#E9256C" })
  const [player2, setPlayer2] = useState<playerInterface>({ name: 'Player 2', icon: 'O', autoplayer: false, color:"#83BEEC" })
  console.log(player1);
  
  return (
    <div className="my-5">
      <div className="grid grid-cols-[1fr_0.1fr_1fr] gap-6">
        <div className=" flex justify-end">
          <Player1 {...player1}/>
        </div>
        <div className="flex justify-center items-center">
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto"/>
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto"/>
          <HeaderCenter player1= {player1} player2 = {player2} setPlayer1 = {setPlayer1} setPlayer2 ={setPlayer2}/>
          <span className="h-4/5 w-0.5 bg-gray-500 m-auto"/>
          <span className="h-2/5 w-0.5 bg-gray-500 m-auto"/>
        </div>
        <div className=" flex justify-start items-center">
          <Player2 {...player2}/>
        </div>
      </div>
    </div>
  )
}
