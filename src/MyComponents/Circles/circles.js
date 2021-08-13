import React from "react";
import { NavLink } from "react-router-dom";
import "./circles.css";
import Circle_cards from "./circle_cards";


const Circles = () => {
  return (
    <>
      <div className="circle">
        <div className="learnwithus" id=" circle1">
         <br/> Learn with us.
        </div>
        <div className="improvewithus" id="circle2">
          Improve with us.
        </div>
        <div className ="box-main">
        <Circle_cards className =" " number ="4+" text ="COUNTRIES"  />
        <Circle_cards className =" " number ="75+" text ="MEMBERS"  />
        <Circle_cards className =" " number ="45+" text ="FREE COURSES"  />
        <Circle_cards className =" " number ="130+" text ="BLOGS"  />
        </div>
        
          <NavLink to="/" className ="btn_navlink_circle">Explore Our Courses</NavLink>
      
  
      </div>
    </>
  );
};

export default Circles;
