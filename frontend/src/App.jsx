import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start></Start>}/>
        <Route path='/login' element={<UserLogin></UserLogin>}/>
        <Route path='/signup' element={<UserSignup></UserSignup>}/>
        <Route path='/captain-login' element={<Captainlogin></Captainlogin>}/>
        <Route path='/captain-signup' element={<CaptainSignup></CaptainSignup>}/>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home></Home>
          </UserProtectWrapper>
        }/>
        <Route path='/user/logout' element={
           <UserProtectWrapper>
           <UserLogout></UserLogout>
         </UserProtectWrapper>
        }/>
         <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome></CaptainHome>
          </CaptainProtectWrapper>
         }/>

       <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout></CaptainLogout>
          </CaptainProtectWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App