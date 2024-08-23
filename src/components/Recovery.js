import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate } from '../helper/validate'
//import useFetch from '../hooks/fetch.hook';
//import { useAuthStore } from '../store/store'
//import { verifyPassword } from '../helper/helper'
import styles from '../styles/Username.module.css';
export default function Recovery() {
  const formik = useFormik({
    initialValues : {
      password : 'admin@123'
    },
    validate : passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
    console.log(values);
    }
})
  //if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  //if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>
  return(
<div className="container mx-auto">

<Toaster position='top-center' reverseOrder={false}></Toaster>

<div className='flex justify-center items-center h-screen'>
  <div className={styles.glass}>

    <div className="title flex flex-col items-center">
      <h4 className='text-5xl font-bold'>Recovery </h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
        Enter OTP
      </span>
    </div>

    <form className='py-1' >
        

        <div className="textbox flex flex-col items-center gap-6">
        <span className='py-4 text-sm text-left text-gray-500'>
                      Enter 6 digit OTP sent to your email address.
                    </span>
            <input  className={styles.textbox} type="text" placeholder='OTP' />
            <button className={styles.btn} type='submit'>Sign In</button>
        </div>

        <div className="text-center py-4">
          <span className='text-gray-500'>Cant get Otp <button className='text-red-500' >Recover Now</button></span>
        </div>

    </form>

  </div>
</div>
</div>
)
}