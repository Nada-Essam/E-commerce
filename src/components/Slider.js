import img1 from "../images/Top-10-Best-Selling-Clothing-Brands-In-The-World-sajt.jpg";
import img2 from "../images/istockphoto-1428709516-612x612.jpg";
import img3 from "../images/pngtree-business-concept-of-online-shopping-e-commerce-png-image_5345089.jpg";

export default function Slider() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={img1}
              className="d-block w-100"
              style={{ height: "100vh"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img2}
              className="d-block w-100"
              style={{ height: "100vh"}}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={img3}
              className="d-block w-100"
              style={{ height: "100vh"}}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
