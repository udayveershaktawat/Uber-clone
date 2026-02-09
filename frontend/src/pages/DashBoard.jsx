import React from "react";

const DashBoard = () => {
    const submitHandler = ()=>{}
  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute  left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div>
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end  absolute top-0  h-screen w-full">
        <div className="h-[30%] p-5 relative bg-white">
          {" "}
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-8 top-1/2 bg-black"></div>
            <input
              className="bg-[#eee] w-full px-12 py-2 rounded-lg mt-5 text-base"
              type="text"
              placeholder="add a pick-up location"
            />
            <input
              className="bg-[#eee] w-full px-12 py-2 rounded-lg mt-5 text-base"
              type="text"
              placeholder="Enter yout destination"
            />
          </form>
        </div>
        <div className=" bg-red-400 h-0"></div>
      </div>
    </div>
  );
};

export default DashBoard;
