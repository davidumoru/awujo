import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sidebar">
        <button
          onClick={handleToggle}
          className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 ml-5 rounded-md"
        >
          Toggle Sidebar
        </button>
        {isOpen && (
          <div>
            <ul>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Home
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Games
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Leadership Board
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                My Wallet
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Notifications
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Profile
              </li>
              <li className="p-4 text-white font-normal transition-colors hover:text-pink-500 focus:text-pink-500">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
