


import React, { useState } from 'react';
import './BlogListing.css';
import blog1 from '/BlogDetails/blog-1.jpg';
import blog2 from '/BlogDetails/blog-2.png';
import blog3 from '/BlogDetails/blog-3.jpg';
import blog4 from '/BlogDetails/blog-4.jpg';
import blog5 from '/BlogDetails/blog-5.jpg';
import blog6 from '/BlogDetails/blog-6.jpg';
import blog7 from '/BlogDetails/blog-7.jpg';


import PurplePage from '../../PurplePage/PurplePage';

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Blog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sidebarPosts = [
    {
      id: 7,
      title: "Boost Your Small Business Online with Shopify CMS—Here's How",
      date: "September 6, 2024",
      image: blog3,
      tags: ["CMS Platforms", "Ecommerce", "Shopify Setup"]
    },
    {
      id: 8,
      title: "How UI/UX Design is Shaping Successful E-commerce Stores in 2025",
      date: "August 27, 2024",
      image: blog1,
      tags: ["UX Trends", "Conversion", "Conversion Optimization"]
    },
    {
      id: 9,
      title: "Top 5 Reasons to Choose Custom Web Development Over Templates",
      date: "August 20, 2024",
      image: blog2,
      tags: ["Ecommerce App", "Ecommerce", "Shopify Setup"]
    },
    {
      id: 10,
      title: "Unlocking Growth: Top Email and SMS Marketing Strategies for Shopify Stores in 2025",
      date: "August 15, 2024",
      image: blog4,
      tags: ["Ecommerce ", "Shopify Setup" ,"Custom Ecommerce"] 
    },
    {
      id: 11,
      title: "From Idea to Execution: What to Expect During Your Web Development Project",
      date: "August 10, 2024",
      image: blog7,
      tags: ["CMS Platforms", "Ecommerce", "Shopify Setup"]
    },
    {
      id: 12,
      title: "Boost Your Shopify Store Sales with a Custom Ecommerce App in 2025",
      date: "August 5, 2024",
      image: blog6,
      tags: ["CMS Platforms", "Ecommerce", "Shopify Setup"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };


          const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "top-of-BlogListing") {
          const section = document.getElementById("top-of-BlogListing");
          section?.scrollIntoView({ behavior: "smooth" });
        }
      }, [location]);

  return (
    <>
    <div  id='top-of-BlogListing' className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero-section">
        <div className="blog-hero-container">
          <div className="blog-hero-left">
            <div className="blog-hero-image">
              <img src={blog2} alt="Web Development Illustration" />
            </div>
          </div>

          <div className="blog-hero-right">
            <div className="blog-hero-tags">
              <span className="hero-tag">Shopify Tips</span>
              <span className="hero-tag">Scalable Websites</span>
              <span className="hero-tag">Brand Identity</span>
            </div>
            
            <h1 className="blog-hero-main-title">
              <span className="heading-line">Top 5 Reasons to Choose Custom Web</span>
              <span className="heading-line">Development Over Templates</span>
            </h1>
            
            <button className="blog-hero-btn">Continue reading →</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          {/* Left Sidebar */}
          <aside className="sidebar">
            <div className="search-bar">
              <input type="text" placeholder="Search for anything..." />
              <span className="search-icon">🔍</span>
            </div>

            <div className="sidebar-section prep-store">
              <h3>Prep Your Store for <br />Peak Sales</h3>
              <p>Unlock Up to 50% Off on Yearly Plans Join Today and Save Big!</p>
            </div>

            <div className="sidebar-section latest-blogs">
              <h3>Latest Blogs</h3>
              <div className="latest-posts">
                {sidebarPosts.slice(0, 6).map((post) => (
                  <div key={post.id} className="latest-post">
                    <img src={post.image} alt={post.title} />
                    <div className="latest-post-content">
                      <h4>{post.title}</h4>
                      <span className="date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Blog Content */}
          <main className="blog-main">
            <div className="blog-header">
              <h2>Explore the blog</h2>
              <select className="sort-dropdown">
                <option value="latest">Sort By: Latest</option>
                <option value="oldest">Oldest</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>

            <div className="blog-grid">
              {sidebarPosts.slice(0, 4).map((post) => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <div className="blog-tags">
                      {post.tags?.map((tag, index) => (
                        <span key={index} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h7>{post.title}</h7>
                    <div className="blog-meta">
                      <span className="blog-date">{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>


            {/* Pagination */}
            <div className="pagination">
              <button className="pagination-btn prev" onClick={prevSlide}>‹</button>
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  className={`pagination-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
              <button className="pagination-btn next" onClick={nextSlide}>›</button>
            </div>
          </main>
        </div>
      </div>
    </div>
    <PurplePage/>
    </>
  );
};

export default Blog;