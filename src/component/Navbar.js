import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';


import { useState } from 'react'
const Navbar = () => {
  const[isopen, isnotopen] = useState(false)
  return (
    <nav className='navbar'>

       <div className='navcontain navbar navbar-light navbar-expand-lg fixed-top bg-light'>
       <ul className={isopen ? 'navlist' : 'navbar-nav'} onClick={() => isnotopen(false)} >
              <span className='brand'>
              <a href="#" className='navbar-brand text-primary'>coursera</a>
              </span>

              <button className=' explore btn btn-primary'>Explore <FaArrowDown /></button>

            <form action="" className='myform'>
                <input
                type="text" 
                placeholder='What do you want to learn ?'
                required
                />
                <span className='searchbtn'>
                <FaSearch />
                </span>
            </form>

                <li className='nav-item'>
                    <a href="#" className="nav-link" >
                      Online Degree <FaArrowDown />
                    </a>            
                    <ul className='dropdown'>
                      <li><a className="dropdown-item" href="#">Online Degree</a></li>
                      <li><a className="dropdown-item" href="#">Master Track</a></li>
                      <li><a className="dropdown-item" href="#">University Certificate</a></li>
                    </ul>
                </li>
                <li className='nav-item'><a href="#" className='nav-link'>Find your New Career</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>For Enterprise</a></li>
                <li className='nav-item'><a href="#" className='nav-link'>For Universities</a></li>
                <li className='nav-item'><a href="/login" className='login'>Log in</a></li>
              </ul>

        <a href="/register" className='btn btn-primary joinbtn'>Join Us</a>
        <div className='togglewrap'>
        <button className='mytoggle btn btn-primary btn-sm' onClick={() => isnotopen(!isopen)}>
          {isopen ? <FaTimes /> : <FaBars />}
        </button>
        </div>
       </div>

        

    </nav>
  )
}

export default Navbar