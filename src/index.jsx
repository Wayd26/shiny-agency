import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './pages/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/survey/:questionNumber" element={<Survey />}/>
      <Route exact path="/results" element={<Results />}/>
      <Route exact path="/freelances" element={<Freelances  />}/>
      <Route exact path="/*" element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
