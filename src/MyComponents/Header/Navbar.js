import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../Data/logo1.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink exact activeClassName="navbar1__active" to="/">
            <li className="navbar1__item1"> Home</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/learners">
            <li className="navbar1__item1"> Learners</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/tutors">
            <li className="navbar1__item1"> Tutors</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/circlespace">
            <li className="navbar1__item1"> CircleSpace</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/blogs">
            <li className="navbar1__item1"> Blogs</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/aboutus">
            <li className="navbar1__item1"> About us</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/careers">
            <li className="navbar1__item1"> Careers</li>
          </NavLink>

          <NavLink activeClassName="navbar1__active" to="/.com.au">
            <li className="navbar1__item1"> .com.au</li>
          </NavLink>
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
