import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import { navlink } from '../data-link';
import logo from '../assets/images/image 2.png';

export default function Navlink({ isAuthenticated, userProfile }) {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="nav-logo" className="h-10" />
            <h1 className="text-2xl font-bold">MedScan</h1>
          </div>

          {/* Search Input */}
          {isAuthenticated && (
            <div className="flex-grow mx-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
              />
            </div>
          )}

          {/* Links */}
          {!isAuthenticated ? (
            <ul className="flex space-x-6 text-xl font-semibold">
              {navlink.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="hover:text-blue-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center space-x-4">
              <FaBell size={24} className="cursor-pointer hover:text-blue-300" />
              <div className="flex items-center space-x-2">
                <FaUserCircle size={30} />
                <div className="text-xl font-semibold">
                  <span>{userProfile?.name}</span>
                  <br />
                  <span className="text-sm text-gray-400">{userProfile?.email}</span>
                </div>
              </div>
            </div>
          )}

          {/* Auth Links */}
          <div className="ml-4">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/option"
                  className="ml-4 py-2 px-4 bg-transparent border border-blue-500 text-blue-500 rounded focus:outline-none hover:bg-blue-500 hover:text-white"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="py-2 px-4 ml-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={() => console.log('Logout functionality here')}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}