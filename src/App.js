import Navbar from "./components/navbar";
import Slider from "./components/Slider";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsPage />
            </>
          }
        ></Route>
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/Cart" element={<CartPage />} /> 
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

    
    </>
  );
}

export default App;
