import React, { useRef, useState } from 'react'
import { ArrowBigDown, BadgeIndianRupee, Clock, Gauge, HousePlug, LogOut, MapPinHouse, MapPinPlus, NotebookTabs } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
const CaptainHome = () => {


    const [ridePopupPanel ,setRidePopupPanel] = useState(true)
    const [ confirmRidePopupPanel , setConfirmRidePopupPanel] = useState(false) ;
    const confirmRidePopupPanelRef = useRef(null)
    const ridePopupPanelRef = useRef(null)
    useGSAP(function(){
        if(ridePopupPanel == true){
            gsap.to(ridePopupPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(ridePopupPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[ridePopupPanel])

    useGSAP(function(){
        if(confirmRidePopupPanel == true){
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePopupPanelRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[confirmRidePopupPanel])





    return (
        <div className='h-screen'>
            <div className='fixed p-3 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
                <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <LogOut />
                </Link>
            </div>

            <div className='h-[63%]'>
                <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
            </div>
            <div className='h-[37%] p-6 '>
                <CaptainDetails></CaptainDetails>
            </div>

            <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full  p-3 py-8 px-3 bg-white w-full'>
            <RidePopUp ridePopupPanel={ridePopupPanel} setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}></RidePopUp>
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed z-10 h-screen bottom-0 translate-y-full  p-3 py-8 px-3 bg-white w-full'>
            <ConfirmRidePopUp  setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}></ConfirmRidePopUp>
            </div>


        </div>
    )
}

export default CaptainHome