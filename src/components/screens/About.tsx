import imageAbout from '../../assets/images/profile-about.png';
import AboutCard from '../screenComponents/AboutCard';
import Testimonial from '../screenComponents/Testimonial';
function About() {
  // const navigate = useNavigate();
  console.log('About Page');
  return (
    <div className="flex flex-col w-full px-4 mt-36">
      <div className="flex flex-col items-center justify-center h-full px-4 mx-10">
        <div className='flex flex-row items-start justify-center gap-10'>
          <img src={imageAbout} alt="image" className='w-[25%] rounded-2xl mt-3' />
          <div className="p-3 text-gray-300  w-[45%] text-lg">
            <p >
              Hi, I'm Krishan, a dynamic fullstack developer with a passion for frontend innovation. I’m deeply committed to leveraging technology to make a positive impact on society, and I thrive on pushing the boundaries of what's possible. My enthusiasm for exploring mindblowing theories about the world fuels my drive to continuously grow and improve as a developer. Whether it’s crafting intuitive user interfaces or diving into complex coding challenges, I’m always excited to connect with like-minded professionals and embark on collaborative projects. Let’s tackle exciting challenges together.I'm ready to bring a spark of enthusiasm and a touch of chaos to everything I do.
            </p>
            <div className='flex flex-col justify-center gap-5 mt-10'>
              <div className='flex flex-row gap-5'>
                <AboutCard title='Vision' message='To Become a Leading Tech Entrepreneur and Innovator' />
                <AboutCard title='Mission' message='To Create Technology That Makes Life Better and Inspire Others to Join the Tech World' />
              </div>
              <AboutCard title='Quotes I Admire' message='Success in coding isn’t about being the smartest person in the room; it’s about being the most persistent. Embrace the challenges, learn from the mistakes, and never stop growing. Your journey in tech is defined not by the problems you face, but by how you overcome them' />
            </div>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center justify-center mt-28'>
        <div className='text-5xl text-regular'> Don’t Just Take My Word for It !</div>
        <div className='text-3xl text-regular'> Hear What Others Have to Say About Working with Me</div>
      </div>
      <div className='flex flex-row justify-center gap-10 my-20'>
        <Testimonial />
        
      </div>
      {/* <h1 className="text-white ">About page</h1>
        <Button onClick={()=> navigate(-1)}><IoMdArrowBack size={30} color="black"/></Button> */}
    </div>
  )
}

export default About