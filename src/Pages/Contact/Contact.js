import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-page">
            <PageTitle title="Contact" />
            <div className="contact-content">
                <div className="contact-form-section">
                    <span className="red-slash">/</span>Send Us Mail<span className="red-slash">/</span>
                    <h2>Feel Free to Write</h2>
                    <div className="comment-form">
                        <input type="text" placeholder="Enter Name" className="comment-input" />
                        <input type="email" placeholder="Enter Email" className="comment-input" />
                        <input type="text" placeholder="Enter subject" className="comment-input" />
                        <input type="text" placeholder="Enter phone number" className="comment-input" />
                        <textarea placeholder="Enter Message" className="comment-textarea"></textarea>
                        <button className="submit-comment-button">Submit Message</button>
                    </div>
                </div>
                <div className="contact-info">
                    <span className="red-slash">/</span>Need any Help<span className="red-slash">/</span>
                    <h2>Feel Free to Write</h2>
                    <p>lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit lorem ipsum dolar sit</p>
                    <div className="contact-item">
                        <FaMapMarkerAlt className="contact-icon" />
                        <div className="contact-details">
                            <h3>Address</h3>
                            <p>123 Main Street, City, Country</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" />
                        <div className="contact-details">
                            <h3>Phone</h3>
                            <p>+1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <div className="contact-details">
                            <h3>Email</h3>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;