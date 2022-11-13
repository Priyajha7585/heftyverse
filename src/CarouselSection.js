import React, {useState, useEffect} from 'react';
import img1 from './assets/anime-night-neon-191.jpg';
import img2 from './assets/digital-digital-art-artwork-night-city-hd-wallpaper-preview.jpg';
import img3 from './assets/neon_lights_city_cyberpunk_buildings_4k_hd_neon.jpg';
import './Carousel.css'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const images = [
    {
        id : 1,
        image : img1
    },
    {
        id : 2,
        image : img2
    },
    {
        id : 3,
        image : img3
    }
]

function CarouselSection() {
  const [width, setWidth] = useState(window.innerWidth);
  const [imgid, setImgid] = React.useState(1);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    function makeTimer()
    {
      setTimeout(() => {
        console.log("Hiiii")
        if(imgid===3)
        {
          setImgid(1)
        }
        if(imgid>=1 && imgid!==3)
        {
          setImgid(imgid+1)
        }
      }, 4000)
    }

  return (
    <>
    {makeTimer()}
    {width>767 ?
      <> 
      <center>
      <div style={{height:"60vh", width:"80vw", padding:"10vh 10vh 1vh 10vh"}}>
      {images.map((image)=> image.id===imgid && <img className='carouselImage' src={image.image} style={{height:"100%", width:"100%", borderRadius:"50px", padding:"6px", background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}/>)}
      </div></center>
      <div style={{display:"flex", justifyContent:"center"}}>
      {images.map((image)=><button style={{backgroundColor:"transparent", border:"none"}} onClick={()=>setImgid(image.id)}><hr className={`${image.id===imgid ? "active" : "inactive"}`}/></button>)}
      </div><br/><br/>
      <h1 className='animate-character'>
      Experience the new era of Entertainment
      </h1>
      </>
    :
    <>
      <center>
      <div style={{height:"60vh", width:"80vw", padding:"10vh 1vh 1vh 1vh"}}>
      {images.map((image)=> image.id===imgid && <img src={image.image} style={{height:"100%", width:"100%", borderRadius:"50px", padding:"6px", background:"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"}}/>)}
      </div></center>
      <div style={{display:"flex", justifyContent:"center"}}>
      {images.map((image)=><button style={{backgroundColor:"transparent", border:"none"}} onClick={()=>setImgid(image.id)}><hr className={`${image.id===imgid ? "active" : "inactive"}`}/></button>)}
      </div><br/><br/>
      <h1 className='animate-character'>
      Experience the new era of Entertainment
      </h1>
    </>
    }

{/*
<div className="tag">
          <h1>Image Gallery</h1>
    </div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    <h1 className='animate-character'>
    Experience the new era of Entertainment
    </h1>
          */}
    </>
  )
}

export default CarouselSection