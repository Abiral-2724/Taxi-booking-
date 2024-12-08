import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'
import { Eye, EyeOff } from 'lucide-react'
import axios from 'axios'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [userData, setUserData] = useState({})
    const navigate = useNavigate()
    const { user, setUser } = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        const userdata = {
            email: email,
            password: password
        }
        console.log(userdata)

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userdata)

            if (response.status === 200) {
                const data = response.data
                setUser(data.user)
                localStorage.setItem('token', data.token)
                navigate('/home')
            }
        } catch (error) {
            console.error('Login failed', error)
            // Optionally add error handling or toast notification
        }

        setPassword('')
        setEmail('')
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img 
                    className='w-20 mb-4' 
                    src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png' 
                    alt='Uber Logo'
                />
                <form onSubmit={submitHandler}>
                    <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                    
                    <input 
                        className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base'
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='email@example.com'
                    />
                    
                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                    
                    <div className='relative'>
                        <input 
                            className='bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base pr-10'
                            required 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"} 
                            placeholder='Enter Password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                        >
                            {showPassword ? (
                                <EyeOff size={20} className='mb-6' />
                            ) : (
                                <Eye size={20} className='mb-6'/>
                            )}
                        </button>
                    </div>
                    
                    <button 
                        className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
                    >
                        Login
                    </button>
                </form>
                
                <p className='text-center'>
                    New here? <Link to='/signup' className='text-blue-600 cursor-pointer'>Create new Account</Link>
                </p>
            </div>
            <div>
                <Link
                    to='/captain-login'
                    className='bg-[#b55308] flex items-center justify-center text-white font-sans mb-5 mt-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
                >
                    Sign in as Captain
                </Link>
            </div>
        </div>
    )
}

export default UserLogin