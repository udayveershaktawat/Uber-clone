import React, { useContext, useEffect } from "react";
// import { UserDataContext } from "../context/UserContext";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();


  const token = localStorage.getItem("token");

  const {captain,setCaptain} = useContext(CaptainDataContext)

  useEffect(()=>{
    if (!token) {
    navigate("/login");
  }
  },[token])
  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
