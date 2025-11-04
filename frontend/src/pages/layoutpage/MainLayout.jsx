import TopNavBar from "../../components/TopNavBar";
import LeftSideBar from "../../components/LeftSideBar";

import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user =
    location.state?.user || JSON.parse(localStorage.getItem("user")) || {};

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/", { replace: true });
    window.location.reload();
  };
  console.log(user);

  return (
    <div className="layout">
      <TopNavBar
        user={user}
        onLogout={handleLogout}
        collapsed={setSidebarCollapsed}
      />
      <div className="d-flex">
        <div className="sidebar flex-shrink-0">
          <LeftSideBar collapsed={sidebarCollapsed} user={user} />
        </div>
        <div className="flex-grow-1 p-3">
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
