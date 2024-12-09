import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowBigDown, User, UserRound } from 'lucide-react';
import React, { useRef, useState } from 'react'
import LocationSearchPanel from '../components/LocationSearchPanel';
const VehiclePanel = (props) => {
  return (
    <div>
        <h5 onClick={() => {
    props.setVehiclePanel(false) ;
}} className='p-2 text-center absolute right-5 top-7 mb-3 bg-gray-100 rounded-full'><ArrowBigDown /></h5>
    <h3 className='text-xl font-semibold mb-5'>Choose a Vehicle</h3>
<div onClick={() => {
    props.setConfirmRidePanel(true)
}}  className='border active:border-black bg-gray-100 rounded-lg flex items-center justify-between p-2 mb-2'>
      <img 
        className='h-16 w-27 object-cover' 
         src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png"
        alt="Uber vehicle" 
      />
      <div className='flex-grow mx-4'>
        <div className='flex items-center space-x-2'>
          <h4 className='font-bold'>UberGo</h4>
          <div className='flex items-center space-x-1'>
            <UserRound size={16} />
            <span>4</span>
          </div>
        </div>
        <h5 className='text-sm'>2 min away</h5>
        <p className='text-xs'>Affordable, compact rides</p>
      </div>
      <h2 className='text-1xl font-semibold mb-4'>$193.20</h2>
    </div>

    <div onClick={() => {
    props.setConfirmRidePanel(true)
}}
    className='border active:border-black bg-gray-100 rounded-lg flex items-center justify-between p-2 mb-2'>
      <img 
        className='h-16 w-27 object-cover' 
         src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
        alt="Uber vehicle" 
      />
      <div className='flex-grow mx-4'>
        <div className='flex items-center space-x-2'>
          <h4 className='font-bold'>Moto</h4>
          <div className='flex items-center space-x-1'>
            <UserRound size={16} />
            <span>1</span>
          </div>
        </div>
        <h5 className='text-sm'>4 min away</h5>
        <p className='text-xs'>Affordable, motorcycle rides</p>
      </div>
      <h2 className='text-1xl font-semibold mb-4'>$65.20</h2>
    </div>

    <div onClick={() => {
    props.setConfirmRidePanel(true)
}}
    className='border active:border-black bg-gray-100 rounded-lg flex items-center justify-between p-2 mb-2'>
      <img 
        className='h-16 w-29 object-cover' 
         src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
        alt="Uber vehicle" 
      />
      <div className='flex-grow mx-4'>
        <div className='flex items-center space-x-2'>
          <h4 className='font-bold'>UberAuto</h4>
          <div className='flex items-center space-x-1'>
            <UserRound size={16} />
            <span>2</span>
          </div>
        </div>
        <h5 className='text-sm'>10 min away</h5>
        <p className='text-xs'>Affordable, Auto rides</p>
      </div>
      <h2 className='text-1xl font-semibold mb-4'>$118.20</h2>
    </div>

    </div>
  )
}

export default VehiclePanel