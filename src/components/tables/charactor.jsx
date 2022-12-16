import React from 'react'
import './charactor.css'
import '../../App.css'

const CharactorTable = () => {
  return (
    <div className="bg-color-green charactor-content">
      <div className='bg-color-blue'>人物表</div>
      <table className='table-content bg-color-yellow'>
      <tbody>
        <tr>
          <th colSpan="3">填充</th>
          <td>数据</td>
          <td>数据</td>
          <td>数据</td>
          <td>数据</td>
          <td>数据</td>
          <td>数据</td>
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

export default CharactorTable