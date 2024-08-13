import { useEffect, useState } from 'react';
import profileImage from '../../assets/images/profilemain.png';

const NavBar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState<string>('');

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);
        setCurrentDate(formattedDate.toUpperCase());
    }, []);

    return (
        <nav className="fixed top-0 left-0 z-10 w-full p-4 bg-black border-b shadow-lg border-b-gray-500">
            <div className="flex items-center justify-between mx-4 md:mx-10">
                <div className="text-sm text-regular md:text-lg">{currentDate}, SRI LANKA</div>
                <div className="hidden text-xl font-bold tracking-wider text-white md:text-2xl md:block font-Poppins">SyntaXage</div>
                <img src={profileImage} alt="Profile" className="w-8 h-8 border-2 border-gray-500 rounded-full md:w-10 md:h-10" />
            </div>
        </nav>
    );
}

export default NavBar;
