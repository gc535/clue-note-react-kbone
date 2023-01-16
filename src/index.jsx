import React from 'react'
import ReactDOM from 'react-dom'

import "./index.css"

const Welcome = () => {

  const start= () => {
    if ('undefined' != typeof wx && wx.getSystemInfoSync) {
      wx.navigateTo({
        url: '../game/index?id=1',
      })
    } else {
      location.href = 'game.html'
    }
  }

  return (
    <div className='welcome-container'>
      <img className='cover-image bg-color-black' 
        src="https://images.pcgamingwiki.com/d/d4/Clue-Cluedo_The_Classic_Mystery_Game_cover.jpg">
      </img>
      <label className='start-button ' onClick={() => start()}>Start</label>
    </div>
  )
}


export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<Welcome/>, container)
}

;('undefined' != typeof wx && wx.getSystemInfoSync) || createApp()

