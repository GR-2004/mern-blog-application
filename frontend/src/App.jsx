import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Signin from './pages/Signin.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/sign-in' element={<Signin/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/projects' element={<Projects/>} />


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
