import { ArrowBigDown, BadgeIndianRupee, MapPinHouse, MapPinPlus } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const ConfirmRidePopUp = (props) => {
    const [otp ,setOtp] = useState('')
 const submitHandler = (e) => {
   
e.preventDefault() ;
 }
 
    return (
    <div>
    
<h3 className='text-xl font-normal mb-0 text-center'>Confirm Ride to start</h3>
<div className='flex items-center justify-between p-3 bg-yellow-300 rounded-lg mt-3'>
<div className='flex items-center gap-3'>
<img className='h-12 w-12 object-cover rounded-full' src="https://www.citypng.com/public/uploads/preview/hd-president-volodymyr-zelensky-png-704081694794615jisdcgjrh9.png" alt="" />
<h2 className='text-lg font-medium'>Abiral jain</h2>
</div>
<h5 className='text-lg font-thin'>2.2 KM</h5>
</div>


<div className='flex justify-between flex-col items-center gap-2'>

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

<div className='w-full'>
<form action="" onSubmit={(e) => {
    submitHandler(e) ;
}}>
    <input 
    value={otp}
    onChange={(e) => setOtp(e.target.value)}
    type="text" placeholder='Enter OTP' className='bg-[#eee] px-4 py-2 text-lg font-mono rounded-lg w-full mt-3'/>
<Link
to="/captain-riding"
className='w-full flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg mt-5'>Confirm</Link>
<button 
onClick={() => {
props.setConfirmRidePopupPanel(false)
props.setRidePopupPanel(false)
}}
className='w-full bg-red-600 text-white font-semibold p-2 rounded-lg mt-4'>Cancel</button>

</form>
</div>
</div>


</div>
  )
}

export default ConfirmRidePopUp