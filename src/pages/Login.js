import axios from "axios";
import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuth } from "../slices/AuthSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const redirect = searchParams.get("redirect") || "/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios
      .post("https://reqres.in/api/login", formData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch(
          setAuth({
            user: { email: formData.email, name: formData.name },
            token: res.data.token,
          })
        );
        navigate(redirect);
      })
      .catch((error) => {
        setError(
          error.response?.data?.error || "Login failed, please try again!"
        );
      });
  };

  return (
    <>
      <div
        className=" d-flex justify-content-center align-items-center  "
        style={{ marginTop: "95px" }}
      >
        <div
          className="control-div card shadow-lg p-4 rounded col-12 col-sm-8 col-md-6 col-lg-4"
          style={{ minWidth: "320px" }}
        >
          <h3 className="text-center">Login</h3>
          {error && (
            <div className="alert alert-danger text-center">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
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
            <label className="form-label mt-3">Email</label>
            <input
              type="text"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="form-label mt-3">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className="btn btn-primary w-100 mt-3">Login</button>
            <hr />
            <p> Don't have an account ? </p>
            <Link
              to="/register"
              className="btn btn-dark w-100 "
              onClick={() => navigate("/register")}
            >
              Register
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
