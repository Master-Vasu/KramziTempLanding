import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { blockBrowserExtensionWidgets } from './utils/blockExtensions.js'

blockBrowserExtensionWidgets()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
