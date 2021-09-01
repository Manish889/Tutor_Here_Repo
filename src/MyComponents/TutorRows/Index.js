import { DataTutors } from "../../Data/Data";
import React from "react";
import "./style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const TutorRows = () => {
  return (
    <>
      {DataTutors.map((n) => {
        if (n.id % 2 == 0) {
          return (
            <div class="profile-1 md-3 mt-3 col-10 ">
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
        }

        return (
          <div class="profile-2 md-3 mt-3 col-10 ">
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
            <div className="tutors-detail-2">
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
