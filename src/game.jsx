import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from './components/context/context'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  window.onShareAppMessage = () => {
    return {
      title: "玩 ‘妙探寻凶’ 试试用这个做记录吧",
      path: "/pages/index/index",
      imageUrl: "https://images.pcgamingwiki.com/d/d4/Clue-Cluedo_The_Classic_Mystery_Game_cover.jpg"
    }
  }

  window.onShareTimeline = () => {
    return {
      title: "玩 ‘妙探寻凶’ 试试用这个做记录吧",
    }
  }

  ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
    container
  )
}

;('undefined' != typeof wx && wx.getSystemInfoSync) || createApp()
