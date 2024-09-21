import React from "react";
import "../../style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <p className="header-text">Order Your</p>
        <p className="header-text">Favourite</p>
        <p className="header-text">Food Here</p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
