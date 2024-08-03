import '../../styles/customStyles.css'
import { FaGithub, FaLinkedin, FaArrowRight, FaInstagram } from 'react-icons/fa';
import profileImage from '../../assets/images/profilemain.png';
import WhiteButton from '../screenComponents/WhiteButton';
import { Link } from 'react-router-dom';

function Home() {
  // const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center w-full h-full px-4'>
      <div className='flex flex-row items-center justify-between mx-10'>
        <div className='text-white'>
          <div className='flex flex-col gap-2'>
            <div className="text-6xl font-bold tracking-wider text-white font-Poppins">What's up, Visionaries</div>
            <div className="text-5xl font-bold tracking-wider text-white font-Poppins">It's me</div>
            <div className="text-6xl font-bold tracking-wider text-white font-Poppins">Krishan Mihiranga</div>
          </div>
          <div className='mt-5 text-gray-500 font-[500] text-lg'>Front-End Maven | Shaping code since 19' | DM for a byte of conversation</div>
          <div className='flex flex-row items-center gap-3 mt-4 text-xl text-regular'>
            <div>FIND ME ON </div>
            <div className='flex flex-row gap-2'>
              <a href="https://github.com/KrishanMihiranga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/krishanmb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={22} />
              </a>
              <a href="https://www.instagram.com/krishanm404?igsh=Z3psdmNiYjRoanE3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={23} />
              </a>
            </div>
          </div>
          <div className='mt-4 text-xl cursor-pointer text-regular hover:text-white'><Link to='/about'>DIVE INTO MY CODE WORLD HERE</Link></div>
          <hr className='mt-5 border-t border-dashed border-t-gray-500' />
          <div className='mt-5 text-xl text-regular'>CURIOUS ABOUT ME ? GRAB MY RESUME</div>
          <div className='mt-5'>
            <WhiteButton onClick={() => alert('Hola')}>
              {
                <div className='flex items-center'>RESUME <FaArrowRight style={{ marginLeft: '5px', fontSize: '13px' }} /></div>
              }
            </WhiteButton>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img src={profileImage} alt="profileImage" className='w-[65%]' />
        </div>

        {/* <h1 className='text-regular'>Home Page</h1>
      <Link to='/about' className='text-blue-500'>about</Link> <br />
      <Button onClick={() => navigate('/about')}>About Button</Button> */}
      </div>
    </div>
  )
}

export default Home;