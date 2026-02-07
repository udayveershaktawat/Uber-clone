import React, {useState} from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log("hello")

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
       <p className="text-center"> New here? <Link to="/signup" className="text-blue-600">Create new Account</Link></p>
          </div>
          <div>
            <button className="bg-[#10b461] text-white mb-7 px-4 rounded-lg w-full text-lg placeholder:text-base py-2 ">Sign in as Captain</button>
          </div>
    </div>
  );
};

export default UserLogin;
