import React, { useState } from 'react'

export const Context = React.createContext();


export const ContextProvider = ({children}) =>{
  const [ inputRequest, setInputRequest ] = useState(null)

  return(
    <Context.Provider
      value ={{
        inputRequest,
        setInputRequest
      }}
    >
      {children}
    </Context.Provider>
  )
} 