import React, { useContext } from 'react'
import { Nav, CharactorTable } from "./components"
import { Context } from './components/context/context'
import SelectorPopUp from './components/tables/iconSelect'

const App = () => {
  const { selectorShow } = useContext(Context)
  return (
    <div>
      <Nav />
      <SelectorPopUp show={selectorShow}/>
      <CharactorTable />
    </div>
  )
}

export default App
