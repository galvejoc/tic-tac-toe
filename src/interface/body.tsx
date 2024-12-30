import { playerInterface } from "./header"

export interface bodyInterface {
  player1: playerInterface
  player2: playerInterface
  playPlayer: valueTableType
  setPlayPlayer: (value: valueTableType) => void
  clean: boolean
  setClean: () => void
}

export interface tableInterface {
  data: valueTableType[]
  status: statusTableType
}

export interface generalTableInterface {
  data: tableInterface[]
  status: statusTableType
}

export type valueTableType = 0 | 1 | 2

//estado de una tabla, vacia| player1| player2| sin Ganador
export type statusTableType = 0 | 1 | 2 | 3