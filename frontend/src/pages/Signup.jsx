import { useState } from "react";
import {GenderCheckBox}from "../components/GenderCheckBox";
import {Link} from "react-router-dom";
export const Signup = () => {
    //inputs
    const [inputs,setInputs]=useState(
    {
    fullname:"",
    username:"",
    password:"",
    confirmPassword:"",
    gender:""
    })
    console.log(inputs)
//gender checkbox
const handleCheckBoxChange=(gender)=>{
  setInputs({...inputs,gender})

}
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
        <h1 className="text-3xl font-semibold text-center text-gray-300 cursor-pointer">
          Sign Up <span className="text-green-500 cursor-pointer">FlauntChat</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Test User"
              className="w-full input input-bordered h-10"
              value={inputs.fullname}
              onChange={(event)=> setInputs({...inputs,fullname:event.target.value})}
            />
          </div>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="testuser12"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(event)=> setInputs({...inputs,username:event.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(event)=> setInputs({...inputs,password:event.target.value})}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(event)=> setInputs({...inputs,confirmPassword:event.target.value})}
            />
          </div>
          <GenderCheckBox onCheckBoxChange={handleCheckBoxChange} selectedGender={inputs.gender}/>
          <Link to="/login">
          <div className="pt-4 text-sky-400 text-center cursor-pointer">
          Already our user?
          </div></Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">
              <span className="loading loading-dots"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
