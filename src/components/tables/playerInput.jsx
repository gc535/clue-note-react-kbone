import React, { useState, useEffect, useContext } from 'react'
import './playerInput.css'

import { Context } from '../context/context'

const PlayerInputPopUp = () => {
  const { playerInputRequest, setPlayerInputRequest } = useContext(Context)
  const [show, setShow] = useState(false)
  const [ value, setValue] = useState("")
  const max_char = 2

  useEffect(() => {
    if (playerInputRequest.hasRequest) {
      setShow(true);
    }
  }, [playerInputRequest]);

  const closeHandler = () => {
    setShow(false);
    setPlayerInputRequest({hasRequest: false, handler: null});
  };

  const handleSubmit = () => {
    console.log(value)
    if (playerInputRequest.handler) {
      playerInputRequest.handler(value.slice(0,max_char))
    }
    closeHandler()
  }

  return (
    <div className='popup-box popup-position popup-slide-in' 
      style={{visibility: show ? "visible" : "hidden", top: show ? "10%" : "-20%"}}
    > 
      <div className='icon-input-header'>Set Player Label</div>
      
      <form>
        <div className='form-input-container'>
          <input className='player-input-field' type="text" maxLength='4' onChange={(e) => setValue(e.target.value)}/>  
          <label className='hint'>(2 charactors max.)</label>
        </div>
        <div className='form-button-container'>
          <input className='player-input-button' type='button' value="Submit" onClick={() => handleSubmit()}/>
          <input className='player-input-button' type='button' value="Cancel" onClick={() => closeHandler()} />
        </div>
      </form>


    </div>
  )
}

export default PlayerInputPopUp
