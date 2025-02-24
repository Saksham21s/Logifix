import React from 'react';
import '../Styles/scss/style.min.css';

const PageTitle = ({ title }) => {
  return (
    <div className="page-title-container">
      <div className="page-title-content">
        <h1>{title}</h1>
        <p>
          <span className="breadcrumb-inactive">Home</span>
          <span> &gt; </span>
          <span className="breadcrumb-active">{title}</span>
        </p>
      </div>
    </div>
  );
};

export default PageTitle;