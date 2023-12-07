// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Recovery = () => {
  return (
    <div className="flex h-screen">
      {/* Recovery form */}
      <div className="flex items-center justify-center w-full lg:w-3/4 bg-white">
        <div className="max-w-xl w-full p-8 space-y-4">
          <h2 className="text-3xl text-center font-bold text-gray-800">Forgot Password</h2>

          <h3 className="text-l text-center">
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password
          </h3>

          <form>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                className="w-full px-4 py-2 mt-2 border bg-gray-200 rounded-md focus:outline-none focus:border-green-500"
                required
              />
            </div>
            <button
              type="Recovery"
              className="w-full px-4 py-2 text-white bg-aquamarine rounded-md hover:bg-aquamarine focus:outline-none focus:bg-aquamarine"
            >
              Send recovery code
            </button>
            <p className="mt-4 text-gray-600 text-center">
              Done?{" "}
              <Link to=".Login" className="text-red-600 hover:underline">
                Back to sign in
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
export default Recovery;
