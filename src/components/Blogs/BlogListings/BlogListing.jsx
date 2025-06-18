import React, { useState } from 'react';
import './BlogListing.css';
import blog1 from '../../../assets/blog-1.jpg';
import blog2 from '../../../assets/blog-2.jpg';
import blog3 from '../../../assets/blog-3.jpg';
import blog4 from '../../../assets/blog-4.jpg';
import blog5 from '../../../assets/blog-5.jpg';
import blog6 from '../../../assets/blog-6.jpg';
import blog7 from '../../../assets/blog-7.jpg';

const BlogListing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const sidebarPosts = [
    {
      id: 7,
      title: "Boost Your Small Business Online with Shopify CMS—Here’s How",
      date: "September 6, 2024",
      image: blog3
    },
    {
      id: 8,
      title: "How UI/UX Design is Shaping Successful E-commerce Stores in 2025",
      date: "August 27, 2024",
      image: blog1
    },
    {
      id: 9,
      title: "Top 5 Reasons to Choose Custom Web Development Over Templates",
      date: "August 20, 2024",
      image: blog2
    },
    {
      id: 10,
      title: "Unlocking Growth: Top Email and SMS Marketing Strategies for Shopify Stores in 2025",
      date: "August 15, 2024",
      image: blog4
    },
    {
      id: 11,
      title: "From Idea to Execution: What to Expect During Your Web Development Project",
      date: "August 10, 2024",
      image: blog7
    },
    {
      id: 12,
      title: "Boost Your Shopify Store Sales with a Custom Ecommerce App in 2025",
      date: "August 5, 2024",
      image: blog6
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

  return (
    <div className="blog-page">
      {/* Featured Section */}
      <section className="featured-section">
        <div className="featured-content">
          <div className="featured-left">
            <div className="featured-card">
              <div className="featured-image">
                <img src={blog2} alt="Featured post" />
              </div>
              <div className="featured-tags">
                <span className="tag">Web Design</span>
                <span className="tag">Custom coding</span>
                <span className="tag">Web Development</span>
              </div>
            </div>
          </div>
          <div className="featured-right">
            <h1>Top 5 Reasons to Choose Custom Web Development Over Templates</h1>
            <p>Custom coding allows for unlimited design possibilities and unique functionality.</p>
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
                    <h3>{post.title}</h3>
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
  );
};

export default BlogListing ;

