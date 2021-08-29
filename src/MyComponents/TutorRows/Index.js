import { DataTutors } from "../../Data/Data";
import React from "react";
import "./style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const TutorRows = () => {
  return (
    <>
      {DataTutors.map((n) => {
        return (
          <div class="profile md-3 mt-3 col-8 ">
            <a className="profile__image" href={n.linkedIn} target="_blank">
              <img src={n.image} alt="" className="profile__ico" />
              <div class="middle">
              <LinkedInIcon
                            style={{
                                color: "blue",
                                fontSize: "2.5rem",
                                backgroundColor: "rgba(255,255,255, .85)",
                                borderRadius: ".5rem",
                            }}
                        />
              </div>
            </a>
            <div className="tutors-detail">
              <div class="profile__name"> {n.name} </div>
              <div class="profile__designation">
                Designaion : {n.designation}
              </div>
              <div class="profile__fulldesignation"> {n.fullDesignation}</div>

              
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};

export default TutorRows;
