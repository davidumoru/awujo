import React  from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Games from "./components/Games";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<div className="body-wrapper"><Home /></div>} />
        <Route path="/Games" element={<Games />} />
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
