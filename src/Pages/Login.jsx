import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
            
          <div className="hero  min-h-screen">
  <div className="hero-content flex-col ">
     <div className="text-center lg:w-[500px]">
      <h1 className="text-xl lg:text-3xl font-bold">Login now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn bg-[#388E3C] text-white mt-4">Login</button>
        <button className="btn bg-white text-black mt-4 border-black"><FcGoogle></FcGoogle> Continue with google</button>
        <p className='text-center font-semibold mt-2'>Already have an account?<Link> <span className='text-[#388E3C]'>Register</span></Link> </p>
        </fieldset>
      </div>
    </div>
  </div>
</div>


        </div>
    );
};

export default Login;