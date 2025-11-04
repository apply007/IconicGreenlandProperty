import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile_number: "",
    voter_id: "",
    role: "user",
    company: "",
    profile_photo_path: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profile_photo_path: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) data.append(key, formData[key]);
      });

      const res = await api.post("/api/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Registration successful! Please login and wait for approval.");
      navigate("/", { state: res.data.user });
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed!");
    }
  };

  return (
    <div
      className="min-vh-100  pt-4 d-flex flex-column"
      // style={{ marginTop: window.innerWidth >= 992 ? "100px" : "20px" }}
      style={{
        maxHeight: "calc(100vh - 150px)", // screen height wise limit
        overflowY: "auto", // scrool automatically,
        paddingBottom: "120px", //  extra space,
      }}
    >
      <div
        className="position-absolute start-0 end-0 bottom-0 w-100 h-100"
        style={{
          background: 'url("assets/images/iconicback.jpg")',
          height: "100%",
        }}
      >
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
        >
          <g fill-opacity="0.22">
            <circle
              style={{ fill: "rgba(var(--ct-primary-rgb), 0.1)" }}
              cx="400"
              cy="400"
              r="600"
            />
            <circle
              style={{ fill: "rgba(var(--ct-primary-rgb), 0.2)" }}
              cx="400"
              cy="400"
              r="500"
            />
            <circle
              style={{ fill: "rgba(var(--ct-primary-rgb), 0.3)" }}
              cx="400"
              cy="400"
              r="300"
            />
            <circle
              style={{ fill: "rgba(var(--ct-primary-rgb), 0.4)" }}
              cx="400"
              cy="400"
              r="200"
            />
            <circle
              style={{ fill: "rgba(var(--ct-primary-rgb), 0.5)" }}
              cx="400"
              cy="400"
              r="100"
            />
          </g>
        </svg> */}
      </div>

      <div className="account-pages position-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-lg-5">
              <div className="card">
                {/* <!-- Logo--> */}
                <div
                  className="card-header py-4 text-center "
                  style={{ backgroundColor: "#2e86de" }}
                >
                  <a href="index.html">
                    <span>
                      <img
                        src="assets/images/iconicunity.png"
                        alt="logo"
                        style={{ width: "150px", height: "50px" }}
                      />
                    </span>
                  </a>
                </div>

                <div className="card-body p-4 ">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center mt-0 fw-bold">
                      Sign Up
                    </h4>
                    <p className="text-muted mb-4">
                      Create your account.
                      {/* , it takes
                        less than a minute{" "} */}
                    </p>
                  </div>

                  <form action="#">
                    <div className="mb-3">
                      <label for="fullname" className="form-label">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="fullname"
                        name="name"
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label for="emailaddress" className="form-label">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        id="emailaddress"
                        name="email"
                        onChange={handleChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* ✅ NEW: Mobile Number */}
                    <div className="mb-3">
                      <label htmlFor="mobile_number" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="mobile_number"
                        name="mobile_number"
                        onChange={handleChange}
                        placeholder="01XXXXXXXXX"
                        required
                      />
                    </div>

                    {/* ✅ NEW: Voter ID */}
                    <div className="mb-3">
                      <label htmlFor="voter_id" className="form-label">
                        NID
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="voter_id"
                        name="voter_id"
                        onChange={handleChange}
                        placeholder="Enter your voter ID"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                          required
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye"></span>
                        </div>
                      </div>
                    </div>

                    {/* passwordConfirmation */}
                    <div className="mb-3">
                      <label for="password" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password_confirmation"
                          name="password_confirmation"
                          onChange={handleChange}
                          required
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye"></span>
                        </div>
                      </div>
                    </div>

                    {/* profile picture */}
                    <div className="mb-3">
                      <label for="profile_photo_path" className="form-label">
                        Profile Picture
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="profile_picture"
                        name="profile_photo_path"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </div>

                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signup"
                        />
                        <label
                          className="form-check-label"
                          for="checkbox-signup"
                        >
                          I accept{" "}
                          <a href="#" className="text-muted">
                            Terms and Conditions
                          </a>
                        </label>
                      </div>

                      <div className="mb-3 text-center">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={handleSubmit}
                        >
                          {" "}
                          Sign Up{" "}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end card-body --> */}
              </div>
              <div className="col-12 text-center mt-3 mb-2">
                <p className="text-muted">
                  Already have account?{" "}
                  <Link to="/" className="text-muted ms-1">
                    <b>Log In</b>
                  </Link>
                </p>
                {/* <!-- end col--> */}
              </div>
              {/* <!-- end card --> */}
              {/* <!-- end col --> */}
              {/* <!-- end row --> */}
            </div>
          </div>

          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <Footer  /> */}
      {/* <!-- end page --> */}
    </div>
  );
};

export default RegisterPage;
