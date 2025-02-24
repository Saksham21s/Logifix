import React from 'react';
import { Link } from "react-router-dom";
import PageTitle from '../../Components/PageTitle';
import { FaStar, FaArrowRight, FaBuilding, FaCalendarAlt, FaGlobeAmericas } from 'react-icons/fa';
import AboutPerson from '../../Assets/about-person.jpg';
import AboutShip from '../../Assets/about-ship.jpg';

const AboutPage = () => {
    return (
        <div>
            <PageTitle title="About" breadcrumb="Home > About" />

            <section className="transport-section">
                <div className="content-wrapper">
                    <div className="image-column">
                        <img src={AboutPerson} alt="Main" className='about-main-image' />
                        <img src={AboutShip} alt="Overlap" className="about-image-overlap" />
                    </div>
                    <div className="text-column">
                        <h4>WHO WE ARE</h4>
                        <h2>We are best For secure Business Transport</h2>
                        <p>
                            With over four decades of experience providing solutions to large-scale enterprises who fail their duty through weakness will which is the saying through.
                        </p>
                        <ul>
                            <li><i className="red-icon"><FaStar /></i>End-to-End Transportation</li>
                            <li><i className="red-icon"><FaStar /></i>Warehousing & Distribution</li>
                            <li><i className="red-icon"><FaStar /></i>Digital Solutions</li>
                            <li><i className="red-icon"><FaStar /></i>Supply Chain Solutions</li>
                        </ul>
                        <div className="hero-buttons">
                            <Link to="/services" className="explore-btn">
                                Explore More <FaArrowRight className="icon" />
                            </Link>
                        </div>

                    </div>
                </div>

                <div className="stats-wrapper">
                    <div className="stat-item">
                        <i className="red-icon"><FaBuilding /></i>
                        <div className="stat-text">
                            <h3>541+</h3>
                            <p>Distribution Centers</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <i className="red-icon"><FaCalendarAlt /></i>
                        <div className="stat-text">
                            <h3>35+</h3>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                    <div className="stat-item">
                        <i className="red-icon"><FaGlobeAmericas /></i>
                        <div className="stat-text">
                            <h3>147+</h3>
                            <p>Countries and Regions</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;