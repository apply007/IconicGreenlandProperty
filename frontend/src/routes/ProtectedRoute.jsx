// src/routes/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

import AccessDenied from "../pages/errorpages/AccessDenied";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // if not login
  if (!token || !user) {
    return <Navigate to="/" replace />;
  }

  // ✅  allowedRoles  → check role has
  // if (allowedRoles && Array.isArray(allowedRoles)) {
  //   const userRole = user.roles?.[0]?.name || user.role; //  roles
  //   console.log("Detected userRole:", userRole);
  //   if (
  //     !allowedRoles
  //       .map((r) => r.toLowerCase())
  //       .includes(userRole?.toLowerCase())
  //   ) {
  //     console.log("❌ Access denied");
  //      toast.error("You don't have permission to access this page!");
  //     return <Navigate to="/" replace />;
  //   }
  // }

  //check user role
  if (allowedRoles && Array.isArray(allowedRoles)) {
    const userRole = user.roles?.[0]?.name || user.role;
    const isAllowed = allowedRoles
      .map((r) => r.toLowerCase())
      .includes(userRole?.toLowerCase());

    // if not match  → Error Page show
    if (!isAllowed) {
      console.warn("Access denied for role:", userRole);
      return <AccessDenied />;
    }
  }

  //  can access
  return children;
};

export default ProtectedRoute;
