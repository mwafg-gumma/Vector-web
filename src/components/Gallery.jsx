import React from 'react';

// ======= Call Img =======
import x from '../assets/x.jpeg'; 
import p from "../assets/p.jpeg"
import v from "../assets/v.jpeg"
import t from "../assets/t.jpeg"
import B from '../assets/B.jpeg'; 
import U from '../assets/U.jpeg'; 
import E from '../assets/E.jpeg'; 
// ========================================================

const Gallery = () => {
    
    const galleryItems = [
    
    { id: 1, src: x, alt: 'Scooter in Motion', spanClass: 'md:row-span-1' }, 
    
        
    { id: 2, src: B, alt: 'Scooter Close-up', spanClass: 'md:row-span-2' },

        
    { id: 3, src: t, alt: 'Charging Station', spanClass: 'md:row-span-2' },

        
    { id: 4, src: U, alt: 'Scooter in City', spanClass: 'md:row-span-2' }, 

        
    { id: 5, src: E, alt: 'Folding Scooter', spanClass: 'md:row-span-2' },

    
    { id: 6, src: p, alt: 'Scooter Accessories', spanClass: 'md:row-span-2' },

    { id: 7, src: v, alt: 'Scooter Accessories', spanClass: 'md:row-span-2' },
    ];

    return (
        <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/*  */}
            <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
                Our Scooter Gallery
            </h1>
            <p className="mt-2 text-lg text-gray-600">
                See our scooters in action and explore every detail.
            </p>
            </header>

            {/* =================================================== */}
            {/*   (Gallery Grid) */}
            {/* =================================================== */}
            <div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr"
            style={{ gridAutoRows: '230px' }} // 💡 
            >
            {galleryItems.map((item) => (
                <div 
                key={item.id} 
                // 
                className={`relative overflow-hidden rounded-lg shadow-lg group ${item.spanClass}`}
                >
                <img
                    src={item.src}
                    alt={item.alt}
                    
                    className="w-[400px] h-[480px] object-cover transition duration-500 ease-in-out transform group-hover:scale-105"
                    loading="lazy"
                />
                
                
                <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition duration-300"></div>
                </div>
            ))}
            </div>
            
        </div>
        </div>
    );
};

export default Gallery;