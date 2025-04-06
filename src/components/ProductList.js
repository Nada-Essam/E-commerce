import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import {
  getProducts,
  getCategories,
  getProductInCategory,
} from "../slices/productslice";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const { items, categories, loading, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  if (loading)
    return (
      <p className="d-flex justify-content-center align-items-center fs-4 vh-100">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="d-flex justify-content-center align-items-center text-danger fs-4 vh-100">
        Error: {error}
      </p>
    );

  return (
    <>
      <h1 className="text-center pt-5 mb-5">Latest Products</h1>

      <div className="container ">
        {categories.map((category) => (
          <button
            className="btn btn-outline-dark m-2"
            key={category}
            onClick={() => dispatch(getProductInCategory(category))}
          >
            {category}
          </button>
        ))}
        <button
          className="btn btn-outline-dark m-2"
          onClick={() => dispatch(getProducts())}
        >
          All Products
        </button>
        <div className="row mt-3">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
