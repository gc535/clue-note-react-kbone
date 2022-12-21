import React, { useContext, useEffect, useState } from 'react'

import { PlayerInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './player.css'


const PlayerTable = () => {
  const { locale } = useContext(Context)
  var player = labels.player[locale]

  useEffect(() => {
    player = labels.player[locale]
  }, [locale])

  return (
    <div className="bg-color-green player-content">
      <div className='bg-color-blue player-table-header'>人物表</div>
      <table className='player-table-content bg-color-yellow' >
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