import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppMentorsButton from './AppMontorsButton'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppMentorsButton />
  </StrictMode>,
)
