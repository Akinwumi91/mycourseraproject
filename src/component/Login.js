import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';

const Login = () => {
  return (
    <div role='main' className=' fluid-container contain'>

       <div className='inner-contain jumbotron'>
       <p className='formheader'>Welcome back</p>
       <form action="" className='loginform' >
      <div className='form-group email' >
      <label htmlFor="">EMAIL</label>
      <input type="text" placeholder='name@gmail.com' />
      </div>

      <div className='form-group password'>
      <label htmlFor="pass">PASSWORD</label>
      <input type="password" placeholder='Enter you password'/>
      </div>   
      <span><a href="#">forgot password ?</a></span>   

      <button type='btn' className='btn btn-primary submit'>Login</button>
      </form>
      <hr />


       <button className='social'> <FaGoogle /><p>  Continue With Google</p></button>
      <button className='social'> <FaFacebook /><p> Continue With Facebook</p></button>
      <button className='social'> <FaApple /><p> Continue With Apple</p></button>

      <div className='newmember'>
        <p>New to Coursera ? <a href="/register">Sign up</a></p>
      </div>
      <hr />

      <div className='organization'>
        <a href="#">Login with your orgnization</a>
      </div>

      

      <div className='loginbottom'>
      <p>Have trouble logging in ? <a href="#">Learner help center</a></p>

      <p>
      This site is protected by
       reCAPTCHA Enterprise and <br /> 
       the Google <a href="#">Privacy Policy</a> 
       and <a href="#">Terms of Service</a> apply.
      </p>
      </div>
       </div>


    </div>

  )
}

export default Login