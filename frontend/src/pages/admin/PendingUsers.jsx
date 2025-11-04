import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { toast } from "react-toastify";
import MainLayout from "../layoutpage/MainLayout";
import Footer from "../../components/Footer";
import { useLocation } from "react-router-dom";

const PendingUsers = ({ user, onLogout }) => {
  const [users, setUsers] = useState([]);
  const [isFullyApproved, setFullyApproved] = useState(false);
  const location = useLocation();

  //  Get user data from location or localStorage
  user = location.state?.user || JSON.parse(localStorage.getItem("user")) || {};

  //  Fetch pending users once
  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const fetchPendingUsers = async () => {
    try {
      const res = await api.get("/api/users/pending");
      setUsers(res.data.users);
    } catch (err) {
      console.error(err);
      toast.error("Pending users not found");
    }
  };

  //  Update isFullyApproved based on users data
  useEffect(() => {
    const fullyApproved = users.every((usr) =>
      Object.values(usr.approval_progress_by_role || {}).every(
        (v) => v === true
      )
    );
    setFullyApproved(fullyApproved);
  }, [users]);

  //  Approve specific user by role
  const approveUser = async (userId, roleType) => {
    const usr = users.find((u) => u.id === userId);
    if (!usr) return toast.error("User not found");

    try {
      let companyRole = "";
      const companyName = user.companies?.[0]?.name?.toLowerCase();
      const roleName = user.roles?.[0]?.name?.toLowerCase();

      if (companyName === "iconic greenland property ltd") {
        if (roleName === "finance manager")
          companyRole = "greenland_finance_manager";
        else if (roleName === "md") companyRole = "greenland_md";
        else if (roleName === "chairman") companyRole = "greenland_chairman";
      } else if (companyName === "iconic unity") {
        if (roleName === "finance manager")
          companyRole = "iconic_finance_manager";
        else if (roleName === "md") companyRole = "iconic_md";
        else if (roleName === "chairman") companyRole = "iconic_chairman";
      }

      if (!companyRole) {
        toast.error("Invalid role type");
        return;
      }

      //  backend API call
      const res = await api.post(`/api/approve/${userId}/${companyRole}`);
      toast.success(res.data.message || "User approved successfully!");

      //  Update user locally
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === userId
            ? {
                ...u,
                approval_progress: res.data.progress,
                approval_status: res.data.status,
                approval_progress_by_role: {
                  ...u.approval_progress_by_role,
                  [roleType.toLowerCase()]: true,
                },
              }
            : u
        )
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to approve user");
    }
  };

  //  Reject user
  const rejectUser = async (userId) => {
    try {
      await api.post(`/api/reject/${userId}`);
      toast.error("User rejected from approval!");
      fetchPendingUsers();
    } catch (err) {
      toast.error("Failed to reject user");
    }
  };

  //  Layout + Table
  return (
    <>
      <MainLayout user={user} onLogout={onLogout} sidebarCollapsed={false} />
      <div
        className="container-fluid"
        style={{
          paddingLeft: window.innerWidth > 768 ? "280px" : "15px",
          paddingTop: window.innerHeight > 870 ? "10px" : "20px",
        }}
      >
        <h4>Pending Users Approval</h4>
        <table className="table table-bordered mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Approval Status</th>
              <th>Approval Progress</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((usr) => {
              const companyName = user.companies?.[0]?.name?.toLowerCase();
              const roleName = user.roles?.[0]?.name?.toLowerCase();
              let allowedRoles = [];

              //  Company-wise role permission
              if (
                companyName === "iconic greenland property ltd" &&
                roleName === "finance manager"
              )
                allowedRoles = ["finance manager"];
              else if (
                companyName === "iconic greenland property ltd" &&
                roleName === "md"
              )
                allowedRoles = ["md"];
              else if (
                companyName === "iconic greenland property ltd" &&
                roleName === "chairman"
              )
                allowedRoles = ["chairman"];
              else if (
                companyName === "iconic unity" &&
                roleName === "finance manager"
              )
                allowedRoles = ["finance manager"];
              else if (companyName === "iconic unity" && roleName === "md")
                allowedRoles = ["md"];
              else if (
                companyName === "iconic unity" &&
                roleName === "chairman"
              )
                allowedRoles = ["chairman"];

              // ensure progress_by_role exists
              if (!usr.approval_progress_by_role) {
                usr.approval_progress_by_role = {
                  "finance manager": false,
                  md: false,
                  chairman: false,
                };
              }

              return (
                <tr key={usr.id}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.role}</td>
                  <td>{usr.approval_status}</td>
                  {/* <td>{usr.approval_progress}%</td> */}
                  <td style={{ width: "200px" }}>
                    <div className="progress" style={{ height: "20px" }}>
                      <div
                        className={`progress-bar ${
                          usr.approval_progress === 100
                            ? "bg-success"
                            : usr.approval_progress >= 50
                            ? "bg-info"
                            : "bg-warning"
                        }`}
                        role="progressbar"
                        style={{ width: `${usr.approval_progress}%` }}
                        aria-valuenow={usr.approval_progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {usr.approval_progress}%
                      </div>
                    </div>
                  </td>
                  <td>
                    {allowedRoles.map((role, index) => {
                      const roleApproved =
                        usr.approval_progress_by_role?.[role.toLowerCase()] ===
                        true;

                      return (
                        <button
                          key={index}
                          disabled={roleApproved}
                          className={`btn btn-sm me-1 ${
                            roleApproved ? "btn-secondary" : "btn-success"
                          }`}
                          onClick={() => approveUser(usr.id, role)}
                        >
                          {roleApproved
                            ? "Approved"
                            : `Approve (${
                                role.charAt(0).toUpperCase() + role.slice(1)
                              })`}
                        </button>
                      );
                    })}

                    {/*  Reject button hide only if this specific user is fully approved */}
                    {usr.approval_progress < 100 && (
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => rejectUser(usr.id)}
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Footer />
      </div>
    </>
  );
};

export default PendingUsers;
