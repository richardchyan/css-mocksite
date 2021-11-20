import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.svg';

const Navbar = () => {

   const [toggleMenu, setToggleMenu] = useState(false);

   return (
      <div className="bg-gradient-to-r from-black via-indigo-900 to-blue-500" id="home">
         <nav className="flex p-3 justify-between lg:justify-around max-w-screen-lg items-center relative m-auto">
            {/* logo */}
            <img src={logo} alt="logo" />
            {/* Informational links */}
            <div className="hidden md:flex items-center justify-start space-x-4 text-white text-sm">
               <p className="hover:text-blue-300"><a href="#home">Home</a></p>
               <p className="hover:text-blue-300"><a href="#wgpt3">What is GPT?</a></p>
               <p className="hover:text-blue-300"><a href="#possibility">Possibility</a></p>
               <p className="hover:text-blue-300"><a href="#features">Case Studies</a></p>
               <p className="hover:text-blue-300"><a href="#blog">Library</a></p>
            </div>
            <div className="flex justify-end items-center space-x-4">
               {/* Sign up buttons */}
               <div className="hidden sm:flex items-center space-x-2 ">
                  <button className="text-md rounded-lg p-2 lg:px-4 bg-indigo-400 hover:bg-black text-white">Sign In</button>
                  <button className="text-md rounded-lg p-2 lg:px-4 bg-yellow-600 hover:bg-black text-white">Sign Up</button>
               </div>
               {/* =============================================== */}
                        {/* popout navbar for mobile */}
               {/* =============================================== */}
               {toggleMenu ? 
                  <RiCloseLine 
                     color="#fff" 
                     size={32} 
                     onClick={() => setToggleMenu(false)} 
                     className="md:hidden"
                  /> :
                  <RiMenu3Line 
                     color="#fff" 
                     size={32} 
                     onClick={() => setToggleMenu(true)} 
                     className="md:hidden"
                  />
               }
               {toggleMenu && (
                  <div className="flex flex-col scale-up-center md:hidden bg-blue-900 border-2 border-gray-50 rounded shadow-xl absolute top-16 right-0 p-8 -mt-2 sm:mt-0 text-right">
                     <p className="text-white hover:text-blue-300 pb-4 mt-4 "><a href="#home">Home</a></p>
                     <p className="text-white hover:text-blue-300 pb-4 "><a href="#wgp3">What is GPT?</a></p>
                     <p className="text-white hover:text-blue-300 pb-4 "><a href="#possibility">Possibility</a></p>
                     <p className="text-white hover:text-blue-300 pb-4 "><a href="#features">Case Studies</a></p>
                     <p className="text-white hover:text-blue-300 pb-4 "><a href="#blog">Library</a></p>           
                     <button className="sm:hidden text-md rounded-lg p-2 mb-2 bg-indigo-400 hover:bg-black text-white">Sign In</button>
                     <button className="sm:hidden text-md rounded-lg p-2 mb-2 bg-yellow-600 over:bg-black text-white">Sign Up</button>       
                  </div>
               )}
            </div>
         </nav>
      </div>
   )
}

export default Navbar
