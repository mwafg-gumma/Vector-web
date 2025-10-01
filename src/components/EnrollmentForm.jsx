
import React from 'react';
import Ap from "../assets/Ap.png"
import Go from "../assets/Go.jpg"





// (onClose)
    function EnrollmentForm({ onClose }) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Account Creation Attempted!');
    
    };

    const handleSocialLogin = (provider) => {
        alert(`Continuing with ${provider}...`);
    };

    return (
        // 1. Modal Overlay 
        <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center z-50">
        
        {/* 2. Form Container  */}
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm relative">
            
            {/* Close (X) */}
            <button 
            onClick={onClose} 
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-3xl font-light transition"
            aria-label="Close"
            >
            &times; 
            </button>
            
            <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">
            Create an Account
            </h2>
            <p className="text-sm text-gray-500 mb-6 text-center">
            Join us and experience the future of travel
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email*/}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
                </label>
                <input 
                type="email" 
                id="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="you@example.com"
                required 
                />
            </div>
            
            {/* Password*/}
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
                </label>
                <input 
                type="password" 
                id="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="••••••••"
                required 
                />
            </div>

            {/*  "Login" */}
            <p className="text-sm pt-1 text-center">
                Already have an account? 
                <a href="#" className="text-red-600 hover:text-red-800 font-semibold ml-1">
                Log in
                </a>
            </p>
            
            {/* Submit */}
            <button 
                type="submit" 
                className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md"
            >
                Create Account
            </button>
            </form>
            
            {/* ================================== */}
            {/*  Continue with Google/Apple */}
            {/* ================================== */}
            <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500 text-sm">
                Or continue with
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex space-x-4">
            
            {/* Button Google */}
            <button
                onClick={() => handleSocialLogin('Google')}
                className="w-1/2 flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
                {/* Google */}
                <div className="w-5 h-5 mr-3">
                {/* img Google */}
                <img src={Go} alt="Google-Img" cla />
                </div>
                <span className="font-medium text-sm">Google</span>
            </button>

            {/* Button Apple */}
            <button
                onClick={() => handleSocialLogin('Apple')}
                className="w-1/2 flex items-center justify-center p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
                {/* مكان صورة Apple */}
                <div className="w-5 h-5 mr-3">
                {/* img Apple */}
                <img src={Ap} alt="Apple-Img" />
                </div>
                <span className="font-medium text-sm">Apple</span>
            </button>
            </div>
            
        </div>
        </div>
    );
    }

export default EnrollmentForm;