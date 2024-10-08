import imageAbout from '../../assets/images/profile-about.png';
import AboutCard from '../screenComponents/AboutCard';
import Testimonial from '../screenComponents/Testimonial';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const comp = useRef(null);

  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const subtitleEl = subtitleRef.current;

    gsap.fromTo(titleEl,
      { opacity: 0, y: "+=30" },
      {
        opacity: 1, duration: 1, y: "0",
        scrollTrigger: {
          trigger: titleEl,
          start: "top bottom",
          end: "bottom top",
        }
      }
    );

    gsap.fromTo(subtitleEl,
      { opacity: 0, y: "+=30" },
      {
        opacity: 1, duration: 1, y: "0",
        scrollTrigger: {
          trigger: subtitleEl,
          start: "top bottom",
          end: "bottom top",
        }
      }
    );

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from(["#imgabt", "#descabt", "#vabt", "#mabt", "#qabt"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.1,
      })
    }, comp)

    return () => ctx.revert()
  }, []);

  return (
    <div className="flex flex-col w-full px-4 mt-36">
      <div className="flex flex-col items-center justify-center h-full px-4 mx-auto md:mx-10" ref={comp}>
        <div className='flex flex-col items-start justify-center gap-10 md:flex-row'>
          <img src={imageAbout} alt="image" className='w-full md:w-[25%] rounded-2xl mt-3' id='imgabt' />
          <div className="p-3 text-gray-300 w-full md:w-[45%] text-base md:text-lg" id='descabt'>
            <p>
              Hi, I'm Krishan, a dynamic fullstack developer with a passion for frontend innovation. I’m deeply committed to leveraging technology to make a positive impact on society, and I thrive on pushing the boundaries of what's possible. My enthusiasm for exploring mindblowing theories about the world fuels my drive to continuously grow and improve as a developer. Whether it’s crafting intuitive user interfaces or diving into complex coding challenges, I’m always excited to connect with like-minded professionals and embark on collaborative projects. Let’s tackle exciting challenges together. I'm ready to bring a spark of enthusiasm and a touch of chaos to everything I do.
            </p>
            <div className='flex flex-col justify-center gap-5 mt-10'>
              <div className='flex flex-col gap-5 md:flex-row'>
                <div id='vabt'><AboutCard title='Vision' message='To Become a Leading Tech Entrepreneur and Innovator' /></div>
                <div id='mabt'><AboutCard title='Mission' message='To Create Technology That Makes Life Better and Inspire Others to Join the Tech World' /></div>
              </div>
              <div id='qabt'><AboutCard title='Quotes I Admire' message='Success in coding isn’t about being the smartest person in the room; it’s about being the most persistent. Embrace the challenges, learn from the mistakes, and never stop growing. Your journey in tech is defined not by the problems you face, but by how you overcome them' /></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center text-center mt-28'>
        <div className='text-2xl md:text-5xl text-regular' ref={titleRef}>Don’t Just Take My Word for It!</div>
        <div className='text-base md:text-3xl text-regular' ref={subtitleRef}>Hear What Others Have to Say About Working with Me</div>
      </div>
      <div className='flex flex-row justify-center gap-10 pb-24 my-20'>
        <Testimonial />
      </div>
    </div>
  );
};

export default About;
