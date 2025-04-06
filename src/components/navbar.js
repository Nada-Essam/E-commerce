import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../slices/AuthSlice";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart.items);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg py-2 shadow-sm fixed-top ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-4">
          Brand Collection
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/Contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="buttons">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>Login
                </Link>
                <Link to="/Register" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-user-plus me-1"></i>Register
                </Link>
              </>
            ) : (
              <>
                <span className="me-3">Welcome, {user.name}</span>
                <button
                  className="btn btn-outline-dark ms-2"
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out me-1"></i>Logout
                </button>
              </>
            )}

            <Link to="/Cart" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>Cart ({cart.length})
            </Link>
            <button
              className="btn btn-outline-secondary ms-3"
              onClick={toggleDarkMode}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
