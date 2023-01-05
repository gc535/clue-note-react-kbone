import React, { useContext, useEffect } from 'react'

import { TableInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './weapon.css'
import './table.css'

const WeaponTable = () => {
  const { locale } = useContext(Context)
  var weapons = labels.weapon[locale]
  var header = labels.weapon_header[locale]

  useEffect(() => {
    weapons = labels.weapon[locale]
    header = labels.weapon_header[locale]
  }, [locale])

  return (
    <div className="weapon-content">
      <div className='weapon-table-header'><span>{header}</span></div>
      <table className='table-content' >
      <tbody>{weapons.map((c, i) => 
        (<tr key={i}>
          <th>{c}</th>
          {[...Array(numPlayers)].map((e, i) => <td key={i}>{<TableInput />}</td>)}
        </tr>))
      }</tbody>
    </table>
    </div>
  )
}

export default WeaponTable