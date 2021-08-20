import './Resources.scss';
const Resources = (props) => {
  return (
    <>
        <div className="resources__card">
          <img className="resources__img" src={props.imgsrc} alt="" />
          <p className="resources__text">{props.text}</p>
        </div>
    </>
  );
};
export default Resources;
