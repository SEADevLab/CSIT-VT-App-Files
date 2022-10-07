import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const queryRef = useRef(null); // Reference to the input

  // Navigates the user to reviews/what they've written
  const queryHandler = (e) => {
    e.preventDefault()
    navigate(`search/${queryRef.current.value}`);
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>CSIT VirusTotal App</h1>
        </Link>
        <form className="searchbar" onSubmit={queryHandler}>
          <input type="text" ref={queryRef} placeholder="Search" />
          <button type="submit">Search</button>
        </form>
        <Link to="/form">
          <p>Upload Zip File</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
