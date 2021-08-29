import { careerData } from "../../Data/careerData";
import "./Programs.scss";

const Programs = () => {
  return (
    <div className="program-section">
     {careerData.map((n) => {
         return(
            <div className="program">
            <div className="program__hover">
              <p className="program__hover-text">{n.hoverText}</p>
              <button className="program__btn">Apply now</button>
            </div>
            <img
              src="images/Programs/20943839.jpg"
              alt=""
              className="program__img"
            />
            <div className="program__text">
              <h4 className="program__heading">{n.domain}</h4>
              <p className="program__para">{n.programDescription}</p>
            </div>
          </div>
         )
     })}
      
    </div>
  );
};

export default Programs;
