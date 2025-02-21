import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./HomeNavbar"

const HeroSection = () => {
  const cards = [
    { id: 1, title: "Fast Delivery", text: "Quick and safe delivery services." },
    { id: 2, title: "Quick Transport", text: "Reliable transport solutions." },
    { id: 3, title: "Secure Packaging", text: "Best packaging to ensure safety." },
    { id: 4, title: "Live Tracking", text: "Track your shipments live." },
    { id: 5, title: "24/7 Support", text: "We are available all the time." },
    { id: 6, title: "Affordable Rates", text: "Best prices in the market." },
    { id: 7, title: "Custom Logistics", text: "Tailor-made logistics solutions." }
  ];

  return (
    <>
      <div className="home-hero">
        <Navbar />
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Logistics & Cargo <br /> For Business</h1>
              <p>With over four decades of experience providing solutions to large-scale enterprises.</p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  <span>Explore More</span> <FaArrowRight className="icon" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="card-carousel">
          <div className="slider">
            <div className="slide-track">
              {cards.concat(cards).map((card, index) => (
                <div key={index} className="card">
                  <div className="card-content">
                    <h3>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default HeroSection;