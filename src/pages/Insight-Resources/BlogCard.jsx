import React from 'react';
import './BlogCard.css';

const BlogCard = ({ image, date, category, title, description, link }) => {
  return (
    <div className="blog-card">
      {image && <img src={image} alt="blog visual" className="blog-image" />}
      <div className="blog-content">
        <p className="blog-meta">{date} | {category}</p>
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
        <a href={link} className="blog-link">Continue Reading</a>
      </div>
    </div>
  );
};

export default BlogCard;
