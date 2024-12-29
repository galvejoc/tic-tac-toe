import { playerInterface } from "./header"

export interface bodyInterface {
  player1: playerInterface
  player2: playerInterface
}

export interface tableInterface {
  data: valueTableType[]
  winner: valueTableType
}

export interface generalTableInterface {
  data: tableInterface[]
  winner: valueTableType
}

export type valueTableType = 0 | 1 | 2