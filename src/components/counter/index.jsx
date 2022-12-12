import React, { useState } from 'react'
import './index.css'

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div class='d-flex justify-content-center bg-color-red '>
      <button class='dec' onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button class='inc' onClick={() => setCount(count + 1)}>+</button>
      <div onClick={clickHandle}>跳转</div>
    </div>
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

export default Counter
