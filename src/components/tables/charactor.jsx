import React, { useState } from 'react'

import './charactor.css'
import TableInput from './tableInput'
import '../../App.css'


const CharactorTable = () => {

  const players = 6;
  return (
    <div className="bg-color-green charactor-content">
      <div className='bg-color-blue'>人物表</div>
      <table className='table-content bg-color-yellow' >
      <tbody>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
        <tr>
          <th>填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<TableInput />}</td>)}       
        </tr>
      </tbody>
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