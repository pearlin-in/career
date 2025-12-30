import React, { useState, useMemo } from "react";
import JobCard from "./JobCard";
import "../../styles/CareerPage.css";
import { jobs } from "../../data/jobs";

const EMIRATES = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Fujairah",
  "Ras Al Khaimah",
];

function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [employmentType, setEmploymentType] = useState("All");
  const [workType, setWorkType] = useState("All");
  const [department, setDepartment] = useState("All");
  const [emirate, setEmirate] = useState("All"); 
  const [onlyUrgent, setOnlyUrgent] = useState(false);

  const clearFilters = () => {
    setSearchQuery("");
    setEmploymentType("All");
    setWorkType("All");
    setDepartment("All");
    setEmirate("All");
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (
        searchQuery &&
        !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !job.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (employmentType !== "All" && job.employmentType !== employmentType) {
        return false;
      }

      if (workType !== "All" && job.workType !== workType) {
        return false;
      }

      if (department !== "All" && job.department !== department) {
        return false;
      }

      if (emirate !== "All" && job.emirate !== emirate) {
        return false;
      }

      if (onlyUrgent && job.badge !== "Urgent") {
        return false;
      }

      return true;
    });
  }, [searchQuery, employmentType, workType, department, emirate, onlyUrgent]);

  return (
    <main className="careerPage">
      {/* Heading */}
      <header className="header">
        <h1>Careers in the UAE</h1>

        {/* Search + dropdowns row */}
        <div className="filterBar">
          <input
            className="search"
            placeholder="Explore What's Out There"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            list="job-suggestions"
          />
          <datalist id="job-suggestions">
            {jobs.map(job => (
              <option key={job.id} value={job.title} />
            ))}
          </datalist>

          <select
            className="select"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          >
            <option value="All">Employment Type</option>
            <option value="Full Time">Full-time</option>
            <option value="Part Time">Part-time</option>
            <option value="Internship">Internship</option>
          </select>

          <select
            className="select"
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
          >
            <option value="All">Work Type</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>

          <select
            className="select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="All">Department</option>
            <option value="Marketing">Marketing</option>
            <option value="Technical">Technical</option>
            <option value="Operations">Operations</option>
            <option value="Finance">Finance</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Sales">Sales</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Product">Product</option>
            <option value="Design">Design</option>
          </select>

          <div className="uae-switch-row">
            <span>Urgent Hire</span>
            <label className="uae-switch">
              <input
                type="checkbox"
                checked={onlyUrgent}
                onChange={() => setOnlyUrgent(o => !o)}
              />
              <span className="uae-slider"></span>
            </label>
          </div>

          <button className="clearButton" type="button" onClick={clearFilters}>
            Clear All
          </button>
        </div>

        {/* Emirate chips */}
        <div className="emirateChips">
          {EMIRATES.map((e) => (
            <button
              key={e}
              type="button"
              className={
                "emirateChip" + (emirate === e ? " emirateChip--active" : "")
              }
              onClick={() => setEmirate(emirate === e ? "All" : e)}
            >
              {e}
            </button>
          ))}
        </div>
      </header>

      {/* Jobs list */}
      <section className="jobsSection">
        <h2>{filteredJobs.length} Jobs Found</h2>
        <div className="jobGrid">
          {filteredJobs.map((job, index) => (
            <JobCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CareerPage;