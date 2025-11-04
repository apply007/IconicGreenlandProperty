import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import MainLayout from "./layoutpage/MainLayout";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../api/axios"; // ✅ Your Axios instance (must include baseURL and auth header)
import { toast } from "react-toastify";

const ProfilePage = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    mobile_number: "",
    voter_id: "",
    role: "",
    status: "",
    profile_photo_path: "",
  });
  const [errors, setErrors] = useState({});
  const [previewImage, setPreviewImage] = useState(null);

  const googleUser = JSON.parse(localStorage.getItem("googleUser"));

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setEditData({
        name: storedUser.name || "",
        email: storedUser.email || "",
        mobile_number: storedUser.mobile_number || "",
        voter_id: storedUser.voter_id || "",
        role: storedUser.role || "",
        status: storedUser.status || "",
        profile_photo_path: storedUser.profile_photo_path || "",
      });
      setPreviewImage(
        storedUser.profile_photo_path
          ? `${api.defaults.baseURL}/${storedUser.profile_photo_path}`
          : googleUser?.picture || "assets/images/users/avatar-1.jpg"
      );
    } else {
      navigate("/login");
    }
  }, [navigate]);

  // ✅ Validation regex
  const mobileRegex = /^01[3-9]\d{8}$/;
  const voterRegex = /^\d{10,17}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  // ✅ Image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, profile_photo_path: file });
      setPreviewImage(URL.createObjectURL(file));
    }
    console.log("Selected file:", file);
  };

  // ✅ Validate form
  const validate = () => {
    const newErrors = {};
    if (!editData.name.trim()) newErrors.name = "Name is must required!";
    if (!editData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(editData.email)) {
      newErrors.email = "Invalid email format!";
    }

    if (!editData.mobile_number.trim()) {
      newErrors.mobile_number = "Mobile number is required!";
    } else if (!mobileRegex.test(editData.mobile_number)) {
      newErrors.mobile_number = "Enter a valid  mobile number!";
    }

    if (!editData.voter_id.trim()) {
      newErrors.voter_id = "Voter ID is required!";
    } else if (!voterRegex.test(editData.voter_id)) {
      newErrors.voter_id = "Voter ID must be 10 to 17 digits long!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //  Submit to backend
  //  Submit to backend
  const handleUpdate = async () => {
    if (!validate()) return;

    const formData = new FormData();
    formData.append("name", editData.name);
    formData.append("email", editData.email);
    formData.append("mobile_number", editData.mobile_number);
    formData.append("voter_id", editData.voter_id);
    formData.append("role", editData.role);
    formData.append("status", editData.status);
    formData.append("_method", "PUT");

    if (editData.profile_photo_path instanceof File) {
      formData.append(
        "profile_photo_path",
        editData.profile_photo_path,
        editData.profile_photo_path.name
      );
    }

    const token = localStorage.getItem("token");
    const response = await api.post(`/api/users/${user.id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        // no Content-Type header here
        "Content-Type": "multipart/form-data",
      },
    });
    // Assuming the server responds with the updated user data:

    console.log("Response from server:", response);
    console.log("Response data:", response.data);
    const updatedUser = response.data.user || response.data; // fallback jodi direct data ashe

    setUser(updatedUser);
    setPreviewImage(
      updatedUser.profile_photo_path
        ? `${api.defaults.baseURL}/${updatedUser.profile_photo_path}`
        : googleUser?.picture
        ? googleUser?.picture
        : "assets/images/users/avatar-1.jpg"
    );
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(updatedUser));

    toast.success("Profile updated successfully!");
    setShowModal(false);
  };

  if (!user) return null;

  return (
    <>
      <MainLayout user={user} handleLogout={handleLogout} />
      <div
        className="container-fluid"
        style={{ paddingLeft: window.innerWidth > 768 ? "280px" : "15px" }}
      >
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="card shadow p-3">
                <div className="row">
                  {/* Profile Picture */}
                  <div className="col-md-3 d-flex flex-column justify-content-start align-items-center">
                    <img
                      src={previewImage}
                      // src={
                      //   user.profile_photo_path
                      //     ? `${api.defaults.baseURL}/${user.profile_photo_path}`
                      //     : googleUser?.picture
                      //     ?`${googleUser.picture}`
                      //     : "assets/images/users/avatar-1.jpg"
                      // }
                      // src={
                      //   typeof user.profile_photo_path === "string" &&
                      //   user.profile_photo_path.startsWith("data:image")
                      //     ? user.profile_photo_path
                      //     : typeof user.profile_photo_path === "string" &&
                      //       user.profile_photo_path
                      //     ? `http://localhost:8000/${
                      //         user.profile_photo_path
                      //       }?t=${new Date().getTime()}`
                      //     : googleUser?.picture ||
                      //       "assets/images/users/avatar-1.jpg"
                      // }
                      alt="User Avatar"
                      className="rounded-circle"
                      width="200"
                      height="200"
                    />
                    <h6 className="mt-2">{user.name}</h6>

                    <button
                      className="btn btn-primary btn-sm mt-3"
                      onClick={() => setShowModal(true)}
                    >
                      Edit Profile
                    </button>
                  </div>

                  {/* User Info */}
                  <div className="col-md-9">
                    <h4>Personal Details</h4>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.name}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.email}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.mobile_number || ""}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">NID</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.voter_id}
                        readOnly
                      />
                    </div>

                    <h4 className="mt-4">Account Information</h4>
                    <div className="mb-3">
                      <label className="form-label">Role</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.role}
                        readOnly
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <input
                        type="text"
                        className="form-control"
                        style={{ paddingLeft: "25px" }}
                        value={user.status}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* ✅ Edit Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="text-center mb-3">
              <img
                src={previewImage}
                alt="Preview"
                className="rounded-circle"
                width="100"
                height="100"
              />
              <Form.Group controlId="formFile" className="mt-2">
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile_number"
                value={editData.mobile_number}
                onChange={handleChange}
                isInvalid={!!errors.mobile_number}
              />
              <Form.Control.Feedback type="invalid">
                {errors.mobile_number}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>NID</Form.Label>
              <Form.Control
                type="text"
                name="voter_id"
                value={editData.voter_id}
                onChange={handleChange}
                isInvalid={!!errors.voter_id}
              />
              <Form.Control.Feedback type="invalid">
                {errors.voter_id}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePage;
