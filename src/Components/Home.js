import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Home.css";
import { FaArrowRight, FaTruck, FaBox, FaGlobe, FaHeadset, FaClock, FaShip, FaPlane, FaShippingFast, FaPlay, FaWarehouse, FaGlobeAmericas, FaCheck, FaStar, FaQuoteRight, FaUser, FaComment } from "react-icons/fa";
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
import kevinImage from '../Assets/testimonial-kevin.jpg';
import markImage from '../Assets/testimonial-mark.webp';
import logo1 from '../Assets/companies-logo/logo1.png';
import logo1Hover from '../Assets/companies-logo/logo11.png';
import logo2 from '../Assets/companies-logo/logo2.png';
import logo2Hover from '../Assets/companies-logo/logo22.png';
import logo3 from '../Assets/companies-logo/logo3.png';
import logo3Hover from '../Assets/companies-logo/logo33.png';
import logo4 from '../Assets/companies-logo/logo4.png';
import logo4Hover from '../Assets/companies-logo/logo44.png';
import logo5 from '../Assets/companies-logo/logo5.png';
import logo5Hover from '../Assets/companies-logo/logo55.png';

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

  const blogs = [
    {
      image: Logisticsea,
      date: '23 February, 2025',
      title: 'We careful handling the valuable goods',
      content: 'Read Full Article →',
    },
    {
      image: otherImage,
      date: '25 January, 2025',
      title: 'Why supply chain visibility so important?',
      content: 'Read Full Article →',
    },
    {
      image: trainImage,
      date: '25 January, 2025',
      title: 'Calculate volume weight for air freight',
      content: 'Read Full Article →',
    },
  ];

  const galleryCards = [
    { id: 1, image: Logisticsea, title: 'Special Transport' },
    { id: 2, image: Logisticcrane, title: 'Supply Chain' },
    { id: 3, image: Logisticcard, title: 'Warehouse Inventory' },
    { id: 4, image: Logistictruck, title: 'Security For Cargo' },
    { id: 5, image: Logisticcrane, title: 'Supply' },
  ];

  const cards = [
    { id: 1, icon: <FaClock />, title: "On Time Delivery" },
    { id: 2, icon: <FaShip />, title: "Ship Transport" },
    { id: 3, icon: <FaBox />, title: "Optimized Cost" },
    { id: 4, icon: <FaGlobe />, title: "Shipping Worldwide" },
    { id: 5, icon: <FaHeadset />, title: "24/7 Support" },
    { id: 6, icon: <FaTruck />, title: "Reduced Transit Time" },
  ];

  const logos = [
    { normal: logo1, hover: logo1Hover },
    { normal: logo2, hover: logo2Hover },
    { normal: logo3, hover: logo3Hover },
    { normal: logo4, hover: logo4Hover },
    { normal: logo5, hover: logo5Hover },
  ];

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
      {/* Home hero section starts here */}
      <div className="home-hero">
        <Navbar />
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>Logistics & Cargo <br /> For Business</h1>
              <p>With over four decades of experience providing solutions to large-scale enterprises.</p>
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
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
      {/* card carousel by swiper.js section starts here */}
      <div className="home-features">
        <section className="card-carousel">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: '.gallery-pagination',
            }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 }, 
              600: { slidesPerView: 2, spaceBetween: 20 },
              1000: { slidesPerView: 3, spaceBetween: 25 },
              1200: { slidesPerView: 4, spaceBetween: 30 },
            }}
          >
            {cards.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="card">
                  <div className="card-content">
                    <div className="icon">{card.icon}</div>
                    <h3>{card.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="gallery-pagination"></div>
        </section>

        {/* video  section starts here */}
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
                    <p>We strongly support best practice sharing across our operations around the world and across various transportation.</p>
                  </div>
                </div>
                <div className="feature">
                  <FaShippingFast className="icon" />
                  <div>
                    <h3>Safety and Reliability</h3>
                    <p>We strongly support best practice sharing across our operations around the world and across various transportation.</p>
                  </div>
                </div>
              </div>
              <div className="hero-buttons">
                <Link to="/details" className="btn btn-primary">
                  <span>Explore More &nbsp;</span>
                  <i><FaArrowRight className="icon" /></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="video-container">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KEFt2quibkg?si=4PTCtaAbleWpyghd"
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="video-overlay" onClick={() => setIsPlaying(true)}>
            <div className="play-button"> <i><FaPlay /></i></div>
          </div>
        )}
        <div className="video-text">Providing Best Quality Courier <br /> & Logistic Services to All</div>
      </section>

      {/* Services section starts here */}
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
              <p className="services-description">There are many variations of passages of Lorem Ipsum available, but the majority have readable content suffered alteration in some form.</p>
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
            <Link to="/project-list" className="btn btn-primary">
              <span>Explore More &nbsp;</span>
              <i><FaArrowRight className="icon" /></i>
            </Link>
          </div>
        </div>
      </section>
      {/* Galleries section starts here */}
      <section className="galleries-services">
        <div className="galleries-container">
          <div className="galleries-header">
            <span className="packages-category">
              <span className="red-slash">/</span> OUR PACKAGES <span className="red-slash">/</span>
            </span>
            <h2 className="galleries-title">We operate more than 681+ <br /> logistic Service</h2>
          </div>
          <div className="galleries-carousel">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={15}
              slidesPerView={4}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                el: '.gallery-pagination',
              }}
              breakpoints={{
                0: { slidesPerView: 2 },
                600: { slidesPerView: 2 },
                1000: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {galleryCards.map((card) => (
                <SwiperSlide key={card.id}>
                  <div className="galleries-card">
                    <img src={card.image} alt={card.title} className="galleries-image" />
                    <div className="galleries-label">
                      <b>{card.title}</b>
                      <div className="galleries-plus">+</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="gallery-pagination"></div>
          </div>
        </div>
      </section>

      {/* Packages section starts here */}
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
            <p className="choose-us-description">Lorem ipsum dolor sit amet consectetur adipiscing elit conubia suspendisse erat et tempor rutrum natoque metus orci libero eros cum luctus risus timescor sociis viverra porbitor ad habitant curabitur eu Lectus semper.</p>
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
              <Link to="/pricing" className="btn btn-primary">
                <span>Explore More &nbsp;</span>
                <i><FaArrowRight className="icon" /></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pacakges section starts here */}
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
      {/* Testimals section starts here */}
      <section className="home-testimonial">
        <div className="testimonial-container">
          <div className="testimonial-header">
            <span className="red-slash">/</span> TESTIMONIAL <span className="red-slash">/</span>
            <h2 className="testimonial-title">Why people love us <br /> over others</h2>
          </div>
          <div className="testimonial-content">
            <div className="testimonial-wrapper">
              <div className="testimonial-item">
                <div className="testimonial-profile">
                  <div className="profile-image">
                    <img src={kevinImage} alt="Kevin Copper" />
                  </div>
                  <div className="profile-details">
                    <h3 className="profile-name">Kevin Copper</h3>
                    <p className="profile-position">CEO, Logifix</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <i><FaQuoteRight className="quote-icon" /></i>
                </div>
              </div>
              <div className="testimonial-text">
                <h3 className="testimonial-heading">Awesome Work</h3>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                </div>
                <p className="testimonial-paragraph">
                  To get started with us, please go over all of our internet plans and other plans to let our operators know which one works for you.
                </p>
              </div>
            </div>
            <div className="testimonial-wrapper">
              <div className="testimonial-item">
                <div className="testimonial-profile">
                  <div className="profile-image">
                    <img src={markImage} alt="Mark Wood" />
                  </div>
                  <div className="profile-details">
                    <h3 className="profile-name">Mark Wood</h3>
                    <p className="profile-position">CEO, Logifix</p>
                  </div>
                </div>
                <div className="testimonial-quote">
                  <i><FaQuoteRight className="quote-icon" /></i>
                </div>
              </div>
              <div className="testimonial-text">
                <h3 className="testimonial-heading">Great Service</h3>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                </div>
                <p className="testimonial-paragraph">
                  To get started with us, please go over all of our internet plans and other plans to let our operators know which one works for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact us section starts here */}
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6 request-quote-section">
              <div className="request-quote-content">
                <h2>Request A Quote</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Phone" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Departure" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Deliver" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Height" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input type="text" className="form-control" placeholder="Weight" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="express" />
                      <label className="form-check-label" htmlFor="express">Express</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="regular" />
                      <label className="form-check-label" htmlFor="regular">Regular</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="insurance" />
                      <label className="form-check-label" htmlFor="insurance">Insurance</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" id="fragile" />
                      <label className="form-check-label" htmlFor="fragile">Fragile</label>
                    </div>
                  </div>
                  <button type="submit" className="btn submit-request">Submit request →</button>
                </form>
              </div>
            </div>
            <div className="col-md-6 frequently-asked-section">
              <div className="frequently-asked-content">
                <h3>Frequently Asked</h3>
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Reason for choose us?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Logifix Internet is providing one of the fastest broadband internet and network solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can I get a refund?
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Logifix Internet is providing one of the fastest broadband internet and network solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        How can I get info?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Logifix Internet is providing one of the fastest broadband internet and network solutions.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How do I make contact?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                      <div className="accordion-body">
                        Logifix Internet is providing one of the fastest broadband internet and network solutions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Logo section starts here */}
      <section className="logos-section">
        <div className="logos-container">
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo.normal} alt={`Logo ${index + 1}`} className="logo-normal" />
              <img src={logo.hover} alt={`Logo ${index + 1} Hover`} className="logo-hover" />
            </div>
          ))}
        </div>
      </section>

      {/* Blog section starts here */}
      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <span className="red-slash">/</span> TESTIMONIAL <span className="red-slash">/</span>
            <h2 className="blog-title">Insight From the latest <br /> News & Blog</h2>
          </div>
          <div className="blog-grid">
            {blogs.map((blog, index) => (
              <div key={index} className="blog-item">
                <div className="blog-image">
                  <img src={blog.image} alt={`Blog ${index + 1}`} />
                  <div className="blog-date">
                    <span>25</span>
                    <span className="blog-date-black">{blog.date.split(' ')[1]} {blog.date.split(' ')[2]}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><FaUser style={{ marginRight: '5px' }} /> Admin</span>
                    <span><FaComment style={{ marginRight: '5px' }} /> Comments</span>
                  </div>
                  <h3 className="blog-item-title">{blog.title}</h3>
                  <div className="blog-read-more">{blog.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;