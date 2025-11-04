import React, { useState } from "react";

import api from "../../../api/axios";

function VerifyOtp({ mobile_number, onVerified }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyOtp = async () => {
    if (!/^\d{6}$/.test(otp)) {
      alert("OTP must be 6 digits");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/api/verify-otp", { mobile_number, otp });
      alert(res.data.message);
      onVerified(); // parent component  notify 
    } catch (err) {
      alert(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Enter OTP for {mobile_number}</h3>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
      />
      <button onClick={verifyOtp} disabled={loading}>
        {loading ? "Verifying..." : "Verify OTP"}
      </button>
    </div>
  );
}

export default VerifyOtp;
