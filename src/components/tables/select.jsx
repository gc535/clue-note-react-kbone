import React, { useState } from 'react'
import './select.css'

const SelectorPopUp = (props) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };
  
  return (
    <div className='popup-box' 
      style={{visibility: show ? "visible" : "hidden"}}
    > 
      这是选择器
    </div>
  )
}

export default SelectorPopUp
