import React from "react";

const VehiclePanel = (props, idx) => {
  return (
    <div>
      <h5
        key={idx}
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="p-1 text-center absolute w-[93%] top-0"
      >
        {" "}
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setComfirmRidePanel(true);
        }}
        className="flex active:border-2 border-black mb-2 rounded-xl w-full p-3 items-center  justify-between"
      >
        <img
          className="h-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-shield-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹200.90</h2>
      </div>
      <div
        onClick={() => {
          props.setComfirmRidePanel(true);
        }}
        className="flex active:border-2 border-black mb-2 rounded-xl w-full p-3 items-center  justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=956/height=538/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy85MjAwMTg5YS03MWMwLTRmNmQtYTlkZS0xYjZhODUyMzkwNzkucG5n"
          alt=""
        />
        <div className="-ml-2 w-1/2">
          <h4 className="font-medium text-base">
            Moto{" "}
            <span>
              <i className="ri-shield-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable motor cycle ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹93.70</h2>
      </div>
      <div
        onClick={() => {
          props.setComfirmRidePanel(true);
        }}
        className="flex active:border-2 border-black mb-2 rounded-xl w-full p-3 items-center  justify-between"
      >
        <img
          className="h-12"
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8xZGRiOGM1Ni0wMjA0LTRjZTQtODFjZS01NmExMWEwN2ZlOTgucG5n"
          alt=""
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto{" "}
            <span>
              <i className="ri-shield-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 min away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable Auto ride
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹141.10</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
