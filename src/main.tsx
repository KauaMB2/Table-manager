import AppProvider from './contexts/index.tsx'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
)
