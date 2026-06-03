import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/job/${job.id}`)}>
      <h3>{job.company}</h3>
      <p className="job-title">{job.title}</p>
      <p className="job-salary">{job.salary}</p>
      <span className="job-type">{job.type}</span>
    </Card>
  );
}