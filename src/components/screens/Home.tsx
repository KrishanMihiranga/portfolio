import '../../styles/customStyles.css'
import { FaGithub, FaLinkedin, FaArrowRight, FaInstagram, FaCodepen } from 'react-icons/fa';
import profileImage from '../../assets/images/profilemain.png';
import WhiteButton from '../screenComponents/WhiteButton';
import { Link } from 'react-router-dom';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

function Home() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        opacity: 0,
      }).from(["#title-1", "#title-2", "#title-3", "#title-4", "#title-5", "#title-6", "#title-7", "#title-8", "#title-9",], {
        opacity: 0,
        y: "+=30",
        stagger: 0.1,
      }).from(["#social-1", "#social-2", "#social-3", "#social-4"], {
        opacity: 0,
        x: "-=30",
        stagger: 0.1,
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className='flex flex-col justify-center w-full h-full px-4' ref={comp}>
      <div className='flex flex-col items-center justify-between mx-10 md:flex-row' id='intro-slider'>
        <div className='text-white'>
          <div className='flex flex-col gap-2'>
            <div className="text-3xl font-bold tracking-wider text-white md:text-6xl font-Poppin" id='title-1'>What's up, Visionaries</div>
            <div className="text-2xl font-bold tracking-wider text-white md:text-5xl font-Poppins" id='title-2'>It's me</div>
            <div className="text-3xl font-bold tracking-wider text-white md:text-6xl font-Poppins" id='title-3'>Krishan Mihiranga</div>
          </div>
          <div className='mt-2 md:mt-5 text-gray-500 font-[500] text-sm md:text-lg' id='title-4'>Front-End Maven | Shaping code since 19' | DM for a byte of conversation</div>
          <div className='flex flex-row items-center gap-3 mt-2 text-sm md:mt-4 md:text-xl text-regular' id='title-5'>
            <div>FIND ME ON </div>
            <div className='flex flex-row gap-2'>
              <a href="https://github.com/KrishanMihiranga" target="_blank" rel="noopener noreferrer" className="customText" id='social-1'>
                <FaGithub size={22} />
              </a>

              <a href="https://www.linkedin.com/in/krishanmb/" target="_blank" rel="noopener noreferrer" className="customText" id='social-2'>
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/krishanm404?igsh=Z3psdmNiYjRoanE3" target="_blank" rel="noopener noreferrer" className="customText" id='social-3'>
                <FaInstagram size={23} />
              </a>
              <a href="https://codepen.io/mkrishan" target="_blank" rel="noopener noreferrer" className="customText" id='social-4'>
                <FaCodepen size={23} />
              </a>
            </div>
          </div>
          <div className='mt-2 text-sm cursor-pointer md:mt-4 md:text-xl text-regular customText ' id='title-6'><Link to='/work'>DIVE INTO MY CREATIVE WORLD HERE</Link></div>
          <hr className='mt-2 border-t border-dashed md:mt-5 border-t-gray-500' id='title-7' />
          <div className='mt-2 text-sm md:mt-5 md:text-xl text-regular' id='title-8'>CURIOUS ABOUT ME ? GRAB MY RESUME</div>
          <div className='mt-2 md:mt-5' id='title-9'>
            <WhiteButton downloadUrl="../../assets/cv/Kishan Mhiranga-SE-CV.pdf">
              {
                <div className='flex items-center'>RESUME <FaArrowRight style={{ marginLeft: '5px', fontSize: '13px' }} /></div>
              }
            </WhiteButton>
          </div>
        </div>
        <div className='flex items-center justify-center mt-5 md:mt-0'>
          <img src={profileImage} alt="profileImage" className='w-[80%] md:w-[65%]' />
        </div>
      </div>
    </div>
  )
}

export default Home;