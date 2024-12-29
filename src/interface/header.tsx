export interface playerInterface {
  name: string;
  icon: number;
  autoplayer: boolean;
  color: string;
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
}