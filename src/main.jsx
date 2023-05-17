import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {router} from './router'
import {RouterProvider} from 'react-router-dom'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import {CssBaseline} from "@mui/material"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <CssBaseline />
    <RouterProvider router={router} />
    </>
  </React.StrictMode>,
)