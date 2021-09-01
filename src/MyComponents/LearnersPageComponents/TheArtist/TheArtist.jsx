import AliceCarousel from "react-alice-carousel";
import Members from "../../AboutPageComponents/Members/Members";
import { DataArtist } from "../../../Routes/Learners/Artist";
import "./TheArtist.scss";
const TheArtist = () => {
  const responsive = {
    1: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    1024: { items: 4 },
  };
  return (
    <>
         <h1 className="heading">The Artist</h1>
      <div className="artist">
        <AliceCarousel
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={2000}
          infinite={true}
        >
          {DataArtist.map((n) => {
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
    </>
  );
};
export default TheArtist;
