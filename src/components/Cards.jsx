import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import cardImage from "../images/55.jpg";

const Cards = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div class="flex flex-col">
          <div class="px-6 py-4">
            <div class="text-white font-bold text-xl mb-2">Card Title 1</div>
            <p class="text-white text-base">Some text for the first card.</p>
          </div>

          <div class="px-6 py-4">
            <div class="text-white font-bold text-xl mb-2">Participants</div>
            <p class="text-white text-base">Some text for the second card.</p>
          </div>

          <div class="px-6 py-4">
            <div class="text-white font-bold text-xl mb-2">Prize</div>
            <p class="text-white text-base">Some text for the third card.</p>
          </div>
        </div>

        <Card className="w-96">
          <CardHeader floated={false} className="h-80">
            <img src={cardImage} alt="profile"/>
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
            <Typography color="blue" className="font-medium" textGradient>
              CEO / Co-Founder
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-center gap-7 pt-2">
            <Tooltip content="Like">
              <Typography
                as="a"
                href="#facebook"
                variant="lead"
                color="blue"
                textGradient
              >
                <i className="fab fa-facebook" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#twitter"
                variant="lead"
                color="light-blue"
                textGradient
              >
                <i className="fab fa-twitter" />
              </Typography>
            </Tooltip>
            <Tooltip content="Follow">
              <Typography
                as="a"
                href="#instagram"
                variant="lead"
                color="purple"
                textGradient
              >
                <i className="fab fa-instagram" />
              </Typography>
            </Tooltip>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Cards;
