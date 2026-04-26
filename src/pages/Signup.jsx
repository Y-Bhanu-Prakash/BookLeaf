import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match ❌");
      return;
    }

    setError("");

    const user = { username, email, password };

    try {
      const response = await fetch("http://localhost:9090/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const result = await response.text();

      if (response.ok) {
        alert(result); 
        navigate("/login");
      } else {
        setError(result);
      }
    } catch (err) {
      setError("Server not responding 🔥 Check backend!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Book Leaf</h2>
        <h3>Create Account</h3>

        <form onSubmit={handleSignup} className="signup-form">
          <input type="text" placeholder="Username"
            value={username} onChange={(e) => setUsername(e.target.value)} required />

          <input type="email" placeholder="Email"
            value={email} onChange={(e) => setEmail(e.target.value)} required />

          <input type="password" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />

          <input type="password" placeholder="Confirm Password"
            value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />

          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
