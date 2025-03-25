import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import OptionsList from './components/OptionsList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <OptionsList />
  </StrictMode>,
)
