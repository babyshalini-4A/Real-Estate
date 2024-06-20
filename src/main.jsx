import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Dashboard from './components/Dashboard.jsx'
import Home from './components/Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import Master from './components/Master.jsx'
import ContactUs from './components/ContactUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import LoginRegister from './components/LoginRegister.jsx'
import Projects from './components/Projects.jsx'
import Properties from './components/Properties.jsx'
import PostForm from './components/PostForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Master/>
    </BrowserRouter>
  </React.StrictMode>,
)
