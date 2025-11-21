import React from "react";
import "../styles/WhyUsSection.css";

import whyusImage from "../assets/images/team.jpg";
import expertiseIcon from "../assets/tsd_icons/hand.png";
import cultureIcon from "../assets/tsd_icons/phone.png";
import supportIcon from "../assets/tsd_icons/screen.png";
import growthIcon from "../assets/tsd_icons/write.png";
import flexibilityIcon from "../assets/tsd_icons/collaborative.png";
import impactIcon from "../assets/tsd_icons/comments.png";

const reasons = [
  {
    icon: <img src={expertiseIcon} alt="Industry Expertise" className="reason-icon-img" />,
    body: "Launching new student features (housing, careers, events, guides)",
  },
  {
    icon: <img src={cultureIcon} alt="Positive Culture" className="reason-icon-img" />,
    body: "Designing social media posts, reels, and campaigns",
  },
  {
    icon: <img src={supportIcon} alt="Mentorship & Support" className="reason-icon-img" />,
    body: "Creating visually cohesive layouts, icons, and graphics",
  },
  {
    icon: <img src={growthIcon} alt="Personal Growth" className="reason-icon-img" />,
    body: "Writing concise, student-friendly content",
  },
  {
    icon: <img src={flexibilityIcon} alt="Flexibility" className="reason-icon-img" />,
    body: "Benefit from remote, hybrid, or on-site arrangements.",
  },
  {
    icon: <img src={impactIcon} alt="Make an Impact" className="reason-icon-img" />,
    body: "Improving UX through quick tests and real feedback",
  },
];

const WhyUsSection = () => (
  <section className="why-section">
    <div className="why-heading-group">
      <h2 className="why-title">CAREERS AT TSD</h2>
      <p className="why-desc">
       <i> We’re a small, fast, and friendly team turning real student problems into simple products.
 If you like ownership, scrappy execution, and learning by doing, this is your place.</i>
      </p>
    </div>
    <div className="why-content-grid">
      <div className="why-image-wrap">
        <img src={whyusImage} className="why-image" alt="Why Us" />
        <div className="why-image-caption">
            <strong>Why work with us?</strong><br />
            We’re young, dynamic, and driven by purpose. Working at TSD means joining a team that
            values initiative, creativity, and student insight, because that’s where we came from.
        </div>
      </div>
      <div className="why-reason-group">
        <h3 className="why-reason-header">What Sets Us Apart</h3>
        <div className="why-reason-grid">
          {reasons.map((r, i) => (
            <article className="why-reason-card" key={r.title}>
              <div className="why-reason-icon">{r.icon}</div>
              <div className="why-reason-title">{r.title}</div>
              <div className="why-reason-body">{r.body}</div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
