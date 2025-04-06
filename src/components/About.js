import React from "react";
import "../about.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className=" about">
        <section className="hero-section text-center py-5">
          <h1 data-aos="fade-up" className="fw-bold fs-1 fs-md-1">
            Welcome to Our Store
          </h1>
          <p data-aos="fade-up" className="lead fs-3 fs-md-1 fw-medium mt-3">
            Your go-to store for quality products at the best prices!
          </p>
        </section>

        <section className="About-section ">
          <h1 data-aos="fade-right" className="fw-bold ">
            Who We Are ?
          </h1>
          <p
            data-aos="fade-right"
            className="lead fs-3 mt-3 fs-md-4  fw-medium "
          >
            We are an e-commerce store dedicated to providing high-quality
            products with excellent customer service.
          </p>
        </section>

        <section className="mission-vision-section container">
          <div className="row ">
            <div className="col-12 col-md-6 pb-4 pb-md-0" data-aos="flip-left">
              <h3>🌟 Our Mission</h3>
              <p className="fw-medium fs-4">
                To make online shopping easier, more affordable, and secure for
                everyone.
              </p>
            </div>
            <div className="col-12 col-md-6 " data-aos="flip-left">
              <h3>🚀 Our Vision</h3>
              <p className="fw-medium fs-4">
                We aim to become a leading e-commerce platform trusted by
                customers worldwide.
              </p>
            </div>
          </div>
        </section>

        <section
          className=" text-center my-5"
          style={{ height: "90vh", color: "white" }}
        >
          <h2 data-aos="zoom-in">Why Choose Us?</h2>
          <div className="row mt-4">
            {[
              {
                icon: "🏆",
                title: "High-Quality Products",
                text: "We offer only the best.",
              },
              {
                icon: "🚀",
                title: "Fast Shipping",
                text: "Get your order delivered in no time.",
              },
              {
                icon: "💳",
                title: "Secure Payments",
                text: "Your transactions are safe with us.",
              },
              {
                icon: "🤝",
                title: "Customer Satisfaction",
                text: "We prioritize our customers' needs.",
              },
            ].map((item, index) => (
              <div
                className="col-12 col-sm-6 col-md-3 mb-4"
                data-aos="fade-up"
                key={index}
              >
                <h4 className="fw-bold">
                  {item.icon} {item.title}
                </h4>
                <p className="fs-4">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
