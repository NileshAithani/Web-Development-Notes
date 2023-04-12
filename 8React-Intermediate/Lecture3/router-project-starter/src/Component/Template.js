import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from '../Component/SignupForm'
import LoginForm from '../Component/LoginForm'
import { FcGoogle } from "react-icons/fc"

const Template = ({ title, desc1, desc2, formType, image, setIsLoggedIn }) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 justify-between text-richblack-100'>
      <div className='w-11/12 max-w-[450px]'>
        {/* Title */}
        <h1 className=' font-semibold text-[1.875rem] leading-[2.375rem]' >{title}</h1>

        {/* Description */}
        <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
          <span>{desc1}</span>
          <br></br>
          <span className='text-blue-100 italic'>{desc2}</span>
        </p>

        {/* Form */}
        {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}


        {/* Line Or Line */}
        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='bg-richblack-700 font-medium leading-[1.375rem]'>OR</p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>

        {/* Google Sign Up Button */}
        <button className='flex justify-center items-center gap-3 w-full rounded-[8px] font-meadium text-richblack-100 border border-richblack-700  '>
          <FcGoogle></FcGoogle>
          <p>Sign Up With Google</p>
        </button>

      </div>


      {/* Image */}
      <div className='relative w-11/12 max-w-[450px] '>
        <img src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />

        <img src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
          className='absolute -top-4 right-4'
        />

      </div>


    </div>
  )
}

export default Template