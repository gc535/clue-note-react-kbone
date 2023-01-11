import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../context/context'

import nil from '../../../img/icons/nil.png'
import './input.css'

export const TableInput = () => {
  const { clearInput, setClearInput, setIconInputRequest } = useContext(Context) 
  const [icon, setIcon] = useState(nil)

  const clickHandler = () => {
    setIconInputRequest({hasRequest: true, handler: setIcon})
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
  const { clearInput, setClearInput, setPlayerInputRequest } = useContext(Context) 
  const [ player, setPlayer ] = useState(id)

  const clickHandler = () => {
    setPlayerInputRequest({hasRequest: true, handler: setPlayer})
    setClearInput(false)
  }

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
      <div 
        className='player-input'
        onClick={() => clickHandler()}>{player}</div>
    </div>
  )
}

