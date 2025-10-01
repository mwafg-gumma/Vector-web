
import React from 'react';
import Home from "../assets/Home.png"

// prop onJoinClick
const Hero = ({ onJoinClick }) => { 
    return (
        <section className=" pt-6 pb-20 md:py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

            {/* ============================== */}
            {/* COLUMN 1: Text Content (Left)  */}
            {/* ============================== */}
            <div className="md:w-1/2 text-center md:text-left space-y-6 md:-mt-10 mt-5">
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Experience The Future Of Scooter Mobility
            </h1>

            <p className="md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
                Discover the future of urban travel Fast eco friendly and stylish your perfect ride is here Get moving today
            </p>

            {/*  */}
            <button 
                // onJoinClick 
                onClick={onJoinClick} 
                className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105"
            >
                Join Now 
            </button>
            </div>
            {/* COLUMN 2: Image & Nested Two-Column Content (Right)  */}
            <div className="md:w-1/2 relative flex flex-col items-center gap-6 ">
            
            {/* Main Scooter Image Container (Top Part of Column 2) */}
            <div 
                className="w-full max-w-md h-96 flex justify-center items-center ">
                <div className="text-center text-gray-800 p-4">
                <img src={Home} alt="Hero Img" className='md:w-[230px] w-[190px] md:mt-40'/>
                </div>
            </div>
            
            {/* Nested Two-Column Section (Under the image) */}
    
            <div className="flex justify-between w-full max-w-md pt-24 gap-4">
                
                {/* Nested Column 1: Stats/Number (650+) */}
                <div className="w-5/12 flex flex-col mt-10 justify-center p-4 bg-white rounded-xl shadow-lg border-l-4 border-gray-600">
                    <span className="text-3xl text-gray-800">650+</span>
                    <p className="text-sm text-gray-500 mt-1">Best Scooter Collection</p>
                </div>

                {/* Nested Column 2: Comment Box and User Photo */}
                <div className="w-7/12 bg-white p-4 rounded-xl shadow-lg relative" style={{ borderRadius: '0% 30% 0% 30%'}}>
                    
                    {/* Comment Text */}
                    <p className="text-sm text-gray-700 italic ">
                        "The range is phenomenal and it handles the city streets like a dream Highly recommend this for daily commutes!"
                    </p>
                    
                    {/* User Photo and Dots at bottom-right */}
                    <div className="flex justify-end items-center mt-3 pt-2 border-t border-gray-100">
                        
                        {/* Three Dots (...) */}
                        <div className="text-gray-400 text-lg mr-2 font-bold leading-none">...</div>
                        
                        {/* User Photo (bottom-right) */}
                        <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-md">
                            MG
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
        </section>
    );
};

export default Hero;