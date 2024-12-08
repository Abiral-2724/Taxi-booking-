import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CapatainContext'
import axios from 'axios'

const Captainlogin = () => {
    const [email ,setEmail] = useState('')
    const [password ,setPassword] = useState('')
    const { captain, setCaptain } = React.useContext(CaptainDataContext);
    const [captainData ,setCaptainData] = useState({})
    const navigate = useNavigate() ; 

    const submitHandler = async (e) => {
        e.preventDefault() 
        // console.log(email ,password) ;
        const captain = {
            email : email ,
            password : password
        }
        console.log(captain) ;

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login` ,captain)

        if(response.status === 200){
            const data = response.data 

            setCaptain(data.captain)
            localStorage.setItem('token' ,data.token)
            navigate('/captain-home')
        }



        setPassword('') ;
        setEmail('')
    }
    return (
    <div  className='bg-cover bg-center bg-[url()] p-7 h-screen flex flex-col justify-between'>
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


    <p className='text-center'>Join a fleet ? <Link to='/captain-signup' className='text-blue-600 cursor-pointer'>Register as a captain</Link></p>
    </div>
    <div>
    <Link
      to='/login'
      className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 mt-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
    >Sign in as user</Link>
    </div>
</div>
  )
}

export default Captainlogin