import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/authPages/Login";
import RegisterPage from "../pages/authPages/Register";

import ProtectedRoute from "./ProtectedRoute";
import { ToastContainer } from "react-toastify";

import Home from "../pages/Home";
import ForgotPassword from "../pages/authPages/ForgotPassword";
import ResetPassword from "../pages/authPages/ResetPassword";
import ProfilePage from "../pages/ProfilePage";
import OtpWrapper from "../pages/authPages/smsServices/OtpWrapper";
import PendingUsers from "../pages/admin/PendingUsers";
import CompanyRolePage from "../pages/CompanyRolePage";
import NotFoundPage from "../pages/errorpages/NotFoundPage";


const RouteAll = () => {
  return (
    <>
      {" "}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-roles"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <CompanyRolePage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path="/otp"
          element={
            <ProtectedRoute>
              <OtpWrapper />{" "}
            </ProtectedRoute>
          }
        />
        {/*  Pending Users page —*/}
        <Route
          path="/pending-users"
          element={
            <ProtectedRoute
              allowedRoles={["MD", "Chairman", "Finance Manager"]}
            >
              <PendingUsers />
            </ProtectedRoute>
          }
        />
  <Route path="*" element={<NotFoundPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default RouteAll;
