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
      setShow(true)
    }
  }, [iconInputRequest]);

  //////////////// locale display related ////////////////
  var icon_title = labels.choose_icon[locale]
  useEffect(() => {
    icon_title = labels.choose_icon[locale]
  }, [locale])

  var button_display = labels.cancel[locale]
  useEffect(() => {
    button_display = labels.cancel[locale]
  }, [locale])
  //////////////// locale display related ////////////////


  const closeHandler = () => {
    setShow(false);
    setIconInputRequest({hasRequest: false, handler: null});
  };

  return (
    <div className='icon-popup-box icon-popup-position popup-slide-in icon-popup-box-background' 
      style={{visibility: show ? "visible" : "hidden", top: show ? "10%" : "-20%"}}
    > 
      <div className='icon-input-header'>{icon_title}</div>

      <ul className='icon-container '>
        { Icons.map((e, i) => <li key={i}>
          {<Icon icon={e} onClick={closeHandler} />}
         </li>) }
      </ul>
      <input className='cancel-button' type='button'  value={button_display} onClick={closeHandler} />

    </div>
  )
}

const Icon = ({icon, onClick}) => {
  const { iconInputRequest } = useContext(Context)

  return (
    <div>
      <img className='icon-item icon-item-background' 
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
