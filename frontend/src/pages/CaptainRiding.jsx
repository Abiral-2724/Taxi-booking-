import React, { useRef, useState } from 'react'
import { ArrowBigDown, BadgeIndianRupee, Clock, Gauge, HousePlug, LogOut, MapPinHouse, MapPinPlus, NotebookTabs } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import FinishRide from '../components/FinishRide';
const CaptainRiding = () => {

    const [finishRidePanel ,setFinishRidePanel] = useState(false)
const finishRidePanelRef = useRef(null)
    useGSAP(function(){
        if(finishRidePanel == true){
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(finishRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[finishRidePanel])




  return (
    <div className='h-screen'>
        <h5 onClick={() => {
    
}} className='p-2 text-center absolute right-5 top-6 mb-3 bg-gray-100 rounded-full'><ArrowBigDown /></h5>
    <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
            <LogOut />
        </Link>
    </div>

    <div className='h-[84%]'>
        <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
    </div>
   <div onClick={() => {
    setFinishRidePanel(true) ;
   }} className='h-[16%] p-6 bg-yellow-400 flex items-center justify-between'>
    <h4 className='font-semibold'>4 Km Away</h4>
<button className='bg-green-600 text-white font-semibold p-3 pl-8 pr-8 rounded-lg'>Complete Ride</button>
   </div>
   <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 translate-y-full  p-3 py-8 px-3 bg-white w-full'>
            <FinishRide setFinishRidePanel={setFinishRidePanel}></FinishRide>
            </div>

</div>
  )
}

export default CaptainRiding