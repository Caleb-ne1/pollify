import React from 'react';
import {Link} from 'react-router-dom';
import { LuVote } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <LuVote className='icon' />
        <h2>pollify</h2>
      </div>

      <div>
        <Link to='/create-poll'>
            <button className='create-btn'>Create a Poll</button>
        </Link>
      </div>

      <div className='btn'>
        <button className='login-btn'>Login</button>
        <button className='signup-btn'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
