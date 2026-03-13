import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
     <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
          <Link to='/dashboard' className='  h-10 w-10 bg-white flex items-center justify-center rounded-full'><i className="text-lg font-medium ri-logout-box-r-line"></i></Link></div>
        <div className='h-3/5 '>
              <img
          className="h-full w-full object-cover"
          src="https://maps.olakrutrim.com/images/features/routing.svg"
          alt=""
        />
        </div>
        <div className='h-2/5 p-6'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start gap-3'>
              <img className='h-10 w-10 rounded-full object-cover' src="https://documents.bcci.tv/resizedimageskirti/164_compress.png" alt="" />
              <h4 className='text-lg font-medium'>Udayveer singh</h4>
            </div>
            <div>
              <h4 className='text-xl font-semibold '>₹295.20</h4>
              <p className='text-sm text-gray-600'>Earned</p>
            </div>
          </div>
          <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start' >
            <div className='text-center'>
              <i className="font-thin text-3xl mb-2 ri-time-line"></i>
              <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="font-thin text-3xl mb-2 ri-speed-up-line"></i>
               <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
              <i className="font-thin text-3xl mb-2 ri-booklet-line"></i>
               <h5 className='text-lg font-medium'>10.2</h5>
              <p className='text-sm text-gray-600'>Hours Online</p>
            </div>
          </div>
        

        </div>
      
    </div>
  )
}

export default CaptainHome
