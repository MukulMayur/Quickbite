import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import AppDownload from "./components/AppDownload/AppDownload";
import ScrollToTop from "./components/ScollltoTop";
import Preloader from "./components/Preloader";
import LoginPop from "./components/LoginForm/LoginPop";
import { useLocation } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds for preloader
  }, []);

  return (
    <>
      {showLogin && <LoginPop setShowLogin={setShowLogin} />}
      <div className="app">
        <Preloader load={loading} />
        <div className={loading ? "no-scroll" : "scroll"}></div>
        <Navbar setShowLogin={setShowLogin} />
        <ScrollToTop />
        <Routes>
          <Route path="/Quickbite/" element={<Home />} />
          <Route path="/Quickbite/cart" element={<Cart />} />
          <Route path="/Quickbite/order" element={<PlaceOrder />} />
        </Routes>
      </div>

      {location.pathname !== "/cart" && <AppDownload />}
      <Footer />
    </>
  );
};
export default App;
