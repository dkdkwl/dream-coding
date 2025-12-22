import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppProducts from './AppProducts'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProducts />
  </StrictMode>,
)
