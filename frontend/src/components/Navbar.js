import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <h2>Employee Management System</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/employees">Employees</Link>
      </nav>
    </header>
  );
}

export default Navbar;
