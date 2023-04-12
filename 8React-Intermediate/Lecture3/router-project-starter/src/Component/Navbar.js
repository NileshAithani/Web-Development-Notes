import React from 'react'
import logo from "../assets/Logo.svg";
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast"

 

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;


  return (
    <div className='flex gap-10 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto  '>

     {/* Study Notion Logo */}
        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>

        {/* Home - About - Contact  */}
        <nav >
            <ul className='text-richblack-100 flex gap-x-6'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>


         {/* Login - Sign Up - Log Out - DashBoard */}

        <div className='flex items-center gap-x-4'>
            {
                !isLoggedIn && 
                <Link to="/login">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>
                        Login
                    </button>
                </Link>
            }

            {
                !isLoggedIn && 
                <Link to="/signup">
                     <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700' onClick={() =>{
                        setIsLoggedIn(false);
                        toast.success("Sign Up");
                        }}>
                            Sign Up
                    </button>
                </Link>

            }

            {
                isLoggedIn && 
                <Link to="/logout">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700' onClick={() =>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                        }}>

                         Log Out
                    </button>
                </Link>
            }
            {
                isLoggedIn && 
                <Link to="/dashBoard">
                    <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border-richblack-700'>
                        DashBoard
                    </button>
                </Link>
            }

        </div>


    </div>
  )
 }

export default Navbar