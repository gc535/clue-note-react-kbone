import React, { useContext, useEffect, useState } from 'react'
import { Nav, ResetPopUp, Curtain, SelectorPopUp, PlayerInputPopUp, 
         PlayerTable, CharactorTable, WeaponTable, RoomTable } from "./components"
import { Context } from './components/context/context'
import { font_style } from './components/constant'

import "./App.css"


const App = () => {
  const [ fontStyle, setFontStyle ] = useState(font_style.en)

  return (
    <div className='app ' style={fontStyle}>
      <ResetPopUp />
      <SelectorPopUp />
      <PlayerInputPopUp />
      <Nav changefont={setFontStyle}/>
      <Curtain />
      <PlayerTable />
      <CharactorTable />
      <WeaponTable />
      <RoomTable />
    </div>
  )
}

export default App


const PopUpCanvas = () => {
  const { iconInputRequest, playerInputRequest } = useContext(Context)
  
  const [ show, setShow ] = useState(false)
  useEffect(() => {
    setShow(iconInputRequest || iconInputRequest)
  }, [iconInputRequest, playerInputRequest])
  
  return (
    <div className='popup-canvas'
    style={{visibility: show ? "visible" : "hidden"}}>
      hahahahahahaah
    </div>
  )
}