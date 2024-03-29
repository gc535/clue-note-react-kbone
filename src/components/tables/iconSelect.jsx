import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/context'
import { labels } from '../localization'
import { ICONS } from '../constant'

import './iconSelect.css'

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
        { ICONS.map((e, i) => <li key={i}>
          {<Icon icon={e} onClick={closeHandler} />}
         </li>) }
      </ul>
      <label className='cancel-button' onClick={closeHandler} >{button_display}</label>

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
