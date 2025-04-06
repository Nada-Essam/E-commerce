import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../slices/AuthSlice";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // initialize state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  // update state when user type
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // send data to API
  const handleSubmit = (e) => {
    e.preventDefault();
    const UserData = {
      email: formData.email,
      password: formData.password,
    };
    axios
      .post("https://reqres.in/api/register", UserData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(
          setAuth({
            user: { email: formData.email, name: formData.name },
            token: res.data.token,
          })
        );
        console.log("User registered:", formData.name);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ marginTop: "95px" }}
      >
        <div className="control-div card shadow-lg p-4 rounded col-12 col-sm-8 col-md-6 col-lg-4" style={{ minWidth: "300px" }}>
          <h3 className="text-center">Register Account</h3>

         
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-lg"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 btn-lg">
              Register
            </button>
          </form>

          <p className="mt-3 text-center">
            Already have an account? <button className="btn btn-link" onClick={()=>{navigate("/login")}}>Login</button>
          </p>
        </div>
      </div>
    </>
  );
}
