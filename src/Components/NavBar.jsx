import React, { use } from 'react';
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const NavBar = () => {

    const {user, signOutGoogle} = use(AuthContext)

    const handleGoogleSignout = () =>{

        signOutGoogle().then(result =>{

        console.log(result)
    }).catch(error=>{
        // console.log(error)
    })
    }

const link = <>     <NavLink to="/"><li className='text-[12px] lg:text-[15px] font-semibold'>Home</li></NavLink>
 
              <NavLink to="/pet&supply"><li className='ml-4 text-[12px] lg:text-[15px] font-semibold'>Pet & Supplies</li></NavLink>
             {
                user && <> <NavLink to="/addlisting"><li className='ml-4 text-[12px] lg:text-[15px] font-semibold'>Add Listing</li></NavLink>
              <NavLink to="/mylistings"><li className='ml-4 text-[12px] lg:text-[15px] font-semibold'>My Listings</li></NavLink>
              <NavLink to="/myorders"><li className='ml-4 text-[12px] lg:text-[15px] font-semibold'>My Orders</li></NavLink></>
             }


</>

const recognization = <div className='flex flex-col gap-2 lg:flex-row mt-2 lg:mt-0 items-center'>
        <Link to="/login"><button className='px-3 lg:px-6 py-0 lg:py-1 rounded-[5px] bg-[#388E3C] text-white font-semibold text-[12px] lg:text-[15px]'>Log In</button></Link>

    <Link to="/register"><button className='px-3 lg:px-6 py-0 lg:py-1 rounded-[5px] border-2 text-black font-semibold text-[12px] lg:text-[15px]'>Register</button></Link>
    </div>



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
        {
       user? <button className='px-3 lg:px-6 py-0 lg:py-1 rounded-[5px] border-2 text-black font-semibold text-[12px] lg:text-[15px]'>Sign Out</button> : recognization

        }
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
   <div className='hidden lg:flex'>
     {
       user? <button onClick={handleGoogleSignout} className='px-3 lg:px-6 py-0 lg:py-1 rounded-[5px] border-2 text-black font-semibold text-[12px] lg:text-[15px]'>Sign Out</button> : recognization


     }



   </div>

  </div>
</div>




        </div>
    );
};

export default NavBar;