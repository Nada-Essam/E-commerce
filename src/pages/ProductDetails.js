import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../slices/CartSlice";
import { getProducts } from "../slices/productslice";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.items);
  console.log(products);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    if (products.length === 0) {
      // if store is empty
      // check local storage
      const storedProducts = JSON.parse(localStorage.getItem("products"));
      if (storedProducts && storedProducts.length > 0) {
        // if local storage is not empty
        setProduct(storedProducts.find((p) => p.id === parseInt(id)));
      } else {
        // if local storage is empty
        dispatch(getProducts());
      }
    } else {
      // if store is not empty
      setProduct(products.find((p) => p.id === parseInt(id)));
    }
  }, [id, products, dispatch]);
  if (!products.length)
    return (
      <div className="text-center" style={{ marginTop: "90px" }}>
        Loading...
      </div>
    );
  else if (!product) {
    return (
      <div className="text-center" style={{ marginTop: "90px" }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: "90px" }}>
      <h2>Product #{id}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.image}
            className="img-fluid"
            style={{ width: "75%" }}
            alt={product.title}
          />
        </div>
        <div className="col-md-6">
          <h3>
            Title:<span className="span text-muted fs-4"> {product.title}</span>{" "}
          </h3>
          <br />
          <h3>
            Category:{" "}
            <span className="span text-muted fs-4"> {product.category}</span>
          </h3>
          <br />
          <h3>
            Description:
            <span className="span text-muted fs-4"> {product.description}</span>
          </h3>
          <br />
          <h4>
            Price: <span className="span text-muted fs-4">{product.price}$</span>
          </h4>
          <br />
          <button
            className="btn btn-primary mt-3 "
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
