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
      title: "分享 ‘妙探寻凶笔记’ 给好友",
      path: "/pages/index/index",
      imageUrl: "https://images.pcgamingwiki.com/d/d4/Clue-Cluedo_The_Classic_Mystery_Game_cover.jpg"
    }
  }

  window.onShareTimeline = () => {
    return {
      title: "分享 ‘妙探寻凶笔记’ 到朋友圈",
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
