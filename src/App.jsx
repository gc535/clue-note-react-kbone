import React, { useContext, useEffect, useState } from 'react'
import { Nav, CharactorTable } from "./components"
import Curtain from './components/curtain/curtain'
import SelectorPopUp from './components/tables/iconSelect'
import PlayerInputPopUp from './components/tables/playerInput'
import PlayerTable from './components/tables/player'
import { Context } from './components/context/context'

const App = () => {
  return (
    <div className='app bg-color-purple'>
      <SelectorPopUp />
      <PlayerInputPopUp />
      <Nav />
      <Curtain />
      <PlayerTable />
      <CharactorTable />
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