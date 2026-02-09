import React from 'react'

const DashBoard = () => {
  return (
    <div className='h-screen relative'>
     <img className='w-16 absolute  left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
     <div>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
     </div>
     <div className='bg-white absolute h-screen w-full p-5'>
       <div className='h-[30%]'> <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form >
            <input className='bg-[#eee] w-full px-12 py-2 rounded-lg mt-5 text-base' type="text" placeholder='add a pick-up location' />
            <input className='bg-[#eee] w-full px-12 py-2 rounded-lg mt-5 text-base'  type="text" placeholder='Enter yout destination' />
        </form></div>
        <div className='h-[70%] bg-red-400'></div>
     </div>
    </div>
  )
}

export default DashBoard
