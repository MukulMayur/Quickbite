import React, { useState } from "react";
import "../../style.css";

const Header = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className="header">
      <div className="header-contents">
        <p className="header-text">Order Your</p>
        <p className="header-text">Favourite</p>
        <p className="header-text">Food Here</p>
        <a href="#explore-menu" onClick={() => setMenu("menu")}>
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
