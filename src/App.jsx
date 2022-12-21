import React, { useContext } from 'react'
import { Nav, CharactorTable } from "./components"
import SelectorPopUp from './components/tables/iconSelect'
import PlayerTable from './components/tables/player'

const App = () => {
  return (
    <div className='app'>
      <SelectorPopUp />
      <Nav />
      <PlayerTable />
      <CharactorTable />
    </div>
  )
}

export default App
