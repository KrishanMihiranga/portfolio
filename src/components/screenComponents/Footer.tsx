import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-4 fixed bottom-0 w-full border-t border-gray-500 border-dashed bg-black">
            <div className="mx-10 flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-4 mb-4 md:mb-0">
                    <a href="#" className="text-regular text-lg hover:text-white">CONTACT</a>
                    <a href="#" className="text-regular text-lg hover:text-white">ABOUT</a>
                    <a href="#" className="text-regular text-lg hover:text-white">PRIVACY POLICY</a>
                    <a href="#" className="text-regular text-lg hover:text-white">TERMS & CONDITIONS</a>
                </div>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                    <div className="text-center md:text-left text-regular text-lg">&copy; 2024 KRISHAN. All rights reserved.</div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/KrishanMihiranga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/krishanmb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
