import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowBigDown, User, UserRound } from 'lucide-react';
import React, { useRef, useState } from 'react'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
    const [pickup ,setPickup]  = useState('') ;
    const [destination ,setDestination] = useState('');
    const panelRef = useRef(null) ;
    const panelCloseRef = useRef(null)

    const [vechiclePanel ,setVehiclePanel] = useState(false)
    const vehiclePanelRef = useRef(null)
 const [panelOpen ,setPanelOpen] = useState(false) ;
 const [confirmRidePanel ,setConfirmRidePanel] = useState(false) ;
 const confirmRidePanelRef = useRef(null)
    const [vehicleFound ,setVehicleFound] = useState(false) ;
    const vehicleFoundRef = useRef(null) ;

const waitingForDriverRef = useRef(null) ;
const [waitingForDriver ,setWaitingForDriver] = useState(false)


    useGSAP(function(){
        if(panelOpen){
        gsap.to(panelRef.current,{
            height:'70%',
            padding:16
        })
        gsap.to(panelCloseRef.current,{
             opacity:1,
            
        })
    }else{
        gsap.to(panelRef.current,{
            height:'0%',
            padding:0
        })
        gsap.to(panelCloseRef.current,{
            opacity:0
        })

    }
    } ,[panelOpen])

    useGSAP(function(){
        if(vechiclePanel == true){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[vechiclePanel])

    useGSAP(function(){
        if(vehicleFound == true){
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[vehicleFound])



    useGSAP(function(){
        if(confirmRidePanel == true){
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRidePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[confirmRidePanel])

    useGSAP(function(){
        if(waitingForDriver == true){
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(waitingForDriverRef.current,{
                transform:'translateY(100%)'
            })
        }
        
    },[waitingForDriver])

    const submitHandler = (e) => {
        e.preventDefault() ;
    }





  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
<div className='h-screen w-screen'>
    <img className='h-full w-full object-cover' src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg" alt="" />
</div>
<div className='flex flex-col justify-end  h-screen absolute top-0 w-full rounded-lg'>
   <div className='h-[30%] p-5 bg-white relative'>
    <h5 ref={panelCloseRef}
    onClick={() => {
        setPanelOpen(false) ;
    }}
    className='absolute opacity-0 right-6 top-7'>
    <ArrowBigDown />
    </h5>
   <h4 className='text-2xl font-semibold'>Find a trip</h4>
    <form action="" onSubmit={(e) => {
        submitHandler(e)
    }}>
        <div className="line absolute h-16 w-[0.9%] top-[40%] left-7 bg-gray-700 rounded-full"></div>
        <input
        onClick={() => {
            setPanelOpen(true) ;
        }}
         className='bg-[#eee] px-10 py-2 text-base rounded-md w-full mb-3 mt-3' 
         type="text"
         value={pickup}
         onChange={(e) => {
            setPickup(e.target.value)
         }}
          placeholder='Add a pick up location' />
        <input
         onClick={() => {
            setPanelOpen(true) ;
        }}
         className='bg-[#eee] px-10 py-2 text-base rounded-md w-full' 
         type="text"
         value={destination}
         onChange={(e) => {
            setDestination(e.target.value)
         }}
          placeholder='Enter your destination' />
    </form>
   </div>
   <div ref={panelRef} className='bg-white h-0'>
         <LocationSearchPanel panelOpen={panelOpen} setPanelOpen={setPanelOpen}  vechiclePanel={vechiclePanel} setVehiclePanel={setVehiclePanel}></LocationSearchPanel>
   </div>
</div>

<div ref={vehiclePanelRef} className='fixed z-10 bottom-0 translate-y-full p-3 py-8 px-3 bg-white w-full'>
<VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}></VehiclePanel>
</div>

<div ref={confirmRidePanelRef} className='fixed z-10 bottom-0 translate-y-full p-3 py-6 pt-12 bg-white w-full'>
<ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}></ConfirmRide>
</div>

<div ref={vehicleFoundRef}  className='fixed z-10 bottom-0 translate-y-full p-3 py-6 pt-12 bg-white w-full'>
<LookingForDriver setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}></LookingForDriver>
</div>

<div ref={waitingForDriverRef} className='fixed z-10 bottom-0  p-3 py-6 pt-12 bg-white w-full'>
<WaitingForDriver setWaitingForDriver={setWaitingForDriver}></WaitingForDriver>
</div>




    </div>
  )
}

export default Home