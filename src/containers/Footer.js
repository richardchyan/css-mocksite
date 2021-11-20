import React from 'react'

const Footer = () => {
   return (
      <div className="w-4/5 max-w-screen-lg m-auto my-24">
         {/* Footer heading */}
         <div>
            <h1 className="text-4xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent
               bg-clip-text">Do you want to step into the future before others?</h1>
            <button className="border-2 border-white text-white rounded-sm font-light mt-20 p-4 hover:bg-yellow-600">Request early access now</button>
         </div>
         {/* bottom footer nav */}
         <div className="flex flex-col lg:flex-row justify-evenly mt-16 space-y-6 lg:space-y-0">
            <div>
               <h3 className="text-4xl text-white font-semibold lg:text-left
               ">GPT-3</h3>
               <p className="text-xs font-thin text-white">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            </div>
            <div className="flex flex-col text-white">
               <h2>Links</h2>
               <ul className="text-xs font-light">
                  <li className="mt-3">Overons</li>
                  <li className="mt-3">Social Media</li>
                  <li className="mt-3">Counters</li>
                  <li className="mt-3">Contact</li>
               </ul>
            </div>
            <div className="flex flex-col text-white">
               <h2>Company</h2>
               <ul className="text-xs font-light">
                  <li className="mt-3">Terms &amp; Conditions</li>
                  <li className="mt-3">Privacy Policy Media</li>
                  <li className="mt-3">Contact</li>
               </ul>
            </div>
            <div className="flex flex-col text-white">
               <h2>Get in touch</h2>
               <ul className="text-xs font-light">
                  <li className="mt-3">Crechterwoord K12 182 DK Alknjkcb</li>
                  <li className="mt-3">085-132567</li>
                  <li className="mt-3">info@payme.net</li>
               </ul>
            </div>
         </div>

      </div>
   )
}

export default Footer
