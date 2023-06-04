import React, { useState } from "react";
// import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../assets/utils/newRequest.js";
import { useNavigate } from "react-router-dom";
const Registers=()=>{
  const navigate=useNavigate();
//   const [file,setfile]=useState(null)
const [user,setuser]=useState({
      name:"",
      contact:"",
      address:"",
      email:"",
      password:"",
      role:""
    })
const handlechange=(e)=>{
  setuser(prev=>{
    return {...prev,[e.target.name]:e.target.value}
  })
}
// const handleseller=(e)=>{
//   setuser(prev=>{
//     return {...prev,isSeller:[e.target.checked]}
//   })
// }
const handlesubmit=async(e)=>{
  e.preventDefault();
//   const url=await upload(file);
  try{
    console.log(user)
    await newRequest.post("/auth/register",user)
    navigate("/")
  }catch(err){
    console.log(err)
  }
}
// console.log(user)
// console.log(file)
  return (
    <div className="register">
      <form onSubmit={handlesubmit}>
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="name"
            type="text"
            placeholder="vishal"
            onChange={handlechange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="name@gmail.com"
            onChange={handlechange}
          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handlechange}/>
          <label htmlFor="">contact</label>
          <input
            name="contact"
            type="text"
            placeholder="4723984723"
            onChange={handlechange}
          />
          <label htmlFor="">address</label>
          <input
            name="address"
            type="text"
            placeholder="Bhayandar"
            onChange={handlechange}
          />
        <label htmlFor="role">Role</label>
        <select id="role" name="role" onChange={handlechange}>
          <option value="">Select role</option>
          <option value="Restaurant">Restaurant/wedding/party</option>
          <option value="Ngo">Ngo</option>
          <option value="Volunteer">Volunteer</option>
        </select>
          
          <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registers;