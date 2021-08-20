import "./Members.scss";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Members = (props) => {
  return (
    <>
      <div className="people">
        <div className="people__img">
          <img src={props.imgsrc} alt="" />
          <div className="people__hover-text">
            <p className="people__full-designation">{props.fullDesignation}</p>
            <a className="people__icon" href={props.linkedIn} target="_blank">
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
        </div>
        <div className="people__body">
          <h3 className="people__heading">{props.title}</h3>
          <p className="people__designation">{props.designation}</p>
          <p className="people__text">{props.email}</p>
        </div>
      </div>
    </>
  );
};

export default Members;
