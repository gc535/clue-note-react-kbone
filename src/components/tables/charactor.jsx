import React, { useContext, useEffect } from 'react'

import { TableInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './charactor.css'
import './table.css'

const CharactorTable = () => {
  const { locale } = useContext(Context)
  var charactors = labels.charactor[locale]
  var header = labels.charactor_header[locale]

  useEffect(() => {
    charactors = labels.charactor[locale]
    header = labels.charactor_header[locale]
  }, [locale])

  return (
    <div className="charactor-content">
      <div className='charactor-table-header table-header-background'><span>{header}</span></div>
      <table className='table-content table-content-background' >
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

