import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import hook

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // For now, simple check (you can replace with backend API)
    if (email === "admin@example.com" && password === "admin123") {
      alert("Login Successful!");
      setEmail("");
      setPassword("");
      navigate("/dashboard"); // ✅ redirect to Dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
