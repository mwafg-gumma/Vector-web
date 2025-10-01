import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; 

const Footer = () => {

  const companyLinks = [
    { title: 'About Us', url: '#' },
    { title: 'Our Mission', url: '#' },
    { title: 'Careers', url: '#' },
  ];

  const featureLinks = [ 
    { title: 'Portability', url: '#' },
    { title: 'Safety Features', url: '#' },
    { title: 'Design & Style', url: '#' },
    { title: 'Battery Life', url: '#' },
  ];

  const supportLinks = [
    { title: 'FAQ', url: '#' },
    { title: 'Help Center', url: '#' },
    { title: 'Shipping & Returns', url: '#' },
    { title: 'Terms of Service', url: '#' },
  ];

  return (
    <footer className="bg-slate-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
      
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* ============================= */}
          {/* COLUMN 1: Title & Description */}
          {/* ============================= */}
          <div className="space-y-4 col-span-2 lg:col-span-1"> 
            <h3 className="text-2xl font-bold text-white mb-3">
              Scooter Mobility
            </h3>
            <p className="text-sm text-slate-400">
              Discover the future of urban travel with our sleek, efficient, and eco-friendly scooters.
            </p>
            <div className="text-xs text-slate-500 pt-2">
              &copy; {new Date().getFullYear()} Scooter Mobility.
            </div>
          </div>
          
          {/* ============================= */}
          {/* COLUMN 2: Company Links */}
          {/* ============================= */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-slate-400 hover:text-blue-400 text-base transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================= */}
          {/* COLUMN 3: Features Links  */}
          {/* ============================= */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2">
              {featureLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-slate-400 hover:text-blue-400 text-base transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* ============================= */}
          {/* COLUMN 4: Support Links */}
          {/* ============================= */}
          <div className="space-y-3">
            <h4 className="text-xl font-semibold text-white mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-slate-400 hover:text-blue-400 text-base transition duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* ============================= */}
          {/* COLUMN 5: Social Icons & Contact */}
          {/* ============================= */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact
            </h4>
            
            {/* Icon social*/}
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-2xl text-slate-400 hover:text-blue-400 transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="text-2xl text-slate-400 hover:text-blue-400 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl text-slate-400 hover:text-blue-400 transition duration-300">
                <FaInstagram />
              </a>
            </div>
            
            {/* links*/}
            <ul className="space-y-2 pt-3">
                <li>
                    <a 
                        href="mailto:info@example.com" 
                        className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 text-sm transition duration-300"
                    >
                        <FaEnvelope className="flex-shrink-0" />
                        <span>info@example.com</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="#" 
                        className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 text-sm transition duration-300"
                    >
                        <FaMapMarkerAlt className="flex-shrink-0" />
                        <span>View Location</span>
                    </a>
                </li>
            </ul>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;