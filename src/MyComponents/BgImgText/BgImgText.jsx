import "./BgImgText.scss";
import bgImg from "../../Data/bgImg.jpg";
const BgImgText = (props) => {
  return (
    <>
      <div className="bgImg">
        <img src={bgImg} alt="" />
        <div className="bgImg__text">
        <span>{props.toptext}</span> <br />
        <span>{props.bottomtext}</span>
        </div>
       
      </div>
    </>
  );
};
export default BgImgText;
