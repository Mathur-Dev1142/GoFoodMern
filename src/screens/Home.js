import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-3">
        <Carousel />
      </div>
      <Card />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
