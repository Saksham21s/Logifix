import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import {FaCheck} from "react-icons/fa";
import truckImage from '../../Assets/truck-home.jpg';
import planeImage from '../../Assets/aeroplan-home.jpg';
import seaImage from '../../Assets/seacontainer-home.jpg';

const Pricing = () => {
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
  return (
    <div>
      <PageTitle title="Pricing" />
       <section className="packages">
              <div className="packages-container">
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
    </div>
  );
};

export default Pricing;