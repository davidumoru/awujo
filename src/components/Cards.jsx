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
      <div className="flex flex-wrap justify-between mx-20">
        <div class="flex flex-col">
          <div class="px-6 py-4 my-5 border-2">
            <div class="text-white font-bold text-xl mb-2">About</div>
            <p class="text-white text-base">Welcome to the annual Call of Duty tournament!</p>
          </div>

          <div class="px-6 py-4 my-5 border-2">
            <div class="text-white font-bold text-xl mb-2">Rules</div>
            <p class="text-white text-base">To ensure fair and fun gameplay for all participants.</p>
          </div>

          <div class="px-6 py-4 my-5 border-2">
            <div class="text-white font-bold text-xl mb-2">Participants</div>
            <p class="text-white text-base">Some text for the third card.</p>
          </div>

          <div class="px-6 py-4 my-5 border-2">
            <div class="text-white font-bold text-xl mb-2">Prize</div>
            <p class="text-white text-base">Some text for the third card.</p>
          </div>
        </div>

        <Card className="w-96 bg-gray-900 mb-10">
          <CardHeader floated={false} className="h-48">
            <img src={cardImage} alt="profile" className="w-full h-full overflow-hidden"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="white" className="mb-2">
              James Mayowa
            </Typography>
            <Typography color="pink" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <button className="bg-pink-500 hover:bg-pink-700 text-white font py-2 px-2 my-2 lg:my-0 lg:mx-2 rounded-md">
              View Profile
            </button>
        </Card>

      </div>
    </>
  );
};

export default Cards;
