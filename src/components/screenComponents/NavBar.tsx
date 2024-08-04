import profileImage from '../../assets/images/profilemain.png';

function NavBar() {
    return (
        <nav className="fixed top-0 z-10 w-full p-4 bg-black border-b border-b-gray-500">
            <div className="flex items-center justify-between mx-10 ">
                <div className="text-regular">JULY 21 2024, SRI LANKA</div>
                <div className="text-2xl font-bold tracking-wider text-white font-Poppins">Portfolio</div>
                <img src={profileImage} alt="Proifle" className="w-10 h-10 rounded-full"/>
            </div>
        </nav>
    )
}

export default NavBar