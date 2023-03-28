import React from "react";
import myImage from "../images/cod.jpg";
import gameImage from "../images/89.jpg";
import hostImage from "../images/55.jpg";

const Body = () => {
  return (
    <div className="flex items-start">
      <img
        src={myImage}
        alt="Tournament Banner"
        width="45%"
        height="auto"
        className="rounded-xl p-10 pr-5"
      />
      <div className="flex flex-col justify-center">
        <h1 className="inline-block text-4xl font-bold text-white pt-10 pl-5">
          Call of Duty Tournament
        </h1>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 my-10 mx-5 w-20px rounded-md">
          View Rules & Description
        </button>

        <div className="flex mx-5">
          <div className="rounded-full overflow-hidden">
            <img
              src={gameImage}
              alt="User"
              width="60px"
              height="60px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white text-lg pl-2">Game:</p>
            <p className="text-white text-lg pl-2">OVERLEAGUE</p>
          </div>

          <div className="rounded-full overflow-hidden">
            <img
              src={hostImage}
              alt="User"
              width="60px"
              height="60px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-white text-lg pl-2">Hosted by:</p>
            <p className="text-white text-lg pl-2">Pewdiepie</p>
          </div>

          <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 m-10 rounded-md">
            Join Tournament
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
