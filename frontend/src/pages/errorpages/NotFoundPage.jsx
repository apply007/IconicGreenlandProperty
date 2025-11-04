import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="display-4 text-danger mb-3">404 - Page Not Found</h1>
      <p className="lead text-secondary mb-4">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
    <button className="btn btn-primary" onClick={() => navigate(-1)}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
