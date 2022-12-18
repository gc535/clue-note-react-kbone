import React from 'react'
import { Nav, CharactorTable } from "./components"
import SelectorPopUp from './components/tables/select'

const App = () => {
  return (
    <div>
      <Nav />
      <SelectorPopUp />
      <CharactorTable />
    </div>
  )
}

export default App
