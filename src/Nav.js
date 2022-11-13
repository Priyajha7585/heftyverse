import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/channels4_profile1.jpg';
import './Nav.css';

function Nav({text, funtion, link}) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navigate = useNavigate();
  return (
    <>
    
    {width>767 ?
      <div className="header">
      <div className='logo-image'>
      <img src={logo} />
      <h2>&nbsp;HEFTYVERSE</h2>
      </div>
      <div className='button1'>
      <h3>{text}</h3>
      <button type="submit" onClick={()=>navigate(link)}>{funtion}</button>
      </div>
    </div>
    :
    <div className="header">
      <div className='logo-image'>
      <img src={logo} />
      <h4>&nbsp;HEFTYVERSE</h4>
      </div>
      <div className='button2'>
      <h5>{text}</h5>
      <button type="submit" style={{margin:"5px 10px 5px 5px"}} onClick={()=>navigate(link)}>{funtion}</button>
      </div>
    </div>
    }</>
    
  )
}

export default Nav