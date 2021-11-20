import React from 'react'
import headset from '../assets/possibility.png';

const Possibility = () => {
   return (
      <div id="possibility" className="mt-10">
         <div className="flex max-w-screen-lg m-auto justify-between space-x-10 px-10">
            {/* image */}
            <div>
               <img src={headset} alt="VR headset" />
            </div>
            {/* Image info */}
            <div className="flex flex-col space-y-9 justify-center">
               <p className="text-lg text-blue-300 font-medium text-left">Request Early Access to Get Started</p>
               <h1 className="text-4xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent
               bg-clip-text text-left">The possibilities are beyond your imagination</h1>
               <h2 className="text-sm text-left font-thin text-blue-200">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</h2>
               <p className="text-red-400 text-left">Request Early Access to Get Started</p>
            </div>
         </div>
        
      </div>
   )
}

export default Possibility
