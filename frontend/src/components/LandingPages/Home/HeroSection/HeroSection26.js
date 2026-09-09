import React from 'react';
import './HeroSection26.css';

const HeroSection = () => {
  return (
    <section className="hero-section" aria-label="Spardha 2026">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        // poster="/images/bg/hero-bg1.jpg"
      >
        <source src="/videos/upscaled-video .mp4" type="video/mp4" />
      </video>

      <div className="overlay" />

      <div className="center-heading">
        <h1 className="spardha-logo">
          <img
            src="/Component 2.svg"
            alt="Spardha 26"
            className="spardha-logo-img"
          />
        </h1>
      </div>

      <div className="bottom-row">
        <div className="date-row">
          <span className="date-line" />
          <p className="opening-info">9–11 October</p>
          <span className="date-line" />
        </div>

        <p className="fest-tagline">Driven by Greatness</p>
      </div>
    </section>
  );
};

export default HeroSection;