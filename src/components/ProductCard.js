import { Link } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card mb-4">
          <img
            src={product.image}
            height="200px"
            width="150px"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.title.substring(0, 12)}...</h5>
            <h4 className="card-text">{product.price}$</h4>
            <div className="d-grid gap-3  d-md-flex justify-content-between text-center">
              <Link
                to={`/product/${product.id}`}
                className="btn btn-outline-dark "
              >
                Details
              </Link>
              <button
                className="btn btn-outline-dark "
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
