import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Data/logo1.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="" />
        </div>

        <ul
          className={
            showMobile ? "navbar__list navbar__list_mobile" : "navbar__list"
          }
        >
          <Link to="/">
            <li className="navbar__item"> Home</li>
          </Link>
          <Link to="/learners">
            <li className="navbar__item"> Learners</li>
          </Link>
          <Link>
            <li className="navbar__item"> CircleSpace</li>
          </Link>
          <Link to='/blogs'>
            <li className="navbar__item"> Blogs</li>
          </Link>
          <Link to='/aboutus'>
            <li className="navbar__item"> About us</li>
          </Link>
          <Link>
            <li className="navbar__item"> Careers</li>
          </Link>
          <Link>
            <li className="navbar__item"> .com.au</li>
          </Link>
        </ul>
        <div
          onClick={() => {
            setShowMobile(!showMobile);
          }}
          className="navbar__hamburger"
        ></div>
        <SearchIcon className="navbar__search" style={{ fontSize: "3rem" }} />
      </div>
    </>
  );
};

export default Navbar;
