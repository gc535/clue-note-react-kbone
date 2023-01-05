import React, { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"

import icon from '../../../img/icons/hide.svg'
import "./curtain.css"

const Curtain = () => {
  const { hide } = useContext(Context)
  
  const [ showCurtain, setShowCurtain ] = useState(false)
  useEffect(() => {
    setShowCurtain(hide)
  }, [hide])

  return (
    <div 
      className="curtain-container curtain-position "
      style={{ 
               overflow: 'hidden',
               height: showCurtain ? "100%" : "0px",
               transition: showCurtain ? "height 0.15s ease-in" : "height 0.15s ease-out"
            }}
    >
    
      <img className="curtain-icon" src={icon} />
    </div>
  )
}

export default Curtain
