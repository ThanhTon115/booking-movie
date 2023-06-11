import React from "react";
import About from "../About";
import Contact from "../Contact";
import Experience from "../Experience";
import Feedbacks from "../Feedbacks";
import Hero from "../Hero";
import Tech from "../Tech";
import Works from "../Works";
import { StarsCanvas } from "../canvas";
import Header from "../header/Header";
import Highlights from "./components/Highlights";
import { Carousel } from "antd";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Carousel autoplay>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Highlights />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Highlights/>
      </div>
      </Carousel>
    </div>
  );
};
export default Home;
