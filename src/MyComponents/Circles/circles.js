import React from "react";
import { NavLink } from "react-router-dom";
import "./circles.css";
import Circle_cards1 from "./circle_cards1";
import Circle_cards2 from "./circle_cards2";


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
        <div className ="box-main1">
        <Circle_cards1 className ="box-item1" number ="89%" text ="+women work force"  />
        <Circle_cards1 className =" " number ="97%" text ="+student work force"  />
        </div>
        <div className ="box-main2">
        <Circle_cards2 className =" " number ="4+" text ="Countries"  />
        <Circle_cards2 className =" " number ="75+" text ="Members"  />
        <Circle_cards2 className =" " number ="45+" text ="Free Courses"  />
        <Circle_cards2 className =" " number ="130+" text ="Blogs"  />
        </div>
        
          <NavLink to="/" className ="btn_navlink_circle">Explore Our Courses</NavLink>
      
  
      </div>
    </>
  );
};

export default Circles;
