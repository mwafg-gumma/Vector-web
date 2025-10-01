import React, { useState } from 'react';

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const getEmailFeedback = () => {
    if (email.length > 0) {
      return <p className="text-sm mt-2 text-green-600 font-medium">Thank you for entering your email! We will check it soon.</p>;
    }
    return <p className="text-sm mt-2 text-gray-500">Please enter a valid email address to proceed.</p>;
  };

  return (
    <div className=" min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Main Title */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Contact Us 📞
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We're here to help! Send us a message or find our contact details below.
          </p>
        </header>

        {/* ======================================================= */}
        {/* (Two Columns Container) */}
        {/* ======================================================= */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          
          {/* ------------------------------------------------------- */}
          {/* (Inputs & Details) */}
          {/* ------------------------------------------------------- */}
          <div className="p-8 md:p-12 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-3">
              Send Us a Message
            </h2>
            
            <form className="space-y-6">
              
              {/* Name*/}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address (Interactive)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                />
                {/* Message*/}
                {getEmailFeedback()}
              </div>

              {/* */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                  required
                ></textarea>
              </div>
              
              {/* Button Send*/}
              <button
                type="submit"
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* ------------------------------------------------------- */}
          {/* (Location & Email/Phone) */}
          {/* ------------------------------------------------------- */}
          <div className="bg-slate-600 text-white p-8 md:p-12 flex flex-col justify-center space-y-8 order-1 lg:order-2">
            
            <h2 className="text-3xl font-bold mb-4 border-b border-blue-400 pb-3">
              Contact Information
            </h2>

            {/* 1. Location*/}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-3xl text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Our Location</h3>
                <p className="text-blue-200">123 Main Street, City Center, 54321</p>
              </div>
            </div>

            {/* 2. Email boc*/}
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-3xl text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Email Us</h3>
                <p className="text-blue-200 break-words">support@scootermobility.com</p>
              </div>
            </div>

            {/* 3. Mobile */}
            <div className="flex items-start space-x-4">
              <FaPhone className="text-3xl text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Call Us</h3>
                <p className="text-blue-200">+966 50 123 4567</p>
              </div>
            </div>

            {/* 4. Work Hours*/}
            <div className="flex items-start space-x-4">
              <FaClock className="text-3xl text-blue-200 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Working Hours</h3>
                <p className="text-blue-200">Sun - Thu: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;