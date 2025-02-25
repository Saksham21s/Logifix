import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import {FaStar, FaQuoteRight} from "react-icons/fa";
import kevinImage from '../../Assets/testimonial-kevin.jpg';
import markImage from '../../Assets/testimonial-mark.webp';

const Testimonial = () => {
 
  return (
    <div>
      <PageTitle title="Testinomial" />
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
    </div>
  );
};

export default Testimonial;