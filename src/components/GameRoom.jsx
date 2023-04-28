import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import RatingBar from "./RatingBar.jsx"
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

function GameRoom() {
  const [game, setGame] = useState(null);
  const location = useLocation();
  const gameId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    axios
      .get(`https://staging-api.awujo.gg/api/v1/create-game/${gameId}`)
      .then((response) => {
        setGame(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [gameId]);

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card className="bg-gray-900 w-[100rem] mx-auto my-8">
        <CardHeader floated={false} className="h-[30rem]">
          <img
            src={game.gameFlyer}
            alt="game flyer"
            className="object-cover h-full w-full"
          />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="white" className="mb-2">
            {game.gameTitle}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {game.description}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            Platform: {game.platform}
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            {game.players} Players
          </Typography>
          <Typography color="gray" className="font-medium" textGradient>
            Published By: {game.publisher}
          </Typography>
        </CardBody>
      </Card>
      <RatingBar />
    </div>
  );
}

export default GameRoom;
