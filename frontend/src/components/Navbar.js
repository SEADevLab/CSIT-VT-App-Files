import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>CSIT VirusTotal App</h1>
        </Link>
        <Link to="/form">
          <p>Upload Zip File</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
