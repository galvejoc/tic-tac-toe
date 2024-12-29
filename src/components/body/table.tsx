'use client'
import { isWinner } from "@/function"
import { tableInterface, valueTableType } from "@/interface"
import clsx from "clsx"
import { ReactNode, useEffect } from "react"

export interface TableSingleInterface {
  table: tableInterface
  setTable: (table: tableInterface) => void
  iconPlayer1: ReactNode
  iconPlayer2: ReactNode
  playPlayer: valueTableType
  setPlayPlayer: (palyPlayer: valueTableType) => void
}

export function TableSingle({ table, setTable, iconPlayer1, iconPlayer2, playPlayer, setPlayPlayer }: TableSingleInterface) {
  const spanNull =
    <span className="opacity-0 text-2xl">
      {iconPlayer1}
    </span>

  const clickTable = (position: number) => {
    try {
      //valida si esta activa al no tener un ganador
      if (table.winner !== 0) {
        return
      }
      //valida si esa posicion ya se ha jugado
      if (table.data[position] !== 0) {
        return
      }
      //cambia el viejo valor por el nuevo
      const newData = [...table.data]
      newData[position] = playPlayer;
      setTable({ ...table, data: newData })
      //cambia el jugador actual
      setPlayPlayer(playPlayer === 1 ? 2 : 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    //validar si hay un ganador en esta tabla
    const winner: valueTableType = isWinner(table.data)
    if (winner !== 0) {
      setTable({ ...table, winner: winner })
    }
  },
    [table.data]
  )
  return (
    <div className={clsx("p-4 block", { "opacity-45": table.winner !== 0 })}>
      <span className={clsx("absolute center text-6xl", { "opacity-0": table.winner === 0 })}>
        {table.winner}
      </span>
      <div className="flex" >
        <button className="p-2 border-cyan-600 border-b-2 border-r-2" onClick={() => clickTable(0)}>
          {table.data[0] === 0 ? spanNull : table.data[0] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-x-2 border-b-2" onClick={() => clickTable(1)}>
          {table.data[1] === 0 ? spanNull : table.data[1] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-b-2 border-l-2" onClick={() => clickTable(2)}>
          {table.data[2] === 0 ? spanNull : table.data[2] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
      </div>
      <div className="flex " >
        <button className="p-2 border-cyan-600 border-r-2 border-y-2" onClick={() => clickTable(3)}>
          {table.data[3] === 0 ? spanNull : table.data[3] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-2" onClick={() => clickTable(4)}>
          {table.data[4] === 0 ? spanNull : table.data[4] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-l-2 border-y-2" onClick={() => clickTable(5)}>
          {table.data[5] === 0 ? spanNull : table.data[5] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
      </div>
      <div className="flex " >
        <button className="p-2 border-cyan-600 border-t-2 border-r-2" onClick={() => clickTable(6)}>
          {table.data[6] === 0 ? spanNull : table.data[6] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-t-2 border-x-2" onClick={() => clickTable(7)}>
          {table.data[7] === 0 ? spanNull : table.data[7] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
        <button className="p-2 border-cyan-600 border-t-2 border-l-2" onClick={() => clickTable(8)}>
          {table.data[8] === 0 ? spanNull : table.data[8] === 1 ? iconPlayer1 : iconPlayer2}
        </button>
      </div>
    </div>
  )
}
