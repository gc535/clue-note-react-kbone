import React, { useEffect, useState } from 'react'

export const Context = React.createContext();


export const ContextProvider = ({children}) =>{
  const [ selectorShow, setSelectorShow] = useState(false)
  const [ inputRequest, setInputRequest ] = useState({hasRequest: false, handler: null})


  return(
    <Context.Provider
      value ={{
        selectorShow, 
        setSelectorShow,
        inputRequest,
        setInputRequest
      }}
    >
      {children}
    </Context.Provider>
  )
} 