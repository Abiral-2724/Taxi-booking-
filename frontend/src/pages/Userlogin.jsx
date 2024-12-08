import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')

    const [userData ,setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault() 
        // console.log(email ,password) ;
        setUserData({
            email : email ,
            password : password
        })
        console.log(userData) ;
        setPassword('') ;
        setEmail('')
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
       <img className='w-20 mb-4' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'></img>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
       
        <h3 className='text-lg font-medium mb-2'>What`s your email</h3>
      
        <input 
        className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
        required 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
         placeholder='email@example.com'/>
       
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        
        <input 
         className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
        required 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="Password" 
        placeholder='Enter Password'/>
     
     <button 
     className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
     >Login</button>
        </form>
  

        <p className='text-center'>New here? <Link to='/signup' className='text-blue-600 cursor-pointer'>Create new Account</Link></p>
        </div>
        <div>
        <Link
          to='/captain-login'
          className='bg-[#b55308] flex items-center justify-center text-white font-sans mb-5 mt-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin