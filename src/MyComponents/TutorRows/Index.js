import {DataTutors} from "../../Data/Data";
import React from "react";
import "./style.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const TutorRows = () => {
    return (
        <>
            {DataTutors.map((n) => {
              return (
                <div class="profile md-3">
                    <img src={n.image} alt ="" className="profile__image"/>
                    <div class="profile__name">Name : {n.name} </div>
                    <div class="profile__designation">Designaion : {n.designation}</div>
                    <div class="profile__fulldesignation"> {n.fullDesignation}</div> 
                    <a className="profile__linkedIn" href={n.linkedIn} target="_blank">
                        <LinkedInIcon
                            style={{
                                color: "blue",
                                fontSize: "2.5rem",
                                backgroundColor: "rgba(255,255,255, .85)",
                                borderRadius: ".5rem",
                            }}
                        />
                    </a>
                </div>
              );
            })}
        </>
    );
};

export default TutorRows;
