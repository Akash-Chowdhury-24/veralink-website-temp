import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GlobalProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </GlobalProvider>
  </BrowserRouter>,
)
