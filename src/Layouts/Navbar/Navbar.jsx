import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <header className="header-area header-sticky">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                <Link to="/" className="logo">
                  <img src="logo.png" alt="" />
                </Link>

                <div className="search-input">
                  <form id="search" action="#">
                    <input
                      type="text"
                      placeholder="Type Something"
                      id="searchText"
                      name="searchKeyword"
                    />
                    <i className="fas fas-search"></i>
                  </form>
                </div>

                <ul className="nav">
                  <li>
                    <Link to="/" >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="browse">Browse</Link>
                  </li>
                  <li>
                    <Link to="details">Details</Link>
                  </li>
                  <li>
                    <Link to="streams">Streams</Link>
                  </li>
                  <li>
                    <Link to="profile">
                      Profile <img src="profile-header.jpg" alt="" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
