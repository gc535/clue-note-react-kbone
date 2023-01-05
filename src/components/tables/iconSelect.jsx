import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/context'
import { labels } from '../localization'

import './iconSelect.css'

import nil from '../../../img/icons/nil.png'
import mul from '../../../img/icons/mul.svg'
import sub from '../../../img/icons/sub.svg'
import add from '../../../img/icons/add.svg'
import div from '../../../img/icons/div.svg'


const Icons = [
  nil, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div, add, sub, mul, div
]

const SelectorPopUp = () => {
  const { locale, iconInputRequest, setIconInputRequest } = useContext(Context)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (iconInputRequest.hasRequest) {
      setShow(true);
    }
  }, [iconInputRequest]);

  
  var display = labels.cancel[locale]
  useEffect(() => {
    display = labels.cancel[locale]
  }, [locale])

  const closeHandler = () => {
    setShow(false);
    setIconInputRequest({hasRequest: false, handler: null});
  };

  return (
    <div className='icon-popup-box icon-popup-position popup-slide-in' 
      style={{visibility: show ? "visible" : "hidden", top: show ? "10%" : "-20%"}}
    > 
      <div className='icon-input-header'>Choose con</div>

      <ul className='icon-container '>
        { Icons.map((e, i) => <li key={i}>
          {<Icon icon={e} onClick={closeHandler} />}
         </li>) }
      </ul>

      {/* <button className='cancel-button'
        onClick={() => closeHandler}
      >
        {display}
      </button> */}

      <input className='cancel-button' type='button' value={display} onClick={closeHandler} />

    </div>
  )
}

const Icon = ({icon, onClick}) => {
  const { iconInputRequest } = useContext(Context)

  return (
    <div>
      <img className='icon-item' 
        src={icon} 
        onClick={()=> {
          console.log("selection made")
          console.log(icon)
          if (iconInputRequest.handler) {
            iconInputRequest.handler(icon)
          }
          onClick()
        }}
      />
    </div>
  )
}

export default SelectorPopUp
