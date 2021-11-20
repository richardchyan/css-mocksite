import React from 'react'

const CallToAction = () => {
   return (
      <div className="mt-10">
         {/* Main gradient CTA container */}
         <div className="bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 max-w-screen-lg m-auto w-4/5 rounded-lg p-6 flex justify-between items-center">
            <div>
               <p className="text-sm font-medium text-left">Request Early Access to Get Started</p>
               <h1 className="text-2xl text-left">Register today & start exploring the endless possiblities.</h1>
            </div>
            <div>
               <button className="rounded-lg bg-black text-white py-2 px-3">
                  Get Started
               </button>
            </div>
         </div>
      </div>
   )
}

export default CallToAction
