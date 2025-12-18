import React, { useState } from "react";
import "./registration.css";

const Registration = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState("email");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);
  const [userId, setUserId] = useState(""); 
  const [flow, setFlow] = useState("");

  const handleRegisterClick = (id) => {
    setOtp("123456"); // simulated OTP
    setShowOTP(true);
    setUserId(id);
    setFlow("register");
    alert("OTP sent! (Simulated: 123456)");
  };

  const handleForgotClick = (id) => {
    setOtp("123456"); // simulated OTP
    setShowOTP(true);
    setUserId(id);
    setFlow("forgot");
    alert("OTP sent for password reset! (Simulated: 123456)");
  };

  const handleVerifyOTP = () => {
    if (enteredOtp === otp) {
      if (flow === "register") {
        alert("OTP verified! Registration successful!");
        setShowOTP(false);
        setEnteredOtp("");
        onLogin(); // proceed to profile
      } else if (flow === "forgot") {
        setShowOTP(false);
        setForgotPassword(true);
      }
    } else {
      alert("Incorrect OTP, try again!");
    }
  };

  const handleResetPassword = (newPassword) => {
    alert(`Password reset successfully for ${userId} (Simulated)`);
    setForgotPassword(false);
    setEnteredOtp("");
    setUserId("");
  };

  return (
    <div className="register-page">
      <div className="register-box">
        {!showOTP && !forgotPassword ? (
          <>
            <div className="tabs">
              <button
                className={activeTab === "email" ? "tab active" : "tab"}
                onClick={() => setActiveTab("email")}
              >
                Email
              </button>
              <button
                className={activeTab === "uni" ? "tab active" : "tab"}
                onClick={() => setActiveTab("uni")}
              >
                University ID
              </button>
            </div>

            {activeTab === "email" && (
              <EmailForm onRegister={handleRegisterClick} onForgot={handleForgotClick} />
            )}
            {activeTab === "uni" && (
              <UniversityForm onContinue={handleRegisterClick} onForgot={handleForgotClick} />
            )}
          </>
        ) : showOTP ? (
          <OTPForm enteredOtp={enteredOtp} setEnteredOtp={setEnteredOtp} onVerify={handleVerifyOTP} />
        ) : forgotPassword ? (
          <ResetPasswordForm onReset={handleResetPassword} />
        ) : null}
      </div>
    </div>
  );
};

const EmailForm = ({ onRegister, onForgot }) => (
  <form
    className="form"
    onSubmit={(e) => {
      e.preventDefault();
      const email = e.target.email.value;
      onRegister(email);
    }}
  >
    <h2>Email Registration</h2>
    <input type="text" placeholder="Full Name" name="name" className="input" required />
    <input type="email" placeholder="Email Address" name="email" className="input" required />
    <input type="password" placeholder="Create Password" className="input" required />
    <button type="submit" className="btn">Register</button>
    <p className="forgot-link" onClick={() => onForgot()}>Forgot Password?</p>
  </form>
);

const UniversityForm = ({ onContinue, onForgot }) => (
  <form
    className="form"
    onSubmit={(e) => {
      e.preventDefault();
      const uniId = e.target.uniId.value;
      onContinue(uniId);
    }}
  >
    <h2>University Credentials</h2>
    <input type="text" placeholder="University ID" name="uniId" className="input" required />
    <input type="password" placeholder="Password" className="input" required />
    <button type="submit" className="btn">Continue</button>
    <p className="forgot-link" onClick={() => onForgot()}>Forgot Password?</p>
  </form>
);

const OTPForm = ({ enteredOtp, setEnteredOtp, onVerify }) => (
  <form className="form" onSubmit={(e) => { e.preventDefault(); onVerify(); }}>
    <h2>OTP Verification</h2>
    <input type="text" placeholder="Enter OTP" className="input" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} required />
    <button type="submit" className="btn">Verify OTP</button>
  </form>
);

const ResetPasswordForm = ({ onReset }) => (
  <form className="form" onSubmit={(e) => { e.preventDefault(); onReset(e.target.newPassword.value); }}>
    <h2>Reset Password</h2>
    <input type="password" placeholder="New Password" name="newPassword" className="input" required />
    <input type="password" placeholder="Confirm Password" name="confirmPassword" className="input" required />
    <button type="submit" className="btn">Reset Password</button>
  </form>
);

export default Registration;
