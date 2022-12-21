import React, { useContext, useEffect } from 'react'

import { TableInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './charactor.css'

const CharactorTable = () => {
  const { locale } = useContext(Context)
  var charactors = labels.charactor[locale]
  var header = labels.charactor_header[locale]

  useEffect(() => {
    charactors = labels.charactor[locale]
    header = labels.charactor_header[locale]
  }, [locale])

  return (
    <div className="bg-color-green charactor-content">
      <div className='bg-color-blue charactor-table-header'><span>{header}</span></div>
      <table className='table-content bg-color-yellow' >
      <tbody>{charactors.map((c, i) => 
        (<tr key={i}>
          <th>{c}</th>
          {[...Array(numPlayers)].map((e, i) => <td key={i}>{<TableInput />}</td>)}
        </tr>))
      }</tbody>
    </table>
    </div>
  )
}

export default CharactorTable