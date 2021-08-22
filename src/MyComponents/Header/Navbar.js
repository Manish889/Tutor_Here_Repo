import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Data/logo1.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <div className="navbar1">
        <div className="navbar1__logo">
          <img src={logo} alt="" />
        </div>

        <ul
          className={
            showMobile ? "navbar1__list navbar1__list_mobile" : "navbar1__list"
          }
        >
          <Link to="/">
            <li className="navbar1__item1"> Home</li>
          </Link>
          <Link to="/learners">
            <li className="navbar1__item1"> Learners</li>
          </Link>
          <Link>
            <li className="navbar1__item1"> CircleSpace</li>
          </Link>
          <Link to='/blogs'>
            <li className="navbar1__item1"> Blogs</li>
          </Link>
          <Link to='/aboutus'>
            <li className="navbar1__item1"> About us</li>
          </Link>
          <Link>
            <li className="navbar1__item1"> Careers</li>
          </Link>
          <Link>
            <li className="navbar1__item1"> .com.au</li>
          </Link>
        </ul>
        <div
          onClick={() => {
            setShowMobile(!showMobile);
          }}
          className="navbar1__hamburger"
        ></div>
        <SearchIcon className="navbar1__search" style={{ fontSize: "3rem" }} />
      </div>
    </>
  );
};

export default Navbar;
