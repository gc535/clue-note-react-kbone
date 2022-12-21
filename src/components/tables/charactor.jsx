import React, { useContext, useEffect } from 'react'

import { TableInput } from './input'
import { Context } from '../context/context'
import { labels } from '../localization'
import { numPlayers } from '../constant'

import './charactor.css'

const CharactorTable = () => {
  const { locale } = useContext(Context)
  var charactors = labels.charactor[locale]

  useEffect(() => {
    charactors = labels.charactor[locale]
  }, [locale])

  return (
    <div className="bg-color-green charactor-content">
      <div className='bg-color-blue charactor-table-header'>人物表</div>
      <table className='table-content bg-color-yellow' >
      <tbody>{charactors.map((c, i) => 
        (<tr key={i}>
          <th>{c}</th>
          {[...Array(numPlayers)].map((e, i) => <td key={i}>{<TableInput />}</td>)}
        </tr>))
      }</tbody>
    </table>

      这 <br/>
      是 <br/>
      人 <br/>
      物 <br/>
      表 <br/>
    </div>
  )
}

//const TableInput = () => {
//  const [temp, setTemp] = useState(0)
//  const TableInputs = [add, div]
//
//  return (
//    <div>
//      <img className='input-TableInput' 
//        src={TableInputs[temp]} 
//        onClick={()=> {
//          setTemp((temp + 1)%2); console.log("clicked")
//          
//        }}
//      />
//    </div>
//  )
//}

export default CharactorTable