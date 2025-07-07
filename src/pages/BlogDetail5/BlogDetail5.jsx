import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetail5.css";

const BlogDetail5 = () => {
  return (
    <div className="blog-detail-wrapper">
      <div className="contact-banner">
        <img
          src="/insight-banner.png" // replace with your image
          alt="Contact Banner"
        />
      </div>
      {/* Back to All Posts */}
      <div className="blog-detail-wrapper-main">
        <div className="back-link">
          <Link to="/insights">← All Posts</Link>
        </div>

        <div className="blog-detail-container">
          {/* Left: Article */}
          <div className="blog-content">
            <h2>"Hello World!"</h2>
            <p className="meta">August 23, 2024</p>
            <img
              src="/blog-detail5-banner.png"
              alt="blog"
              className="main-image right-floated"
            />
            <p className="summary">
              Original article link can be found{" "}
              <a href="#" className="yellow-link">
                https://shoutoutmiami.com/meet-richard-hamilton-veralink-limited-founder-and-cto/
                Continue Reading{" "}
              </a>
            </p>

            <div className="blog-body">
              <h4>
                If Richard can, can you walk us through the thought-process...
              </h4>
              <p>
                Welcome to Veralink! We’re thrilled to launch our official blog
                as part of our mission to connect, inform, and empower
                businesses through cutting-edge technology. At Veralink, we
                understand that technology drives progress, and we’re here to
                ensure your business stays ahead in an ever-evolving digital
                landscape. With over 30 years of combined experience and a
                passion for delivering top-tier solutions, we’re dedicated to
                helping businesses of all sizes harness the power of technology.
                In this space, we’ll be sharing insights, industry trends,
                practical tips, and thought leadership on all things
              </p>
              related to IT, cybersecurity, network solutions, and more. Whether
              you’re a small business looking for managed services or an
              enterprise seeking innovative IT strategies, our blog will be your
              go-to resource for navigating the tech world. We believe that
              success is built on strong partnerships, expert guidance, and a
              commitment to delivering value. Our team of seasoned professionals
              is here to guide you every step of the way. Thank you for joining
              us on this journey. Stay tuned for exciting updates, expert
              advice, and everything you need to know to stay at the forefront
              of technology. Welcome to the future of IT solutions. Welcome to
              Veralink.
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="blog-sidebar">
            <div className="sidebar-section">
              <h4>Categories</h4>
              <h3>All Posts</h3>
              <ul>
                <li>
                  <Link to="#">Blog Articles</Link>
                </li>
                <li>
                  <Link to="#">Events</Link>
                </li>
                <li>
                  <Link to="#">News</Link>
                </li>
                <li>
                  <Link to="#">Residential Industry</Link>
                </li>
                <li>
                  <Link to="#">SMEs</Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h4>Posts</h4>
              <div className="recent-posts">
                <div className="post-card">
                  <img src="/blog-post-img.png" alt="thumb" />
                  <div>
                    <Link to="#">JBDC – Programme Magazine Cohort 4</Link>
                    <span>August 23, 2024</span>
                  </div>
                </div>
                <div className="post-card">
                  <img src="/blog-post-img2.png" alt="thumb" />
                  <div>
                    <Link to="/blog-detail2">
                      Jamaica Observer features VeraLink
                    </Link>
                    <span>August 23, 2024</span>
                  </div>
                </div>
                <div className="post-card">
                  <img src="/blog-post-img1.png" alt="thumb" />
                  <div>
                    <Link to="#">The Future of IT in 2024</Link>
                    <br />
                    <span>August 23, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section">
        <h1>Featured Video</h1>
        <img src="/youtube.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default BlogDetail5;
