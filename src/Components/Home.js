import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import {
  FaArrowRight,
  FaTruck,
  FaBox,
  FaGlobe,
  FaHeadset,
  FaClock,
  FaShip,
} from "react-icons/fa";
import TopCategory from "../Assets/top-categories.png";
import Navbar from "./HomeNavbar";

const HeroSection = () => {
  const [cards, setCards] = useState([
    { id: 1, icon: <FaClock />, title: "On Time Delivery" },
    { id: 2, icon: <FaShip />, title: "Ship Transport" },
    { id: 3, icon: <FaBox />, title: "Optimized Cost" },
    { id: 4, icon: <FaGlobe />, title: "Shipping Worldwide" },
    { id: 5, icon: <FaHeadset />, title: "24/7 Support" },
    { id: 6, icon: <FaTruck />, title: "Reduced Transit Time" },
  ]);

  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);

      setTimeout(() => {
        setCards((prevCards) => {
          const firstCard = prevCards[0];
          const newCards = [...prevCards.slice(1), firstCard];
          return newCards;
        });

        setExiting(false); 
      }, 900); 
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-hero">
        <Navbar />
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Logistics & Cargo <br /> For Business
              </h1>
              <p>
                With over four decades of experience providing solutions to
                large-scale enterprises.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  <span>Explore More &nbsp;</span><i><FaArrowRight className="icon" /></i> 
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="TopCategory">
          <img src={TopCategory} alt="Top Categories" />
        </div>
      </div>

      {/*------------------------- Carousel Section -------------------------*/}
      <div className="home-features">
        <section className="card-carousel">
          <div className={`slider ${exiting ? "shift-left" : ""}`}>
            {cards.slice(0, 5).map((card, index) => (
              <div key={card.id} className={`card ${index === 0 && exiting ? "exiting" : ""}`}>
                <div className="card-content">
                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
