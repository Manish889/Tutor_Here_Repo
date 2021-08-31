import "./Programs.scss";

const Programs = () => {
  return (
    <div className="program-section">
      <div className="program">
        <div className="program__hover">
          <p className="program__hover-text">Want to work with us</p>
          <button className="program__btn">Apply now</button>
        </div>
        <img
          src="images/Programs/20943839.jpg"
          alt=""
          className="program__img"
        />
        <div className="program__text">
          <h4 className="program__heading">Join for a better future</h4>
          <p className="program__para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit dignissimos, repudiandae explicabo expedita ducimus laborum
            voluptatem, ex dolorum ipsam nam dolor quas sed deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
