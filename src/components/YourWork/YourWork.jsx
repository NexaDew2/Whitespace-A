import React from 'react';
import { Bg } from '../../assets';

const YourWork = () => {
  return (
    <div>
<div className="flex py-30 mt-20 bg-blue-900 bg-no-repeat relative">
  <div
    className="absolute inset-0 bg-no-repeat"
    style={{
      backgroundImage: `url(${Bg})`,
      backgroundSize: '500px',
      backgroundPosition: 'left',
      opacity: 0.3,
    }}
  ></div>
 

        <div className="  w-full flex items-center justify-center flex-col px-4 md:px-10">
          {/* Content: Text and Button */}
          <div className="max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              YOUR WORK, EVERYWHERE YOU ARE
            </h1>
            <p className="text-sm md:text-lg text-white mb-6">
              Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, 
              Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
            <button className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-2 px-4 md:px-6 rounded-lg transition-colors">
              Try taskey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourWork;