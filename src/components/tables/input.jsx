import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/context'

import nil from '../../../assets/icons/nil.png'
import './input.css'

export const TableInput = () => {
  const { clearInput, setClearInput, setInputRequest } = useContext(Context) 
  const [icon, setIcon] = useState(nil)

  const clickHandler = () => {
    setInputRequest({hasRequest: true, handler: setIcon})
    setClearInput(false)
  }

  useEffect(() => {
    if (clearInput) {
      setIcon(nil)
    }
  }, [clearInput])

  return (
    <div onClick={() => clickHandler()}>
      <img className='table-input-icon' src={icon} />
    </div>
  )
}

export const PlayerInput = ({id}) => {
  const { clearInput, setClearInput, setInputRequest } = useContext(Context) 
  const [ player, setPlayer] = useState(id)

  const handleChange = (e) => {
    setPlayer(e.target.value)
    setClearInput(false)
  }

  useEffect(() => {
    if (clearInput) {
      setPlayer(id)
    }
  }, [clearInput])

  return (
    <div className='player-input-container'>
      <input 
        type="text" 
        maxLength="2" 
        placeholder={player} 
        value={player}
        onChange={(e) => handleChange(e)}/>
    </div>
  )
}

