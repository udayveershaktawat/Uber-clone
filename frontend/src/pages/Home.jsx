import React from 'react'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.pexels.com/photos/11060589/pexels-photo-11060589.jpeg)] h-screen pt-8  flex justify-between flex-col w-full bg-red-200'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='font-bold text-3xl'>Get started with Uber</h2>
            <Link to='/login' className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-md mt-5'>Continue</Link>
        </div>

      </div>
    </div>
  )
}

export default Home
