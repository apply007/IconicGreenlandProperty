import Footer from "../components/Footer";
import MainLayout from "./layoutpage/MainLayout";
import { useEffect } from "react";

const Home = ({ onLogout, sidebarCollapsed }) => {
  const MyChart = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <>
        {" "}
        <body>
          {/* <!-- Begin page --> */}
          <div className="wrapper">
            <MainLayout
              user={user}
              onLogout={onLogout}
              sidebarCollapsed={sidebarCollapsed}
            />

            {/* <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== --> */}

            <div className="content-page">
              <div className="content">
                {/* <!-- Start Content--> */}
                <div className="container-fluid">
                  {/* <!-- start page title --> */}
                  <div className="row">
                    <div className="col-12">
                      <div className="page-title-box">
                        <div className="page-title-right">
                          <ol className="breadcrumb m-0">
                            {/* <li className="breadcrumb-item">
                            <a href="javascript: void(0);">Hyper</a>
                          </li> */}
                            <li className="breadcrumb-item">
                              <a href="javascript: void(0);">Dashboard</a>
                            </li>
                            <li className="breadcrumb-item active">Projects</li>
                          </ol>
                        </div>
                        <h4 className="page-title">
                          Dashboard/
                          {user?.roles[0]?.name?.toLowerCase() === "chairman"
                            ? "Chairman"
                            : user?.roles[0]?.name?.toLowerCase() === "md"
                            ? "MD"
                            : user?.roles[0]?.name?.toLowerCase() === "director"
                            ? "Director"
                            : user?.roles[0]?.name?.toLowerCase() === "co"
                            ? "CO"
                            : ""}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end page title --> */}

                  <div className="row">
                    <div className="col-12">
                      <div className="card widget-inline">
                        <div className="card-body p-0">
                          <div className="row g-0">
                            <div className="col-sm-6 col-lg-3">
                              <div className="card rounded-0 shadow-none m-0">
                                <div className="card-body text-center">
                                  <i className="ri-briefcase-line text-muted font-24"></i>
                                  <h3>
                                    <span>29</span>
                                  </h3>
                                  <p className="text-muted font-15 mb-0">
                                    Total Projects
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                              <div className="card rounded-0 shadow-none m-0 border-start border-light">
                                <div className="card-body text-center">
                                  <i className="ri-list-check-2 text-muted font-24"></i>
                                  <h3>
                                    <span>715</span>
                                  </h3>
                                  <p className="text-muted font-15 mb-0">
                                    Total Tasks
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                              <div className="card rounded-0 shadow-none m-0 border-start border-light">
                                <div className="card-body text-center">
                                  <i className="ri-group-line text-muted font-24"></i>
                                  <h3>
                                    <span>31</span>
                                  </h3>
                                  <p className="text-muted font-15 mb-0">
                                    Members
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                              <div className="card rounded-0 shadow-none m-0 border-start border-light">
                                <div className="card-body text-center">
                                  <i className="ri-line-chart-line text-muted font-24"></i>
                                  <h3>
                                    <span>93%</span>{" "}
                                    <i className="mdi mdi-arrow-up text-success"></i>
                                  </h3>
                                  <p className="text-muted font-15 mb-0">
                                    Productivity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row --> */}
                        </div>
                      </div>
                      {/* <!-- end card-box--> */}
                    </div>
                    {/* <!-- end col--> */}
                  </div>
                  {/* <!-- end row--> */}

                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="header-title">Project Status</h4>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle arrow-none card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Weekly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Monthly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Action
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="card-body pt-0">
                          <div
                            className="mt-3 mb-4 chartjs-chart"
                            style={{ height: "204px" }}
                          >
                            <canvas
                              id="project-status-chart"
                              data-colors="#0acf97,#727cf5,#fa5c7c"
                            ></canvas>
                          </div>

                          <div className="row text-center mt-2 py-2">
                            <div className="col-sm-4">
                              <div className="my-2 my-sm-0">
                                <i className="mdi mdi-trending-up text-success mt-3 h3"></i>
                                <h3 className="fw-normal">
                                  <span>64%</span>
                                </h3>
                                <p className="text-muted mb-0">Completed</p>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="my-2 my-sm-0">
                                <i className="mdi mdi-trending-down text-primary mt-3 h3"></i>
                                <h3 className="fw-normal">
                                  <span>26%</span>
                                </h3>
                                <p className="text-muted mb-0"> In-progress</p>
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="my-2 my-sm-0">
                                <i className="mdi mdi-trending-down text-danger mt-3 h3"></i>
                                <h3 className="fw-normal">
                                  <span>10%</span>
                                </h3>
                                <p className="text-muted mb-0"> Behind</p>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end row--> */}
                        </div>
                        {/* <!-- end card body--> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}

                    <div className="col-lg-8">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="header-title">Tasks</h4>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle arrow-none card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Weekly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Monthly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Action
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-header bg-light-lighten border-top border-bottom border-light py-1 text-center">
                          <p className="m-0">
                            <b>107</b> Tasks completed out of 195
                          </p>
                        </div>
                        <div className="card-body pt-2">
                          <div className="table-responsive">
                            <table className="table table-centered table-nowrap table-hover mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <h5 className="font-14 my-1">
                                      <a href="#" className="text-body">
                                        Coffee detail page - Main Page
                                      </a>
                                    </h5>
                                    <span className="text-muted font-13">
                                      Due in 3 days
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Status
                                    </span>{" "}
                                    <br />
                                    <span className="badge badge-warning-lighten">
                                      In-progress
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Assigned to
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      Logan R. Cohn
                                    </h5>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Total time spend
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      3h 20min
                                    </h5>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "90px" }}
                                  >
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-pencil"></i>
                                    </a>
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-delete"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h5 className="font-14 my-1">
                                      <a href="#" className="text-body">
                                        Drinking bottle graphics
                                      </a>
                                    </h5>
                                    <span className="text-muted font-13">
                                      Due in 27 days
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Status
                                    </span>{" "}
                                    <br />
                                    <span className="badge badge-danger-lighten">
                                      Outdated
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Assigned to
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      Jerry F. Powell
                                    </h5>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Total time spend
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      12h 21min
                                    </h5>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "90px" }}
                                  >
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-pencil"></i>
                                    </a>
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-delete"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h5 className="font-14 my-1">
                                      <a href="#" className="text-body">
                                        App design and development
                                      </a>
                                    </h5>
                                    <span className="text-muted font-13">
                                      Due in 7 days
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Status
                                    </span>{" "}
                                    <br />
                                    <span className="badge badge-success-lighten">
                                      Completed
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Assigned to
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      Scot M. Smith
                                    </h5>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Total time spend
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      78h 05min
                                    </h5>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "90px" }}
                                  >
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-pencil"></i>
                                    </a>
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-delete"></i>
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h5 className="font-14 my-1">
                                      <a href="#" className="text-body">
                                        Poster illustation design
                                      </a>
                                    </h5>
                                    <span className="text-muted font-13">
                                      Due in 5 days
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Status
                                    </span>{" "}
                                    <br />
                                    <span className="badge badge-warning-lighten">
                                      In-progress
                                    </span>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Assigned to
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      John P. Ritter
                                    </h5>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Total time spend
                                    </span>
                                    <h5 className="font-14 mt-1 fw-normal">
                                      26h 58min
                                    </h5>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "90px" }}
                                  >
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-pencil"></i>
                                    </a>
                                    <a
                                      href="javascript: void(0);"
                                      className="action-icon"
                                    >
                                      {" "}
                                      <i className="mdi mdi-delete"></i>
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* <!-- end table-responsive--> */}
                        </div>
                        {/* <!-- end card body--> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                  </div>
                  {/* <!-- end row--> */}

                  <div className="row">
                    <div className="col-12">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="header-title">Tasks Overview</h4>
                          <div>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              ALL
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-primary btn-sm"
                            >
                              1M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              6M
                            </button>
                            <button
                              type="button"
                              className="btn btn-soft-secondary btn-sm"
                            >
                              1Y
                            </button>
                          </div>
                        </div>

                        <div className="card-body">
                          <div dir="ltr">
                            <div
                              className="chartjs-chart"
                              style={{ height: "320px" }}
                            >
                              <canvas
                                id="task-area-chart"
                                data-bgColor="#727cf5"
                                data-borderColor="#727cf5"
                              ></canvas>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card body--> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                  </div>
                  {/* <!-- end row--> */}

                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="header-title">Recent Activities</h4>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle arrow-none card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Weekly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Monthly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Action
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="card-body pt-0">
                          <div className="table-responsive">
                            <table className="table table-centered table-nowrap table-hover mb-0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex align-items-start">
                                      <img
                                        className="me-2 rounded-circle"
                                        src="assets/images/users/avatar-2.jpg"
                                        width="40"
                                        alt="Generic placeholder image"
                                      />
                                      <div>
                                        <h5 className="mt-0 mb-1">
                                          Soren Drouin
                                          <small className="fw-normal ms-3">
                                            18 Jan 2019 11:28 pm
                                          </small>
                                        </h5>
                                        <span className="font-13">
                                          Completed "Design new idea"...
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>{" "}
                                    <br />
                                    <p className="mb-0">Hyper Mockup</p>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "50px" }}
                                  >
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle arrow-none card-drop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Settings
                                        </a>
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Action
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-start">
                                      <img
                                        className="me-2 rounded-circle"
                                        src="assets/images/users/avatar-6.jpg"
                                        width="40"
                                        alt="Generic placeholder image"
                                      />
                                      <div>
                                        <h5 className="mt-0 mb-1">
                                          Anne Simard
                                          <small className="fw-normal ms-3">
                                            18 Jan 2019 11:09 pm
                                          </small>
                                        </h5>
                                        <span className="font-13">
                                          Assigned task "Poster illustation
                                          design"...
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>{" "}
                                    <br />
                                    <p className="mb-0">Hyper Mockup</p>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "50px" }}
                                  >
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle arrow-none card-drop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Settings
                                        </a>
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Action
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-start">
                                      <img
                                        className="me-2 rounded-circle"
                                        src="assets/images/users/avatar-3.jpg"
                                        width="40"
                                        alt="Generic placeholder image"
                                      />
                                      <div>
                                        <h5 className="mt-0 mb-1">
                                          Nicolas Chartier
                                          <small className="fw-normal ms-3">
                                            15 Jan 2019 09:29 pm
                                          </small>
                                        </h5>
                                        <span className="font-13">
                                          Completed "Drinking bottle
                                          graphics"...
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>{" "}
                                    <br />
                                    <p className="mb-0">Web UI Design</p>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "50px" }}
                                  >
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle arrow-none card-drop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Settings
                                        </a>
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Action
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-start">
                                      <img
                                        className="me-2 rounded-circle"
                                        src="assets/images/users/avatar-4.jpg"
                                        width="40"
                                        alt="Generic placeholder image"
                                      />
                                      <div>
                                        <h5 className="mt-0 mb-1">
                                          Gano Cloutier
                                          <small className="fw-normal ms-3">
                                            10 Jan 2019 08:36 pm
                                          </small>
                                        </h5>
                                        <span className="font-13">
                                          Completed "Design new idea"...
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>{" "}
                                    <br />
                                    <p className="mb-0">UBold Admin</p>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "50px" }}
                                  >
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle arrow-none card-drop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Settings
                                        </a>
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Action
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex align-items-start">
                                      <img
                                        className="me-2 rounded-circle"
                                        src="assets/images/users/avatar-5.jpg"
                                        width="40"
                                        alt="Generic placeholder image"
                                      />
                                      <div>
                                        <h5 className="mt-0 mb-1">
                                          Francis Achin
                                          <small className="fw-normal ms-3">
                                            08 Jan 2019 12:28 pm
                                          </small>
                                        </h5>
                                        <span className="font-13">
                                          Assigned task "Hyper app design"...
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <span className="text-muted font-13">
                                      Project
                                    </span>{" "}
                                    <br />
                                    <p className="mb-0">Website Mockup</p>
                                  </td>
                                  <td
                                    className="table-action"
                                    style={{ width: "50px" }}
                                  >
                                    <div className="dropdown">
                                      <a
                                        href="#"
                                        className="dropdown-toggle arrow-none card-drop"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                      >
                                        <i className="mdi mdi-dots-horizontal"></i>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Settings
                                        </a>
                                        {/* <!-- item--> */}
                                        <a href="#" className="dropdown-item">
                                          Action
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* <!-- end table-responsive--> */}
                        </div>
                        {/* <!-- end card body--> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}

                    <div className="col-xl-7">
                      <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h4 className="header-title">Your Calendar</h4>
                          <div className="dropdown">
                            <a
                              href="#"
                              className="dropdown-toggle arrow-none card-drop"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="mdi mdi-dots-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Weekly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Monthly Report
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Action
                              </a>
                              {/* <!-- item--> */}
                              <a href="#" className="dropdown-item">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="card-body pt-0">
                          <div className="row">
                            <div className="col-md-7">
                              <div
                                data-provide="datepicker-inline"
                                data-date-today-highlight="true"
                                className="calendar-widget"
                              ></div>
                            </div>
                            {/* <!-- end col--> */}
                            <div className="col-md-5">
                              <ul className="list-unstyled mt-1">
                                <li className="mb-4">
                                  <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 7:30 AM
                                    - 10:00 AM
                                  </p>
                                  <h5>Meeting with BD Team</h5>
                                </li>
                                <li className="mb-4">
                                  <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 10:30
                                    AM - 11:45 AM
                                  </p>
                                  <h5>Design Review - Hyper Admin</h5>
                                </li>
                                <li className="mb-4">
                                  <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 12:15
                                    PM - 02:00 PM
                                  </p>
                                  <h5>Setup Github Repository</h5>
                                </li>
                                <li>
                                  <p className="text-muted mb-1 font-13">
                                    <i className="mdi mdi-calendar"></i> 5:30 PM
                                    - 07:00 PM
                                  </p>
                                  <h5>Meeting with Design Studio</h5>
                                </li>
                              </ul>
                            </div>
                            {/* <!-- end col --> */}
                          </div>
                          {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end card body--> */}
                      </div>
                      {/* <!-- end card --> */}
                    </div>
                    {/* <!-- end col--> */}
                  </div>
                  {/* <!-- end row--> */}
                </div>
                {/* <!-- container --> */}
              </div>
              {/* <!-- content --> */}

              {/* <!-- Footer Start --> */}
              <Footer />
              {/* <!-- end Footer --> */}
            </div>

            {/* <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== --> */}
          </div>
          {/* <!-- END wrapper --> */}

          {/* <!-- Theme Settings --> */}
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="theme-settings-offcanvas"
          >
            <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
              <h5 className="text-white m-0">Theme Settings</h5>
              <button
                type="button"
                className="btn-close btn-close-white ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body p-0">
              <div data-simplebar className="h-100">
                <div className="card mb-0 p-3">
                  <h5 className="mt-0 font-16 fw-bold mb-3">Choose Layout</h5>
                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio">
                        <input
                          id="customizer-layout01"
                          name="data-layout"
                          type="radio"
                          value="vertical"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label p-0 avatar-md w-100"
                          for="customizer-layout01"
                        >
                          <span className="d-flex h-100">
                            <span className="flex-shrink-0">
                              <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                              </span>
                            </span>
                            <span className="flex-grow-1">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-block p-1"></span>
                              </span>
                            </span>
                          </span>
                        </label>
                      </div>
                      <h5 className="font-14 text-center text-muted mt-2">
                        Vertical
                      </h5>
                    </div>
                    <div className="col-4">
                      <div className="form-check card-radio">
                        <input
                          id="customizer-layout02"
                          name="data-layout"
                          type="radio"
                          value="horizontal"
                          className="form-check-input"
                        />
                        <label
                          className="form-check-label p-0 avatar-md w-100"
                          for="customizer-layout02"
                        >
                          <span className="d-flex h-100 flex-column">
                            <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                              <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                              <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                              <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                              <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                              <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                            </span>
                            <span className="bg-light d-block p-1"></span>
                          </span>
                        </label>
                      </div>
                      <h5 className="font-14 text-center text-muted mt-2">
                        Horizontal
                      </h5>
                    </div>
                  </div>

                  <h5 className="my-3 font-16 fw-bold">Color Scheme</h5>

                  <div className="colorscheme-cardradio">
                    <div className="row">
                      <div className="col-4">
                        <div className="form-check card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-bs-theme"
                            id="layout-color-light"
                            value="light"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="layout-color-light"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column bg-white rounded-2">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div
                              id="topnav-color"
                              className="bg-white rounded-2 h-100"
                            >
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span className="d-flex h-100 flex-column bg-white rounded-2">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Light
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-bs-theme"
                            id="layout-color-dark"
                            value="dark"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100 bg-black"
                            for="layout-color-dark"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-secondary border-opacity-25 border-3 rounded w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div id="topnav-color">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light-lighten d-flex p-1 align-items-center border-bottom border-opacity-25 border-primary border-opacity-25">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-auto"></span>
                                  <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                  <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                  <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                </span>
                                <span className="bg-light-lighten d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Dark
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div id="layout-width">
                    <h5 className="my-3 font-16 fw-bold">Layout Mode</h5>

                    <div className="row">
                      <div className="col-4">
                        <div className="form-check card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-layout-mode"
                            id="layout-mode-fluid"
                            value="fluid"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="layout-mode-fluid"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column rounded-2">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div id="topnav-color">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span className="bg-light d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Fluid
                        </h5>
                      </div>
                      <div className="col-4" id="layout-boxed">
                        <div className="form-check card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-layout-mode"
                            id="layout-mode-boxed"
                            value="boxed"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100 px-2"
                            for="layout-mode-boxed"
                          >
                            <div
                              id="sidebar-size"
                              className="border-start border-end"
                            >
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column rounded-2">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div
                              id="topnav-color"
                              className="border-start border-end h-100"
                            >
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span className="bg-light d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Boxed
                        </h5>
                      </div>

                      <div className="col-4" id="layout-detached">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-layout-mode"
                            id="data-layout-detached"
                            value="detached"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="data-layout-detached"
                          >
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-light d-flex p-1 align-items-center border-bottom ">
                                <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                              </span>
                              <span className="d-flex h-100 p-1 px-2">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 flex-column p-1 px-2">
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100"></span>
                                  </span>
                                </span>
                              </span>
                              <span className="bg-light d-block p-1 mt-auto px-2"></span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Detached
                        </h5>
                      </div>
                    </div>
                  </div>

                  <h5 className="my-3 font-16 fw-bold">Topbar Color</h5>

                  <div className="row">
                    <div className="col-4">
                      <div className="form-check card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-topbar-color"
                          id="topbar-color-light"
                          value="light"
                        />
                        <label
                          className="form-check-label p-0 avatar-md w-100"
                          for="topbar-color-light"
                        >
                          <div id="sidebar-size">
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </div>

                          <div id="topnav-color">
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                              </span>
                              <span className="bg-light d-block p-1"></span>
                            </span>
                          </div>
                        </label>
                      </div>
                      <h5 className="font-14 text-center text-muted mt-2">
                        Light
                      </h5>
                    </div>

                    <div
                      className="col-4"
                      style={{ "--ct-dark-rgb": "64,73,84" }}
                    >
                      <div className="form-check card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-topbar-color"
                          id="topbar-color-dark"
                          value="dark"
                        />
                        <label
                          className="form-check-label p-0 avatar-md w-100"
                          for="topbar-color-dark"
                        >
                          <div id="sidebar-size">
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                  <span className="d-block p-1 bg-primary-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-dark d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </div>

                          <div id="topnav-color">
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-dark d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                <span className="d-block p-1 bg-primary-lighten rounded me-1"></span>
                                <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-auto"></span>
                                <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                                <span className="d-block border border-primary border-opacity-25 border-3 rounded ms-1"></span>
                              </span>
                              <span className="bg-light d-block p-1"></span>
                            </span>
                          </div>
                        </label>
                      </div>
                      <h5 className="font-14 text-center text-muted mt-2">
                        Dark
                      </h5>
                    </div>

                    <div className="col-4">
                      <div className="form-check card-radio">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="data-topbar-color"
                          id="topbar-color-brand"
                          value="brand"
                        />
                        <label
                          className="form-check-label p-0 avatar-md w-100"
                          for="topbar-color-brand"
                        >
                          <div id="sidebar-size">
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-primary bg-gradient d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </div>

                          <div id="topnav-color">
                            <span className="d-flex h-100 flex-column">
                              <span className="bg-primary bg-gradient d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                <span className="d-block p-1 bg-light opacity-25 rounded me-1"></span>
                                <span className="d-block border border-3 border opacity-25 rounded ms-auto"></span>
                                <span className="d-block border border-3 border opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border opacity-25 rounded ms-1"></span>
                                <span className="d-block border border-3 border opacity-25 rounded ms-1"></span>
                              </span>
                              <span className="bg-light d-block p-1"></span>
                            </span>
                          </div>
                        </label>
                      </div>
                      <h5 className="font-14 text-center text-muted mt-2">
                        Brand
                      </h5>
                    </div>
                  </div>

                  <div>
                    <h5 className="my-3 font-16 fw-bold">Menu Color</h5>

                    <div className="row">
                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-menu-color"
                            id="leftbar-color-light"
                            value="light"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-color-light"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div id="topnav-color">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span className="bg-light d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Light
                        </h5>
                      </div>

                      <div
                        className="col-4"
                        style={{ "--ct-dark-rgb": "64,73,84" }}
                      >
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-menu-color"
                            id="leftbar-color-dark"
                            value="dark"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-color-dark"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-dark d-flex h-100 flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                    <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                    <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                    <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                    <span className="d-block border border-secondary rounded border-opacity-25 border-3 w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div id="topnav-color">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-primary border-opacity-25">
                                  <span className="d-block p-1 bg-primary-lighten rounded me-1"></span>
                                  <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-auto"></span>
                                  <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                  <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                  <span className="d-block border border-secondary rounded border-opacity-25 border-3 ms-1"></span>
                                </span>
                                <span className="bg-dark d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Dark
                        </h5>
                      </div>
                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-menu-color"
                            id="leftbar-color-brand"
                            value="brand"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-color-brand"
                          >
                            <div id="sidebar-size">
                              <span className="d-flex h-100">
                                <span className="flex-shrink-0">
                                  <span className="bg-primary bg-gradient d-flex h-100 flex-column p-1 px-2">
                                    <span className="d-block p-1 bg-light-lighten rounded mb-1"></span>
                                    <span className="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                    <span className="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                    <span className="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                    <span className="d-block border opacity-25 rounded border-3 w-100 mb-1"></span>
                                  </span>
                                </span>
                                <span className="flex-grow-1">
                                  <span className="d-flex h-100 flex-column">
                                    <span className="bg-light d-block p-1"></span>
                                  </span>
                                </span>
                              </span>
                            </div>

                            <div id="topnav-color">
                              <span className="d-flex h-100 flex-column">
                                <span className="bg-light d-flex p-1 align-items-center border-bottom border-secondary">
                                  <span className="d-block p-1 bg-dark-lighten rounded me-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span className="bg-primary bg-gradient d-block p-1"></span>
                              </span>
                            </div>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Brand
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div id="sidebar-size">
                    <h5 className="my-3 font-16 fw-bold">Sidebar Size</h5>

                    <div className="row">
                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-default"
                            value="default"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-default"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Default
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-compact"
                            value="compact"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-compact"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="bg-light d-flex h-100 border-end  flex-column p-1">
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Compact
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-small"
                            value="condensed"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-small"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span
                                  className="bg-light d-flex h-100 border-end flex-column"
                                  style={{ padding: "2px" }}
                                >
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Condensed
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-small-hover"
                            value="sm-hover"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-small-hover"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span
                                  className="bg-light d-flex h-100 border-end flex-column"
                                  style={{ padding: "2px" }}
                                >
                                  <span className="d-block p-1 bg-dark-lighten rounded mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                  <span className="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Hover View
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-full"
                            value="full"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-full"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-shrink-0">
                                <span className="d-flex h-100 flex-column">
                                  <span className="d-block p-1 bg-dark-lighten mb-1"></span>
                                </span>
                              </span>
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Full Layout
                        </h5>
                      </div>

                      <div className="col-4">
                        <div className="form-check sidebar-setting card-radio">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="data-sidenav-size"
                            id="leftbar-size-fullscreen"
                            value="fullscreen"
                          />
                          <label
                            className="form-check-label p-0 avatar-md w-100"
                            for="leftbar-size-fullscreen"
                          >
                            <span className="d-flex h-100">
                              <span className="flex-grow-1">
                                <span className="d-flex h-100 flex-column">
                                  <span className="bg-light d-block p-1"></span>
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                        <h5 className="font-14 text-center text-muted mt-2">
                          Fullscreen Layout
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div id="layout-position">
                    <h5 className="my-3 font-16 fw-bold">Layout Position</h5>

                    <div className="btn-group radio" role="group">
                      <input
                        type="radio"
                        className="btn-check"
                        name="data-layout-position"
                        id="layout-position-fixed"
                        value="fixed"
                      />
                      <label
                        className="btn btn-soft-primary w-sm"
                        for="layout-position-fixed"
                      >
                        Fixed
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="data-layout-position"
                        id="layout-position-scrollable"
                        value="scrollable"
                      />
                      <label
                        className="btn btn-soft-primary w-sm ms-0"
                        for="layout-position-scrollable"
                      >
                        Scrollable
                      </label>
                    </div>
                  </div>

                  <div id="sidebar-user">
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <label
                        className="font-16 fw-bold m-0"
                        for="sidebaruser-check"
                      >
                        Sidebar User Info
                      </label>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name="sidebar-user"
                          id="sidebaruser-check"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-footer border-top p-3 text-center">
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-light w-100"
                    id="reset-layout"
                  >
                    Reset
                  </button>
                </div>
                <div className="col-6">
                  <a
                    href="https://themes.getbootstrap.com/product/hyper-responsive-admin-dashboard-template/"
                    target="_blank"
                    role="button"
                    className="btn btn-primary w-100"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor js */}
        <script src="assets/js/vendor.min.js"></script>

        {/* Apex  Charts js */}
        <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>

        {/* Todo js */}
        <script src="assets/js/ui/component.todo.js"></script>

        {/* CRM Dashboard Demo App Js */}
        <script src="assets/js/pages/demo.crm-dashboard.js"></script>

        {/* App js */}
        <script src="assets/js/app.min.js"></script>
        </body>
      </>
    );
  };

  return <MyChart />;
};

export default Home;
