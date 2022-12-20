import React, { useState, useContext } from 'react'
import './tableInput.css'

import nil from '../../../assets/icons/nil.png'
import { Context } from '../context/context'

const TableInput = () => {
  const { setInputRequest } = useContext(Context) 
  const [icon, setIcon] = useState(nil)

  return (
    <div>
      <img className='input-icon' 
        src={icon} 
        onClick={() => setInputRequest({hasRequest: true, handler: setIcon})}
      />
    </div>
  )
}

export default TableInput