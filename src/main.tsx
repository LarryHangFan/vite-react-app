import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@/assets/styles/common.less'
import { BrowserRouter } from "react-router-dom"
import App from '@/router/App'
import 'antd/dist/antd.css';
import mock from '@/mock/index';
mock()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
