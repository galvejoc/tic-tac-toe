'use client'
import { Body, Footer, Header } from "@/components";
import { playerInterface } from "@/interface";
import { useState } from "react";

export default function Home() {
  const [player1, setPlayer1] = useState<playerInterface>({ name: 'Player 1', icon: 3, autoplayer: false, color:"#E9256C" })
  const [player2, setPlayer2] = useState<playerInterface>({ name: 'Player 2', icon: 4, autoplayer: false, color:"#83BEEC" })
  
  return (
    <>
      <Header player1= {player1} player2 = {player2} setPlayer1 = {setPlayer1} setPlayer2 ={setPlayer2}/>
      <Body player1={player1} player2={player2}/>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
}
