import React, { useContext, useEffect, useState } from 'react'

import { PlayerInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './player.css'
import './table.css'

const PlayerTable = () => {
  const { locale } = useContext(Context)
  var player = labels.player[locale]
  var header = labels.player_header[locale]

  useEffect(() => {
    player = labels.player[locale]
    header = labels.player_header[locale]
  }, [locale])

  return (
    <div className="player-content">
      <div className='player-table-header'><span>{header}</span></div>
      <table className='player-table-content' >
      <tbody> 
        <tr>
          <th>{player}</th>
          {[...Array(numPlayers)].map((e, i) => <td key={i}>{<PlayerInput id={i+1}/>}</td>)}       
        </tr>
      </tbody>
    </table>
    </div>
  )
}

export default PlayerTable