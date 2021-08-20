import MembersGrid from "../../MyComponents/MembersGrid/MembersGrid";
import BgImgText from "../../MyComponents/BgImgText/BgImgText";
import Header from '../../MyComponents/Header/Navbar';
import Footer from "../../MyComponents/Footer/Index";
import "./AboutUs.scss";

const AboutUsPageManish = () => {
  return (
    <>
    <Header />
      <div className="AboutUs">
        <BgImgText toptext='About Us' bottomtext='me and bois' />
      </div>

      <div className="AboutUs__text-box">
        <h1 className="AboutUs__heading">
          Retention is easier when learning is exciting!
        </h1>
        <p className="AboutUs__text">
          We believe to be a thread that makes retention much more beneficial to
          you and the society. Tutor Here is a community of global educators
          united in a shared goal of upliftment and transformation. We connect a
          deep understanding of education with the power of technology to
          continuously push the boundaries of learning.
        </p>
      </div>
      <MembersGrid />
      <Footer />
    </>
  );
};

export default AboutUsPageManish;
