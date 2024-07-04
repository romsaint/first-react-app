import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/Reset.css'

import { App } from './MainApp'


ReactDOM.createRoot(document.getElementById('content')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)