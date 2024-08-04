// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center w-full h-full text-white">
            <div className='flex flex-col items-center justify-center w-full min-h-screen'>
                <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    );
};

export default Loader;
