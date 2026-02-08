import React, {useState} from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [captainData , setcaptainData] = useState({})

  const submitHandler=(e)=>{
    e.preventDefault();
    setcaptainData({
      email:email,
      password:password
    })
    setEmail("")
    setPassword("")
    // console.log("hello")

  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>

      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <h3 className="text-xl mb-2 font-semibold">What's your email</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2 "
          required
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
            // console.log(e.target.value)
          }}
          type="email"
          placeholder="email@.gmail.com"
          />
        <h3 className="text-xl mb-2 font-semibold">Enter Password</h3>
        <input
          className="bg-[#eeeeee] mb-7 rounded px-4 border w-full text-lg placeholder:text-base py-2 "
          required
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
            // console.log(e.target.value)
          }}
          type="password"
          placeholder="password"
          />
        <button className="bg-[#111] text-white mb-3 px-4 rounded-lg w-full text-lg placeholder:text-base py-2 ">Login</button>
      </form>
       <p className="text-center"> Join a fleet? <Link to="/captain-signup" className="text-blue-600">Register as a Captain</Link></p>
          </div>
          <div>
            <Link to="/login" className="bg-[#f3c164] flex justify-center items-center text-white mb-5 px-4 rounded-lg w-full text-lg placeholder:text-base py-2 ">Sign in as User</Link>
          </div>
    </div>
  );
};

export default CaptainLogin;
