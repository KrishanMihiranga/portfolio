import classNames from "classnames";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <footer className="fixed bottom-0 w-full p-4 mt-10 bg-black border-t border-gray-500 border-dashed">
            <div className="flex flex-col items-center justify-between mx-4 space-y-4 md:flex-row md:space-y-0">
                <div className="flex flex-row items-center justify-center space-x-2 md:flex-row md:space-y-0 md:space-x-4">
                    <Link to="/" className={classNames('text-sm md:text-lg text-regular customText', {
                        'text-white': currentPath === '/',
                    })}>HOME</Link>
                    <Link to="/about" className={classNames('text-sm md:text-lg text-regular customText', {
                        'text-white': currentPath === '/about',
                    })}>ABOUT</Link>
                    <Link to="/story" className={classNames('text-sm md:text-lg text-regular customText', {
                        'text-white': currentPath === '/story',
                    })}>STORY</Link>
                    <Link to="/work" className={classNames('text-sm md:text-lg text-regular customText', {
                        'text-white': currentPath === '/work',
                    })}>WORK</Link>
                    <Link to="/contact" className={classNames('text-sm md:text-lg text-regular customText', {
                        'text-white': currentPath === '/contact',
                    })}>CONTACT</Link>
                </div>
                <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
                    <div className="text-sm text-center md:text-lg text-regular">&copy; 2024 KRISHAN. All rights reserved.</div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/KrishanMihiranga" target="_blank" rel="noopener noreferrer" className="text-gray-400 customText">
                            <FaGithub size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/krishanmb/" target="_blank" rel="noopener noreferrer" className="text-gray-400 customText">
                            <FaLinkedin size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;