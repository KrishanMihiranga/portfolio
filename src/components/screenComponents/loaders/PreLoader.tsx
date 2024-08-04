import { useEffect } from 'react';
import '../../../styles/customStyles.css';
import { preLoaderAnim } from '../../../animations';

const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen overflow-hidden text-white bg-black preloader">
            <div className="flex items-center justify-between h-16 overflow-hidden text-xl text-white w-[calc(22rem)] texts-container">
                <span>Developer, </span>
                <span>Creative Mind, </span>
                <span>Good Vibes.</span>
            </div>
        </div>
    )
}

export default PreLoader