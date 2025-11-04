import { useState } from "react";

import api from "../../api/axios"; //   axios instance
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/forgot-password", { email });
      console.log(res.data.message, res.data);
      setMessage(res.data.message);
    } catch (err) {
      console.log(err);
      setMessage("Email not found or error occurred!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Forgot Password</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mb-2">
        Send Reset Link
      </button>
    </form>
    {message && <p className="text-center text-success">{message}</p>}
  <Link to="/" className="text-center mt-3">
    Back to Login
  </Link>
  </div>
</div>

  );
}

export default ForgotPassword;
