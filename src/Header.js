import React from 'react';
import './Header.css';
import logo from './assets/channels4_profile1.jpg'

function Header() {
  return (
    <div className="header">
      <div className='logo-image' style={{backgroundColor:"pink"}}>
      <img src={logo} />
      <h2>HEFTYVERSE</h2>
      </div>
      <div className='button1' style={{backgroundColor:"green"}}>
      <button type="submit">
      LogOut
      </button>
      </div>
    </div>
  )
}

export default Header