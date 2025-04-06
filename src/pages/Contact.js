import React from "react";
import "../header.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <header className="App-header  " >
        <h1>Contact Us</h1>
        <h3 className=" fs-2 fs-md-1 text-center mt-2">We’d love to hear from you. Please fill out the form below.</h3>
      </header>

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h2>Get In Touch</h2>
            <p>
              We are here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>
            <div className="row">
              <div className=" d-flex align-items-center p-3">
                <i className="fa-solid fa-phone bg-dark text-white p-2 rounded-circle fs-5"></i>
                <p className="ms-3 mb-0 fs-5">0123456789</p>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center p-3">
                <i className="fa-solid fa-envelope bg-dark text-white p-2 rounded-circle fs-5"></i>
                <p className="ms-3 mb-0 fs-5">OY4t0@example.com</p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-6 d-flex align-items-center p-3">
                <i class="fa-solid fa-location-dot bg-dark text-white p-2 rounded-circle fs-5"></i>
                <p className="ms-3 mb-0 fs-5">123 Street, Cairo, Egypt</p>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center p-3">
                <i className="fa-solid fa-clock bg-dark text-white p-2 rounded-circle fs-5"></i>
                <p className="ms-3 mb-0 fs-5">
                 
                  Sun - Thu,
                  <br /> 8:00AM - 5:00PM
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-md-6 control-div "
            style={{
              marginTop: "75px",
              backgroundColor: "#D1F8EF",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <form 
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control"
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control"
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="form-control"
                  style={{ borderRadius: "5px" }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  placeholder="Write your message here..."
                  className="form-control"
                  rows="5"
                  style={{ borderRadius: "5px" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-dark "
                style={{
                  padding: "10px",
                  fontSize: "18px",
                  borderRadius: "5px",
                  width: "100%",
                  maxWidth: "300px",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

   <footer
  className="App-footer bg-dark"
  style={{
    marginTop: "100px",
    padding: "40px 0",
    borderTop: "1px solid #444",
  }}
>
  <div className="container">
    <div className="row text-center text-md-start">
      {/*  القسم الأول */}
      <div className="col-12 col-md-4 text-white pt-5">
        <h3 className="mb-3">Brand Collection</h3>
        <p className="mb-4">Find the best products for you</p>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start">
          <i className="fa-solid fa-location-dot fs-5"></i>
          <p className="ms-2 mb-0 fs-5">123 Street, Cairo, Egypt</p>
        </div>
      </div>

      {/*  القسم الثاني */}
      <div className="col-12 col-md-4 text-white pt-5 mt-4 mt-md-0">
        <h3 className="mb-3">Navigation</h3>
        <ul className="list-unstyled">
          <li>
            <Link to="/" className="text-white text-decoration-none">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white text-decoration-none">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-decoration-none">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="text-white text-decoration-none">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      {/*  القسم الثالث */}
      <div className="col-12 col-md-4 text-white pt-5 mt-4 mt-md-0">
        <h3 className="mb-3">Contact Us</h3>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
          <i className="fa-solid fa-phone bg-light text-dark p-2 rounded-circle fs-6"></i>
          <p className="ms-3 mb-0 fs-6">0123456789</p>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
          <i className="fa-solid fa-envelope bg-light text-dark p-2 rounded-circle fs-6"></i>
          <p className="ms-3 mb-0 fs-6">support@brand.com</p>
        </div>
        {/*  أيقونات السوشيال ميديا */}
        <div className="d-flex justify-content-center justify-content-md-start gap-3 mt-3">
          <a href="https://www.facebook.com/brand" className="text-white fs-4">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/brand" className="text-white fs-4">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/brand" className="text-white fs-4">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/brand" className="text-white fs-4">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>

    {/* حقوق الملكية */}
    <div className="text-center pt-4 mt-2 border-top">
      <p className="mb-0 text-white">© 2025 Brand Collection. All rights reserved.</p>
    </div>
  </div>
</footer>

    </>
  );
}
