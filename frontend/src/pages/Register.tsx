import { useState } from 'react';

export default function Register() {


  return (
    <>
          <div className="space-y-4 max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block font-bold text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your name"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Email</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your email"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter your password"
                />
              </div>
               <div>
                <label className="block font-bold text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  placeholder="Confirm your password"
                />
              </div>
            </form>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Register
            </button>

               <div className="flex items-center justify-between mt-4">
          </div>
          </div>
        </>
      );
}