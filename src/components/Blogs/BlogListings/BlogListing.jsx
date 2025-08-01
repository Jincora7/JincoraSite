import React, { useState, useEffect } from 'react';
import './BlogListing.css';
import blog1 from '/BlogDetails/blog-1.jpg';
import blog2 from '/BlogDetails/blog-2.png';
import blog3 from '/BlogDetails/blog-3.jpg';
import blog4 from '/BlogDetails/blog-4.jpg';
import blog5 from '/BlogDetails/blog-5.jpg';
import blog6 from '/BlogDetails/blog-6.jpg';
import blog7 from '/BlogDetails/blog-7.jpg';

import PurplePage from '../../PurplePage/PurplePage';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const blogsPerPage = 4;
  const navigate= useNavigate();

  const sidebarPosts = [
    {
      id: 2025001,
      title: "How Shopify CMS Helped Small Businesses Grow Fast and Sell More Online",
      date: "August 29, 2024",
      image: blog3,
      tags: ["Best practices", "How to", "Industry experts"],
      blogUrl: "2025001"

    },
    {
      id: 2025002,
      title: "Shopify Email Marketing Strategies That Boost Sales Fast",
      date: "August 27, 2024",
      image: blog1,
      tags: ["UX Trends", "Conversion", "Conversion Optimization"],
      blogUrl: "2025002"
    },
    {
      id: 2025003,
      title: "Boost Your Shopify Store Sales with a Custom Ecommerce App in 2025",
      date: "August 20, 2024",
      image: blog2,
      tags: ["Ecommerce App", "Ecommerce", "Shopify Setup"],
      blogUrl: "2025003"
    },
    {
      id: 2025004,
      title: "How UI/UX Design is Shaping Successful E-commerce Stores in 2025",
      date: "August 15, 2024",
      image: blog4,
      tags: ["Ecommerce ", "Shopify Setup", "Custom Ecommerce"],
      blogUrl: "2025004"
    },
    {
      id: 2025005,
      title: "Top Reasons to Choose Custom Web Development Over Templates in 2025",
      date: "August 10, 2024",
      image: blog7,
      tags: ["CMS Platforms", "Ecommerce", "Shopify Setup"],
      blogUrl: "2025005"
    }
  ];

  const totalPages = Math.ceil(sidebarPosts.length / blogsPerPage);

  const goToPage = (index) => {
    if (index >= 0 && index < totalPages) {
      setCurrentPage(index);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "top-of-BlogListing") {
      const section = document.getElementById("top-of-BlogListing");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const currentBlogs = sidebarPosts.slice(
    currentPage * blogsPerPage,
    (currentPage + 1) * blogsPerPage
  );

  return (
    <>
      <div id='top-of-BlogListing' className="blog-page">
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
                <span className="heading-line">Top Reasons to Choose Custom Web Development Over Templates in 2025</span>
                {/* <span className="heading-line"></span> */}
              </h1>

              <button onClick={() => navigate("/blog-listing/2025005")} className="blog-hero-btn">Continue reading →</button>
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
                    <Link to={post.blogUrl}>
                      <div key={post.id} className="latest-post">
                        <img src={post.image} alt={post.title} />
                        <div className="latest-post-content">
                          <h4>{post.title}</h4>
                          <span className="date">{post.date}</span>
                        </div>
                      </div>
                    </Link>
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
                {currentBlogs.map((post) => (
                  <Link to={post.blogUrl}>
                    <article key={post.id} className="blog-card">
                      <div className="blog-image">
                        <img src={post.image} alt={post.title} />
                      </div>
                      <div className="blog-content">
                        <div className="blog-tags">
                          {post.tags?.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                          ))}
                        </div>
                        <h4>{post.title}</h4>
                        <div className="blog-meta">
                          <span className="blog-date">{post.date}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button
                  className="pagination-btn prev"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 0}
                >
                  ‹
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`pagination-dot ${currentPage === index ? 'active' : ''}`}
                    onClick={() => goToPage(index)}
                  >
                  </button>
                ))}

                <button
                  className="pagination-btn next"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                >
                  ›
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
      <PurplePage />
    </>
  );
};

export default Blog;
