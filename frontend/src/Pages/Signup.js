import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Here you can call your backend API to create admin
    console.log("Admin signed up:", { email, password });
    alert("Sign Up Successful!");
    setUsername("");
    setEmail("");
    setPassword("");

     navigate("/login");
    
  };

  return (
    <div className="auth-form">
      <h2>Admin Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
