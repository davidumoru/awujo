import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import cardImage from "../images/55.jpg";

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between px-10">
        <div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <div className="px-6 py-4 mb-20-5 mr-10 bg-gray-900 border-blue-gray-900 rounded-lg w-96">
                <div className="text-white font-bold text-xl mb-2">About:</div>
                <p className="text-white text-base">Welcome to the annual Call of Duty tournament! Welcome to the annual Call of Duty tournament! Welcome to the annual Call of Duty tournament!</p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="px-6 py-4 mb-20 ml-10 bg-gray-900 border-blue-gray-900 rounded-lg w-96">
                <div className="text-white font-bold text-xl mb-2">Rules:</div>
                <p className="text-white text-base">To ensure fair and fun gameplay for all participants. To ensure fair and fun gameplay for all participants. To ensure fair and fun gameplay for all participants.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col">
              <div className="px-6 py-4 my-5 mr-10 bg-gray-900 border-blue-gray-900 rounded-lg w-96 h-32">
                <div className="text-white font-bold text-xl mb-2">Participants:</div>
                <p className="text-white text-base"></p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="px-6 py-4 my-5 ml-10 bg-gray-900 border-blue-gray-900 rounded-lg w-96 h-32">
                <div className="text-white font-bold text-xl mb-2">Price</div>
                <p className="text-white font-bold text-5xl">0.000 USDT</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="w-96 bg-gray-900 mb-20 h-96">
            <CardHeader floated={false} className="h-48">
              <img src={cardImage} alt="profile" className="w-full h-full object-cover"/>
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="pink" className="m-2">
                Meet the Host:
              </Typography>
              <Typography variant="h3" color="white" className="m-2 font-bold">
                PewDiePie
              </Typography>
              <Typography variant="subtitle1" color="white" className="m-2">
                Professional Gamer and YouTuber
              </Typography>
            </CardBody>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 my-4 mx-auto rounded-md inline-block">
              View Profile
            </button>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Cards;
