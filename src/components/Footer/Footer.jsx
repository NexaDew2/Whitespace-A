import React from 'react'
import { Footerlogo } from '../../assets'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {
  return (
    <div>

         <footer className="bg-[#043873] text-white md:h-screen sm:h-auto lg:h-screen flex flex-col justify-center items-center py-8 px-4 md:px-8">

                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-8">
                        {/* Logo and Description */}
                        <div className="flex-1 min-w-[200px]">
                            <h1 className="text-2xl font-bold mb-4 flex items-center">
                                <img src={Footerlogo} alt="" className='w-auto' />
                            </h1>
                            <p className="text-lg">
                                Whitepace was created for the new ways we live and work. We make a better workspace around the world
                            </p>
                        </div>

                        <div className="flex-1 min-w-[150px]">
                            <h2 className="text-2xl font-semibold mb-4">Product</h2>
                            <ul className="text-lg space-y-2">
                                <li><a href="#" className="hover:underline">Overview</a></li>
                                <li><a href="#" className="hover:underline">Pricing</a></li>
                                <li><a href="#" className="hover:underline">Customer stories</a></li>
                            </ul>
                        </div>

                        <div className="flex-1 min-w-[150px]">
                            <h2 className="text-2xl font-semibold mb-4">Resources</h2>
                            <ul className="text-lg space-y-2">
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Guides & tutorials</a></li>
                                <li><a href="#" className="hover:underline">Help center</a></li>
                            </ul>
                        </div>

                        <div className="flex-1 min-w-[150px]">
                            <h2 className="text-2xl font-semibold mb-4">Company</h2>
                            <ul className="text-lg space-y-2">
                                <li><a href="#" className="hover:underline">About us</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                                <li><a href="#" className="hover:underline">Media kit</a></li>
                            </ul>
                        </div>

                        <div className="flex-1 min-w-[200px]">
                            <h2 className="text-2xl font-semibold mb-4">Try It Today</h2>
                            <p className="text-lg mb-4">
                                Get started for free. Add your whole team as your needs grow.
                            </p>
                            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
                                Start Today
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 max-w-7xl mx-auto border-t border-gray-900 flex flex-col sm:flex-row w-full justify-between flex-wrap gap-5 text-lg">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 gap-5 mb-4 sm:mb-0">
        <div className="flex items-center">
          <span className="mr-2">🌐</span>
          <select className="bg-transparent text-white">
            <option>English</option>
          </select>
        </div>
        <a href="#" className="hover:underline">Terms & privacy</a>
        <a href="#" className="hover:underline">Security</a>
        <a href="#" className="hover:underline">Status</a>
        <p>©2021 Whitepace LLC.</p>
      </div>
      <div className="flex space-x-4">
        <div className="flex space-x-3">
          <a href="#" className="hover:text-gray-300"><FacebookIcon fontSize="small" /></a>
          <a href="#" className="hover:text-gray-300"><TwitterIcon fontSize="small" /></a>
          <a href="#" className="hover:text-gray-300"><LinkedInIcon fontSize="small" /></a>
        </div>
      </div>
    </div>
                </footer>
    </div>
  )
}

export default Footer