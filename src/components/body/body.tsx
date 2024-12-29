'use client'
import { empyTable } from '@/constants';
import { bodyInterface, generalTableInterface, tableInterface } from '@/interface';
import { useState } from 'react';
import { TableSingle } from './table';
import { iconsReturn } from '@/function';
export function Body({ player1, player2, playPlayer, setPlayPlayer }: bodyInterface) {
  const [table0, setTable0] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table1, setTable1] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table2, setTable2] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table3, setTable3] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table4, setTable4] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table5, setTable5] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table6, setTable6] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table7, setTable7] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table8, setTable8] = useState<tableInterface>({ data: empyTable, status: 0 })

  const [generalTable, setGeneralTable] = useState<generalTableInterface>({
    data: [table0, table1, table2, table3, table4, table5, table6, table7, table8],
    status: 0
  })

  const iconSinglePlayer1 = iconsReturn(player1.icon)
  const iconSinglePlayer2 = iconsReturn(player2.icon)

  return (
    <div className='p-4 flex flex-col items-center'>
      <div className='flex justify-center'>
        <div className='border-gray-600 border-b-2 border-r-2'>
          <TableSingle table={table0} setTable={setTable0} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600 border-x-2 border-b-2'>
          <TableSingle table={table1} setTable={setTable1} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600  border-b-2 border-l-2'>
          <TableSingle table={table2} setTable={setTable2} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-r-2 border-y-2'>
          <TableSingle table={table3} setTable={setTable3} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600 border-2'>
          <TableSingle table={table4} setTable={setTable4} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600 border-l-2 border-y-2'>
          <TableSingle table={table5} setTable={setTable5} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-t-2 border-r-2'>
          <TableSingle table={table6} setTable={setTable6} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600 border-t-2 border-x-2'>
          <TableSingle table={table7} setTable={setTable7} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
        <div className='border-gray-600 border-t-2 border-l-2'>
          <TableSingle table={table8} setTable={setTable8} iconSinglePlayer1={iconSinglePlayer1} iconSinglePlayer2={iconSinglePlayer2} playPlayer={playPlayer} setPlayPlayer={setPlayPlayer} color1={player1.color} color2={player2.color} />
        </div>
      </div>
    </div>
  )
}
