import Members from "../Members/Members";
import {
  DataFounder,
  DataCoo,
  DataTeamManagers,
  DataTechTeam,
  DataTutors,
} from "../../../Data/Data";
import "./MembersGrid.scss";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import AliceCarousel from "react-alice-carousel";

const MembersGrid = () => {
  const responsive = {
    1: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };

  return (
    <>
      <div className="people-grid">
        <h1 className="heading">Founder</h1>
        <div className="people-section">
            {DataFounder.map((n) => {
              return (
                <Members
                  imgsrc={n.image}
                  title={n.name}
                  email={n.email}
                  designation={n.designation}
                  linkedIn={n.linkedIn}
                  fullDesignation={n.fullDesignation}
                />
              );
            })}
        </div>

        <h1 className="heading">Coo</h1>
        <div className="coo-section">
          <AliceCarousel responsive={responsive} paddingLeft={300} paddingRight={300}>
            {DataCoo.map((n) => {
              return (
                <Members
                  imgsrc={n.image}
                  title={n.name}
                  email={n.email}
                  designation={n.designation}
                  fullDesignation={n.fullDesignation}
                  linkedIn={n.linkedIn}
                />
              );
            })}
          </AliceCarousel>
        </div>

        <h1 className="heading">Team Managers</h1>
        <div className="teamManager-section">
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            autoPlayStrategy="all"
          >
            {DataTeamManagers.map((n) => {
              return (
                <Members
                  imgsrc={n.image}
                  title={n.name}
                  email={n.email}
                  designation={n.designation}
                  fullDesignation={n.fullDesignation}
                  linkedIn={n.linkedIn}
                />
              );
            })}
          </AliceCarousel>
        </div>

        {/* <h1 className="heading">Tech Team</h1>
        <div className="intern-section">
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            autoPlayStrategy="all"
          >
            {DataTechTeam.map((n) => {
              return (
                <Members
                  imgsrc={n.image}
                  title={n.name}
                  email={n.email}
                  designation={n.designation}
                  fullDesignation={n.fullDesignation}
                  linkedIn={n.linkedIn}
                />
              );
            })}
          </AliceCarousel>
        </div> */}

        <h1 className="heading">Tutors</h1>
        <div className="tutor-section">
          <AliceCarousel
            autoPlay={true}
            autoPlayInterval={2000}
            infinite={true}
            responsive={responsive}
            autoPlayStrategy="all"
          >
            {DataTutors.map((n) => {
              return (
                <Members
                  imgsrc={n.image}
                  title={n.name}
                  email={n.email}
                  designation={n.designation}
                  fullDesignation={n.fullDesignation}
                  linkedIn={n.linkedIn}
                />
              );
            })}
          </AliceCarousel>
        </div>
      </div>
    </>
  );
};

export default MembersGrid;
