import { playerInterface } from "@/interface"
import { IoMdOptions } from "react-icons/io"

interface HeaderCenterInterface {
  player1: playerInterface
  player2: playerInterface
  setPlayer1: (player: playerInterface) => void
  setPlayer2: (player: playerInterface) => void
}

export default function HeaderCenter({ player1, player2, setPlayer1, setPlayer2 }: HeaderCenterInterface) {
  return (
    <div>
      <button>
        <IoMdOptions />
      </button>
    </div>
  )
}
