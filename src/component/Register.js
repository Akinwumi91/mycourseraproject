import React from 'react'
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

 const Register = () => {

  return (
    <div role='main' className='fluid-container contain'>
       <div className='jumbotron inner-contain'>
       <p className='regheader'>
       <h3>Sign up</h3>
          <span>Learn on your own
           time from top universities
            and businesses.</span>
       </p>  

       <form action="" className='loginform' >
      <div className='form-group email' >
      <label htmlFor="">
      FULLNAME:
      </label>
      <input type="text" placeholder='Enter your fullname' id='username' autoComplete='off' required/>

      
      </div>

      <div className='form-group email' >
      <label htmlFor="">EMAIL:</label>
      <input type="text" placeholder='name@gmail.com' />
      </div>

      <div className='form-group password'>
      <label htmlFor="">PASSWORD:</label>
      <input type="password" placeholder='Create Password'/>
      </div>     

      <button type='btn' className='btn btn-primary join'>Join for Free</button>
      </form>


     <button className='social regsocial'> <FaGoogle /><p>  Continue With Google</p></button>
      <button className='social' > <FaFacebook  /><p> Continue With Facebook</p></button>
       
      <div className='newmember'>
        <p>Already on Coursera ? <a href="/">Login</a></p>
      </div>
      <hr />

      <div className='organization'>
        <a href="#">Sign up with your orgnization</a>
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

export default Register