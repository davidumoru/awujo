import React from "react";

import GameTabs from "./GameTabs"
import GameCards from "./GameCards";

const Games = () => {
  return (
    <>
      <GameTabs />
      <div>Games</div>
      <GameCards />
    </>
  );
};

export default Games;
