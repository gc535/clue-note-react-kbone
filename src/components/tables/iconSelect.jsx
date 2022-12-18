import React, { useState, useEffect, useContext } from 'react'
import './iconSelect.css'

import { Context } from '../context/context'


const SelectorPopUp = () => {
  const { inputRequest, setInputRequest } = useContext(Context)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (inputRequest) {
      setShow(true);
    }
  }, [inputRequest]);

  const closeHandler = () => {
    setShow(false);
    setInputRequest(null);
  };

  return (
    <div className='popup-box' 
      style={{visibility: show ? "visible" : "hidden"}}
    > 
      这是选择器
      <button className='cancel-button'
        onClick={closeHandler}
      >
        取消
      </button>
    </div>
  )
}

const Icon = ({icon, callback}) => {

  return (
    <div>
      <img className='input-icon' 
        src={icon} 
        onClick={()=> {
          console.log("selection made")
          callback(icon);
        }}
      />
    </div>
  )
}

export default SelectorPopUp
