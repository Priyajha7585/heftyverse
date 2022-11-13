import React, {useState, useEffect} from 'react';
import './Header.css';
import logo from './assets/channels4_profile1.jpg'

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
    
    {width>767 ?
      <div className="header">
      <div className='logo-image'>
      <img src={logo} />
      <h2>&nbsp;HEFTYVERSE</h2>
      </div>
      <div className='button1'>
      <h3>Welcome! Priya Jha</h3>
      <button type="submit">LogOut</button>
      </div>
    </div>
    :
    <div className="header">
      <div className='logo-image'>
      <img src={logo} />
      <h4>&nbsp;HEFTYVERSE</h4>
      </div>
      <div className='button2'>
      <h5>Welcome! Priya Jha</h5>
      <button type="submit" style={{margin:"5px 10px 5px 5px"}}>LogOut</button>
      </div>
    </div>
    }</>
    
  )
}

export default Header