import './Resources.scss';
const Resources = (props) => {
  return (
    <>
        <div className="resources__card">
          <a href={props.link} target='_blank'>
          <img className="resources__img" src={props.imgsrc} alt="" />
          </a>
          
          <p className="resources__text">{props.text}</p>
        </div>
    </>
  );
};
export default Resources;
