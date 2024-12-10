import React from 'react'
import { ArrowBigDown, BadgeIndianRupee, Clock, Gauge, HousePlug, LogOut, MapPinHouse, MapPinPlus, NotebookTabs } from 'lucide-react';
import { Link } from 'react-router-dom';
const CaptainDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
                <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQTZlvVkqmNkz1KJndmYhs2W9w_3Fru9FTpLaLZRx_EVaXW7efI371XMXt12EXaEdtEo&usqp=CAU" alt="" />
                <h4 className='text-lg font-semibold'>Haresh Patel</h4>
            </div>
            <div className='mt-3'>
                <h4  className='text-sm font-semibold'>$2390.23</h4>
                <p  className='text-sm ml-3 font-extralight text-gray-500'>Earned</p>
            </div>
        </div>
        <div className='flex p-5 mt-6 bg-gray-100 rounded-xl justify-center gap-4 items-start'>
            <div className='text-center'>
            <Clock className='text-3xl ml-8' />
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
            <Gauge className='text-3xl ml-8'/>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
            <NotebookTabs className='text-3xl ml-8'/>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
        </div>
    </div>
  )
}

export default CaptainDetails