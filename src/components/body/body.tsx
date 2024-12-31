'use client'
import { empyTable } from '@/constants';
import { bodyInterface, playerInterface, tableInterface } from '@/interface';
import { useEffect, useState } from 'react';
import { TableSingle } from './table';
import { getRandomZeroPosition, iconsReturn, isWinnerGereral } from '@/function';
import { BodyModalWinner } from './body-modal-winner';
export function Body({ player1, player2, playPlayer, setPlayPlayer, clean, setClean }: bodyInterface) {
  const [table0, setTable0] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table1, setTable1] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table2, setTable2] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table3, setTable3] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table4, setTable4] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table5, setTable5] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table6, setTable6] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table7, setTable7] = useState<tableInterface>({ data: empyTable, status: 0 })
  const [table8, setTable8] = useState<tableInterface>({ data: empyTable, status: 0 })

  const [positionLastAction, setPositionLastAction] = useState<number>(-1)
  const [positionNewAction, setPositionNewAction] = useState<number>(-1)

  const iconSinglePlayer1 = iconsReturn(player1.icon)
  const iconSinglePlayer2 = iconsReturn(player2.icon)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [playerWinner, setPlayerWinner] = useState<playerInterface | undefined>(undefined)

  const [positionNumberRandom, setPositionNumberRandom] = useState<number>(-1)

  const isActive = (positionNewAction: number, position: number) => {
    if (positionNewAction === -1) {
      return false
    }
    if (positionNewAction === position) {
      return false
    }
    else {
      return true
    }
  }

  useEffect(() => {
    setTable0({ data: empyTable, status: 0 })
    setTable1({ data: empyTable, status: 0 })
    setTable2({ data: empyTable, status: 0 })
    setTable3({ data: empyTable, status: 0 })
    setTable4({ data: empyTable, status: 0 })
    setTable5({ data: empyTable, status: 0 })
    setTable6({ data: empyTable, status: 0 })
    setTable7({ data: empyTable, status: 0 })
    setTable8({ data: empyTable, status: 0 })
    setPlayPlayer(1)
    setPositionLastAction(-1)
    setPositionNewAction(-1)
    setPlayerWinner(undefined)
    setPositionNumberRandom(-1)
  },
    [clean]
  )

  useEffect(() => {
    if (positionLastAction === -1) {
      setPositionNewAction(-1);
      // return;
    }
    const tables = [table0.status, table1.status, table2.status, table3.status, table4.status, table5.status, table6.status, table7.status, table8.status];
    //condicion de victoria
    const data = isWinnerGereral(tables)
    if (data !== 0) {
      if (data === 1) {
        setPlayerWinner(player1)
        setIsOpen(true);
        return
      }
      else if (data === 2) {
        setPlayerWinner(player2)
        setIsOpen(true);
        return
      } else {
        setIsOpen(true);
        return
      }
    }

    if (tables[positionLastAction] === 0) {
      setPositionNewAction(positionLastAction);
    }
    else {
      setPositionLastAction(-1)
      setPositionNewAction(-1)
      setPositionNumberRandom(getRandomZeroPosition(tables))
    }
  }, [positionLastAction, table0, table1, table2, table3, table4, table5, table6, table7, table8]);

  const positionRandom = (position: number) => {
    if (playerWinner !== undefined) {
      return false
    }
    if (positionNumberRandom === position) {
      return true
    }
    else if (positionLastAction === position) {
      return true
    }
    return false
  }

  return (
    <div className='p-4 flex flex-col items-center relative'>
      <div className='flex justify-center'>
        <div
          className='border-gray-600 border-b-2 border-r-2 rounded-ss-2xl'
          style={{ boxShadow: positionNewAction === 0 ? 'inset -4px -4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table0}
            setTable={setTable0}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 0)}
            activeRandom={positionRandom(0)}
          />
        </div>
        <div
          className='border-gray-600 border-x-2 border-b-2'
          style={{ boxShadow: positionNewAction === 1 ? 'inset 0px -4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table1}
            setTable={setTable1}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 1)}
            activeRandom={positionRandom(1)}
          />
        </div>
        <div
          className='border-gray-600  border-b-2 border-l-2 rounded-tr-2xl'
          style={{ boxShadow: positionNewAction === 2 ? 'inset 4px -4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table2}
            setTable={setTable2}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 2)}
            activeRandom={positionRandom(2)}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-r-2 border-y-2'
          style={{ boxShadow: positionNewAction === 3 ? 'inset -4px 0px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table3}
            setTable={setTable3}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 3)}
            activeRandom={positionRandom(3)}
          />
        </div>
        <div className='border-gray-600 border-2'
          style={{ boxShadow: positionNewAction === 4 ? 'inset 0px 0px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table4}
            setTable={setTable4}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 4)}
            activeRandom={positionRandom(4)}
          />
        </div>
        <div className='border-gray-600 border-l-2 border-y-2'
          style={{ boxShadow: positionNewAction === 5 ? 'inset 4px 0px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table5}
            setTable={setTable5}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 5)}
            activeRandom={positionRandom(5)}
          />
        </div>
      </div>
      <div className='flex'>
        <div className='border-gray-600 border-t-2 border-r-2 rounded-bl-2xl'
          style={{ boxShadow: positionNewAction === 6 ? 'inset -4px 4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table6}
            setTable={setTable6}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 6)}
            activeRandom={positionRandom(6)}
          />
        </div>
        <div className='border-gray-600 border-t-2 border-x-2'
          style={{ boxShadow: positionNewAction === 7 ? 'inset 0px 4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table7}
            setTable={setTable7}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 7)}
            activeRandom={positionRandom(7)}
          />
        </div>
        <div className='border-gray-600 border-t-2 border-l-2 rounded-ee-2xl'
          style={{ boxShadow: positionNewAction === 8 ? 'inset 4px 4px 16px rgba(125, 166, 232, 1)' : "" }}>
          <TableSingle
            table={table8}
            setTable={setTable8}
            iconSinglePlayer1={iconSinglePlayer1}
            iconSinglePlayer2={iconSinglePlayer2}
            playPlayer={playPlayer}
            setPlayPlayer={setPlayPlayer}
            color1={player1.color}
            color2={player2.color}
            playerAuto1={player1.autoplayer}
            playerAuto2={player2.autoplayer}
            setPositionLastAction={setPositionLastAction}
            isActive={isActive(positionNewAction, 8)}
            activeRandom={positionRandom(8)} />
        </div>
      </div>
      <BodyModalWinner isOpen={isOpen} setClean={setClean} setIsOpen={setIsOpen} playerWinner={playerWinner} />
    </div>
  )
}
