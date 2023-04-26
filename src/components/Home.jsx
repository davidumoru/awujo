import React from "react";
import Cards from "./Cards";
import bannerImage from "../images/cod.jpg";
import gameImage from "../images/89.jpg";
import hostImage from "../images/55.jpg";

const Body = () => {
  return (
    <>
      <div className="flex px-10 body-container">
        <img
          src={bannerImage}
          alt="Tournament Banner"
          className="tournament-banner rounded-3xl"
        />
        <div className="flex info-container">
          <h1 className="title inline-block font-bold text-white">
            Call of Duty Tournament
          </h1>
          <div className="flex flex-col lg:flex-row mt-5 mx-auto w-fit">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font px-2 py-2 my-2 lg:my-0 lg:mx-2 rounded-md">
              View Rules &amp; Description
            </button>
          </div>
          <div className="flex flex-wrap justify-between py-14 game-info">
            <div className="flex  justify-between game-container">
              <div>
                <img
                  src={gameImage}
                  alt="User"
                  width="50rem"
                  height="50rem"
                  className="object-cover rounded-full overflow-hidden"
                />
              </div>
              <div className="ml-3">
                <p className="text-white text-lg">Game:</p>
                <p className="text-white text-lg">OVERLEAGUE</p>
              </div>
            </div>

            <div className="flex justify-between game-container">
              <div>
                <img
                  src={hostImage}
                  alt="User"
                  width="50rem"
                  height="50rem"
                  className="object-cover rounded-full overflow-hidden ml-5"
                />
              </div>
              <div className="ml-3">
                <p className="text-white text-lg">Hosted by:</p>
                <p className="text-white text-lg">Pewdiepie</p>
              </div>
            </div>

            <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 ml-5 rounded-md">
              Join Tournament
            </button>
          </div>
          <div>
            <table className="text-center text-white text-lg border-y-2 mt-8">
              <thead>
                <tr>
                  <th className="pr-2">Start Time</th>
                  <th className="border-l-2 border-white pl-2">End Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-2">March 29 2023, 1:46 PM GMT</td>
                  <td className="border-l-2 border-white pl-2">
                    March 30 2023, 2:40 PM GMT
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Body;
