import jobs from "../data/jobs.json";
import JobCard from "../components/jobcard.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Jobs() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("search") ?? (location.state ?? "");
  const search = query || "";

  const [filter, setFilter] = useState("All");

  const filteredJobs = jobs.filter((job) => {
    const matchSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || job.type === filter;

    return matchSearch && matchFilter;
  });

  return (
    <div>
      <h2>Jobs</h2>

      {/* FILTER BUTTONS */}
      <div className="filters">
        <button className={filter === "All" ? "active" : ""} onClick={() => setFilter("All")}>All</button>
        <button className={filter === "Remote" ? "active" : ""} onClick={() => setFilter("Remote")}>Remote</button>
        <button className={filter === "Full-Time" ? "active" : ""} onClick={() => setFilter("Full-Time")}>Full-Time</button>
      </div>

      {/* JOB LIST */}
      <div className="jobs-container">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
}