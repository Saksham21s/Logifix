import React, { useState } from 'react';
import { useNavigate ,Link } from 'react-router-dom';
import '../Styles/scss/style.min.css';
import notFoundImage from '../../src/Assets/image-not-found.jpg';

const NotFound = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      switch (searchTerm.toLowerCase()) {
        case 'home':
          navigate('/');
          break;
        case 'about':
          navigate('/about');
          break;
        case 'projects':
          navigate('/project-list');
          break;
        case 'contact':
          navigate('/contact');
          break;
        case 'services':
          navigate('/service-details');
          break;
        case 'news':
          navigate('/news-grid');
          break;
        default:
          alert('No specific page found for: ' + searchTerm);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="not-found-page">
      <div className="not-found-image">
        <img src={notFoundImage} alt="Page Not Found" />
      </div>
      <div className="not-found-content">
        <h1>PAGE NOT FOUND!</h1>
        <p>Sorry we can't find that page! The page you are looking for was never existed.</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>Q</button>
        </div>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;