import React from "react";
import "../styles/CareersHeroSection.css";
import heroImg from "../assets/images/hero.jpg";

export default function CareersHeroSection() {
  return (
    <section className="careers-hero">
      <div
        className="careers-hero-bg"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="careers-hero-content">
        <h1>Careers & Internships</h1>
        <p>
          Explore internships, part-time jobs, and career opportunities tailored for students in the UAE.
        </p>
      </div>
    </section>
  );
}
