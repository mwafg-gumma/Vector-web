import React from 'react';
import { FaArrowRight, FaWalking, FaChargingStation, FaBolt } from 'react-icons/fa';

const FeaturesOverviewCard = () => {
  const features = [
    {
      icon: <FaWalking className="text-5xl text-blue-500" />,
      title: 'Easy Portability',
      description: 'Lightweight and foldable our scooter is designed for effortless carrying Take it anywhere anytime',
    },
    {
      icon: <FaChargingStation className="text-5xl text-blue-500" />,
      title: 'Efficient & Eco-Friendly',
      description: 'Powered by a long-lasting battery enjoy extended rides with zero emissions Charge up quickly and go',
    },
    {
      icon: <FaBolt className="text-5xl text-blue-500" />,
      title: 'Speed & Agility',
      description: 'Experience rapid acceleration and smooth handling through city streets Get to your destination faster than ever',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-1 py-16">
      <div className="bg-gray-50 p-8 rounded-xl shadow-2xl">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Discover the Benefits of Our Scooter
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* map  */}
          {features.map((feature, index) => ( 
            
            <div 
              key={index} 
              className="relative bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center 
                      hover:shadow-xl transform hover:-translate-y-1 transition duration-300 group" 
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>

              {/* icon*/}
              <div 
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                          group-hover:translate-x-0 translate-x-4 transition-all duration-300 ease-out"
              >
                <FaArrowRight className="text-blue-500 text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesOverviewCard;