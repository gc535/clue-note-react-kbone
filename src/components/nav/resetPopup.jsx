import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/context'
import { labels } from '../localization'

import './resetPopup.css'

const ResetPopUp = () => {
  const { locale, reset, setReset, setClearInput } = useContext(Context)
  const [show, setShow] = useState(false)


  useEffect(() => {
    if (reset) {
      setShow(true)
    }
  }, [reset]);

  //////////////// locale display related ////////////////
  var reset_title = labels.reset_title[locale]
  useEffect(() => {
    reset_title = labels.reset_title[locale]
  }, [locale])

  var reset_options = labels.reset_options[locale]
  useEffect(() => {
    reset_options = labels.reset_options[locale]
  }, [locale])
  //////////////// locale display related ////////////////

  const handleClearAll = () => {
    setClearInput("all")
    setReset(false);
    setShow(false);
  };

  const handleKeepName = () => {
    setClearInput("icon")
    setReset(false);
    setShow(false);
  }

  const handleCancel = () => {
    setClearInput("none")
    setReset(false);
    setShow(false);
  }

  return (
    <div className='reset-popup-box reset-popup-position reset-popup-slide-in reset-popup-box-background' 
      style={{visibility: show ? "visible" : "hidden", top: show ? "10%" : "-20%"}}
    > 
      <div className='reset-header'>{reset_title}</div>
      <label className='reset-button' onClick={handleKeepName} >{reset_options[0]}</label>
      <label className='reset-button' onClick={handleClearAll} >{reset_options[1]}</label>
      <label className='reset-button' onClick={handleCancel}   >{reset_options[2]}</label>

    </div>
  )
}

export default ResetPopUp
