import React from "react";
import { Link } from "react-router-dom";
import "./BlogDetail4.css";

const BlogDetail4 = () => {
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
            <h2>The Future of IT in 2024: What to Expect</h2>
            <p className="meta">August 23, 2024|Blog Articles, News, Residential Industry, SMEs</p>
            <img
              src="/blog-detail4-image.png"
              alt="blog"
              className="main-image left-floated"
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
                As an engineer, my inclination toward problem-solving and
                improvement has been evident since my formative years. While
                balancing full-time employment, I consistently engaged in
                various small projects, gaining firsthand insight into the
                challenges faced by businesses. Witnessing these obstacles
                firsthand fueled my desire to address
         
              What should our readers know about your business? At Veralink
              Technology Services, we take pride in our commitment to providing
              innovative and tailored solutions to meet the diverse needs of our
              clients. What sets us apart is our relentless pursuit of
              excellence, supported by a team of experienced engineers and
              consultants who possess a deep understanding of the industry
              landscape. Veralink boasts some of the world’s most certified and
              experienced engineers and consultants. We are driven by a passion
              for problem-solving and a dedication to empowering businesses to
              get the most from their technology investments. Our journey to
              where we are today has been marked by perseverance and a
              relentless pursuit of our vision. We firmly believe that when
              executed properly, technology should seamlessly integrate into
              your business. While it hasn’t been easy, we’ve overcome numerous
              challenges by maintaining a steadfast focus on our goals, adapting
              to market dynamics, and continuously refining our approach based
              on client feedback. Each obstacle has served as a valuable
              learning experience, teaching us the importance of resilience,
              adaptability, and the power of collaboration. While businesses are
              driven by profit, we have often foregone immediate gains to ensure
              that our clients always receive the best possible solutions.
              Profits will naturally follow as our business continues to grow
              from strength to strength. At Veralink Technology Services, our
              commitment to client satisfaction is steadfast. We understand that
              it’s never just about providing the solution that was ordered;
              throughout every stage of our client interaction, we prioritize
              delivering the optimal solution tailored to the specific business
              needs. With a core team boasting over 100 years of combined
              experience in Network Security, Network Design, and Operational
              Efficiency Improvement, we are committed to driving positive
              change within the industry. Our brand narrative is characterized
              by resilience, expertise, and an unwavering determination to
              surpass expectations. We extend an invitation to businesses to
              join us on their journey towards success, with confidence in our
              capacity to deliver results that genuinely impact their bottom
              line.
                   </p>
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
                    <Link to="/blog-detail2">Jamaica Observer features VeraLink</Link>
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
      <div className='video-section'>
        <h1>Featured Video</h1>
        <img src="/youtube.png" alt="" srcset="" />
      </div>
    </div>
  );
};

export default BlogDetail4;
