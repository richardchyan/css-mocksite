import React from 'react'

const Features = () => {
   return (
     <div>
        {/* main container */}
        <div className="flex flex-col lg:flex-row w-4/5 max-w-screen-lg m-auto mt-6 justify-evenly space-y-12" id="features">
           {/* sub section 1 */}
           <div className="flex flex-col lg:w-5/12 justify-evenly">
            <h1 className="text-4xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent
               bg-clip-text text-left">
               The Future is Now and You Just Need To Realize It. Step into Future Today &amp; Make it Happen.
            </h1>
            <p className="text-red-300 text-sm text-thin text-left">Request Early Access to Get Started</p>
           </div>
           {/* sub section 2 */}
           <div className="flex flex-col lg:w-1/2 space-y-6">
               <div className="flex flex-col lg:flex-row lg:space-x-2">
                  <h3 className="text-left text-white md:w-1/3">Improving end distrusts instantly </h3>
                  <p className="text-sm text-left font-thin text-blue-200 lg:w-3/4">From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded. </p>
               </div>
               <div className="flex flex-col lg:flex-row lg:space-x-2">
                  <h3 className="text-left text-white md:w-1/3">Become the tended active</h3>
                  <p className="text-sm text-left font-thin text-blue-200 lg:w-3/4">Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
               </div>
               <div className="flex flex-col lg:flex-row lg:space-x-2">
                  <h3 className="text-left text-white md:w-1/3">Message or am nothing</h3>
                  <p className="text-sm text-left font-thin text-blue-200 lg:w-3/4">Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
               </div>
               <div className="flex flex-col lg:flex-row lg:space-x-2">
                  <h3 className="text-left text-white md:w-1/3">Really boy law county</h3>
                  <p className="text-sm text-left font-thin text-blue-200 lg:w-3/4">Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
               </div>
           </div>
        </div>
     </div>
   )
}

export default Features
