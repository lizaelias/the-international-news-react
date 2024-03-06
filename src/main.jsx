import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvide from './Providers/AuthProvide'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvide>
    <RouterProvider router={router} />
    </AuthProvide>
  </React.StrictMode>,
)
