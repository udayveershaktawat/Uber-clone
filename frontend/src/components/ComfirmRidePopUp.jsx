import React, { useState } from "react";
import { Link } from "react-router-dom";

const ComfirmRidePopUp = (props, idx) => {

  const [otp,setOtp] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()

  }



  return (
    <div>
      <div>
        <h5
          key={idx}
          onClick={() => {
            props.setRidePopupPanel(false);
          }}
          className="p-1 text-center absolute w-[93%] top-0"
        >
          {" "}
          <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">
          Finish this Ride
        </h3>
        <div className="flex items-center justify-between mt-3 p-3 bg-yellow-400 rounded-lg">
          <div className="flex items-center gap-3 ">
            <img
              className="h-12 w-12 object-cover rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRidMmtH7gBUknx4QrPOJppVeYXtfpBGqmacWG4TQlK6JWdPPFgv7sThx0Wwv_ibmq1r5dTK6IJe-BKhkERxC-_jswQCAjqsROYsYCIJ0g&s=10"
              alt=""
            />
            <h2 className="text-lg font-medium">KL Rahul</h2>
          </div>
          <h5 className="text-lg font-semibold">2.2 Km</h5>
        </div>

        <div className="flex gap-2 justify-between flex-col items-center"></div>
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                bara road kota, rajasthan
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                bara road kota, rajasthan
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="text-lg ri-money-dollar-box-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.90</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input
            value={otp}
            onChange={(e)=>{
              setOtp(e.target.value)
            }}
            
            className="bg-[#eee] w-full px-6 py-4 font-mono rounded-lg mt-3 text-base" type="text" placeholder="Enter OTP" />
            <Link
              to="/captain-riding"
              className="w-full mt-5 flex justify-center text-lg bg-green-600 text-white font-semibold p-3 rounded-lg "
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setComfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-1 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComfirmRidePopUp;
