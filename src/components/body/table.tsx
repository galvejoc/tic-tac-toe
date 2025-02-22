'use client'
import { getRandomZeroPosition, isFull, isWinner } from "@/function"
import { tableInterface, valueTableType } from "@/interface"
import clsx from "clsx"
import { ReactNode, useEffect } from "react"

export interface TableSingleInterface {
  table: tableInterface
  setTable: (table: tableInterface) => void
  iconSinglePlayer1: ReactNode
  iconSinglePlayer2: ReactNode
  playPlayer: valueTableType
  setPlayPlayer: (palyPlayer: valueTableType) => void
  color1: string
  color2: string
  setPositionLastAction: (number: number) => void
  isActive: boolean
  playerAuto1: boolean
  playerAuto2: boolean
  activeRandom: boolean
}

export function TableSingle({ table, setTable, iconSinglePlayer1, iconSinglePlayer2, playPlayer, setPlayPlayer, color1, color2, setPositionLastAction, isActive, playerAuto1, playerAuto2, activeRandom }: TableSingleInterface) {
  const spanNull =
    <span className="opacity-0 md:text-2xl text-xl">
      {iconSinglePlayer1}
    </span>

  const iconPlayer1 =
    <span className="md:text-2xl text-xl" style={{ color: color1 }}>
      {iconSinglePlayer1}
    </span>

  const iconPlayer2 =
    <span className="md:text-2xl text-xl" style={{ color: color2 }}>
      {iconSinglePlayer2}
    </span>

  const clickTable = (position: number) => {
    if (isActive) {
      return; // No se permite hacer clic en esta tabla
    }
    //valida si esta activa al no tener un ganador
    if (table.status !== 0) {
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
    //guarda la posicion de la ultima jugada
    setPositionLastAction(position)
    //cambia el jugador actual
    setPlayPlayer(playPlayer === 1 ? 2 : 1);
  }

  useEffect(() => {
    const status: valueTableType = isWinner(table.data)
    if (status !== 0) {
      setTable({ ...table, status: status })
    }
    if (status === 0 && isFull(table.data)) {
      setTable({ ...table, status: 3 })
    }
    if (activeRandom && !isActive) {
      if (playerAuto1 && playPlayer === 1) {
        const timeout = setTimeout(() => {
          const positionRandom = getRandomZeroPosition(table.data);
          clickTable(positionRandom);
        }, 1000);
        return () => clearTimeout(timeout);
      }
      if (playerAuto2 && playPlayer === 2) {
        const timeout = setTimeout(() => {
          const positionRandom = getRandomZeroPosition(table.data);
          clickTable(positionRandom);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [activeRandom, isActive, table.data]);


  return (
    <div className={clsx("md:p-4 p-2 block relative", { "pointer-events-none": isActive })}>
      {table.status === 1 && (
        <span style={{ color: color1 }} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-8xl text-3xl" >
          {iconSinglePlayer1}
        </span>
      )}
      {table.status === 2 && (
        <span style={{ color: color2 }} className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-8xl text-3xl">
          {iconSinglePlayer2}
        </span>
      )}
      <div className={clsx("", { "opacity-30 pointer-events-none": table.status !== 0 })}>
        <div className="flex" >
          <button className="md:p-2 p-1 border-cyan-600 border-b-2 border-r-2" onClick={() => clickTable(0)}>
            {table.data[0] === 0 ? spanNull : table.data[0] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-x-2 border-b-2" onClick={() => clickTable(1)}>
            {table.data[1] === 0 ? spanNull : table.data[1] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-b-2 border-l-2" onClick={() => clickTable(2)}>
            {table.data[2] === 0 ? spanNull : table.data[2] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
        </div>
        <div className="flex " >
          <button className="md:p-2 p-1 border-cyan-600 border-r-2 border-y-2" onClick={() => clickTable(3)}>
            {table.data[3] === 0 ? spanNull : table.data[3] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-2" onClick={() => clickTable(4)}>
            {table.data[4] === 0 ? spanNull : table.data[4] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-l-2 border-y-2" onClick={() => clickTable(5)}>
            {table.data[5] === 0 ? spanNull : table.data[5] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
        </div>
        <div className="flex " >
          <button className="md:p-2 p-1 border-cyan-600 border-t-2 border-r-2" onClick={() => clickTable(6)}>
            {table.data[6] === 0 ? spanNull : table.data[6] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-t-2 border-x-2" onClick={() => clickTable(7)}>
            {table.data[7] === 0 ? spanNull : table.data[7] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
          <button className="md:p-2 p-1 border-cyan-600 border-t-2 border-l-2" onClick={() => clickTable(8)}>
            {table.data[8] === 0 ? spanNull : table.data[8] === 1 ? iconPlayer1 : iconPlayer2}
          </button>
        </div>
      </div>
    </div>
  )
}
