import React, { useState } from "react";
import SendOtp from "./SendOtp";
import VerifyOtp from "./VerifyOtp";
import { useNavigate } from "react-router-dom";

function OtpWrapper() {
  const [mobile_number, setMobile] = useState("");
  const [step, setStep] = useState(1);
const navigate = useNavigate();
  const handleOtpSent = (mobile_number) => {
    setMobile(mobile_number);
    setStep(2);
  };

  const handleVerified = () => {
    alert("OTP verified successfully!");
    setMobile("");
    setStep(1);
navigate("/reset-password/:token");
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 20, maxWidth: 400, margin: "50px auto", borderRadius: 10 }}>
      {step === 1 && <SendOtp onOtpSent={handleOtpSent} />}
      {step === 2 && <VerifyOtp mobile_number={mobile_number} onVerified={handleVerified} />}
    </div>
  );
}

export default OtpWrapper;
