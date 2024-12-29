'use client'
import { empyTable } from '@/constants';
import { bodyInterface, generalTableInterface, tableInterface, valueTableType } from '@/interface';
import { useState } from 'react';
import { TableSingle } from './table';
import { iconsReturn } from '@/function';
export function Body({ player1, player2 }: bodyInterface) {
  const [table0, setTable0] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table1, setTable1] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table2, setTable2] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table3, setTable3] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table4, setTable4] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table5, setTable5] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table6, setTable6] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table7, setTable7] = useState<tableInterface>({ data: empyTable, winner: 0 })
  const [table8, setTable8] = useState<tableInterface>({ data: empyTable, winner: 0 })

  const [generalTable, setGeneralTable] = useState<generalTableInterface>({
    data: [table0, table1, table2, table3, table4, table5, table6, table7, table8],
    winner: 0
  })

  const iconPlayer1 =
    <span className="text-2xl" style={{ color: player1.color }}>
      {iconsReturn(player1.icon)}
    </span>

  const iconPlayer2 =
    <span className="text-2xl" style={{ color: player2.color }}>
      {iconsReturn(player2.icon)}
    </span>

  //permite saber cual es el jugador actual
  const [playPlayer, setPlayPlayer] = useState<valueTableType>(1)

  return (
    <div className='p-4 flex flex-col items-center'>
      <div className='flex justify-center'>
        <div className='border-gray-600 border-b-2 border-r-2'>
          <TableSingle table={table0} setTable={setTable0} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600 border-x-2 border-b-2'>
          <TableSingle table={table1} setTable={setTable1} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600  border-b-2 border-l-2'>
          <TableSingle table={table2} setTable={setTable2} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-r-2 border-y-2'>
          <TableSingle table={table3} setTable={setTable3} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600 border-2'>
          <TableSingle table={table4} setTable={setTable4} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600 border-l-2 border-y-2'>
          <TableSingle table={table5} setTable={setTable5} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-t-2 border-r-2'>
          <TableSingle table={table6} setTable={setTable6} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600 border-t-2 border-x-2'>
          <TableSingle table={table7} setTable={setTable7} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
        <div className='border-gray-600 border-t-2 border-l-2'>
          <TableSingle table={table8} setTable={setTable8} iconPlayer1={iconPlayer1} iconPlayer2={iconPlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} />
        </div>
      </div>
    </div>
  )
}
