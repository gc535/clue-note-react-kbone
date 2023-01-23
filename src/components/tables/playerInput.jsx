import React, { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../context/context'
import { labels } from '../localization'

import './playerInput.css'


const PlayerInputPopUp = () => {
  const { locale, playerInputRequest, setPlayerInputRequest } = useContext(Context)
  const inputField = useRef(null)
  const [show, setShow] = useState(false)
  const [ value, setValue ] = useState("")
  const max_char = 2

  useEffect(() => {
    if (playerInputRequest.hasRequest) {
      setShow(true);
    }
  }, [playerInputRequest]);


  //////////////// locale display related ////////////////
  var input_title = labels.type_input[locale]
  useEffect(() => {
    input_title = labels.type_input[locale]
  }, [locale])

  var hint_display = labels.input_hint[locale]
  useEffect(() => {
    hint_display = labels.input_hint[locale]
  }, [locale])

  var cancel_display = labels.cancel[locale]
  useEffect(() => {
    cancel_display = labels.cancel[locale]
  }, [locale])

  var submit_display = labels.submit[locale]
  useEffect(() => {
    submit_display = labels.submit[locale]
  }, [locale])
  //////////////// locale display related ////////////////

  const closeHandler = () => {
    inputField.current.blur()
    setShow(false)
    setPlayerInputRequest({hasRequest: false, handler: null})
  };

  const handleSubmit = () => {
    if (playerInputRequest.handler) {
      if (value === "") {
        playerInputRequest.handler("N/A")                       // pass empty space to handler
      } else {
        playerInputRequest.handler(value.slice(0, max_char))  // pass 2 char value to handler
      }
    }
    setValue("")
    closeHandler()
  }

  return (
    <div className='input-popup-box input-popup-position popup-slide-in input-popup-box-background' 
      style={{visibility: show ? "visible" : "hidden", top: show ? "10%" : "-20%"}}
    > 
      <div className='player-input-header'>{input_title}</div>
      
      <form>
        <div className='form-input-container'>
          <input className='player-input-field'  
            ref={inputField}
            type="text" 
            maxLength='4' 
            value={value}
            onInput={(e) => setValue(e.target.value)} 
            onChange={(e) => setValue(e.target.value)} />  
          <label className='hint'>{`(${hint_display})`}</label>
        </div>
        <div className='form-button-container'>
          <button className='player-input-button' onClick={() => handleSubmit()}>{submit_display}</button>
          <button className='player-input-button' onClick={() => closeHandler()}>{cancel_display}</button>
        </div>
      </form>


    </div>
  )
}

export default PlayerInputPopUp
