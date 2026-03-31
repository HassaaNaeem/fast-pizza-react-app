import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Fast Pizza Co.</Link>
      <p>Name</p>
    </header>
  );
}

export default Header;
