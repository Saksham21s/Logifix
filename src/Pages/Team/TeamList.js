import React from "react";
import PageTitle from '../../Components/PageTitle';
import "../../Styles/scss/style.min.css";
import LogifixCEO from '../../Assets/logifix-ceo.jpg';
import LogifixLCEO from '../../Assets/logifix-lady-ceo.jpg';
import LogifixEmp from '../../Assets/logifix-employee.jpg';
import LogifixEmp1 from '../../Assets/logifix-employee2.jpg';
import { FaShareAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamList = () => {
    return (
        <div>
            <PageTitle title="Team" />
            <section className="team-list">
            <div className="bottom-section">
                    <div className="team-grid">
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixCEO} alt="Alan Holand" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Alan Holand</h3>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixLCEO} alt="David Goa" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>David Goa</h3>
                            <p>Logistics Manager</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp} alt="Macland Minor" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Macland Minor</h3>
                            <p>Operations Head</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp1} alt="Viland Rolex" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Viland Rolex</h3>
                            <p>Sales Director</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixLCEO} alt="David Goa" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>David Goa</h3>
                            <p>Logistics Manager</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp} alt="Macland Minor" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Macland Minor</h3>
                            <p>Operations Head</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixEmp1} alt="Viland Rolex" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Viland Rolex</h3>
                            <p>Sales Director</p>
                        </div>
                        <div className="team-member">
                            <div className="image-container">
                                <img src={LogifixCEO} alt="Alan Holand" />
                                <div className="social-icons">
                                    <div className="social-icon"><FaFacebook /></div>
                                    <div className="social-icon"><FaTwitter /></div>
                                    <div className="social-icon"><FaLinkedin /></div>
                                </div>
                                <div className="share-icon">
                                    <FaShareAlt />
                                </div>
                            </div>
                            <h3>Alan Holand</h3>
                            <p>CEO & Founder</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TeamList;
