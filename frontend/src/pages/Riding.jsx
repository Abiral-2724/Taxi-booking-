import React from 'react'
import { ArrowBigDown, BadgeIndianRupee, HousePlug, MapPinHouse, MapPinPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home'  className='fixed right-4 top-4 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <HousePlug
         />
        </Link>
        <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" /> 
        </div>
        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
            <img className="h-16" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
           <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthank</h2>
            <h4 className='text-xl font-bold'>MP04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Szuki Alto</p>
           </div>
            </div>
            <div className='flex justify-between flex-col items-center gap-2'>
               
                <div className='w-full mt-5'>
                   
                    <div className='flex items-center gap-3 p-2 border-b-2'>
                        <MapPinHouse />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600'>Kankariya Talab ,Mumbai</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 p-2 '>
                        <BadgeIndianRupee />
                        <div>
                            <h3 className='text-lg font-medium'>$193.20</h3>
                            <p className='text-sm text-gray-600'>Cash Cash</p>
                        </div>
                    </div>
                </div>

            </div>
            <button className='w-full bg-green-600 text-white font-thin p-2 text-lg rounded-lg mt-5'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding