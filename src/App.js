import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import GameRoom from "./components/GameRoom";

function App() {
  return (
    <>
      <Router basename="/awujo-tournament-page">
        <Navbar />

        <Routes>
          <Route
            path="/Home"
            element={
              <div className="body-wrapper">
                <Home />
              </div>
            }
          />
          <Route path="/Games" element={<Games />} />
          <Route path="/GameRoom/:id" element={<GameRoom />} />
        </Routes>

        <BottomNav />
        <div className="footer-wrapper">
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
