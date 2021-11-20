import React from 'react'


const Article = ({ imageUrl, date, title}) => {
   return (
      // container
      <div className="bg-gradient-to-b from-indigo-900 to-gray-900">
         <div>
            <img src={imageUrl} alt="blog image" />
         </div>
         <div className="mt-2 p-4">
            <p className="text-white text-xs font-light">{date}</p>
            <h2 className="text-white text-lg">{title}</h2>
         </div>
         <p className="text-white font-light mb-2">Read the full article</p>
      </div>
   )
}

export default Article
