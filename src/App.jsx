import React, { useContext } from 'react'
import { Nav, CharactorTable } from "./components"
import Curtain from './components/curtain/curtain'
import SelectorPopUp from './components/tables/iconSelect'
import PlayerTable from './components/tables/player'

const App = () => {
  return (
    <div className='app bg-color-purple'>
      <SelectorPopUp />
      <Nav />
      <Curtain />
      <PlayerTable />
      <CharactorTable />
    </div>

  )
}

export default App
