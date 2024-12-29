import { valueTableType } from "./body";

export interface playerInterface {
  name: string;
  icon: number;
  autoplayer: boolean;
  color: string;
  playPlayer?: valueTableType
}

export interface iconsInterface {
  id: number
  component: React.ReactNode;
}

export interface headerInterface {
  player1: playerInterface
  player2: playerInterface
  setPlayer1: (player: playerInterface) => void
  setPlayer2: (player: playerInterface) => void
  playPlayer?: valueTableType
  cleanTable? : ()=> void
}