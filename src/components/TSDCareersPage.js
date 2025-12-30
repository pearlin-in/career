import React, { useState, useMemo } from "react";
import "../styles/TSDCareersPage.css";
import tsdJobs from "../data/tsdJobs";

const departments = ["All", "Marketing", "Technical", "Operations", "Finance"];
const workTypes = ["All", "Remote", "Hybrid", "On-site"];
const employmentTypes = ["All", "Full Time", "Part Time", "Internship"];

const TSDCareersPage = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [workType, setWorkType] = useState("All");
  const [employmentType, setEmploymentType] = useState("All");
  const [onlyUrgent, setOnlyUrgent] = useState(false);

  function clearFilters() {
    setSearch("");
    setDepartment("All");
    setWorkType("All");
    setEmploymentType("All");
    setOnlyUrgent(false);
  }

  const filteredJobs = useMemo(() => {
    return tsdJobs.filter(job => {
      if (
        search &&
        !job.title.toLowerCase().includes(search.toLowerCase()) &&
        !job.description.toLowerCase().includes(search.toLowerCase())
      ) return false;
      if (department !== "All" && job.department !== department) return false;
      if (workType !== "All" && job.workType !== workType) return false;
      if (employmentType !== "All" && job.employmentType !== employmentType) return false;
      if (onlyUrgent && job.badge !== "Urgent") return false;
      return true;
    });
  }, [search, department, workType, employmentType, onlyUrgent]);

  return (
    <section className="tsd-careers-section">
      <div className="tsd-careers-inner">
        <aside className="tsd-filters">
          <h2 className="tsd-filters-title">Filter Roles</h2>
          <input
            className="tsd-search"
            placeholder="Search roles…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            list="job-suggestions"
          />
          <datalist id="job-suggestions">
            {tsdJobs.map(job => (
              <option key={job.id} value={job.title} />
            ))}
          </datalist>
          <select className="tsd-select" value={department} onChange={e => setDepartment(e.target.value)}>
            <option disabled value="All">Department</option>
            {departments.slice(1).map(dep => <option key={dep}>{dep}</option>)}
          </select>
          <select className="tsd-select" value={workType} onChange={e => setWorkType(e.target.value)}>
            <option disabled value="All">Work Type</option>
            {workTypes.slice(1).map(wt => <option key={wt}>{wt}</option>)}
          </select>
          <select className="tsd-select" value={employmentType} onChange={e => setEmploymentType(e.target.value)}>
            <option disabled value="All">Employment Type</option>
            {employmentTypes.slice(1).map(et => <option key={et}>{et}</option>)}
          </select>

          <div className="tsd-switch-row">
            <span>Urgent Hire</span>
            <label className="tsd-switch">
              <input
                type="checkbox"
                checked={onlyUrgent}
                onChange={() => setOnlyUrgent(v => !v)}
              />
              <span className="tsd-slider"></span>
            </label>
          </div>

          <button className="tsd-clear-btn" type="button" onClick={clearFilters}>Reset Filters</button>
        </aside>
        <main className="tsd-jobs">
          <div className="tsd-jobs-grid">
            {filteredJobs.length === 0
              ? <div className="tsd-no-jobs">No jobs found for your criteria.</div>
              : filteredJobs.map(job => (
                <a key={job.id} className="tsd-card" href={job.link} tabIndex={0}>
                  {job.badge && (
                    <span className={`tsd-badge tsd-badge--${job.badge.toLowerCase()}`}>{job.badge}</span>
                  )}
                  <h2 className="tsd-card-title">{job.title}</h2>
                  <p className="tsd-card-desc">{job.description}</p>
                  <div className="tsd-card-meta">
                    <span>{job.location}</span>
                    <span>{job.employmentType}</span>
                    <span>{job.workType}</span>
                    <span>{job.department}</span>
                  </div>
                </a>
              ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default TSDCareersPage;