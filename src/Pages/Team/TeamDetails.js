import React, { useEffect, useState } from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import teamMemberImage from '../../Assets/team-details-lady.jpg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const TeamDetails = () => {
  const [techWidth, setTechWidth] = useState(0);
  const [marketingWidth, setMarketingWidth] = useState(0);
  const [businessWidth, setBusinessWidth] = useState(0);

  useEffect(() => {
    const animateProgress = (setWidth, targetWidth) => {
      let width = 0;
      const interval = setInterval(() => {
        if (width >= targetWidth) {
          clearInterval(interval);
        } else {
          width++;
          setWidth(width);
        }
      }, 10);
    };

    animateProgress(setTechWidth, 90);
    animateProgress(setMarketingWidth, 80);
    animateProgress(setBusinessWidth, 75);
  }, []);

  return (
    <div>
      <PageTitle title="Team Details" />
      <div className="team-details-container">
      <div className="team-member-card">
          <div className="image-section">
            <img src={teamMemberImage} alt="Aleesha Brown" />
          </div>
          <div className="details-section">
            <h2>Aleesha Brown</h2>
            <h3>Managing Director & CEO</h3>
            <p>I help my clients stand out and <br/> they help me grow.</p>
            <div className="contact-info">
              <div className="info-item">
                <span className="label">Email Address</span>
                <span className="value">contact@logifix.com</span>
              </div>
              <div className="info-item">
                <span className="label">Phone Number</span>
                <span className="value">+012-3456-789</span>
              </div>
              <div className="info-item">
                <span className="label">Web Address</span>
                <span className="value">www.logifix.com</span>
                <div className="social-icons"> 
                  <div className="social-icon">
                    <i className="social-icon-inner"><FaFacebook /></i>
                  </div>
                  <div className="social-icon">
                    <i className="social-icon-inner"><FaTwitter /></i>
                  </div>
                  <div className="social-icon">
                    <i className="social-icon-inner"><FaLinkedin /></i>
                  </div>
                  <div className="social-icon">
                    <i className="social-icon-inner"><FaInstagram /></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        <div className="skills-section">
          <div className="skill-item">
            <div className="skill-text">
              <span className="skill-label">Personal Experience</span>
              <p>When an unknown printer took a galley of type and scrambled it to make a type<br/> specimen book. It has survived not only five centuries architecto dolorem ipsum quia.</p>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-text">
              <span className="skill-label">Technology</span>
            </div>
            <div className="progress-bar-container">
              <span className="progress-percent">{techWidth}%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${techWidth}%` }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-text">
              <span className="skill-label">Marketing</span>
            </div>
            <div className="progress-bar-container">
              <span className="progress-percent">{marketingWidth}%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${marketingWidth}%` }}></div>
              </div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-text">
              <span className="skill-label">Business</span>
            </div>
            <div className="progress-bar-container">
              <span className="progress-percent">{businessWidth}%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${businessWidth}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;