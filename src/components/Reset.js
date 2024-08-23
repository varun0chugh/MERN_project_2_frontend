import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate'
//import useFetch from '../hooks/fetch.hook';
//import { useAuthStore } from '../store/store'
//import { verifyPassword } from '../helper/helper'
import styles from '../styles/Username.module.css';
export default function Reset() {
  const formik = useFormik({
    initialValues : {
      password : 'admin@123',
      confirm_pwd:'admin@123'
    },
    validate : resetPasswordValidation,
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
      <h4 className='text-5xl font-bold'>Reset </h4>
      <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
        Enter new password
      </span>
    </div>

    <form className='py-20' onSubmit={formik.handleSubmit}>
        

        <div className="textbox flex flex-col items-center gap-6">
            <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder='new Password' />
            <input {...formik.getFieldProps('confirm_pwd')} className={styles.textbox} type="text" placeholder='repeat pass' />
            <button className={styles.btn} type='submit'>Reset</button>
        </div>

        

    </form>

  </div>
</div>
</div>
)
}
