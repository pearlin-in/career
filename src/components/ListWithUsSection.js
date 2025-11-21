import React from "react";
import "../styles/ListWithUsSection.css";

function ListWithUsSection() {
  const backgroundImage = "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?w=1600";
  return (
    <section
      className="list-section"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="list-section__overlay" />
      <div className="list-section__content">
        <div className="list-section__heading">LIST WITH US</div>
        <p className="list-section__text">
          Looking to recruit interns, part-timers, or fresh graduates? Reach the right student candidates by listing your openings on our platform.
        </p>
        <button className="list-section__button">Register your interest</button>
      </div>
    </section>
  );
}

export default ListWithUsSection;
