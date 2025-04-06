import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { removeFromCart, clearCart, SetCartData } from "../slices/CartSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";

export default function CartPage() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.Cart.items);
  // console.log(cart);
 const { darkMode} = useDarkMode();


  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?redirect=/cart");
    } else {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      if (cart.length === 0 && cartData && cartData.length > 0) {
        dispatch(SetCartData(cartData));
      }
    }
  }, [dispatch, navigate, isLoggedIn, cart.length]);

  // ✅ تحديث localStorage عند كل تغيير في cart
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  // console.log(cart);
  const removeFromCartHandler = (product) => {
    Swal.fire({
      title: "Are you sure To Remove?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(product);
        dispatch(removeFromCart(product)); 
        console.log(product);
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  const clearAll = (cart) => {
    Swal.fire({
      title: "Are you sure To Clear All?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart(cart)); 
        Swal.fire("Deleted!", "Your item has been removed.", "success");
      }
    });
  };

  const checked = (product) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Checked Now!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCart(product));
        Swal.fire("Success!", "Your order is on its way.", "success");
      }
    });
  };

  return (
    <>
      <div className="container">
        <h1 style={{ marginTop: "70px", marginBottom: "30px" }}>
          Shopping Cart
        </h1>
        <button className="btn btn-danger mb-3" onClick={() => clearAll(cart)}>
          Clear Cart
        </button>
        <div className="row">
          <div className=" col-12 mb-3 col-md-8 table-responsive">
          <table className={`table table-striped table-bordered table-hover ${darkMode ? "table-dark" : " "}`}>
          <thead className="thead">
                <tr className="tr">
                  <th scope="col">Product Details</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <img className=""
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>

                    <td>{product.price}$</td>
                    <td>{product.quantity}</td>
                    <td>{product.price * product.quantity}</td>
                    <td>
                      <button
                        className="btn btn-danger "
                        onClick={() => removeFromCartHandler(product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className="col-12 p-3 mb-4 col-md-4 col-lg-3 border border-success rounded"
            style={{ maxHeight: "200px" }}
          >
            <h5 className="mt-3 fw-bold">Order Summary</h5>
            <h6>
              Total Items :{" "}
              {cart.reduce((acc, current) => acc + current.quantity, 0)}
            </h6>
            <hr className="mt-4" />
            <h6>
              Total Price :{" "}
              {cart.reduce(
                (acc, current) => acc + current.price * current.quantity,
                0
              )}{" "}
              $
            </h6>
            <button
              className="btn btn-success mb-3 w-100"
              onClick={() => checked()}
            >
              Checkout Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
