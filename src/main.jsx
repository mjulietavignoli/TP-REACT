import React from 'react'

import { RouterProvider } from 'react-router-dom'
import {QueryClientProvider, QueryClient} from '@tanstack/react-query'

import {router} from './constants/routes.jsx'

import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>
)
