import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { UserDataContext } from '../context/userContext'

const UserSignup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [userData, setUserData] = useState({})
    
    const navigate = useNavigate()

    const { user, setUser } = React.useContext(UserDataContext)

    const submitHandler = async (e) => {
        e.preventDefault()
        
        const newUser = {
            fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
        }

        console.log(newUser)

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

            if (response.status == 201) {
                const data = response.data
                localStorage.setItem('token', data.token)
                setUser(data.user)
                navigate('/home')
            }
        } catch (error) {
            console.error('Signup failed', error)
            // Optionally add error handling or toast notification
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
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
                            placeholder='First name'
                        />
                        
                        <input 
                            className='bg-[#eeeeee] rounded-md px-4 py-2 border w-1/2 text-lg placeholder:text-base'
                            required 
                            value={lastName}
                            onChange={(e) => {
                                setLastName(e.target.value)
                            }}
                            type="text"
                            placeholder='Last name'
                        />
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
                        placeholder='email@example.com'
                    />
                    
                    <h3 className='text-base font-medium mb-2'>Enter your Password</h3>
                    
                    <div className='relative'>
                        <input 
                            className='bg-[#eeeeee] mb-5 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base pr-10'
                            required 
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            type={showPassword ? "text" : "password"} 
                            placeholder='Enter Password'
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500'
                        >
                            {showPassword ? (
                                <EyeOff size={20} className='mb-4'/>
                            ) : (
                                <Eye size={20} className='mb-4'/>
                            )}
                        </button>
                    </div>
                    
                    <button 
                        className='bg-[#111] text-white font-semibold mb-3 rounded-md px-4 py-2 w-full text-lg placeholder:text-base'
                    >
                        Sign up
                    </button>
                </form>
                
                <p className='text-center'>
                    Already have an Account? <Link to='/login' className='text-blue-600 cursor-pointer'>Login here</Link>
                </p>
            </div>
            <div>
                <p className='text-[10px] leading-tight'>
                    This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span>.
                </p>
            </div>
        </div>
    )
}

export default UserSignup