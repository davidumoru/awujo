import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Wallet from "./Wallet";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <>
      <NavLink to="/Home">
        <h1 className="logo text-3xl font-bold text-pink-500">awujo.</h1>
      </NavLink>
      <div className="navbar flex flex-col sm:flex-row justify-between items-center h-24 mx-auto px-4 sm:px-8 text-black">
        <div className="flex items-center">
          <NavLink to="./Home">
            <h1 className="text-3xl font-bold text-pink-500 mr-6">awujo.</h1>
          </NavLink>
          <ul className="flex items-center ml-4">
            <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              <NavLink to="/Games">Games</NavLink>
            </li>
            <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
              Leaderboard
            </li>
          </ul>
          <li className="ml-4 p-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full px-4 py-2 text-black text-sm"
            />
          </li>
        </div>
        <ul className="flex items-center ml-auto">
          <li>
            <Wallet />
          </li>
          <li className="ml-4 p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
            Notifications
          </li>
          <li className="relative ml-4">
            <button
              className="flex items-center p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500"
              onClick={toggleDropdown}
            >
              Account
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            {isDropdownVisible && (
              <ul className="absolute top-full right-0 mt-2 py-2 bg-white rounded-md shadow-xl">
                <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
