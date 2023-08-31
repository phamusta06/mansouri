import './home.css';
import face from '../../assets/face.jpg';
import face2 from '../../assets/face1.jpg';

import { useState, useEffect } from 'react';

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImage, setCurrentImage] = useState(
    window.innerWidth > 600 ? face : face2
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
      setCurrentImage(newWidth > 600 ? face : face2);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div
        className='hm w-full bg-cover md:bg-blend-darken h-screen box-content  flex  justify-center items-center'
        id='home'
      >
        <div className='space-y-7 text-white '>
          <h3 className='text-4xl text-center'>Hello , I m</h3>
          <h1 className='text-6xl text-center'>MUSTAFA MANSOURI</h1>
          <h4 className='text-2xl text-center'>AND THIS IS MY RESUM</h4>
        </div>
        <img
          src={currentImage}
          alt=''
          className=' absolute w-full -z-50 bottom-0  h-full'
        />
        <div className='bg-slate-800 w-full h-full absolute -z-50 opacity-30'></div>
      </div>
    </>
  );
};

export default Home;
