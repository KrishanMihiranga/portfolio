import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import profile from '../../assets/images/imagecon.png';

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-24 text-white md:flex-row md:items-start md:justify-center md:gap-8">
        <div className='flex flex-col items-center gap-4 text-center w-max'>
          <div className="text-5xl font-bold tracking-wider text-white uppercase md:text-7xl font-Poppins">Krishan</div>
          <div className="text-5xl font-bold tracking-wider text-white uppercase md:text-7xl font-Poppins">Mihiranga</div>
          <div className='text-xl text-regular'>Fullstack Developer</div>
          <div className='flex flex-row gap-4 text-3xl text-gray-500'>
            <FaGithub className='cursor-pointer hover:text-white' />
            <FaInstagram className='cursor-pointer hover:text-white' />
            <FaLinkedin className='cursor-pointer hover:text-white' />
            <FaWhatsapp className='cursor-pointer hover:text-white' />
            <FaEnvelope className='cursor-pointer hover:text-white' />
          </div>
          <div className='text-base text-gray-500 w-[80%] md:w-[60%]'>
            Software Engineering Undergrad, aspiring Full-Stack Developer. Building a versatile skill set for a dynamic tech future. Connect with me!
          </div>
          <div className="flex items-center justify-center w-[80%] md:w-[60%]">
            <form action="submit" className="w-full p-4 md:p-8">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  className="w-full h-32 p-3 bg-transparent border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full px-5 py-3 text-lg tracking-widest text-black bg-white rounded-md bg-opacity-80 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-white font-GeistRegular"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <img src={profile} alt="Profile" className='w-[80%] md:w-[30%] rounded-full mt-6 md:mt-0 md:self-start' />
      </div>
    </>
  );
}

export default Contact;
