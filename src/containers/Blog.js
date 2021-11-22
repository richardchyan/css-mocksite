import React from 'react'
import Article from '../components/Article';
import blog01 from '../assets/blog01.png';
import blog02 from '../assets/blog02.png';
import blog03 from '../assets/blog03.png';
import blog04 from '../assets/blog04.png';
import blog05 from '../assets/blog05.png';

const Blog = () => {
   return (
      <div className="max-w-screen-lg m-auto w-3/4" id="blogs">
         {/* Main blog header title */}
         <div className="my-10">
            <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent bg-clip-text py-2">A lot is happening,</h1>
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-red-400 via-blue-400 to-blue-200 text-transparent bg-clip-text py-2">We are blogging about it</h2>
         </div>
         {/* Blog cards with information */}
         <div className="grid grid-cols-1 space-y-8 lg:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {/* main card */}
            <Article imageUrl={blog01} date="Nov 11, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" className="col-span-1" /> 
            {/* smaller cards */} 
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:col-span-2">
               <Article imageUrl={blog02} date="Nov 11, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/> 
               <Article imageUrl={blog03} date="Nov 11, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/> 
               <Article imageUrl={blog04} date="Nov 11, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/> 
               <Article imageUrl={blog05} date="Nov 11, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/> 
            </div>
         </div>
      </div>
   )
}

export default Blog
