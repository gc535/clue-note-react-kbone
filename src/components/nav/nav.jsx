import React, { useState } from 'react'
import './nav.css'

function Nav() {
  const [count, setCount] = useState(0)
  
  const [] = []
  return (
    <div className='bg-color-red'>
      <span>{count}</span>
      <div className='content'>
        <ResetButton />
        <ShowHideButton />
      </div>
      <div onClick={clickHandle}>跳转</div>
    </div>
  )
}

function ResetButton() {
  const localization = "重置";
  return (
    <button className='button-style' 
      type='button' 
      onClick={() => setCount(count - 1)}
    >
      {localization}
    </button>        

  )
}

function ShowHideButton() {
  const [state, setState] = useState(0)
  const display = ["隐藏", "显示"];  // replace with image src
  return (
    //<button class='button-hide' type='button' onClick={() => setShowHide}>
    //  <img src="https://i.imgur.com/tXLqhgC.png" width="90" height="90" alt="submit" /> 
    //</button>
    <button className='button-style' 
      type='button' 
      onClick={() => setState((state + 1)  % 2)}
    >
      {display[state]}
    </button>

  )
}

function clickHandle() {
  if ('undefined' != typeof wx && wx.getSystemInfoSync) {
    wx.navigateTo({
      url: '../log/index?id=1',
    })
  } else {
    location.href = 'log.html'
  }
}

export default Nav
