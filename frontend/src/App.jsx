import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import DashBoard from './pages/DashBoard'
import Riding from './pages/Riding'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
    </div>
  )
}

export default App
