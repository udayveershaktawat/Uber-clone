import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = (props,idx) => {
  // sample array for location
  const location = [
    " chouth mata mandir shivpura kota",
    " chouth mata mandir shivpura kota",
    " chouth mata mandir shivpura kota",
    " chouth mata mandir shivpura kota"
  ]
  return (
    <div>


      {
        location.map(function(elem){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-medium'>  {elem}</h4>
      </div>
          
        })
      }
      {/* <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-medium'>  chouth mata mandir shivpura kota</h4>
      </div>
       <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-medium'>  chouth mata mandir shivpura kota</h4>
      </div>
       <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-medium'>  chouth mata mandir shivpura kota</h4>
      </div>
       <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-2-fill"></i></h2>
        <h4 className='font-medium'>  chouth mata mandir shivpura kota</h4>
      </div> */}
    
    </div>
  )
}

export default LocationSearchPanel
