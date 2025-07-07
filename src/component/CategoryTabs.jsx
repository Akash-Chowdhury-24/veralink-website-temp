import React, { useState } from 'react';
import './CategoryTabs.css';

const categories = [
  'All Posts',
  'Blog Articles',
  'Events',
  'News',
  'Residential Industry',
  'SMEs',
];

const CategoryTabs = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState('All Posts');

  const handleTabClick = (category) => {
    setActiveTab(category);
    if (onSelectCategory) onSelectCategory(category);
  };

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`tab-button ${activeTab === category ? 'active' : ''}`}
          onClick={() => handleTabClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
