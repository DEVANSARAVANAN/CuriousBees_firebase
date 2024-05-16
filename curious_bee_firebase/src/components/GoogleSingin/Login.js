import React, { useInsertionEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import {auth,provider} from './firebase';
import { signInWithPopup } from 'firebase/auth';
import APP from '../register';

const Login = () =>{
const[value,setValue]= useState(" ")
const handleClick=()=>{
    signInWithPopup(auth,provider).then(
      (data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
              })
  }
useInsertionEffect(()=>{
    setValue(localStorage.getItem('email'))
  })

  return (
    <div>{value ? <APP/> :
    <div className='container-fluid text-center login-container d-flex justify-content-center bg-light'>
        <div className='card shadow rounded login-card mt-5'>
            <div className='d-flex justify-content-center m-5'>
                <img src={logo} alt="Logo" className='img-fluid' />
            </div>
            <div className='mx-5'>
                <h4>Explore, share and ignite your new research</h4>
                <p className='my-3'>"Dive into the Depths of Discovery: Unleash the<br />Power of Research at Your Fingertips."</p>
            </div>
            <div className='login-div m-5'>
               <h5>Sign in with Google</h5>
               <button onClick={handleClick} className='btn mt-2 px-4'><FontAwesomeIcon icon={faGoogle} className='me-2' /> Google</button> 
            </div>
        </div>
    </div>
  }
  </div>
)
}

export default Login
