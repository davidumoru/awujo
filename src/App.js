import React  from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="bar">
        <Navbar />
        <Sidebar />
      </div>
      <div className="body-wrapper">
        <Body />
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;
