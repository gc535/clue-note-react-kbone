import React, { useState } from 'react'

export const Context = React.createContext();


export const ContextProvider = ({children}) =>{
  const [ locale, setLocale ] = useState('ch')
  const [ clearInput, setClearInput ] = useState(true)
  const [ inputRequest, setInputRequest ] = useState({hasRequest: false, handler: null})

  return(
    <Context.Provider
      value ={{
        locale, 
        setLocale,
        clearInput,
        setClearInput,
        inputRequest,
        setInputRequest
      }}
    >
      {children}
    </Context.Provider>
  )
} 