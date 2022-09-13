import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LayoutView from './components/Layout'
import { BrowserRouter } from "react-router-dom"
import App from '@/router/App'
import mock from '@/mock/index';
mock()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
