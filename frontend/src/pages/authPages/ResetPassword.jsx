import { useState } from "react";
import api from "../../api/axios";
import { useParams, useLocation,useNavigate } from "react-router-dom";

function ResetPassword() {
  const { token } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const emailFromUrl = query.get("email");

  const [email, setEmail] = useState(emailFromUrl || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/reset-password", {
        token,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Invalid token or something went wrong!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
  <div className="card p-4 shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
    <h2 className="text-center mb-4">Reset Password</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 mb-2">Reset Password</button>
    </form>
    {message && <p className="text-center text-success">{message}</p>}
    <button
      type="button"
      className="btn btn-link w-100"
      onClick={() => navigate("/")}
    >
      ← Back to Login
    </button>
  </div>
</div>

  );
}

export default ResetPassword;
