import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BlogCarousel.css";

const blogData = [
  {
    date: "September 6, 2024",
    title: "SHOUTOUT MIAMI - Meet VeraLink’s Founder & CTO",
    image: "/images/blog1.jpg",
    link: "#",
  },
  {
    date: "August 23, 2024",
    title: "JBDC – Programme Magazine Cohort 4",
    image: "/images/blog2.jpg",
    link: "#",
  },
  {
    date: "August 21, 2024",
    title: "Jamaica Observer features VeraLink",
    image: "/images/blog3.jpg",
    link: "#",
  },
];

const BlogCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="blog-carousel-wrapper">
      <h2 className="carousel-title">Blog Articles, NEWS, Events</h2>
      <Slider {...settings}>
        {blogData.map((item, index) => (
          <div className="blog-card" key={index}>
            <img src={item.image} alt={item.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{item.date}</p>
              <h3 className="blog-title">{item.title}</h3>
              <a href={item.link} className="blog-link">
                Continue Reading
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
