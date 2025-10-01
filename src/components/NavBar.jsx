

import React, { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: 'Home', url: '#home' },
        { title: 'About', url: '#about' },
        { title: 'Services', url: '#services' },
        { title: 'Contact', url: '#contact' },
    ];

    // Helper class for the transition
    const mobileMenuClasses = `
        fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-xl 
        transition-transform duration-300 ease-in-out 
        transform 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `;

    return (
        <nav >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-1">
            <div className="flex justify-between items-center h-16">
            
            {/* 1. Logo / Brand Name */}
            <div className="flex-shrink-2 md:-ml-8">
                <h1 className="text-2xl font-bold text-gray-900">
                Vector
                </h1>
            </div>

            {/* 2. Desktop Menu Links & Button Wrapper */}
            <div className="flex items-center space-x-10">
                
                {/* Desktop Links (Hidden on Small screens) */}
                <div className="hidden md:flex space-x-6">
                {navLinks.map((link) => (
                    <a 
                    key={link.title} 
                    href={link.url} 
                    className="py-2 text-gray-700 hover:text-slate-800 font-medium transition duration-300"
                    >
                    {link.title}
                    </a>
                ))}
                </div>
                {/* Mobile Menu Button (Toggle) */}
                <div className="md:hidden z-50"> {/* Added z-50 to keep button clickable */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                    {/* Icon logic remains the same */}
                    {isOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    )}
                </button>
                </div>
            </div>

                      {/* Desktop Button (Hidden on Small screens) */}
                <div className="hidden md:block">
                <button 
                    className="bg-slate-900 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300 shadow-md "
                    onClick={() => console.log('Join Now clicked!')} 
                >
                    Join Now
                </button>
                </div>

            </div>
        </div>
        
        {/* 3. Mobile Menu Overlay (Hidden unless active) */}
        {isOpen && (
            // Backdrop overlay (Clicking this closes the menu)
            <div 
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
            onClick={() => setIsOpen(false)}
            ></div>
        )}

      {/* 4. Mobile Menu Content - SLIDE IN PANEL */}
        <div className={`${mobileMenuClasses} md:hidden`}>
        <div className="p-4 flex flex-col h-full">
            {/* Logo area inside the sliding panel for visual consistency */}
            <div className="h-16 flex items-center mb-4 border-b border-gray-100">
                <a href="#" className="text-2xl font-bold text-gray-800">
                    Menu
                </a>
            </div>

            {/* Links */}
            <div className="space-y-2 flex-grow">
                {navLinks.map((link) => (
                    <a 
                        key={link.title} 
                        href={link.url} 
                        className="block py-2 px-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-slate-600 transition duration-300"
                        onClick={() => setIsOpen(false)}
                    >
                        {link.title}
                    </a>
                ))}
            </div>

            {/* Join Now Button */}
            <div className="p-4 border-t border-gray-100">
                <button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
                    onClick={() => {
                        console.log('Join Now clicked (Mobile)!');
                        setIsOpen(false);
                    }}
                >
                    Join Now
                </button>
            </div>
        </div>
        </div>
        </nav>
    );
};

export default NavBar;