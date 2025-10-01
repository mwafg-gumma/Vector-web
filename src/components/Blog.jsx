import React from 'react';
import { FaClock, FaArrowRight } from 'react-icons/fa'; 


import control from '../assets/control.png'; 
import Back from '../assets/Back.png';
import Full from '../assets/Full.png';
import Hold from '../assets/Hold.jpeg';
// ==============================================================================

const Blog = () => {
    const blogPosts = [
        {
        title: 'Safety First: Best Practices for Scooter Riders',
        description: 'Learn the essential tips to keep your ride secure and enjoyable on busy city streets',
        imageUrl: control, 
        },
        {
        title: 'Protecting Your Ride: Scooter Covers Explained',
        description: 'A guide to choosing the right cover to protect your scooter from dust and weather elements',
        imageUrl: Back,
        },
        {
        title: 'Style on Wheels: Customizing Your Scooter Look',
        description: 'Discover the latest trends and easy mods to make your scooter match your personal style',
        imageUrl: Full,
        },
        {
        title: 'Handy Commute: The Portability Advantage',
        description: 'Why our lightweight foldable design means you can carry your scooter anywhere with ease',
        imageUrl: Hold,
        },
    ];

  return (
    <div className=" py-16">
      
      {/* main div */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  p-8 rounded-xl shadow-lg text-center">
        
        {/*  Title */}
        <div className="mb-10">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider">
            OUR BLOG
          </p>
          <h3 className="text-4xl  text-gray-900 mt-2">
            Latest Blog & Articles
          </h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Stay informed with our expert reviews riding tips and the newest updates in the world of electric mobility
          </p>
        </div>

        {/*  Grid Div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              
              {/*  flex-row */}
              <div className="flex flex-col sm:flex-row h-full">

                {/*  1*/}
                <div className="sm:w-1/3 w-full h-40 sm:h-auto flex-shrink-0">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="md:w-full md:h-full w-[600px] h-[300px] object-cover" 
                  />
                </div>
                
                {/* 2*/}
                <div className="sm:w-2/3 w-full p-6 flex flex-col justify-between my-6 md:my-0">
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 hover:text-blue-600 mb-2 transition duration-300 mt-24 md:mt-0">
                      {post.title}
                    </h4>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaClock className="w-4 h-4 mr-2" />
                      <span>September 28, 2021</span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {post.description}
                    </p>
                  </div>
                  
                  {/*"Read More" */}
                  <a href="#" className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 mt-2">
                    Read More
                    <FaArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition duration-150" />
                  </a>
                </div>
              </div>
            </article>
          ))}
          
        </div>
        
      </div>
    </div>
  );
};

export default Blog;