import React, { useState, useEffect } from "react";
import "../Loader/loader.css";

const Loader = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const text = "JINCORA";

  useEffect(() => {
    const letterTime = text.length * 300; // time for all letters to appear
    const underlineDelay = 500; // time for underline animation

    // Start fade-out after underline finishes
    const totalTime = letterTime + underlineDelay;

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        onFinish();
      }, 800); // match fade animation duration
    }, totalTime);

    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className={`loader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader-text-container">
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
        <div
          className="underline"
          style={{ animationDelay: `${text.length * 0.3}s` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
