import React from 'react'

const WhatGPT3 = () => {
   return (
      <div id="wgpt3">
         {/* main container */}
         <div className="text-blue-50 w-3/4 max-w-screen-lg p-8 m-auto bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 space-y-6">
            {/* info container */}
            <div className="flex flex-col lg:flex-row justify-between">
               <h1 className="text-lg text-left lg:w-1/4">What is GPT-3?</h1>
               <p className="text-sm text-left font-thin text-blue-200 lg:w-2/3">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
            </div>
            {/* heading container */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
               <h2 className="text-2xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent
               bg-clip-text text-left lg:w-2/4 border-blue-300">
                  The possibilities are beyond your imagination
               </h2>
               <p className="text-md text-left lg:w-1/4">Explore the library</p>
            </div>
            {/* descriptions container */}
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
               <div>
                  <h3 className="text-left" >Chatbots</h3>
                  <p className="text-sm text-left font-thin text-blue-200">We so opinion friends me message as delight. Whole front do of plate heard oh ought. </p>
               </div>
               <div>
                  <h3 className="text-left" >Knowledgebase</h3>
                  <p className="text-sm text-left font-thin text-blue-200">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
               </div>
               <div>
                  <h3 className="text-left">Education</h3>
                  <p className="text-sm text-left font-thin text-blue-200">At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WhatGPT3
