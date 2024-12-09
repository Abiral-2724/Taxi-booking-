import { MapPinPlus } from 'lucide-react'
import React from 'react'

const LocationSearchPanel = (props) => {

// sample array for location
const locations = ["24B ,Near kapoor's cafe ,Sheryians Coading School ,Bhopal" ,
    "24A ,Near kapoor's cafe ,Sheryians Coading School ,Bhopal" ,
    "2P ,Near kapoor's cafe ,Sheryians Coading School ,Bhopal",
    "190L ,Near kapoor's cafe ,Sheryians Coading School ,Bhopal"
]


  return (
    <div>
        {
            locations.map(function(elem,idx){
                return  <div key={idx} onClick={()=> {
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }} className='flex items-center my-0 justify-start gap-2 border-2 p-2 rounded-xl border-gray-50 active:border-black'>
                <h2 className='bg-[#eee] p-2 rounded-full'> <MapPinPlus /></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })
        }
       
       
    </div>
  )
}

export default LocationSearchPanel