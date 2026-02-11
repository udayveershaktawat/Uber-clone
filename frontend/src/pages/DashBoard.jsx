import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";

const DashBoard = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen],
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel],
  );

  //  onClick={()=>{
  //     setVehiclePanel(false)
  //   }}

  return (
    <div className="h-screen relative overflow-hidden ">
      <img
        className="w-16 absolute  left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://maps.olakrutrim.com/images/features/routing.svg"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end  absolute top-0  h-screen w-full">
        <div className="h-[30%] p-6 relative bg-white">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 opacity-0 text-2xl right-6"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            {/* <div className="line absolute h-16 w-1 top-[60%] -translate-y-1/2 left-10  bg-gray-800 rounded-full"></div> */}
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] w-full px-12 py-2 rounded-lg mt-5 text-base"
              type="text"
              placeholder="add a pick-up location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] w-full px-12 py-2 rounded-lg mt-3 text-base"
              type="text"
              placeholder="Enter yout destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white opacity-0 h-0">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className=" fixed w-full z-10 translate-y-full bottom-0 px-3 py-10 bg-white"
      >
       <VehiclePanel setVehiclePanel={setVehiclePanel}/>
      </div>
    </div>
  );
};

export default DashBoard;


