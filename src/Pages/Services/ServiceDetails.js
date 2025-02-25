import React, { useState } from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import serviceImage from '../../Assets/service-details.jpg';
import othersection from '../../Assets/othersolution-home.jpg';
import seaImage from '../../Assets/seacontainer-home.jpg';
import { FaFilePdf, FaPhoneAlt, FaChevronRight } from 'react-icons/fa';

const ServiceDetails = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const sidebarItems = [
        "Wind Turbines",
        "Wind Generators",
        "Clean Energy",
        "Renewable Energy",
        "Green Resources",
        "Green Energy",
    ];

    return (
        <div className="service-details-page">
            <PageTitle title="Service Details" />
            <div className="service-details-content">
                <div className="service-sidebar">
                    {sidebarItems.map((item, index) => (
                        <div
                            key={index}
                            className={`sidebar-item ${activeItem === item ? 'active' : ''}`}
                            onClick={() => handleItemClick(item)}
                        >
                            {item} <FaChevronRight className="arrow" />
                        </div>
                    ))}
                    <div className="contact-section">
                        <h2>Contact with us for any <br /> advice</h2>
                         <i><FaPhoneAlt className="phone-icon" /></i>
                        <p>Need help? Talk to an expert</p>
                        <p className="phone-number">+892 (123) 112 - 9999</p>
                    </div>
                    <div className="download-pdf">
                            <FaFilePdf className="pdf-icon" />
                            <span>download pdf file</span>
                        </div>
                </div>
                <div className="service-main-content">
                    <img src={serviceImage} alt="Service Details" className="service-image-div" />
                    <div className="text-section">
                        <h2>Service Overview</h2>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelites port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
                        <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit</p>
                    </div>
                    <div className="text-section">
                        <h2>Service Center</h2>
                        <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur</p>
                    </div>
                    <div className="image-section">
                        <img src={othersection} alt="Service Details" />
                        <img src={seaImage} alt="Service Details" />
                    </div>
                    <div className="img-text-section">
                        <div><p>Lorem ipsum is simply free text used by. Neque porro est qui .</p></div>
                        <div><p>Lorem ipsum is simply free text used by . Neque porro est qui .</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;