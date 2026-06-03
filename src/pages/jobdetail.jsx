import { useParams } from "react-router-dom";
import jobs from "../data/jobs.json";
import { useState } from "react";
import Button from "../components/Button.jsx";

export default function JobDetail() {
  const { id } = useParams();

  const job = jobs.find((j) => j.id === Number(id));

  const [applied, setApplied] = useState(false);

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="detail">
      <h2>{job.company}</h2>
      <h3>{job.title}</h3>

      <p>{job.description}</p>
      <p><b>Salary:</b> {job.salary}</p>
      <p><b>Type:</b> {job.type}</p>

      <Button variant="success" onClick={() => setApplied(true)}>
        Apply Now
      </Button>

      {applied && <p className="applied-msg">Success! Applied 🎉</p>}
    </div>
  );
}