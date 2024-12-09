import { ArrowBigDown, BadgeIndianRupee, MapPinHouse, MapPinPlus } from 'lucide-react';
import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div>
         <h5 onClick={() => {
    props.setConfirmRidePanel(false) ;
}} className='p-2 text-center absolute right-5 top-11 mb-3 bg-gray-100 rounded-full'><ArrowBigDown /></h5>
    <h3 className='text-xl font-normal mb-0 ml-20'>Confirm your ride</h3>
    <div className='flex justify-between flex-col items-center gap-2'>
    <img className="h-21" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt="" />
    <div className='w-full mt-5'>
        <div className='flex items-center gap-3 p-2 border-b-2'>
        <MapPinPlus />
        <div>
            <h3 className='text-lg font-medium'>562/11-A</h3>
            <p className='text-sm text-gray-600'>Kankariya Talab ,Mumbai</p>
        </div>
        </div>
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
    <button 
    onClick={() => {
        props.setVehicleFound(true)
    }}
     className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</button>
    </div>
   
    </div>
  )
}

export default ConfirmRide