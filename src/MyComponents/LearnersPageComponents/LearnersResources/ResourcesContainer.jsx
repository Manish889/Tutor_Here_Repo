import Resources from "./Resources";
import { resources } from "../../../Routes/Learners/Artist";

const ResourcesConatiner = () => {
  return (
    <>
      <h1 className="heading">Try Some Cool Resources</h1>
      <div className="resources">
        {resources.map((n) => {
          return (
              <Resources link={n.link} id={n.id} imgsrc={n.img} text={n.text} />
          );
        })}
      </div>
    </>
  );
};
export default ResourcesConatiner;
