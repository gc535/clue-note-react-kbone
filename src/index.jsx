import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/nav/nav'
import App from './App'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(<App />, container)
}

;('undefined' != typeof wx && wx.getSystemInfoSync) || createApp()
