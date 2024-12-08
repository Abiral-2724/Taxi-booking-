import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const [firstName ,setFirstName] = useState('') ; 
    const [lastName ,setLastName] = useState('') ;
const [userData , setUserData] = useState({})
    const submitHandler = (e) => {
        e.preventDefault() ;
        
        setUserData({
            fullName:{
                firstName:firstName ,
                lastName : lastName
            } ,
            email : email ,
            password : password
        })
        console.log(userData) ;
        setEmail('') ;
        setPassword('') ;
        setFirstName('') ;
        setLastName('') ; 
       
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
    <div>
   <img className='w-20 mb-4' src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'></img>
    <form onSubmit={(e) => {
        submitHandler(e)
    }}>
   <h3 className='text-base font-medium mb-2'>Enter your name</h3>
   <div className='flex gap-2 mb-5'>
   <input 
    className='bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-lg placeholder:text-base'
    required 
    value={firstName}
    onChange={(e) => {
        setFirstName(e.target.value)
    }}
    type="text"
     placeholder='First name'/>
    
    
    <input 
    className='bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-lg placeholder:text-base'
    required 
    value={lastName}
    onChange={(e) => {
       setLastName(e.target.value)
    }}
    type="text"
     placeholder='Last name'/>

   </div>

    <h3 className='text-base font-medium mb-2'>Enter your email</h3>
  
    <input 
    className='bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
    required 
    value={email}
    onChange={(e) => {
        setEmail(e.target.value)
    }}
    type="email"
     placeholder='email@example.com'/>
   
    <h3 className='text-base font-medium mb-2'>Enter your Password</h3>
    
    <input 
     className='bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
    required 
    value={password}
    onChange={(e) => {
        setPassword(e.target.value)
    }}
    type="Password" 
    placeholder='Enter Password'/>
 
 <button 
 className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
 >Sign up</button>
    </form>


    <p className='text-center'>Already a captain? <Link to='/captain-login' className='text-blue-600 cursor-pointer'>Login here</Link></p>
    </div>
    <div>
    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
    </div>
</div>
  )
}

export default CaptainSignup