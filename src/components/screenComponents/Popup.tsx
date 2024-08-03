import React from 'react';

const Popup = ({ imageSrc, onClose }) => {
  if (!imageSrc) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'>
      <div className='relative'>
        <img src={imageSrc} alt="popup" className='w-full max-w-4xl rounded-md' />
        <button
          onClick={onClose}
          className='absolute text-2xl text-white top-4 right-4'
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Popup;
