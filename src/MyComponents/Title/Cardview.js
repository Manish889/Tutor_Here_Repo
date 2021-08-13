import React from "react";
import "../Title/cardview.css";

export default function Index() {
  return (
    <>
      <section className="card1">
        <div>
          <img src="https://media.istockphoto.com/vectors/website-information-concept-vector-id1286378180?b=1&k=6&m=1286378180&s=612x612&w=0&h=X1dHJz25CHwm8VnmyBADIKUpGfLBkKB1Q4RRwUNAugU=" />
          <h3>
            We Are A Community Of Passionate Teachers And Learners
            <br /> Who Work Towards Simplifying Learning.
          </h3>
        </div>
        <a className="aboutuslink" href="#">
          learn more
        </a>
      </section>
      <br />
      <br /> <br /> <br /> <br />
      <body>
        <iframe
          className="video"
          width="70%"
          height="500"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </body>
    </>
  );
}
