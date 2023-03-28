import React  from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="body-wrapper">
        <Body />
      </div>
    </div>
  );
}

export default App;
