import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoginProvider } from './providers/loginProvider'
import { RegisterProvider } from './providers/registerProvider'
import { ShopProvider } from './providers/shopProvider'
import { DashboardProvider } from './providers/dashboardProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <DashboardProvider>
          <ShopProvider>
            <RegisterProvider>
              <App />
            </RegisterProvider>
          </ShopProvider>
        </DashboardProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
)
