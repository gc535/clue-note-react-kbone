import React, { useContext, useEffect, useState } from 'react'
import { Nav, CharactorTable, WeaponTable, RoomTable } from "./components"
import Curtain from './components/curtain/curtain'
import SelectorPopUp from './components/tables/iconSelect'
import PlayerInputPopUp from './components/tables/playerInput'
import PlayerTable from './components/tables/player'
import { Context } from './components/context/context'

import "./App.css"
import "./fonts/CARVEDWOODRegular.ttf"

const App = () => {
  return (
    <div className='app '>
      <SelectorPopUp />
      <PlayerInputPopUp />
      <Nav />
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