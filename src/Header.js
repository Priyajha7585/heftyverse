import React from 'react';
import './Header.css';
import logo from './assets/download.jpg'

function Header() {
  return (
    <div className="header">
      <div className='logo-image' style={{backgroundColor:"pink"}}>
      <img src={logo} />
      <h2>HEFTYVERSE</h2>
      </div>
      <div className='button1' style={{backgroundColor:"green"}}>
      <button type="submit">
      Submit
      </button>
      </div>
    </div>
  )
}

export default Header