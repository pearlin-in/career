
import React from "react";

function JobCard({ job }) {
  let badgeClass = "job-tag";
  if (job.badge === "Top Role") badgeClass += " job-tag--top";
  else if (job.badge === "Urgent") badgeClass += " job-tag--urgent";
  else if (job.badge === "New") badgeClass += " job-tag--new";

  return (
    <a
      href={job.link}
      target="_blank"
      rel="noopener noreferrer"
      className="job-card-link"
    >
      <article className="job-card">
        {job.badge && <span className={badgeClass}>{job.badge}</span>}

        <h3 className="job-card-title">{job.title}</h3>

        <p className="job-card-desc">{job.description}</p>

        <div className="job-card-meta">
          <span className="job-card-meta-item">
            <span className="job-card-meta-dot" />
            {job.emirate}
          </span>
          <span className="job-card-meta-item">
            <span className="job-card-meta-dot" />
            {job.employmentType}
          </span>
          <span className="job-card-meta-item">
            <span className="job-card-meta-dot" />
            {job.workType}
          </span>
          <span className="job-card-meta-item">
            <span className="job-card-meta-dot" />
            {job.department}
          </span>
        </div>
      </article>
    </a>
  );
}

export default JobCard;
