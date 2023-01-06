import React, { useContext, useEffect } from 'react'

import { TableInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './room.css'
import './table.css'

const RoomTable = () => {
  const { locale } = useContext(Context)
  var rooms = labels.room[locale]
  var header = labels.room_header[locale]

  useEffect(() => {
    rooms = labels.room[locale]
    header = labels.room_header[locale]
  }, [locale])

  return (
    <div className="room-content">
      <div className='room-table-header table-header-background'><span>{header}</span></div>
      <table className='table-content table-content-background' >
      <tbody>{rooms.map((c, i) => 
        (<tr key={i}>
          <th>{c}</th>
          {[...Array(numPlayers)].map((e, i) => <td key={i}>{<TableInput />}</td>)}
        </tr>))
      }</tbody>
    </table>
    </div>
  )
}

export default RoomTable