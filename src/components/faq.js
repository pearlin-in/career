import React, { useState } from "react";
import "../styles/faq.css";

const FAQS = [
  {
    question: "Can I apply even if I’m a full-time student?",
    answer: "Yes! All roles at TSD are remote/flexible and designed to accommodate class schedules."
  },
  {
    question: "Will I receive a certificate?",
    answer: "Absolutely. All interns and team members receive experience letters/certificates."
  },
  {
    question: "Is prior experience required?",
    answer: "No. Show us projects, club work, or coursework. We believe in impact over titles."
  },
  {
    question: "Where are you based?",
    answer: "Dubai-first with remote flexibility."
  }
];

export default function CareersBottomSection() {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndices.includes(index)) {
      // If already open, close it
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      // If closed, open it
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="careers-bottom-row">
      <div className="careers-email-card">
        <h2>Can't find your role?</h2>
        <p>
          <b>Pitch us your skillset!</b> If you're passionate about students, design, or coding, we want to hear from you.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:thestudentdorm@gmail.com">
            thestudentdorm@gmail.com
          </a>{" "}
          with your CV and a short 2-sentence pitch.
        </p>
      </div>
      <div className="careers-faq-card">
        <h2>FAQ's</h2>
        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div className="faq-item" key={faq.question}>
              <button
                className="faq-question"
                aria-expanded={openIndices.includes(i)}
                onClick={() => toggleFAQ(i)}
              >
                {faq.question}
                <span
                  className={`faq-arrow${openIndices.includes(i) ? " open" : ""}`}
                  aria-hidden
                >&#x25BC;</span>
              </button>
              {openIndices.includes(i) && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}