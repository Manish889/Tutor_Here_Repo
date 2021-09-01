import "./BgImgText.scss";
const BgImgText = (props) => {
  return (
    <>
      <div className="bgImg">
        <img src='images/bg-poster.jpg' alt="" />
        <div className="bgImg__text">
        <span>{props.toptext}</span> <br />
        <span>{props.bottomtext}</span>
        </div>
       
      </div>
    </>
  );
};
export default BgImgText;
