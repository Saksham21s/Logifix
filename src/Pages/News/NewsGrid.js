import React from "react";
import PageTitle from '../../Components/PageTitle';
import '../../Styles/scss/style.min.css';
import {FaUser, FaComment } from "react-icons/fa";
import truckImage from '../../Assets/truck-home.jpg';
import trainImage from '../../Assets/train-home.jpg';
import seaImage from '../../Assets/seacontainer-home.jpg';
import otherImage from '../../Assets/othersolution-home.jpg';
import Logisticsea from '../../Assets/logistic-crane.avif';

const NewsGrid = () => {
 
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
        {
          image: seaImage,
          date: '25 January, 2025',
          title: 'Calculate volume weight for air freight',
          content: 'Read Full Article →',
        },
        {
            image: trainImage,
            date: '23 February, 2025',
            title: 'We careful handling the valuable goods',
            content: 'Read Full Article →',
          },
          {
            image: truckImage,
            date: '25 January, 2025',
            title: 'Why supply chain visibility so important?',
            content: 'Read Full Article →',
          },
      ];

  return (
    <div>
      <PageTitle title="News Grid" />
       <section className="blog-section">
              <div className="blog-container">
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
    </div>
  );
};

export default NewsGrid;