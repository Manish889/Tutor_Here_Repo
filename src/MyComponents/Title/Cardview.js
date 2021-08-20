import React from "react";
import "../Title/cardview.css";

export default function Index() {
  return (
    <div className="videobox1">
      <section className="card1">
        
        <div>
          <img src="https://media.istockphoto.com/vectors/website-information-concept-vector-id1286378180?b=1&k=6&m=1286378180&s=612x612&w=0&h=X1dHJz25CHwm8VnmyBADIKUpGfLBkKB1Q4RRwUNAugU=" />
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
