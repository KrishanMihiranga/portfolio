import profileImage from '../../assets/images/profilemain.png';

function NavBar() {
    return (
        <nav className="p-4 border-b border-b-gray-500 fixed top-0 bg-black w-full">
            <div className=" mx-10 flex justify-between items-center">
                <div className="text-regular">JULY 21 2024, SRI LANKA</div>
                <div className="text-white font-Poppins text-2xl font-bold tracking-wider">Portfolio</div>
                <img src={profileImage} alt="Proifle" className="rounded-full w-10 h-10"/>
            </div>
        </nav>
    )
}

export default NavBar