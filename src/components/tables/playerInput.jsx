import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../context/context'
import { labels } from '../localization'

import './playerInput.css'


const PlayerInputPopUp = () => {
  const { locale, playerInputRequest, setPlayerInputRequest } = useContext(Context)
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
    setShow(false);
    setPlayerInputRequest({hasRequest: false, handler: null});
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
            type="text" 
            maxLength='4' 
            value={value}
            onChange={(e) => setValue(e.target.value)} />  
          <label className='hint'>{`(${hint_display})`}</label>
        </div>
        <div className='form-button-container'>
          <input className='player-input-button' type='button' value={submit_display} onClick={() => handleSubmit()}/>
          <input className='player-input-button' type='button' value={cancel_display} onClick={() => closeHandler()} />
        </div>
      </form>


    </div>
  )
}

export default PlayerInputPopUp
