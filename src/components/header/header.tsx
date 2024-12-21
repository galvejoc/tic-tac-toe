'use client'
import { playerInterface } from "@/interface"
import { useState } from "react"
import Player1 from "./player-1"
import HeaderCenter from "./header-center"
import Player2 from './player-2';

export function Header() {
  const [player1, setPlayer1] = useState<playerInterface>({ name: 'Player 1', icon: 'X', autoplayer: false })
  const [player2, setPlayer2] = useState<playerInterface>({ name: 'Player 2', icon: 'O', autoplayer: false })
  return (
    <div className="my-5">
      <div className="bg-slate-400 grid grid-cols-[1fr_0.1fr_1fr] gap-6">
        <div className="bg-red-200 flex justify-end">
          <Player1 {...player1}/>
        </div>
        <div className="bg-emerald-200 flex justify-center my-auto">
          <HeaderCenter player1= {player1} player2 = {player2} setPlayer1 = {setPlayer1} setPlayer2 ={setPlayer2}/>
        </div>
        <div className="bg-fuchsia-300 flex justify-start">
          <Player2 {...player2}/>
        </div>
      </div>
    </div>
  )
}
