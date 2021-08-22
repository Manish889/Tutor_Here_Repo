import React from "react";
import "../Title/cardview.css";
import aboutusImg from "../../Data/aboutus.png";

export default function Index() {
  return (
    <div className="videobox1">
      <section className="card1">
        
        <div>
          <img src={aboutusImg} />
          <h3>
            We Are A Community Of Passionate Teachers And Learners
            <br /> Who Work Towards Simplifying Learning.
          </h3>
        </div>
        <a className="aboutuslink" href="#">
          Learn More
        </a>
      </section>
      <body>
         
        <iframe   className="video1"  src="https://www.youtube.com/embed/g4BGZY9Omvc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      </body>
    </div>
  );
}
