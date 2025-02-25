import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import SeaImage from '../../Assets/logistic-seaport.avif';
import { FaTruck, FaPlane, FaShip, FaWarehouse, FaShieldAlt, FaClock, FaStar } from 'react-icons/fa';

const Details = () => {
    const services = [
        {
            title: 'Safety and Reliability',
            image: SeaImage,
            alt: 'Safety and Reliability',
            icon: <FaShieldAlt />,
        },
        {
            title: 'Reduced Transit Time',
            image: SeaImage,
            alt: 'Reduced Transit Time',
            icon: <FaClock />,
        },
        {
            title: 'Shipping Worldwide',
            image: SeaImage,
            alt: 'Shipping Worldwide',
            icon: <FaShip />,
        },
        {
            title: 'Shipping Worldwide',
            image: SeaImage,
            alt: 'Shipping Worldwide',
            icon: <FaPlane />,
        },
        {
            title: 'Safety and Reliability',
            image: SeaImage,
            alt: 'Safety and Reliability',
            icon: <FaWarehouse />,
        },
        {
            title: 'Reduced Transit Time',
            image: SeaImage,
            alt: 'Reduced Transit Time',
            icon: <FaTruck />,
        },
    ];

    return (
        <div>
            <PageTitle title="Services" />
            <section className="logistic-services-section">
                <div className="logistic-services-grid">
                    {services.map((service, index) => (
                        <div
                            className="logistic-service-card"
                            key={index}
                            style={{ backgroundImage: `url(${service.image})` }}
                        >
                            <div className="logistic-service-icon">
                                <i>{service.icon}</i>
                            </div>
                            <div className="logistic-service-content">
                                <h3>{service.title}</h3>
                                <p><i><FaStar /></i> Worldwide service</p>
                                <p><i><FaStar /></i> 24/7 Support</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Details;