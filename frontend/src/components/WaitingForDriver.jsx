import React from 'react'
import { ArrowBigDown, BadgeIndianRupee, MapPinHouse, MapPinPlus } from 'lucide-react';
const WaitingForDriver = (props) => {
  return (
    <div>
            <h5 onClick={() => {
                props.setWaitingForDriver(false);
            }} className='p-2 text-center absolute right-5 top-2 mb-3 bg-gray-100 rounded-full'><ArrowBigDown /></h5>
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

            </div>

        </div>
  )
}

export default WaitingForDriver