import React, { useState, useContext } from 'react'
import './tableInput.css'

import mul from '../../../assets/icons/mul.svg'
import sub from '../../../assets/icons/sub.svg'
import add from '../../../assets/icons/add.svg'
import div from '../../../assets/icons/div.svg'
import { Context } from '../context/context'

const TableInput = () => {
  const { setInputRequest } = useContext(Context) 
  const [icon, setIcon] = useState(add)

  const changeRequest = (icon) => {
    //console.log(icon)
    setIcon(icon)
    console.log('change requested')
  }

  return (
    <div>
      <img className='input-icon' 
        src={icon} 
        onClick={()=> {
          console.log("clicked")
          setInputRequest({changeRequest});
        }}
      />
    </div>
  )
}

export default TableInput