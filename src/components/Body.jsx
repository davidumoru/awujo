import React from "react";
import Cards from "./Cards";
import bannerImage from "../images/cod.jpg";
import gameImage from "../images/89.jpg";
import hostImage from "../images/55.jpg";

const Body = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start">
        <img
          src={bannerImage}
          alt="Tournament Banner"
          className="rounded-3xl p-10 pr-5 lg:w-1/2"
        />
        <div className="flex flex-col justify-center lg:w-1/2 lg:pl-10">
          <h1 className="inline-block text-4xl font-bold text-white pt-10 lg:py-10">
            Call of Duty Tournament
          </h1>
          <div className="flex flex-col lg:flex-row mt-5">
            <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 my-2 lg:my-0 lg:mx-2 rounded-md">
              View Rules &amp; Description
            </button>
          </div>
          <div className="flex mt-5 py-10">
            <div className="rounded-full overflow-hidden">
              <img
                src={gameImage}
                alt="User"
                width="50rem"
                height="50rem"
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="text-white text-lg">Game:</p>
              <p className="text-white text-lg">OVERLEAGUE</p>
            </div>

            <div className="rounded-full overflow-hidden ml-5">
              <img
                src={hostImage}
                alt="User"
                width="50rem"
                height="50rem"
                className="object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="text-white text-lg">Hosted by:</p>
              <p className="text-white text-lg">Pewdiepie</p>
            </div>

            <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 ml-5 rounded-md">
              Join Tournament
            </button>
          </div>
          <div>
            <table className="text-center text-white text-lg border-y-2">
              <tr>
                <td>Start Time:</td>
                <td style={{paddingLeft:"10rem"}}>End Time:</td>
              </tr>
              <tr>
                <td>March 29 2023, 1:46 PM GMT</td>
                <td style={{paddingLeft:"10rem"}}>March 30 2023, 2:40 PM GMT</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Body;
