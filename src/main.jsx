import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import StateProvider from './lib/StateProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </StrictMode>,
)
