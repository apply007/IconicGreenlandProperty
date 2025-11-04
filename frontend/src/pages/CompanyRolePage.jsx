import React, { useEffect, useState } from "react";
import api from "../api/axios";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./layoutpage/MainLayout";
import Footer from "../components/Footer";
import { Modal, Button } from "react-bootstrap";

const CompanyRolePage = ({ user, onLogout }) => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [roles, setRoles] = useState({});
  const [selectedCompanies, setSelectedCompanies] = useState({});
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [customRoles, setCustomRoles] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [editUserData, setEditUserData] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    mobile_number: "",
    voter_id: "",
  });

  const googleUser = JSON.parse(localStorage.getItem("googleUser"));

  // 🔹 Load users
  useEffect(() => {
    loadUsers(currentPage);
  }, [currentPage]);

  const loadUsers = async (page) => {
    try {
      const res = await api.get(`/api/users?page=${page}&per_page=4`);
      console.log("pagination",res.data)
      setUsers(res.data.data);
      setTotalPages(res.data.last_page);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Load companies and roles
  useEffect(() => {
  const loadCompanies = async () => {
    try {
      const res = await api.get("/api/companies");
      console.log("Raw response", res);
      
      const list = res.data.data || res.data; // adjust according to API
      console.log("companies....", list);
      setCompanies(list);

      const allRoles = {};
      for (const c of list) {
        const roleRes = await api.get(`/api/roles?company=${encodeURIComponent(c.name)}`);
        allRoles[c.id] = roleRes.data;
      }
      setRoles(allRoles);

    } catch (err) {
      console.error("Error loading companies:", err);
    }
  };

  loadCompanies();
}, []);


  //  Accordion toggle
  const toggleAccordion = (id) =>
    setExpandedCompany(expandedCompany === id ? null : id);

  //  Open Role Modal
  const openRoleModal = (u) => {
    setSelectedUser(u);
    setSelectedCompanies({});
    setShowRoleModal(true);
  };

  //  Open Edit Modal
  const openEditModal = (u) => {
    setEditUserData({
      name: u.name,
      email: u.email,
      department: u.department,
      designation: u.designation,
      mobile_number: u.mobile_number,
      voter_id: u.voter_id,
    });
    setSelectedUser(u);
    setShowEditModal(true);
  };

  //  Company checkbox
  const handleCompanyChange = async (companyId, companyName, checked) => {
    if (!checked) {
      setSelectedCompanies((prev) => {
        const copy = { ...prev };
        delete copy[companyId];
        return copy;
      });
      return;
    }

    const res = await api.get(`/api/roles?company=${companyName}`);
    setRoles((prev) => ({ ...prev, [companyId]: res.data }));
    setSelectedCompanies((prev) => ({ ...prev, [companyId]: [] }));
  };

  //  Role checkbox
  const handleRoleChange = (companyId, roleId, checked) => {
    setSelectedCompanies((prev) => {
      const current = prev[companyId] || [];
      if (checked) return { ...prev, [companyId]: [...current, roleId] };
      return {
        ...prev,
        [companyId]: current.filter((r) => r !== roleId),
      };
    });
  };

  //  Save roles for user
  const handleSaveRoles = () => {
    if (!selectedUser || !selectedUser.id) return alert("User not found!");
    const payload = {
      user_id: selectedUser.id,
      companies: Object.entries(selectedCompanies).map(([cid, rids]) => ({
        company_id: parseInt(cid),
        roles: rids,
      })),
    };

    api
      .post("/api/user-roles", payload)
      .then(() => {
        alert("Roles saved successfully!");
        setShowRoleModal(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Error saving roles!");
      });
  };

  //  Update user info
  const handleUpdateUser = async () => {
    try {
      await api.put(`/api/users/${selectedUser.id}`, editUserData);
      alert("User updated successfully!");
      setShowEditModal(false);
      loadUsers(currentPage);
    } catch (err) {
      console.error(err);
      alert("Error updating user!");
    }
  };

  // 🔹 Delete user
  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await api.delete(`/api/users/${id}`);
      alert("User deleted successfully!");
      loadUsers(currentPage);
    } catch (err) {
      console.error(err);
      alert("Error deleting user!");
    }
  };

  // 🔹 Add new role under a company
  const handleAddRole = async (companyId) => {
    const roleName = customRoles[companyId]?.trim();
    if (!roleName) return alert("Enter a role name!");

    try {
      const res = await api.post("/api/roles", { name: roleName });
      const savedRole = res.data.role;

      setRoles((prev) => ({
        ...prev,
        [companyId]: [...(prev[companyId] || []), savedRole],
      }));

      setSelectedCompanies((prev) => ({
        ...prev,
        [companyId]: [...(prev[companyId] || []), savedRole.id],
      }));

      setCustomRoles((prev) => ({ ...prev, [companyId]: "" }));
      alert("Role added successfully!");
    } catch (err) {
      console.error(err);
      alert("Error adding role!");
    }
  };

  //  Delete role
  const handleDeleteRole = async (companyId, roleId) => {
    if (!window.confirm("Are you sure to delete this role?")) return;
    try {
      await api.delete(`/api/roles/${roleId}`);
      setRoles((prev) => ({
        ...prev,
        [companyId]: prev[companyId].filter((r) => r.id !== roleId),
      }));
      setSelectedCompanies((prev) => ({
        ...prev,
        [companyId]: (prev[companyId] || []).filter((r) => r !== roleId),
      }));
      alert("Role deleted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error deleting role!");
    }
  };

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
        <div className="wrapper">
          <div className="container mt-5">
            <h3 className="text-center mb-4 text-primary fw-bold">
              User Role Management
            </h3>

            {/*  User Table */}
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Mobile</th>
                    <th>NID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u, i) => (
                    <tr key={u.id}>
                      <td>{i + 1}</td>
                      <td>
                        <img
                         src={
                        u.profile_photo_path
                          ? `${api.defaults.baseURL}/${u.profile_photo_path}`
                          : googleUser?.picture
                          ?`${googleUser.picture}`
                          : "assets/images/users/avatar-1.jpg"
                      }
                          // src={
                          //   u.profile_photo_path
                          //     ? u.profile_photo_path.startsWith("http")
                          //       ? u.profile_photo_path
                          //       : `https://api.iconicunityltd.com/${u.profile_photo_path}`
                          //     : "assets/images/users/avatar-1.jpg"
                          // }
                          alt={u.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      </td>
                      <td>{u.name}</td>
                      <td>{u.email}</td>
                      <td>{u.department}</td>
                      <td>{u.designation}</td>
                      <td>{u.mobile_number}</td>
                      <td>{u.voter_id}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => openRoleModal(u)}
                        >
                          Set Roles
                        </button>
                        <button
                          className="btn btn-sm btn-warning ms-2"
                          onClick={() => openEditModal(u)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger ms-2"
                          onClick={() => handleDeleteUser(u.id)}
                        >
                          Delete
                        </button>
                         {u.status === "active" ? (
                          <button className="btn btn-sm btn-primary ms-2">
                            Active
                          </button>
                        ) : (
                          <button className="btn btn-sm btn-danger ms-2">
                            Inactive
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*  Pagination */}
            <nav className="mt-3">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((p) => p - 1)}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === totalPages ? "disabled" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage((p) => p + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>

            {/*  Role Modal with Add/Delete */}
            <Modal
              show={showRoleModal}
              onHide={() => setShowRoleModal(false)}
              size="lg"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  Manage Roles for <strong>{selectedUser?.name}</strong>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="accordion" id="companyAccordion">
                  {companies.map((company) => (
                    <div className="accordion-item mb-3" key={company.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            expandedCompany === company.id ? "" : "collapsed"
                          }`}
                          onClick={() => toggleAccordion(company.id)}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              checked={selectedCompanies[company.id] !== undefined}
                              onChange={(e) =>
                                handleCompanyChange(
                                  company.id,
                                  company.name,
                                  e.target.checked
                                )
                              }
                            />
                            {company.name}
                          </div>
                        </button>
                      </h2>

                      <div
                        className={`accordion-collapse collapse ${
                          expandedCompany === company.id ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          {roles[company.id]?.map((role) => (
                            <div
                              key={role.id}
                              className="form-check mb-2 d-flex align-items-center justify-content-between"
                            >
                              <div>
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  disabled={
                                    selectedCompanies[company.id] === undefined
                                  }
                                  checked={
                                    selectedCompanies[company.id]?.includes(role.id) ||
                                    false
                                  }
                                  onChange={(e) =>
                                    handleRoleChange(
                                      company.id,
                                      role.id,
                                      e.target.checked
                                    )
                                  }
                                />
                                <label className="form-check-label ms-2">
                                  {role.name}
                                </label>
                              </div>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() =>
                                  handleDeleteRole(company.id, role.id)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          ))}

                          {/*  Add New Role */}
                          <div className="mt-3 border-top pt-3">
                            <h6 className="fw-semibold">Add New Role</h6>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter role name"
                                value={customRoles[company.id] || ""}
                                onChange={(e) =>
                                  setCustomRoles({
                                    ...customRoles,
                                    [company.id]: e.target.value,
                                  })
                                }
                                disabled={
                                  selectedCompanies[company.id] === undefined
                                }
                              />
                              <button
                                className="btn btn-success"
                                onClick={() => handleAddRole(company.id)}
                                disabled={!customRoles[company.id]}
                              >
                                Add Role
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowRoleModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSaveRoles}>
                  Save Roles
                </Button>
              </Modal.Footer>
            </Modal>

            {/*  Edit User Modal */}
            <Modal
              show={showEditModal}
              onHide={() => setShowEditModal(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit User Info</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form>
                  {["name", "email", "department", "designation", "mobile_number", "voter_id"].map(
                    (field, i) => (
                      <div className="mb-3" key={i}>
                        <label className="form-label text-capitalize">
                          {field.replace("_", " ")}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          className="form-control"
                          value={editUserData[field]}
                          onChange={(e) =>
                            setEditUserData({
                              ...editUserData,
                              [field]: e.target.value,
                            })
                          }
                        />
                      </div>
                    )
                  )}
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleUpdateUser}>
                  Update
                </Button>
              </Modal.Footer>
            </Modal>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyRolePage;
