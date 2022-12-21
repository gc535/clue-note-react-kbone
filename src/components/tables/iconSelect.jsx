import React, { useState, useEffect, useContext } from 'react'
import './iconSelect.css'

import { Context } from '../context/context'

import nil from '../../../assets/icons/nil.png'
import mul from '../../../assets/icons/mul.svg'
import sub from '../../../assets/icons/sub.svg'
import add from '../../../assets/icons/add.svg'
import div from '../../../assets/icons/div.svg'


const Icons = [
  nil, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div
]

const SelectorPopUp = () => {
  const { inputRequest, setInputRequest } = useContext(Context)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (inputRequest.hasRequest) {
      setShow(true);
    }
  }, [inputRequest]);

  const closeHandler = () => {
    setShow(false);
    setInputRequest({hasRequest: false, handler: null});
  };

  return (
    <div className='popup-box popup-position' 
      style={{visibility: show ? "visible" : "hidden"}}
    > 
      <span>Choose Icon</span>

      <ul className='icon-container'>
        { Icons.map((e, i) => <li key={i}>
          {<Icon icon={e} onClick={closeHandler} />}
         </li>) }
      </ul>

      <button className='cancel-button'
        onClick={closeHandler}
      >
        取消
      </button>
    </div>
  )
}

const Icon = ({icon, onClick}) => {
  const { inputRequest } = useContext(Context)

  return (
    <div>
      <img className='icon-item' 
        src={icon} 
        onClick={()=> {
          console.log("selection made")
          console.log(icon)
          if (inputRequest.handler) {
            inputRequest.handler(icon)
          }
          onClick()
        }}
      />
    </div>
  )
}

export default SelectorPopUp
