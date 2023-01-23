import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/context'
import { ICONS } from '../constant'

import './input.css'

export const TableInput = () => {
  const { clearInput, setClearInput, setIconInputRequest, 
          iconInputRequest, playerInputRequest } = useContext(Context) 
  const [icon, setIcon] = useState(ICONS[0])

  const clickHandler = () => {
    if (iconInputRequest.hasRequest || playerInputRequest.hasRequest) {
      return 
    }
    setIconInputRequest({hasRequest: true, handler: setIcon})
    setClearInput("none")
  }

  useEffect(() => {
    if (clearInput === "all" || clearInput === "icon") {
      setIcon(ICONS[0])
    }
  }, [clearInput])

  return (
    <div onClick={() => clickHandler()}>
      <img className='table-input-icon' src={icon} />
    </div>
  )
}

export const PlayerInput = ({id}) => {
  const { clearInput, setClearInput, setPlayerInputRequest, 
          iconInputRequest, playerInputRequest } = useContext(Context) 
  const [ player, setPlayer ] = useState(id)

  const clickHandler = () => {
    if (iconInputRequest.hasRequest || playerInputRequest.hasRequest) {
      return 
    }
    setPlayerInputRequest({hasRequest: true, handler: setPlayer})
    setClearInput("none")
  }
  
  useEffect(() => {
    if (clearInput === "all") {
      setPlayer(id)
    }
  }, [clearInput])

  return (
    <div className='player-input-container'>
      <div 
        className='player-input'
        onClick={() => clickHandler()}>{player}</div>
    </div>
  )
}

