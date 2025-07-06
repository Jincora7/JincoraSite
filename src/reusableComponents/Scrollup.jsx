
import React, { useEffect, useState } from 'react';
import { RiArrowUpLine } from 'react-icons/ri';
import '../reusableComponents/Scrollup.css';

const Scrollup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      className={`scrollup ${show ? 'show-scroll' : ''}`}
      onClick={(e) => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <RiArrowUpLine className="scrollup__icon" />
    </a>
  );
};

export default Scrollup;
