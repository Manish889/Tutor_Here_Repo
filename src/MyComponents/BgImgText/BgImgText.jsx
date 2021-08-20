import "./BgImgText.scss";
import bgImg from "../../Data/bgImg.jpg";
const BgImgText = (props) => {
  return (
    <>
      <div className="bgImg">
        <img src={bgImg} alt="" />
        <span>{props.toptext}</span>
        <span>{props.bottomtext}</span>
      </div>
    </>
  );
};
export default BgImgText;
