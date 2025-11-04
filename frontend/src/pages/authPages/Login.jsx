import React, { useState } from "react";
import api from "../../api/axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await api.get("/sanctum/csrf-cookie");

      const res = await api.post("/api/login", { email, password });
console.log("Login response",res.data);

      if (res.data.message === "Your account is not approved yet!") {
        toast.warning("Your account is not approved yet!");
        return;
      }
      console.log(
        "profile response",
        res.data.user?.roles[0]?.name.toLowerCase()
      );
      if (
        res.data.user?.roles[0]?.name.toLowerCase() === "finance manager" ||
        res.data.user?.roles[0]?.name.toLowerCase() === "md" ||
        res.data.user?.roles[0]?.name.toLowerCase() === "chairman"
      ) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successful!");
        navigate("/pending-users", { state: res.data.user });
      } else if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success("Login successful!");
        navigate("/profile", { state: res.data.user }); //  dashboard route
      } else {
        toast.error("Invalid credentials!");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed!");
    }
  };

  return (
    <div
      className="min-vh-100  pt-4 d-flex flex-column"
      // style={{ marginTop: window.innerWidth >= 992 ? "200px" : "40px" }}
      style={{
        maxHeight: "calc(100vh - 150px)", // screen height wise limit
        overflowY: "auto", // scrool automatically,
        paddingBottom: "120px", //  extra space,
        marginTop: window.innerWidth >= 992 ? "200px" : "40px",
      }}
    >
      <div
        className="position-absolute start-0 end-0 start-0 bottom-0 w-100 h-100"
        style={{
          background: 'url("assets/images/iconicback.jpg")',
          height: "100%",
        }}
      >
        {/* background image */}
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
                {/* <!-- Logo --> */}
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

                <div className="card-body p-4">
                  <div className="text-center w-75 m-auto">
                    <h4 className="text-dark-50 text-center pb-0 fw-bold">
                      Sign In
                    </h4>
                    <p className="text-muted mb-4">
                      Enter your email address and password to access.
                    </p>
                  </div>

                  <form action="#">
                    <div className="mb-3">
                      <label for="emailaddress" className="form-label">
                        Email address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="emailaddress"
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3">
                      <Link
                        to="/forgot-password"
                        className="text-muted float-end"
                      >
                        <small>Forgot your password?</small>
                      </Link>
                      <label for="password" className="form-label">
                        Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          name="password"
                          required
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        <div className="input-group-text" data-password="false">
                          <span className="password-eye"></span>
                        </div>
                      </div>
                    </div>

                    {/* Remember me */}
                    {/* <div className="mb-3 mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkbox-signin"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="checkbox-signin"
                        >
                          Remember me
                        </label>
                      </div>
                    </div> */}

                    <div className="d-flex flex-column align-items-center justify-content-center">
                      {/* Login button */}
                      <div className="mb-3 mb-0 text-center">
                        <button
                          className="btn btn-primary"
                          type="submit"
                          onClick={handleLogin}
                        >
                          {" "}
                          Log In{" "}
                        </button>
                      </div>

                      {/* Google Auth */}

                      <div className="mt-3 mb-0  ">
                        <GoogleLogin
                          theme="outline"
                          shape="circle"
                          size="medium"
                          text="signin_with"
                          width={"100px"}
                       onSuccess={async (credentialResponse) => {
  try {
    const decoded = jwtDecode(credentialResponse.credential);

    const res = await api.post("api/auth/google-token", {
      token: credentialResponse.credential,
    });

    // 🔍 approval check add here
    if (res.data.message === "Your account is not approved yet!") {
      toast.warning("Your account is not approved yet!");
      return;
    }

    // 🔍 role wise redirect
    const roleName = res.data.user?.roles[0]?.name.toLowerCase();

    if (
      roleName === "finance manager" ||
      roleName === "md" ||
      roleName === "chairman"
    ) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success(`Welcome ${res.data.user.name}! 🎉`);
      navigate("/pending-users", { state: res.data.user });
    } else {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success(`Welcome ${res.data.user.name}! 🎉`);
      navigate("/profile", { state: res.data.user });
    }
  } catch (error) {
    toast.error("Google login failed");
    console.error("Login Error:", error);
  }
}}

                          onError={() => {
                            toast.error("Google Sign In Failed");
                            console.error("Google Sign In Error");
                          }}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- end card-body --> */}
              </div>
              {/* <!-- end card --> */}

              <div className="row mt-3">
                <div className="col-12 text-center">
                  <p className="text-muted">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-muted ms-1">
                      <b>Sign Up</b>
                    </Link>
                  </p>
                </div>

                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>

        {/* <!-- end container --> */}
      </div>
      {/* <!-- end page --> */}

      {/* <!-- Vendor js --> */}

      {/* <Footer /> */}
    </div>
  );
};

export default LoginPage;
