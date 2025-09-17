import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { EmployeeListing } from './EmployeeListing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeListing />
  </StrictMode>,
)
