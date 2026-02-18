import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainSignup from './pages/CaptainSignup'
import CaptainLogin from './pages/CaptainLogin'
import DashBoard from './pages/DashBoard'
import Riding from './pages/Riding'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from "./pages/CaptainHome"

const App = () => {
  return (
    <div>
      <Routes>
        {/* "/"=> ye before login PAGE hai {Continue} */}
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/signup" element={<UserSignup/>} />
        <Route path="/riding" element={<Riding/>} />
        <Route path="/captain-signup" element={<CaptainSignup/>} />
        <Route path="/captain-login" element={<CaptainLogin/>} />
        {/* "/dashboard after login wala PAGE hai" */}

        <Route path='/dashboard' element={<UserProtectWrapper><DashBoard/></UserProtectWrapper>}/>
        <Route path='/user/logout' element={<UserProtectWrapper><UserLogout/></UserProtectWrapper>}/>
        <Route path="/captain-home" element={<CaptainHome/>}/>
      </Routes>
    </div>
  )
}

export default App
