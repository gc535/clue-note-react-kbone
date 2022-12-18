import React, { useState } from 'react'

import './charactor.css'
import '../../App.css'
import mul from '../../../assets/icons/mul.svg'
import sub from '../../../assets/icons/sub.svg'
import add from '../../../assets/icons/add.svg'
import div from '../../../assets/icons/div.svg'

const CharactorTable = () => {

  const players = 6;
  return (
    <div className="bg-color-green charactor-content">
      <div className='bg-color-blue'>人物表</div>
      <table className='table-content bg-color-yellow' >
      <tbody>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
        </tr>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
        </tr>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
        </tr>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
        </tr>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
        </tr>
        <tr>
          <th colSpan="7">填充</th>
          {[...Array(players)].map((e, i) => <td key={i}>{<Note />}</td>)}       
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

const Note = () => {
  const [temp, setTemp] = useState(0)
  const icons = [add, div]

  return (
    <div>
      <img className='input-icon' src={icons[temp]} onClick={()=> {setTemp((temp + 1)%2); console.log("clicked")}}/>
    </div>
  )
}

export default CharactorTable