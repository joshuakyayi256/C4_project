// src/components/Signup.js
import React from "react";

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Signup Form */}
      <div className="flex items-center justify-center w-full lg:w-3/4 bg-white">
        <div className="max-w-md p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
          <form>
            {/* Add your form fields here */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Side Panel */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-600 w-1/4">
        {/* You can replace the URL with the path to your image */}
        <img
          src="/src/assets/images/Frame 73171.png"  
          alt="Side Panel"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
