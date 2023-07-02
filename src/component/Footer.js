import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='container-fluid footer'>

    <div className='row innerfooter'>

    <div className='coursera col-lg-3 col-md-4 col-sm-6'>
     <h3>Coursera</h3>
     <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="#">About</a></li>
      <li className='nav-item'><a className='nav-link' href="#">What We Offer</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Leadership</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Catalog</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Coursera Plus</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Professional Certificates</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Degrees</a></li>
      <li className='nav-item'><a className='nav-link' href="#">For Enterprise</a></li>
      <li className='nav-item'><a className='nav-link' href="#">For Government</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Become a Partner</a></li>
      <li className='nav-item'><a className='nav-link' href="#">For Campus</a></li>
     </ul>
     </div>
     

     <div className='community col-lg-3 col-md-4 col-sm-6'>
     <h3>Community</h3>
     <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="#"> Learners</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Partners</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Beta Testers</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Translators</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Tech Blog</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Teaching Center</a></li>
     </ul>
     </div>
    
     <div className='more col-lg-3 col-md-4 col-sm-6'>
     <h3>More</h3>
     <ul className='navbar-nav'>
      <li className='nav-item'><a className='nav-link' href="#">Press</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Investors</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Privacy</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Accessibility</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Contact</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Articles</a></li>
      <li className='nav-item'><a className='nav-link' href="#">Directory</a></li>
      
     </ul>
     </div>


     <div className='mobileapp col-lg-3 col-md-4 col-sm-6'>
     <h3>Mobile App</h3>
     <a href="#"><img src="./images/applelogo.jpg" height='70px' width='100%' alt="" /></a>
     <a href="#"><img src="./images/playstore.png" height='70px' width='100%' alt="" /></a>
     </div>
<hr />

<div className='footbottom'>
  <span>
    <p>&copy; 2023 Coursera Inc. All rights reserved.</p>
  </span>

  <span className='footsocial'>
  <a href="#"><FaFacebook /></a>
  <a href="#"><FaLinkedin/></a>
  <a href="#"><FaTwitter /></a>
  <a href="#"><FaYoutube /></a>
  <a href="#"><FaInstagram /></a>
  
  </span>
</div>

    </div>

    </div>
  )
}

export default Footer