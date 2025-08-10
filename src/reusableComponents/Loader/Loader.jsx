import React, { useState, useEffect } from "react";
import "../Loader/loader.css";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const text = "JINCORA";

  useEffect(() => {
    const totalTime = text.length * 300; // animation time for letters
    const minDisplayTime = totalTime; // ensure full word shows at least once

    // Start fade out after full word is shown
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      // Give fade animation time to complete before calling onFinish
      setTimeout(() => {
        onFinish();
      }, 800); // match fade animation duration
    }, minDisplayTime);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-text">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            style={{ animationDelay: `${index * 0.3}s` }}
            className="letter"
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
