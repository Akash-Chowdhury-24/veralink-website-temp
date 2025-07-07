import React from 'react';
import BlogCard from './BlogCard';
import './BlogList.css';
import CategoryTabs from '../../component/CategoryTabs';

const posts = [
  {
    image: '/blog-page1-image1.png',
    date: 'September 3, 2024',
    category: 'Blog Articles, News',
    title: "SHOUTOUT MIAMI - Meet VeraLink's Founder & CTO",
    description: 'Original Article can be found: https://shoutoutmiami.com/meet-richard-hamilton-veralink-limited-founder-and-cto/',
    link: '/blog-detail1'
  },
  {
    image: '/blog-page1-image2.png',
    date: 'August 23, 2024',
    category: 'Blog Articles, News, SMEs',
    title: 'JBDC – Programme Magazine Cohort 4',
    description: 'View Full Magazine : https://issuu .cornibdc/docs/acclbooklet_2022_1_',
    link: '/blog-detail2'
  },
  {
    image: '/blog-page1-image4.png',
    date: 'August 23, 2024',
    category: 'Blog Articles, News',
    title: 'Jamaica Observer features VeraLink',
    description: 'Dave Reid and Richard Hamilton are the entrepreneurs behind Veralink Limited, a service company dedicated to providing technology solutions for enterprise businesses and Internet service providers. ',
    link: '/blog-detail3'
  },
  {
    image: '/blog-page1-image3.png',
    date: 'August 23, 2024',
    category: 'Blog Articles, News, Residential',
    title: 'The Future of IT in 2024 : What to Expect',
    description: 'As we step into 2024, the IT landscape continues to evolve at an unprecedented pace. Businesses are increasingly dependent on technology, not just as a support tool but as a core driver of growth and innovation. Here are... ',
    link: '/blog-detail4'
  },
  {
    image: '/blog-page1-image5.png',
    date: 'August 23, 2024',
    category: '',
    title: '“Hello World”',
    description: 'Welcome to VeraLink',
    link: '/blog-detail5'
  }
];

const BlogList = () => {
  return (
    <div className="blog-container">
      <div className="contact-banner">
        <img
          src="/insight-banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
     <div className='blog-articles-heading'>
      <h2>Blog Articles, News, Events</h2>
      </div>
       <div className='catagory-tab'> 
        <CategoryTabs onSelectCategory={(category) => console.log('Selected:', category)} />
        </div>
       <div className='blog-container-main'>
     
      <div className="blog-grid">
        {posts.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
      </div>
      <div className='video-section'>
        <h1>Featured Video</h1>
        <img src="/youtube.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default BlogList;
