// src/components/Signup.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div className="flex h-screen">
      {/* Signup Form */}
      <div className="flex items-center justify-center w-full lg:w-3/4 bg-white">
        <div className="max-w-xl w-full p-8 space-y-4">
        {/* the header and sub-header */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Sign Up
            </h2>

            <h3 className="text-2xl">Get Started with Shortly</h3>
          </div>

          <form>
            {/* Add your form fields here */}
            <div className="flex space-x-9 my-4 py-5">

              <div className="mb-4 w-full">
                <label htmlFor="First Name" className="block text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="FirstName"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label htmlFor="Last Name" className="block text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="LastName"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
                  required
                />
              </div>
            </div>
       {/* the password part  */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-aquamarine rounded-md hover:bg-aquamarine focus:outline-none focus:bg-aquamarine">
              Login
            </button>
            <p className="mt-4 text-gray-600 text-center">Already have an account?{' '}
                 <Link to="./Login" className="text-red-600 hover:underline">
                   Sign in
                </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Side Panel */}
      <div className="hidden lg:flex items-center justify-center bg-indigo-600 w-1/4">
       
        <img
          src="/src/assets/images/Frame 73171.png" // Placeholder image URL
          alt="Side Panel"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Signup;
