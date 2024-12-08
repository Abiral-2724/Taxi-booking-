import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
           <img className='w-16 ml-8' src='https://www.logo.wine/a/logo/Uber/Uber-White-Dark-Background-Logo.wine.svg'></img>
            <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5 cursor-progress'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start