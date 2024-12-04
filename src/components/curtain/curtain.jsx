import React, { useContext, useEffect, useState } from "react"
import { Context } from "../context/context"

import "./curtain.css"


const Curtain = () => {
  const { hide } = useContext(Context)
  
  const [ showCurtain, setShowCurtain ] = useState(false)
  useEffect(() => {
    setShowCurtain(hide)
  }, [hide])

  return (
    <div 
      className="curtain-container curtain-position  wornMetalBackground"
      style={{ 
               overflow: 'hidden',
               height: showCurtain ? "100%" : "0px",
               transition: showCurtain ? "height 0.15s ease-in" : "height 0.15s ease-out"
            }}
    >
    
      <img className="curtain-icon" src={hide_image} />
      {/* <label className="quiet-text">shhh...</label> */}
    </div>
  )
}

export default Curtain


const hide_image = "data:image/png;base64,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"