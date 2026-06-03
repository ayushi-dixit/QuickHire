import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button.jsx";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const q = search.trim();
    navigate(q ? `/jobs?search=${encodeURIComponent(q)}` : "/jobs");
  };

  return (
    <div className="center">
      <h1>Find Your Dream Job Today</h1>

      <div className="search-row">
        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21l-4.35-4.35" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="11" cy="11" r="6" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input
        type="text"
        placeholder="Search job title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
      </div>

      <Button onClick={handleSearch} icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>
        Browse All Jobs
      </Button>
    </div>
  );
}