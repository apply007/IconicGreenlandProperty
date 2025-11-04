import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import MainLayout from "../layoutpage/MainLayout";
import Footer from "../../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = ({ onLogout, user, sidebarCollapsed }) => {
  return (
    <>
      <body>
        {/* Begin page */}
        <div className="wrapper">
          {/* TopNavBar */}

          {/* <TopNavBar user={user} onLogout={handleLogout} /> */}
          {/* End TopNavBar */}

          {/* ========== Left Sidebar Start ========== */}
          {/* <LeftSideBar collapsed={sidebarCollapsed} user={user} /> */}
          {/* Left Sidebar End */}

          <MainLayout
            user={user}
            onLogout={onLogout}
            sidebarCollapsed={sidebarCollapsed}
          />

          {/* ============================================================== */}
          {/* Start Page Content here */}
          {/* ============================================================== */}

          <div className="content-page">
            <div className="content">
              {/* Start Content*/}
              <div className="container-fluid">
                {/* start page title */}
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box">
                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item">
                            <a href="#">DASHBOARD</a>
                          </li>
                          <li className="breadcrumb-item">
                            <a href="#">CRM</a>
                          </li>
                          <li className="breadcrumb-item active">CRM</li>
                        </ol>
                      </div>
                      <h4 className="page-title">DASHBOARD</h4>
                    </div>
                  </div>
                </div>
                {/* end page title */}

                <div className="row">
                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h5
                              className="text-muted fw-normal mt-0 text-truncate"
                              title="Campaign Sent"
                            >
                              UPCOMING PAYMENT NEXT 7 DAYS
                            </h5>
                            <h3 className="my-2 py-1">9,184 BDT</h3>
                            <p className="mb-0 text-muted">
                              <span className="text-success me-2">
                                <i className="mdi mdi-arrow-up-bold"></i> 3.27%
                              </span>
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="text-end">
                              <div
                                id="campaign-sent-chart"
                                data-colors="#727cf5"
                              ></div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end row*/}
                      </div>{" "}
                      {/* end card-body */}
                    </div>{" "}
                    {/* end card */}
                  </div>{" "}
                  {/* end col */}
                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h5
                              className="text-muted fw-normal mt-0 text-truncate"
                              title="New Leads"
                            >
                              New Leads
                            </h5>
                            <h3 className="my-2 py-1">3,254</h3>
                            <p className="mb-0 text-muted">
                              <span className="text-danger me-2">
                                <i className="mdi mdi-arrow-down-bold"></i>{" "}
                                5.38%
                              </span>
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="text-end">
                              <div
                                id="new-leads-chart"
                                data-colors="#0acf97"
                              ></div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end row*/}
                      </div>{" "}
                      {/* end card-body */}
                    </div>{" "}
                    {/* end card */}
                  </div>{" "}
                  {/* end col */}
                  <div className="col-md-6 col-xl-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h5
                              className="text-muted fw-normal mt-0 text-truncate uppercase"
                              title="Deals"
                            >
                              OVERDUE PAYMENT COUNT
                            </h5>
                            <h3 className="my-2 py-1">86100 BDT</h3>
                            <p className="mb-0 text-muted">
                              <span className="text-success me-2">
                                <i className="mdi mdi-arrow-up-bold"></i> 4.87%
                              </span>
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="text-end">
                              <div id="deals-chart" data-colors="#727cf5"></div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end row*/}
                      </div>{" "}
                      {/* end card-body */}
                    </div>{" "}
                    {/* end card */}
                  </div>{" "}
                  {/* end col */}
                  <div className="col-md-6 col-xl-3 d-none">
                    <div className="card">
                      <div className="card-body">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h5
                              className="text-muted fw-normal mt-0 text-truncate"
                              title="Booked Revenue"
                            >
                              Pending Payment
                            </h5>
                            <h3 className="my-2 py-1">2,53,000 BDT</h3>
                            <p className="mb-0 text-muted">
                              <span className="text-success me-2">
                                <i className="mdi mdi-arrow-up-bold"></i> 11.7%
                              </span>
                            </p>
                          </div>
                          <div className="col-6">
                            <div className="text-end">
                              <div
                                id="booked-revenue-chart"
                                data-colors="#0acf97"
                              ></div>
                            </div>
                          </div>
                        </div>{" "}
                        {/* end row*/}
                      </div>{" "}
                      {/* end card-body */}
                    </div>{" "}
                    {/* end card */}
                  </div>{" "}
                  {/* end col */}
                </div>
                {/* end row */}

                <div className="row">
                  <div className="col-lg-5">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="header-title">Total Units Sold</h4>
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
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Today
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Yesterday
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Last Week
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Last Month
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div
                          id="dash-campaigns-chart"
                          className="apex-charts"
                          data-colors="#ffbc00,#727cf5,#0acf97"
                        ></div>

                        <div className="row text-center mt-3">
                          {/* <div className="col-sm-4">
                            <i className="mdi mdi-send widget-icon rounded-circle bg-warning-lighten text-warning"></i>
                            <h3 className="fw-normal mt-3">
                              <span>6,510</span>
                            </h3>
                            <p className="text-muted mb-0 mb-2">
                              <i className="mdi mdi-checkbox-blank-circle text-warning"></i>{" "}
                              Total Sent
                            </p>
                          </div> */}
                          {/* <div className="col-sm-4">
                            <i className="mdi mdi-flag-variant widget-icon rounded-circle bg-primary-lighten text-primary"></i>
                            <h3 className="fw-normal mt-3">
                              <span>3,487</span>
                            </h3>
                            <p className="text-muted mb-0 mb-2">
                              <i className="mdi mdi-checkbox-blank-circle text-primary"></i>{" "}
                              Reached
                            </p>
                          </div> */}
                          <div className="col-sm-12">
                            {/* <i className="mdi mdi-email-open widget-icon rounded-circle bg-success-lighten text-success"></i> */}
                            <h3 className="fw-normal mt-3">
                              <span>1,568 BDT</span>
                            </h3>
                            {/* <p className="text-muted mb-0 mb-2">
                              <i className="mdi mdi-checkbox-blank-circle text-success"></i>{" "}
                              23% 
                            </p> */}
                          </div>
                        </div>
                      </div>
                      {/* end card body*/}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col*/}

                  <div className="col-lg-7">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="header-title">Total Revenue</h4>
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
                            1Month
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            6Months
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            1Year
                          </button>
                        </div>
                      </div>

                      <div className="card-body pt-0">
                        <div className="chart-content-bg">
                          <div className="row text-center">
                            <div className="col-sm-6">
                              <p className="text-muted mb-0 mt-3">
                                Current Month
                              </p>
                              <h2 className="fw-normal mb-3">
                                <span>42,025 BDT</span>
                              </h2>
                            </div>
                            <div className="col-sm-6">
                              <p className="text-muted mb-0 mt-3">
                                Previous Month
                              </p>
                              <h2 className="fw-normal mb-3">
                                <span>74,651 BDT</span>
                              </h2>
                            </div>
                          </div>
                        </div>

                        <div dir="ltr">
                          <div
                            id="dash-revenue-chart"
                            className="apex-charts"
                            data-colors="#0acf97,#fa5c7c"
                          ></div>
                        </div>
                      </div>
                      {/* end card body*/}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col*/}
                </div>
                {/* end row*/}

                <div className="row">
                  <div className="col-xl-4 col-lg-12">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="header-title">Inventory Overview</h4>
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
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Settings
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Action
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="table-responsive">
                          <table className="table table-striped table-sm table-nowrap table-centered mb-0">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>Leads</th>
                                <th>Deals</th>
                                <th>Tasks</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <h5 className="font-15 mb-1 fw-normal">
                                    Jeremy Young
                                  </h5>
                                  <span className="text-muted font-13">
                                    Senior Sales Executive
                                  </span>
                                </td>
                                <td>187</td>
                                <td>154</td>
                                <td>49</td>
                                <td className="table-action">
                                  <a href="#" className="action-icon">
                                    {" "}
                                    <i className="mdi mdi-eye"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h5 className="font-15 mb-1 fw-normal">
                                    Thomas Krueger
                                  </h5>
                                  <span className="text-muted font-13">
                                    Senior Sales Executive
                                  </span>
                                </td>
                                <td>235</td>
                                <td>127</td>
                                <td>83</td>
                                <td className="table-action">
                                  <a href="#" className="action-icon">
                                    {" "}
                                    <i className="mdi mdi-eye"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h5 className="font-15 mb-1 fw-normal">
                                    Pete Burdine
                                  </h5>
                                  <span className="text-muted font-13">
                                    Senior Sales Executive
                                  </span>
                                </td>
                                <td>365</td>
                                <td>148</td>
                                <td>62</td>
                                <td className="table-action">
                                  <a href="#" className="action-icon">
                                    {" "}
                                    <i className="mdi mdi-eye"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h5 className="font-15 mb-1 fw-normal">
                                    Mary Nelson
                                  </h5>
                                  <span className="text-muted font-13">
                                    Senior Sales Executive
                                  </span>
                                </td>
                                <td>753</td>
                                <td>159</td>
                                <td>258</td>
                                <td className="table-action">
                                  <a href="#" className="action-icon">
                                    {" "}
                                    <i className="mdi mdi-eye"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <h5 className="font-15 mb-1 fw-normal">
                                    Kevin Grove
                                  </h5>
                                  <span className="text-muted font-13">
                                    Senior Sales Executive
                                  </span>
                                </td>
                                <td>458</td>
                                <td>126</td>
                                <td>73</td>
                                <td className="table-action">
                                  <a href="#" className="action-icon">
                                    {" "}
                                    <i className="mdi mdi-eye"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>{" "}
                        {/* end table-responsive*/}
                      </div>{" "}
                      {/* end card-body*/}
                    </div>{" "}
                    {/* end card*/}
                  </div>
                  {/* end col*/}

                  <div className="col-xl-4 col-lg-6">
                    <div className="card">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h4 className="header-title">Top 5 Agents by Sales</h4>
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
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Settings
                            </a>
                            {/* item*/}
                            <a
                              href="#"
                              className="dropdown-item"
                            >
                              Action
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-body pt-2">
                        <div className="d-flex align-items-start">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-2.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-warning-lighten float-end">
                              lead
                            </span>
                            <h5 className="mt-0 mb-1">Risa Pearson</h5>
                            <span className="font-13">
                              richard.john@mail.com
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mt-3">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-3.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-danger-lighten float-end">
                              Lost lead
                            </span>
                            <h5 className="mt-0 mb-1">Margaret D. Evans</h5>
                            <span className="font-13">
                              margaret.evans@rhyta.com
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mt-3">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-4.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-success-lighten float-end">
                              Won lead
                            </span>
                            <h5 className="mt-0 mb-1">Bryan J. Luellen</h5>
                            <span className="font-13">
                              bryuellen@dayrep.com
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mt-3">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-5.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-warning-lighten float-end">
                              Cold lead
                            </span>
                            <h5 className="mt-0 mb-1">Kathryn S. Collier</h5>
                            <span className="font-13">
                              collier@jourrapide.com
                            </span>
                          </div>
                        </div>

                        <div className="d-flex align-items-start mt-3">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-1.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-warning-lighten float-end">
                              Cold lead
                            </span>
                            <h5 className="mt-0 mb-1">Timothy Kauper</h5>
                            <span className="font-13">thykauper@rhyta.com</span>
                          </div>
                        </div>

                        {/* <div className="d-flex align-items-start mt-3">
                          <img
                            className="me-3 rounded-circle"
                            src="assets/images/users/avatar-6.jpg"
                            width="40"
                            alt="Generic placeholder image"
                          />
                          <div className="w-100 overflow-hidden">
                            <span className="badge badge-success-lighten float-end">
                              Won lead
                            </span>
                            <h5 className="mt-0 mb-1">Zara Raws</h5>
                            <span className="font-13">austin@dayrep.com</span>
                          </div>
                        </div> */}
                      </div>
                      {/* end card-body */}
                    </div>
                    {/* end card*/}
                  </div>
                  {/* end col */}
                  {/* Start Graph */}
                  <div class="col-xl-4 col-lg-4">
                    <div class="card card-h-100">
                      <div class="d-flex card-header justify-content-between align-items-center">
                        <h4 class="header-title">Monthly Sale graph</h4>
                        <div class="dropdown">
                          <a
                            href="#"
                            class="dropdown-toggle arrow-none card-drop"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="mdi mdi-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            {/* <!-- item--> */}
                            <a href="#" class="dropdown-item">
                              Sales Report
                            </a>
                            {/* <!-- item--> */}
                            <a href="#" class="dropdown-item">
                              Export Report
                            </a>
                            {/* <!-- item--> */}
                            <a href="#" class="dropdown-item">
                              Profit
                            </a>
                            {/* <!-- item--> */}
                            <a href="#" class="dropdown-item">
                              Action
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="card-body pt-0">
                        <div dir="ltr">
                          <div
                            id="high-performing-product"
                            class="apex-charts"
                            data-colors="#727cf5,#e3eaef"
                            dangerouslySetInnerHTML={{
                              __html: `
          <svg xmlns="http://www.w3.org/2000/svg" 
               class="apexcharts-svg" 
               xmlns:xlink="http://www.w3.org/1999/xlink" 
               width="100%" height="350" 
               viewBox="0 0 700 350" version="1.1" 
               style="background: transparent;">
               <rect id="SvgjsRect1118" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
           
            <g id="SvgjsG1189" class="apexcharts-yaxis" rel="0" transform="translate(1.199981689453125, 0)"><g id="SvgjsG1190" class="apexcharts-yaxis-texts-g"><text id="SvgjsText1192" font-family="Helvetica, Arial, sans-serif" x="20" y="31.5" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1193">50k</tspan><title>50k</title></text><text id="SvgjsText1195" font-family="Helvetica, Arial, sans-serif" x="20" y="85.1224" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1196">40k</tspan><title>40k</title></text><text id="SvgjsText1198" font-family="Helvetica, Arial, sans-serif" x="20" y="138.7448" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1199">30k</tspan><title>30k</title></text><text id="SvgjsText1201" font-family="Helvetica, Arial, sans-serif" x="20" y="192.3672" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1202">20k</tspan><title>20k</title></text><text id="SvgjsText1204" font-family="Helvetica, Arial, sans-serif" x="20" y="245.9896" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1205">10k</tspan><title>10k</title></text><text id="SvgjsText1207" font-family="Helvetica, Arial, sans-serif" x="20" y="299.61199999999997" text-anchor="end" dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1208">0k</tspan><title>0k</title></text></g></g>
        <g id="SvgjsG1114" class="apexcharts-inner apexcharts-graphical" transform="translate(46.199981689453125, 30)"><defs id="SvgjsDefs1113"><clipPath id="gridRectMask4xzr7uee"><rect id="SvgjsRect1120" width="884.8000183105469" height="272.11199999999997" x="-4" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask4xzr7uee"></clipPath><clipPath id="nonForecastMask4xzr7uee"></clipPath><clipPath id="gridRectMarkerMask4xzr7uee"><rect id="SvgjsRect1121" width="880.8000183105469" height="272.11199999999997" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><filter id="SvgjsFilter1127" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1128" flood-color="#000000" flood-opacity="0.2" result="SvgjsFeFlood1128Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1129" in="SvgjsFeFlood1128Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1129Out"></feComposite><feOffset id="SvgjsFeOffset1130" dx="-7" dy="7" result="SvgjsFeOffset1130Out" in="SvgjsFeComposite1129Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1131" stdDeviation="7 " result="SvgjsFeGaussianBlur1131Out" in="SvgjsFeOffset1130Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1132" result="SvgjsFeMerge1132Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1133" in="SvgjsFeGaussianBlur1131Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1134" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1135" in="SourceGraphic" in2="SvgjsFeMerge1132Out" mode="normal" result="SvgjsFeBlend1135Out"></feBlend></filter><filter id="SvgjsFilter1140" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1141" flood-color="#000000" flood-opacity="0.2" result="SvgjsFeFlood1141Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1142" in="SvgjsFeFlood1141Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1142Out"></feComposite><feOffset id="SvgjsFeOffset1143" dx="-7" dy="7" result="SvgjsFeOffset1143Out" in="SvgjsFeComposite1142Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1144" stdDeviation="7 " result="SvgjsFeGaussianBlur1144Out" in="SvgjsFeOffset1143Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1145" result="SvgjsFeMerge1145Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1146" in="SvgjsFeGaussianBlur1144Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1147" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1148" in="SourceGraphic" in2="SvgjsFeMerge1145Out" mode="normal" result="SvgjsFeBlend1148Out"></feBlend></filter></defs><line id="SvgjsLine1119" x1="876.3000183105469" y1="0" x2="876.3000183105469" y2="268.11199999999997" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="876.3000183105469" y="0" width="1" height="268.11199999999997" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><line id="SvgjsLine1153" x1="0" y1="269.11199999999997" x2="0" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1154" x1="175.36000366210936" y1="269.11199999999997" x2="175.36000366210936" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1155" x1="350.7200073242187" y1="269.11199999999997" x2="350.7200073242187" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1156" x1="526.080010986328" y1="269.11199999999997" x2="526.080010986328" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1157" x1="701.4400146484375" y1="269.11199999999997" x2="701.4400146484375" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1158" x1="876.8000183105469" y1="269.11199999999997" x2="876.8000183105469" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><g id="SvgjsG1149" class="apexcharts-grid"><g id="SvgjsG1150" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1160" x1="0" y1="53.62239999999999" x2="876.8000183105469" y2="53.62239999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1161" x1="0" y1="107.24479999999998" x2="876.8000183105469" y2="107.24479999999998" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1162" x1="0" y1="160.86719999999997" x2="876.8000183105469" y2="160.86719999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1163" x1="0" y1="214.48959999999997" x2="876.8000183105469" y2="214.48959999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1151" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1166" x1="0" y1="268.11199999999997" x2="876.8000183105469" y2="268.11199999999997" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1165" x1="0" y1="1" x2="0" y2="268.11199999999997" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1122" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1123" class="apexcharts-series" seriesName="Budget" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1126" d="M 0 214.48959999999997C 61.376001281738276 214.48959999999997 113.9840023803711 160.86719999999997 175.36000366210936 160.86719999999997C 236.73600494384763 160.86719999999997 289.34400604248043 187.67839999999995 350.7200073242187 187.67839999999995C 412.096008605957 187.67839999999995 464.70400970458985 117.96927999999997 526.0800109863281 117.96927999999997C 587.4560122680664 117.96927999999997 640.0640133666992 150.14272 701.4400146484375 150.14272C 762.8160159301757 150.14272 815.4240170288086 85.79584 876.8000183105469 85.79584" fill="none" fill-opacity="1" stroke="rgba(114,124,245,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask4xzr7uee)" filter="url(#SvgjsFilter1127)" pathTo="M 0 214.48959999999997C 61.376001281738276 214.48959999999997 113.9840023803711 160.86719999999997 175.36000366210936 160.86719999999997C 236.73600494384763 160.86719999999997 289.34400604248043 187.67839999999995 350.7200073242187 187.67839999999995C 412.096008605957 187.67839999999995 464.70400970458985 117.96927999999997 526.0800109863281 117.96927999999997C 587.4560122680664 117.96927999999997 640.0640133666992 150.14272 701.4400146484375 150.14272C 762.8160159301757 150.14272 815.4240170288086 85.79584 876.8000183105469 85.79584" pathFrom="M -1 268.11199999999997 L -1 268.11199999999997 L 175.36000366210936 268.11199999999997 L 350.7200073242187 268.11199999999997 L 526.0800109863281 268.11199999999997 L 701.4400146484375 268.11199999999997 L 876.8000183105469 268.11199999999997" fill-rule="evenodd"></path><g id="SvgjsG1124" class="apexcharts-series-markers-wrap" data:realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1212" r="0" cx="876.8000183105469" cy="85.79584" class="apexcharts-marker w8cw91jui no-pointer-events" stroke="#ffffff" fill="#727cf5" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1136" class="apexcharts-series" seriesName="Revenue" data:longestSeries="true" rel="2" data:realIndex="1"><path id="SvgjsPath1139" d="M 0 257.38752C 61.376001281738276 257.38752 113.9840023803711 128.69375999999997 175.36000366210936 128.69375999999997C 236.73600494384763 128.69375999999997 289.34400604248043 214.48959999999997 350.7200073242187 214.48959999999997C 412.096008605957 214.48959999999997 464.70400970458985 64.34688 526.0800109863281 64.34688C 587.4560122680664 64.34688 640.0640133666992 107.24479999999997 701.4400146484375 107.24479999999997C 762.8160159301757 107.24479999999997 815.4240170288086 10.724479999999971 876.8000183105469 10.724479999999971" fill="none" fill-opacity="1" stroke="rgba(10,207,151,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" class="apexcharts-line" index="1" clip-path="url(#gridRectMask4xzr7uee)" filter="url(#SvgjsFilter1140)" pathTo="M 0 257.38752C 61.376001281738276 257.38752 113.9840023803711 128.69375999999997 175.36000366210936 128.69375999999997C 236.73600494384763 128.69375999999997 289.34400604248043 214.48959999999997 350.7200073242187 214.48959999999997C 412.096008605957 214.48959999999997 464.70400970458985 64.34688 526.0800109863281 64.34688C 587.4560122680664 64.34688 640.0640133666992 107.24479999999997 701.4400146484375 107.24479999999997C 762.8160159301757 107.24479999999997 815.4240170288086 10.724479999999971 876.8000183105469 10.724479999999971" pathFrom="M -1 268.11199999999997 L -1 268.11199999999997 L 175.36000366210936 268.11199999999997 L 350.7200073242187 268.11199999999997 L 526.0800109863281 268.11199999999997 L 701.4400146484375 268.11199999999997 L 876.8000183105469 268.11199999999997" fill-rule="evenodd"></path><g id="SvgjsG1137" class="apexcharts-series-markers-wrap" data:realIndex="1"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1213" r="0" cx="876.8000183105469" cy="10.724479999999971" class="apexcharts-marker wpzcplrnf no-pointer-events" stroke="#ffffff" fill="#0acf97" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1125" class="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1138" class="apexcharts-datalabels" data:realIndex="1"></g></g><g id="SvgjsG1152" class="apexcharts-grid-borders"><line id="SvgjsLine1159" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1164" x1="0" y1="268.11199999999997" x2="876.8000183105469" y2="268.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><line id="SvgjsLine1167" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1168" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1169" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1170" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1172" font-family="Helvetica, Arial, sans-serif" x="0" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1173">Jan</tspan><title>Jan</title></text><text id="SvgjsText1175" font-family="Helvetica, Arial, sans-serif" x="175.36000366210934" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1176">Feb</tspan><title>Feb</title></text><text id="SvgjsText1178" font-family="Helvetica, Arial, sans-serif" x="350.7200073242187" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1179">Mar</tspan><title>Mar</title></text><text id="SvgjsText1181" font-family="Helvetica, Arial, sans-serif" x="526.080010986328" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1182">Apr</tspan><title>Apr</title></text><text id="SvgjsText1184" font-family="Helvetica, Arial, sans-serif" x="701.4400146484373" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1185">May</tspan><title>May</title></text><text id="SvgjsText1187" font-family="Helvetica, Arial, sans-serif" x="876.8000183105468" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1188">Jun</tspan><title>Jun</title></text></g></g><g id="SvgjsG1209" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1210" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1211" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1214" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1215" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g>
        <g id="SvgjsG1114" class="apexcharts-inner apexcharts-graphical" transform="translate(46.199981689453125, 30)"><defs id="SvgjsDefs1113"><clipPath id="gridRectMask4xzr7uee"><rect id="SvgjsRect1120" width="884.8000183105469" height="272.11199999999997" x="-4" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="forecastMask4xzr7uee"></clipPath><clipPath id="nonForecastMask4xzr7uee"></clipPath><clipPath id="gridRectMarkerMask4xzr7uee"><rect id="SvgjsRect1121" width="880.8000183105469" height="272.11199999999997" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><filter id="SvgjsFilter1127" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1128" flood-color="#000000" flood-opacity="0.2" result="SvgjsFeFlood1128Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1129" in="SvgjsFeFlood1128Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1129Out"></feComposite><feOffset id="SvgjsFeOffset1130" dx="-7" dy="7" result="SvgjsFeOffset1130Out" in="SvgjsFeComposite1129Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1131" stdDeviation="7 " result="SvgjsFeGaussianBlur1131Out" in="SvgjsFeOffset1130Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1132" result="SvgjsFeMerge1132Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1133" in="SvgjsFeGaussianBlur1131Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1134" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1135" in="SourceGraphic" in2="SvgjsFeMerge1132Out" mode="normal" result="SvgjsFeBlend1135Out"></feBlend></filter><filter id="SvgjsFilter1140" filterUnits="userSpaceOnUse" width="200%" height="200%" x="-50%" y="-50%"><feFlood id="SvgjsFeFlood1141" flood-color="#000000" flood-opacity="0.2" result="SvgjsFeFlood1141Out" in="SourceGraphic"></feFlood><feComposite id="SvgjsFeComposite1142" in="SvgjsFeFlood1141Out" in2="SourceAlpha" operator="in" result="SvgjsFeComposite1142Out"></feComposite><feOffset id="SvgjsFeOffset1143" dx="-7" dy="7" result="SvgjsFeOffset1143Out" in="SvgjsFeComposite1142Out"></feOffset><feGaussianBlur id="SvgjsFeGaussianBlur1144" stdDeviation="7 " result="SvgjsFeGaussianBlur1144Out" in="SvgjsFeOffset1143Out"></feGaussianBlur><feMerge id="SvgjsFeMerge1145" result="SvgjsFeMerge1145Out" in="SourceGraphic"><feMergeNode id="SvgjsFeMergeNode1146" in="SvgjsFeGaussianBlur1144Out"></feMergeNode><feMergeNode id="SvgjsFeMergeNode1147" in="[object Arguments]"></feMergeNode></feMerge><feBlend id="SvgjsFeBlend1148" in="SourceGraphic" in2="SvgjsFeMerge1145Out" mode="normal" result="SvgjsFeBlend1148Out"></feBlend></filter></defs><line id="SvgjsLine1119" x1="876.3000183105469" y1="0" x2="876.3000183105469" y2="268.11199999999997" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="876.3000183105469" y="0" width="1" height="268.11199999999997" fill="#b1b9c4" filter="none" fill-opacity="0.9" stroke-width="1"></line><line id="SvgjsLine1153" x1="0" y1="269.11199999999997" x2="0" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1154" x1="175.36000366210936" y1="269.11199999999997" x2="175.36000366210936" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1155" x1="350.7200073242187" y1="269.11199999999997" x2="350.7200073242187" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1156" x1="526.080010986328" y1="269.11199999999997" x2="526.080010986328" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1157" x1="701.4400146484375" y1="269.11199999999997" x2="701.4400146484375" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><line id="SvgjsLine1158" x1="876.8000183105469" y1="269.11199999999997" x2="876.8000183105469" y2="275.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line><g id="SvgjsG1149" class="apexcharts-grid"><g id="SvgjsG1150" class="apexcharts-gridlines-horizontal"><line id="SvgjsLine1160" x1="0" y1="53.62239999999999" x2="876.8000183105469" y2="53.62239999999999" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1161" x1="0" y1="107.24479999999998" x2="876.8000183105469" y2="107.24479999999998" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1162" x1="0" y1="160.86719999999997" x2="876.8000183105469" y2="160.86719999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1163" x1="0" y1="214.48959999999997" x2="876.8000183105469" y2="214.48959999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><g id="SvgjsG1151" class="apexcharts-gridlines-vertical"></g><line id="SvgjsLine1166" x1="0" y1="268.11199999999997" x2="876.8000183105469" y2="268.11199999999997" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line><line id="SvgjsLine1165" x1="0" y1="1" x2="0" y2="268.11199999999997" stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line></g><g id="SvgjsG1122" class="apexcharts-line-series apexcharts-plot-series"><g id="SvgjsG1123" class="apexcharts-series" seriesName="Budget" data:longestSeries="true" rel="1" data:realIndex="0"><path id="SvgjsPath1126" d="M 0 214.48959999999997C 61.376001281738276 214.48959999999997 113.9840023803711 160.86719999999997 175.36000366210936 160.86719999999997C 236.73600494384763 160.86719999999997 289.34400604248043 187.67839999999995 350.7200073242187 187.67839999999995C 412.096008605957 187.67839999999995 464.70400970458985 117.96927999999997 526.0800109863281 117.96927999999997C 587.4560122680664 117.96927999999997 640.0640133666992 150.14272 701.4400146484375 150.14272C 762.8160159301757 150.14272 815.4240170288086 85.79584 876.8000183105469 85.79584" fill="none" fill-opacity="1" stroke="rgba(114,124,245,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" class="apexcharts-line" index="0" clip-path="url(#gridRectMask4xzr7uee)" filter="url(#SvgjsFilter1127)" pathTo="M 0 214.48959999999997C 61.376001281738276 214.48959999999997 113.9840023803711 160.86719999999997 175.36000366210936 160.86719999999997C 236.73600494384763 160.86719999999997 289.34400604248043 187.67839999999995 350.7200073242187 187.67839999999995C 412.096008605957 187.67839999999995 464.70400970458985 117.96927999999997 526.0800109863281 117.96927999999997C 587.4560122680664 117.96927999999997 640.0640133666992 150.14272 701.4400146484375 150.14272C 762.8160159301757 150.14272 815.4240170288086 85.79584 876.8000183105469 85.79584" pathFrom="M -1 268.11199999999997 L -1 268.11199999999997 L 175.36000366210936 268.11199999999997 L 350.7200073242187 268.11199999999997 L 526.0800109863281 268.11199999999997 L 701.4400146484375 268.11199999999997 L 876.8000183105469 268.11199999999997" fill-rule="evenodd"></path><g id="SvgjsG1124" class="apexcharts-series-markers-wrap" data:realIndex="0"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1212" r="0" cx="876.8000183105469" cy="85.79584" class="apexcharts-marker w8cw91jui no-pointer-events" stroke="#ffffff" fill="#727cf5" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1136" class="apexcharts-series" seriesName="Revenue" data:longestSeries="true" rel="2" data:realIndex="1"><path id="SvgjsPath1139" d="M 0 257.38752C 61.376001281738276 257.38752 113.9840023803711 128.69375999999997 175.36000366210936 128.69375999999997C 236.73600494384763 128.69375999999997 289.34400604248043 214.48959999999997 350.7200073242187 214.48959999999997C 412.096008605957 214.48959999999997 464.70400970458985 64.34688 526.0800109863281 64.34688C 587.4560122680664 64.34688 640.0640133666992 107.24479999999997 701.4400146484375 107.24479999999997C 762.8160159301757 107.24479999999997 815.4240170288086 10.724479999999971 876.8000183105469 10.724479999999971" fill="none" fill-opacity="1" stroke="rgba(10,207,151,0.85)" stroke-opacity="1" stroke-linecap="butt" stroke-width="4" stroke-dasharray="0" class="apexcharts-line" index="1" clip-path="url(#gridRectMask4xzr7uee)" filter="url(#SvgjsFilter1140)" pathTo="M 0 257.38752C 61.376001281738276 257.38752 113.9840023803711 128.69375999999997 175.36000366210936 128.69375999999997C 236.73600494384763 128.69375999999997 289.34400604248043 214.48959999999997 350.7200073242187 214.48959999999997C 412.096008605957 214.48959999999997 464.70400970458985 64.34688 526.0800109863281 64.34688C 587.4560122680664 64.34688 640.0640133666992 107.24479999999997 701.4400146484375 107.24479999999997C 762.8160159301757 107.24479999999997 815.4240170288086 10.724479999999971 876.8000183105469 10.724479999999971" pathFrom="M -1 268.11199999999997 L -1 268.11199999999997 L 175.36000366210936 268.11199999999997 L 350.7200073242187 268.11199999999997 L 526.0800109863281 268.11199999999997 L 701.4400146484375 268.11199999999997 L 876.8000183105469 268.11199999999997" fill-rule="evenodd"></path><g id="SvgjsG1137" class="apexcharts-series-markers-wrap" data:realIndex="1"><g class="apexcharts-series-markers"><circle id="SvgjsCircle1213" r="0" cx="876.8000183105469" cy="10.724479999999971" class="apexcharts-marker wpzcplrnf no-pointer-events" stroke="#ffffff" fill="#0acf97" fill-opacity="1" stroke-width="2" stroke-opacity="0.9" default-marker-size="0"></circle></g></g></g><g id="SvgjsG1125" class="apexcharts-datalabels" data:realIndex="0"></g><g id="SvgjsG1138" class="apexcharts-datalabels" data:realIndex="1"></g></g><g id="SvgjsG1152" class="apexcharts-grid-borders"><line id="SvgjsLine1159" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line><line id="SvgjsLine1164" x1="0" y1="268.11199999999997" x2="876.8000183105469" y2="268.11199999999997" stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-gridline"></line></g><line id="SvgjsLine1167" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" stroke-linecap="butt" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine1168" x1="0" y1="0" x2="876.8000183105469" y2="0" stroke-dasharray="0" stroke-width="0" stroke-linecap="butt" class="apexcharts-ycrosshairs-hidden"></line><g id="SvgjsG1169" class="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1170" class="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1172" font-family="Helvetica, Arial, sans-serif" x="0" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1173">Jan</tspan><title>Jan</title></text><text id="SvgjsText1175" font-family="Helvetica, Arial, sans-serif" x="175.36000366210934" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1176">Feb</tspan><title>Feb</title></text><text id="SvgjsText1178" font-family="Helvetica, Arial, sans-serif" x="350.7200073242187" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1179">Mar</tspan><title>Mar</title></text><text id="SvgjsText1181" font-family="Helvetica, Arial, sans-serif" x="526.080010986328" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1182">Apr</tspan><title>Apr</title></text><text id="SvgjsText1184" font-family="Helvetica, Arial, sans-serif" x="701.4400146484373" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1185">May</tspan><title>May</title></text><text id="SvgjsText1187" font-family="Helvetica, Arial, sans-serif" x="876.8000183105468" y="297.11199999999997" text-anchor="middle" dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-xaxis-label " style="font-family: Helvetica, Arial, sans-serif;"><tspan id="SvgjsTspan1188">Jun</tspan><title>Jun</title></text></g></g><g id="SvgjsG1209" class="apexcharts-yaxis-annotations"></g><g id="SvgjsG1210" class="apexcharts-xaxis-annotations"></g><g id="SvgjsG1211" class="apexcharts-point-annotations"></g><rect id="SvgjsRect1214" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-zoom-rect"></rect><rect id="SvgjsRect1215" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe" class="apexcharts-selection-rect"></rect></g>
            </svg>
        `,
                            }}
                          ></div>
                        </div>
                      </div>
                      {/* <!-- end card-body--> */}
                    </div>
                    {/* <!-- end card--> */}
                  </div>
                  {/* End Graph */}
                  {/* end col */}
                </div>
                {/* end row*/}
              </div>{" "}
              {/* container */}
            </div>{" "}
            {/* content */}
            {/* Footer Start */}
            <Footer />
            {/* end Footer */}
          </div>

          {/* ============================================================== */}
          {/* End Page content */}
          {/* ============================================================== */}
        </div>
        {/* END wrapper */}

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

      {/* Mirrored from coderthemes.com/hyper_2/saas/dashboard-crm.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 19 Jun 2023 14:50:22 GMT */}
    </>
  );
};

export default Dashboard;
