import React from 'react'

const WaitForDriver = (props) => {
  return (
    <div>
       <h5
        // key={idx}
        onClick={() => {
          props.WaitForDriver(false);
        }}
        className="p-1 text-center absolute w-[93%] top-0"
      >
        {" "}
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
    <div className='flex items-center justify-between'>
        <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s" alt="" />
        <div className='text-right'>
            <h2 className='text-lg font-medium'>Udayveer</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>RJ20 CL 4574</h4>
            <p className='text-sm text-gray-600'>Hyundai creata</p>
        </div>
    </div>

      <div className='flex gap-2 justify-between flex-col items-center'>

     
      </div>
      <div className='w-full mt-5'>
        <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-user-line"></i>
            <div><h3 className='text-lg font-medium'>562/11-A</h3><p className='text-sm -mt-1 text-gray-600'>bara road kota, rajasthan</p></div>
        </div>
        <div className='flex items-center gap-5 p-3 border-b-2'>
             <i className="text-lg ri-map-pin-fill"></i>
            <div><h3 className='text-lg font-medium'>562/11-A</h3><p className='text-sm -mt-1 text-gray-600'>bara road kota, rajasthan</p></div>
        </div>
        <div className='flex items-center gap-5 p-3'>
            <i className="text-lg ri-money-dollar-box-line"></i>
            <div><h3 className='text-lg font-medium'>₹193.90</h3><p className='text-sm -mt-1 text-gray-600'>Cash</p></div>
        </div>
      </div>
     
    </div>
  )
}

export default WaitForDriver
