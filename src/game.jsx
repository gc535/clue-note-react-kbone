import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContextProvider } from './components/context/context'

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
    container
  )
}

;('undefined' != typeof wx && wx.getSystemInfoSync) || createApp()
