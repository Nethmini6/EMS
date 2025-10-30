import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employees";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import './App.css';

function App() {
  // Keep track of whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 /* return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );*/

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page redirects to Login if not logged in */}
        <Route path="/" element={!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/employees" element={isLoggedIn ? <Employees /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
                             