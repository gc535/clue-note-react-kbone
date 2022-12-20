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
  const [show, setShow] = useState(true)
  const [iconCallBack,  SetIconCallBack] = useState(null)

  useEffect(() => {
    console.log(inputRequest)
    if (inputRequest) {
      SetIconCallBack(inputRequest.changeRequest)
      setShow(true);
    }
  }, [inputRequest]);

  const selectHandler = (icon, callback) => {
    console.log(callback)
    callback(icon)
    SetIconCallBack(null)
    setInputRequest(null)
  }

  const closeHandler = () => {
    setShow(false);
    SetIconCallBack(null)
    setInputRequest(null);
  };

  return (
    <div className='popup-box popup-position' 
      style={{visibility: show ? "visible" : "hidden"}}
    > 
      <div>Choose Icon</div>

      <ul className='icon-container'>
        { Icons.map((e, i) => <li key={i}>
          {<Icon 
            icon={e} 
            handler={selectHandler} 
            callback={iconCallBack}/>}
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

const Icon = ({icon, handler, callback}) => {
  const [func, setFunc] = useState(null)

  useEffect(() => {
    console.log(callback)
    setFunc(callback)
  }, [callback])

  return (
    <div>
      <img className='icon-item' 
        src={icon} 
        onClick={()=> {
          console.log("selection made")
          console.log(icon)
          handler(icon, func);
        }}
      />
    </div>
  )
}

export default SelectorPopUp
