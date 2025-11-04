import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const LeftSideBar = ({ collapsed, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  // safely check role
  const isAdmin =
    user?.role === "admin" ||
    (Array.isArray(user?.roles) && user.roles.some((r) => r.name === "admin"));

  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="leftside-menu">
        {/* Brand Logo GREENLAND Light */}
        <a href="/profile" className="logo logo-light">
          <span className="logo-lg">
            <img
              src="assets/images/iconicunity.png"
              alt="logo"
              style={{ cursor: "pointer", width: "150px", height: "50px" }}
            />
          </span>
          <span className="logo-sm">
            <img src="assets/images/greenland.png" alt="small logo" />
          </span>
        </a>

        {/* Brand Logo Dark */}
        {/* <a href="index.html" className="logo logo-dark">
          <span className="logo-lg">
            <img src="assets/images/logo-dark.png" alt="dark logo" />
          </span>
          <span className="logo-sm">
            <img src="assets/images/logo-dark-sm.png" alt="small logo" />
          </span>
        </a> */}

        {/* Sidebar Hover Menu Toggle Button */}
        <div
          className="button-sm-hover"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Show Full Sidebar"
        >
          <i className="ri-checkbox-blank-circle-line align-middle"></i>
        </div>

        {/* Full Sidebar Menu Close Button */}
        <div className="button-close-fullsidebar">
          <i className="ri-close-fill align-middle"></i>
        </div>

        {/* Sidebar -left */}
        <div className="h-100" id="leftside-menu-container" data-simplebar>
          {/* Leftbar User */}
          <div className="leftbar-user">
            <a href="#">
              <img
                src="assets/images/users/avatar-1.jpg"
                alt="user-image"
                height="42"
                className="rounded-circle shadow-sm"
              />
              <span className="leftbar-user-name mt-2">Dominic Keller</span>
            </a>
          </div>

          {/*- Sidemenu */}
          <ul className="side-nav">
            <li className="side-nav-title">Navigation</li>

            <li className="side-nav-item" onClick={() => navigate("/profile")}>
              <a
                href="#sidebarDashboards"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarDashboards"
                aria-expanded={isOpen}
                aria-controls="sidebarDashboards"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil-home-alt"></i>
                {/* <span className="badge bg-success float-end">5</span> */}
                <span> Dashboards </span>
              </a>
              <div className="collapse" id="sidebarDashboards">
                {/* <ul className="side-nav-second-level">
                  <li>
                    <a href="dashboard-analytics.html">Analytics</a>
                  </li>
                  <li>
                    <a href="index.html">Ecommerce</a>
                  </li>
                  <li>
                    <a href="dashboard-projects.html">Projects</a>
                  </li>
                  <li>
                    <a href="dashboard-crm.html">CRM</a>
                  </li>
                  <li>
                    <a href="dashboard-wallet.html">E-Wallet</a>
                  </li>
                </ul> */}
              </div>
            </li>

            <li className="side-nav-title">Apps</li>

            {/* <li className="side-nav-item">
              <a href="apps-calendar.html" className="side-nav-link">
                <i className="uil-calender"></i>
                <span> Calendar </span>
              </a>
            </li>

            <li className="side-nav-item">
              <a href="apps-chat.html" className="side-nav-link">
                <i className="uil-comments-alt"></i>
                <span> Chat </span>
              </a>
            </li> */}

            {/* CRM */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#sidebarCrm"
                role="button"
                aria-expanded={isOpen}
                aria-controls="sidebarCrm"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil uil-tachometer-fast"></i>
                <span className="badge bg-danger text-white float-end">
                  New
                </span>
                <span> CRM </span>
              </a>
              <div className="collapse" id="sidebarCrm">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Orders List</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                  <li>
                    <a href="#">Management</a>
                  </li>
                </ul>
              </div>
            </li> */}

            {/* Our Sister concern */}
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#sidebarEcommerce"
                aria-expanded={isOpen}
                aria-controls="sidebarEcommerce"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil-store"></i>
                <span> Our Sister Concerns </span>
                {/* <span className="menu-arrow"></span> */}
              </a>
              <div id="sidebarEcommerce">
                <ul className="side-nav-second-level">
                  <li>
                    <a
                      href="https://iconicexpressbd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Iconic Express Limited
                    </a>
                  </li>
                  <li>
                    <a href="#">Iconic Greenland</a>
                  </li>
                  <li>
                    <a
                      href="https://iconicdigitalsolution.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Iconic Digital Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://iconicfurniturebd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Iconic Furniture ltd
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://iconicsoftltd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Iconic Soft Ltd
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://iconictravelsbd.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Iconic Tours & Travels Ltd.
                    </a>
                  </li>
                  <li>
                    <a href="#">Iconic Hajj Group</a>
                  </li>
                  <li>
                    <a href="#">Iconic Holidays</a>
                  </li>
                  <li>
                    <a href="#">Iconic Shikhon</a>
                  </li>
                  <li>
                    <a href="#">Iconic Motors</a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Projects */}
            <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarProjects"
                aria-expanded={isOpen}
                aria-controls="sidebarProjects"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil-briefcase"></i>
                <span> Projects </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarProjects">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="#">Comming Soon..</a>
                  </li>
                  {/* <li>
                    <a href="#">Details</a>
                  </li>
                  <li>
                    <a href="apps-projects-gantt.html">
                      Gantt{" "}
                      <span className="badge rounded-pill bg-light text-dark font-10 float-end">
                        New
                      </span>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="#">Create Project</a>
                  </li> */}
                </ul>
              </div>
            </li>

            {/* Tasks */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                href="#sidebarTasks"
                aria-expanded="false"
                aria-controls="sidebarTasks"
                className="side-nav-link"
              >
                <i className="uil-clipboard-alt"></i>
                <span> Tasks </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarTasks">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="apps-tasks.html">List</a>
                  </li>
                  <li>
                    <a href="apps-tasks-details.html">Details</a>
                  </li>
                  <li>
                    <a href="apps-kanban.html">Kanban Board</a>
                  </li>
                </ul>
              </div>
            </li> */}

            {/* File Manager */}
            {/* <li className="side-nav-item">
              <a href="#" className="side-nav-link">
                <i className="uil-folder-plus"></i>
                <span> File Manager </span>
              </a>
            </li> */}

            {/* <li className="side-nav-title">Custom</li> */}

            {/* pages */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#sidebarPages"
                aria-expanded={isOpen}
                aria-controls="sidebarPages"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil-copy-alt"></i>
                <span> Pages </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarPages">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">Profile 2</a>
                  </li>
                  <li>
                    <a href="#">Invoice</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="pages-maintenance.html">Maintenance</a>
                  </li>
                  <li className="side-nav-item">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarPagesAuth"
                      aria-expanded={isOpen}
                      aria-controls="sidebarPagesAuth"
                    >
                      <span> Authentication </span>
                      <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="sidebarPagesAuth">
                      <ul className="side-nav-third-level">
                        <li>
                          <a href="#">Login</a>
                        </li>
                        <li>
                          <a href="#">Login 2</a>
                        </li>
                        <li>
                          <a href="#">Register</a>
                        </li>
                        <li>
                          <a href="#">Register 2</a>
                        </li>
                        <li>
                          <a href="#">Logout</a>
                        </li>
                        <li>
                          <a href="#">Logout 2</a>
                        </li>
                        <li>
                          <a href="#">Recover Password</a>
                        </li>
                        <li>
                          <a href="pages-recoverpw-2.html">
                            Recover Password 2
                          </a>
                        </li>
                        <li>
                          <a href="#">Lock Screen</a>
                        </li>
                        <li>
                          <a href="#">Lock Screen 2</a>
                        </li>
                        <li>
                          <a href="#">Confirm Mail</a>
                        </li>
                        <li>
                          <a href="#">Confirm Mail 2</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="side-nav-item">
                    <a
                      data-bs-toggle="collapse"
                      data-bs-target="#sidebarPagesError"
                      aria-expanded={isOpen}
                      aria-controls="sidebarPagesError"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <span> Error </span>
                      <span className="menu-arrow"></span>
                    </a>
                    <div className="collapse" id="sidebarPagesError">
                      <ul className="side-nav-third-level">
                        <li>
                          <a href="#">Error 404</a>
                        </li>
                        <li>
                          <a href="#">Error 404-alt</a>
                        </li>
                        <li>
                          <a href="#">Error 500</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Starter Page</a>
                  </li>
                  <li>
                    <a href="#">With Preloader</a>
                  </li>
                  <li>
                    <a href="#">Timeline</a>
                  </li>
                </ul>
              </div>
            </li> */}

            {/* Landing */}
            {/* <li className="side-nav-item">
              <a href="/dashboard" target="_blank" className="side-nav-link">
                <i className="uil-globe"></i>
                <span className="badge bg-secondary text-light float-end">
                  New
                </span>
                <span> Landing </span>
              </a>
            </li> */}

            {/* Projects Maps */}
            {/* <li className="side-nav-item">
              <a
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMaps"
                aria-expanded={isOpen}
                aria-controls="sidebarMaps"
                className="side-nav-link"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="uil-location-point"></i>
                <span>Project Maps </span>
                <span className="menu-arrow"></span>
              </a>
              <div className="collapse" id="sidebarMaps">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="maps-vector.html">City Tower Maps</a>
                  </li>
                </ul>
              </div>
            </li> */}

            {/* user role */}

            {isAdmin && (
              <li
                className="side-nav-item"
                 onClick={() => navigate("/user-roles")}
                 style={{ cursor: 'pointer'}}
              >
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#sidebarUser"
                  aria-expanded={isOpen}
                  aria-controls="sidebarUser"
                  class="side-nav-link"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <i className="uil-clipboard-alt"></i>
                  <span> User Role </span>
                  {/* <span className="menu-arrow"></span> */}
                </a>
                {/* <div className="collapse" id="sidebarUser">
                <ul className="side-nav-second-level">
                  <li>
                    <a href="#">Super Admin</a>
                  </li>
                  <li>
                    <a href="#">Admin</a>
                  </li>
                  <li>
                    <a href="#">User</a>
                  </li>
                </ul>
              </div> */}
              </li>
            )}

            {/* Help Box */}
            {/* <div className="help-box text-white text-center"> */}
            {/* <a
                href="javascript: void(0);"
                className="float-end close-btn text-white"
              >
                <i className="mdi mdi-close"></i>
              </a> */}
            {/* <img
                src="assets/images/svg/help-icon.svg"
                height="90"
                alt="Helper Icon Image"
              /> */}
            {/* <h5 className="mt-3">Unlimited Access</h5>
              <p className="mb-3">
                Upgrade to plan to get access to unlimited reports
              </p>
              <a
                href="javascript: void(0);"
                className="btn btn-secondary btn-sm"
              >
                Upgrade
              </a> */}
            {/* </div> */}
            {/* end Help Box */}
          </ul>
          {/*- End Sidemenu */}

          <div className="clearfix"></div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
