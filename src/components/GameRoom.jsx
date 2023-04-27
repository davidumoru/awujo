import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GameRoom() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios
      .get('https://staging-api.awujo.gg/api/v1/game-room')
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Game Room</h1>
      <table>
        <thead>
          <tr>
            <th>Game Title</th>
            <th>Publisher</th>
            <th>Platform</th>
            <th>Players</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => (
            <tr key={game.id}>
              <td>{game.gameTitle}</td>
              <td>{game.publisher}</td>
              <td>{game.platform}</td>
              <td>{game.players}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GameRoom;
