import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Overview} from './views/Overview'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Overview />
  </StrictMode>,
)
