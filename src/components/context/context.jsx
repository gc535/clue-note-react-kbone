import React, { useState } from 'react'

export const Context = React.createContext();


export const ContextProvider = ({children}) =>{
  const [ locale, setLocale ] = useState('en')
  const [ hide, setHide ] = useState(false)
  const [ clearInput, setClearInput ] = useState("all")
  const [ reset, setReset ] = useState(false)
  const [ iconInputRequest, setIconInputRequest ] = useState({hasRequest: false, handler: null})
  const [ playerInputRequest, setPlayerInputRequest ] = useState({hasRequest: false, handler: null})


  return(
    <Context.Provider
      value ={{
        locale, 
        setLocale,
        hide, 
        setHide,
        clearInput,
        setClearInput,
        reset, 
        setReset,
        iconInputRequest,
        setIconInputRequest,
        playerInputRequest, 
        setPlayerInputRequest
      }}
    >
      {children}
    </Context.Provider>
  )
} 