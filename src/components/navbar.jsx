import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>QuickHire</h2>

      <div>
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "") }>
          Home
        </NavLink>

        <NavLink to="/jobs" className={({ isActive }) => (isActive ? "active" : "") }>
          Jobs
        </NavLink>
      </div>
    </nav>
  );
}