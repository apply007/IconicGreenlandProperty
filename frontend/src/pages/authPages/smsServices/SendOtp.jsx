import React, { useState } from "react";

import api from "../../../api/axios";

function SendOtp({ onOtpSent }) {
  const [mobile_number, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const sendOtp = async () => {
    if (!/^01[3-9]\d{8}$/.test(mobile_number)) {
      alert("Invalid Bangladeshi mobile number!");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/api/send-otp", { mobile_number });
      console.log("otp res", res)
      alert(res.data.message);
      onOtpSent(mobile_number); // parent component  mobile 
    } catch (err) {
      alert(err.response?.data?.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Enter Mobile</h3>
      <input
        type="text"
        value={mobile_number}
        onChange={(e) => setMobile(e.target.value)}
        placeholder="01XXXXXXXXX"
      />
      <button onClick={sendOtp} disabled={loading}>
        {loading ? "Sending..." : "Send OTP"}
      </button>
    </div>
  );
}

export default SendOtp;
