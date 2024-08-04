import classNames from "classnames";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <footer className="fixed bottom-0 w-full p-4 bg-black border-t border-gray-500 border-dashed">
            <div className="flex flex-col items-center justify-between mx-10 md:flex-row">
                <div className="flex mb-4 space-x-4 md:mb-0">
                    <Link to="/" className={classNames('text-lg text-regular hover:text-white', {
                        'text-white': currentPath === '/',
                    })}>HOME</Link>
                    <Link to="/about" className={classNames('text-lg text-regular hover:text-white', {
                        'text-white': currentPath === '/about',
                    })}>ABOUT</Link>
                    <Link to="/story" className={classNames('text-lg text-regular hover:text-white', {
                        'text-white': currentPath === '/story',
                    })}>STORY</Link>
                    <Link to="/work" className={classNames('text-lg text-regular hover:text-white', {
                        'text-white': currentPath === '/work',
                    })}>WORK</Link>
                    <Link to="/" className={classNames('text-lg text-regular hover:text-white', {
                        'text-white': currentPath === '/',
                    })}>CONTACT</Link>
                    
                </div>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="text-lg text-center md:text-left text-regular">&copy; 2024 KRISHAN. All rights reserved.</div>
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
