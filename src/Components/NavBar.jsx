import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {

const link = <> <li>Home</li>
 
              <li className='ml-4'>Pet & Supplies</li>
              <li className='ml-4'>Add Listing</li>
              <li className='ml-4'>My Listings</li>
              <li className='ml-4'>My Orders</li>


</>



    return (
        <div>

         <div className="navbar bg-white text-black shadow-sm px-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <img className='w-[100px] lg:w-[140px]' src='/logo.png'></img>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login"><button className='px-6 py-1 rounded-[5px] bg-[#388E3C] text-white font-semibold mr-2'>Log In</button></Link>

    <Link to="/register"><button className='px-5 py-1 rounded-[5px] border-2 text-black font-semibold'>Register</button></Link>
  </div>
</div>




        </div>
    );
};

export default NavBar;