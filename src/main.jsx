import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { AccessibilityProvider } from './contexts/AccessibilityContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ThemeProvider>
        <AccessibilityProvider>
          <App />
        </AccessibilityProvider>
      </ThemeProvider>
    </HashRouter>
  </StrictMode>,
)
