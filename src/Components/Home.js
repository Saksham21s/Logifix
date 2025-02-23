import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Styles/Home.css";
import { FaArrowRight, FaTruck, FaBox, FaGlobe, FaHeadset, FaClock, FaShip, FaPlane, FaShippingFast, FaPlay, FaWarehouse, FaGlobeAmericas,FaCheck } from "react-icons/fa";
import TopCategory from "../Assets/top-categories.png";
import Navbar from "./HomeNavbar";
import ShipImg from "../Assets/home-ship.jpg";
import PersonImg from "../Assets/home-person.jpg";
import truckImage from '../Assets/truck-home.jpg';
import trainImage from '../Assets/train-home.jpg';
import seaImage from '../Assets/seacontainer-home.jpg';
import otherImage from '../Assets/othersolution-home.jpg';
import planeImage from '../Assets/aeroplan-home.jpg';
import Logisticsea from '../Assets/logistic-crane.avif';
import Logistictruck from '../Assets/logistic-crane.avif';
import Logisticcrane from '../Assets/logistic-crane.avif';
import Logisticcard from '../Assets/logistic-crane.avif';
import Plancontainer from '../Assets/plan-container.jpg';


const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const experienceBadgeRef = useRef(null);

  useEffect(() => {
    const badge = experienceBadgeRef.current;
    let position = 0;
    let direction = 1;
    const speed = 0.1;

    const animate = () => {
      position += direction * speed;

      if (position > 5) direction = -1;
      if (position < -5) direction = 1;

      if (badge) {
        badge.style.transform = `translateX(${position}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const packages = [
    {
      id: 1,
      image: seaImage,
      title: 'Sea Freight',
      features: [
        'Delivery in 2-3 Working',
        'Customs brokerage',
        'Pickup and delivery',
        'Customs security',
      ],
      price: '$120',
    },
    {
      id: 2,
      image: truckImage,
      title: 'Road Cargo',
      features: [
        'Delivery in 2-3 Working',
        'Customs brokerage',
        'Pickup and delivery',
        'Customs security',
      ],
      price: '$150',
    },
    {
      id: 3,
      image: planeImage,
      title: 'Air Freight',
      features: [
        'Delivery in 2-3 Working',
        'Customs brokerage',
        'Pickup and delivery',
        'Customs security',
      ],
      price: '$750',
    },
  ];


  const galleryCards = [
    { id: 1, image: Logisticsea, title: 'Special Transport' },
    { id: 2, image: Logisticcrane, title: 'Supply Chain' },
    { id: 3, image: Logisticcard, title: 'Warehouse Inventory' },
    { id: 4, image: Logistictruck, title: 'Security For Cargo' },
    { id: 5, image: Logisticcrane, title: 'Supply ' },
  ];

  const cards = [
    { id: 1, icon: <FaClock />, title: "On Time Delivery" },
    { id: 2, icon: <FaShip />, title: "Ship Transport" },
    { id: 3, icon: <FaBox />, title: "Optimized Cost" },
    { id: 4, icon: <FaGlobe />, title: "Shipping Worldwide" },
    { id: 5, icon: <FaHeadset />, title: "24/7 Support" },
    { id: 6, icon: <FaTruck />, title: "Reduced Transit Time" },
  ];

  const carouselOptions = {
    loop: true,
    margin: 15,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 30000,
    autoplayHoverPause: true,
    touchDrag: true,
    mouseDrag: true,
    responsive: {
      0: { items: 2 },
      600: { items: 2 },
      1000: { items: 3 },
      1200: { items: 4 },
    },
  };

  const AnimatedAirplaneInfo = () => {
    const airplaneInfoRef = useRef(null);

    useEffect(() => {
      const airplaneInfo = airplaneInfoRef.current;
      let position = 0;
      let direction = 1;
      const animationSpeed = 0.25;

      const animate = () => {
        position += direction * animationSpeed;

        if (position > 5) direction = -1;
        if (position < -5) direction = 1;

        if (airplaneInfo) {
          airplaneInfo.style.transform = `translateY(${position}px)`;
        }

        requestAnimationFrame(animate);
      };

      animate();
    }, []);

    return (
      <div className="airplane-info" ref={airplaneInfoRef}>
        <FaPlane className="airplane-icon" />
        <h5>24/7 Delivery Service</h5>
      </div>
    );
  };

  return (
    <>
      {/* Top section with hero container */}
      <div className="home-hero">
        <Navbar />
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>
                Logistics & Cargo <br /> For Business
              </h1>
              <p>
                With over four decades of experience providing solutions to large-scale enterprises.
              </p>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  <span>Explore More &nbsp;</span>
                  <i><FaArrowRight className="icon" /></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="TopCategory">
          <img src={TopCategory} alt="Top Categories" />
        </div>
      </div>
      {/* carousel section and card container */}
      <div className="home-features">
        <section className="card-carousel">
          <OwlCarousel className="owl-theme" {...carouselOptions}>
            {cards.map((card) => (
              <div key={card.id} className="card">
                <div className="card-content">
                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </section>

        <section className="logistics-solution pt-0 pb-5">
          <div className="logistics-content">
            <div className="logistics-image">
              <img src={ShipImg} alt="Ship" className="person-img" />
              <img src={PersonImg} alt="Person" className="small-image" />
              <AnimatedAirplaneInfo />
            </div>
            <div className="logistics-text">
              <span className="packages-category">
                <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
              </span>
              <h2>We Provide Full Range Logistics Solution</h2>
              <p>With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer:</p>
              <div className="features-container">
                <div className="feature">
                  <FaClock className="icon" />
                  <div>
                    <h3>Reduced Transit Time</h3>
                    <p>
                      We strongly support best practice sharing across our operations around the world and across various transportation.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <FaShippingFast className="icon" />
                  <div>
                    <h3>Safety and Reliability</h3>
                    <p>
                      We strongly support best practice sharing across our operations around the world and across various transportation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/services" className="btn btn-primary">
                  <span>Explore More &nbsp;</span>
                  <i><FaArrowRight className="icon" /></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* youtube video  container */}
      <section className="video-container">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="video-overlay" onClick={() => setIsPlaying(true)}>
            <div className="play-button"> <i><FaPlay /></i></div>
          </div>
        )}
        <div className="video-text">Providing Best Quality Courier <br />
          & Logistic Services to All</div>
      </section>

      {/* home services container */}
      <section className="home-services">
        <div className="services-container">
          <div className="services-header-container">
            <div className="services-header-left">
              <span className="packages-category">
                <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
              </span>
              <h2 className="services-title">Services we're providing to our customers</h2>
            </div>
            <div className="services-header-right">
              <p className="services-description">
                There are many variations of passages of Lorem Ipsum available, but the majority have readable content suffered alteration in some form.
              </p>
            </div>
          </div>
          <div className="services-grid-container">
            <div className="road-freight-item">
              <img src={truckImage} alt="Road Freight" className="service-image-left" />
              <div className="service-label">Road Freight</div>
            </div>
            <div className="services-grid">
              <div className="service-item">
                <img src={trainImage} alt="Train Freight" className="service-image" />
                <div className="service-label">Train Freight</div>
              </div>
              <div className="service-item">
                <img src={seaImage} alt="Sea Freight" className="service-image" />
                <div className="service-label">Sea Freight</div>
              </div>
              <div className="service-item">
                <img src={planeImage} alt="Air Freight" className="service-image" />
                <div className="service-label">Air Freight</div>
              </div>
              <div className="service-item">
                <img src={otherImage} alt="Other Solution" className="service-image" />
                <div className="service-label">Other Solution</div>
              </div>
            </div>
          </div>
          <div className="hero-buttons homeService-btn">
            <Link to="/services" className="btn btn-primary">
              <span>Explore More &nbsp;</span>
              <i><FaArrowRight className="icon" /></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Gallerires container */}
      <section className="galleries-services">
        <div className="galleries-container">
          <div className="galleries-header">
            <span className="packages-category">
              <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
            </span>
            <h2 className="galleries-title">We operate more than 681+ <br /> logistic Service</h2>
          </div>
          <div className="galleries-carousel">
            <OwlCarousel className="owl-theme" {...carouselOptions}>
              {galleryCards.map((card) => (
                <div key={card.id} className="galleries-card">
                  <img src={card.image} alt={card.title} className="galleries-image" />
                  <div className="galleries-label">
                    <b>{card.title}</b>
                    <div className="galleries-plus">+</div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>

      {/* WHy Choose use section starts here */}
      <section className="choose-us">
        <div className="choose-us-container">
          <div className="choose-us-left">
            <div className="worker-image-container">
              <img src={PersonImg} alt="Worker" className="worker-image" />
              <div className="experience-badge" ref={experienceBadgeRef}>
                <span className="experience-number">20 </span> <br />
                <span className="experience-text">Years Of <br /> Experience</span>
              </div>
            </div>
            <img src={Plancontainer} alt="Plane Icon" className="plane-icon" />
          </div>
          <div className="choose-us-right">
            <span className="packages-category">
              <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
            </span>
            <h2 className="choose-us-title">Best Transport for <br /> Businesses</h2>
            <p className="choose-us-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit conubia suspendisse erat et tempor rutrum natoque metus orci libero eros cum luctus risus timescor sociis viverra porbitor ad habitant curabitur eu Lectus semper.
            </p>
            <div className="stats-container">
              <div className="stat">
                <FaWarehouse className="stat-icon" style={{ color: 'red' }} />
                <div className="stat-text">
                  <span className="stat-number">541+</span>
                  <span className="stat-label">Distribution Center</span>
                </div>
              </div>
              <div className="stat">
                <FaGlobeAmericas className="stat-icon" style={{ color: 'red' }} />
                <div className="stat-text">
                  <span className="stat-number">541+</span>
                  <span className="stat-label">Countries and Regions</span>
                </div>
              </div>
            </div>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                <span>Explore More &nbsp;</span>
                <i><FaArrowRight className="icon" /></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* our packages section  starts here */}
      <section className="packages">
        <div className="packages-container">
          <div className="packages-header">
            <span className="packages-category">
              <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
            </span>
            <h2 className="packages-title">Best value added <br /> packages</h2>
          </div>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <img src={pkg.image} alt={pkg.title} className="package-image" />
                <div className="package-details">
                  <h3 className="package-title">{pkg.title}</h3>
                  <ul className="package-features">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="package-feature">
                      <FaCheck style={{ color: 'red', marginRight: '10px' }} />
                      {feature}
                    </li>
                    ))}
                  </ul>
                  <div className="package-price">{pkg.price}</div>
                  <button className="get-started">Get Started Now →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial section starts here */}
    </>
  );
};

export default HeroSection;