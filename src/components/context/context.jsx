import React, { useState } from 'react'

export const Context = React.createContext();


export const ContextProvider = ({children}) =>{
  const [ locale, setLocale ] = useState('ch')
  const [ hide, setHide ] = useState(false)
  const [ clearInput, setClearInput ] = useState(true)
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