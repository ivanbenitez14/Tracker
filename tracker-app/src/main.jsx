import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './forms/components/Navbar'
import './index.css'
import { TrackerApp } from './TrackerApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <TrackerApp />   
    </BrowserRouter>
  </React.StrictMode>
)
