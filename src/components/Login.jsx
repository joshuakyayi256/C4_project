
// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen">
      {/* Login Form */}
      <div className="flex items-center justify-center w-full lg:w-3/4 bg-white">

        <div className="max-w-xl w-full p-8 space-y-7">

          <h2 className="text-5xl text-center font-semibold text-gray-800">Login</h2>
          <p className="text-lg text-center">Get started with Shortly</p>

          <form onSubmit={handleSubmit}>

            <div className="mb-4">

              <label htmlFor="username" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border bg-gray-200 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border bg-gray-200 rounded-md focus:outline-none focus:border-green-500"
                required
              />

              <div className="mt-4">
                <a href="#" className="text-red-600 hover:underline">
                Forgot Password?
                 </a>
              </div>

            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-aquamarine rounded-md hover:bg-aquamarine focus:outline-none focus:bg-aquamarine"
            >
              Login
            </button>
            <p className="mt-4 text-gray-600 text-center">Don't have an account?{' '}
                 <Link to="./SignUp.js" className="text-red-600 hover:underline">
                   Sign up
                </Link>
            </p>
          </form>

        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center bg-indigo-600 w-1/3">
  
        <img
          src="/src/assets/images/Frame 73171.png"
          alt="Side Panel"
          className="w-full h-auto object-cover"
        />
      </div>

    </div>
  );
};

export default Login;
