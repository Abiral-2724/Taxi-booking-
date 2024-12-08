import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<UserLogin></UserLogin>}/>
        <Route path='/signup' element={<UserSignup></UserSignup>}/>
        <Route path='/captain-login' element={<Captainlogin></Captainlogin>}/>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}/>
      </Routes>
    </div>
  )
}

export default App