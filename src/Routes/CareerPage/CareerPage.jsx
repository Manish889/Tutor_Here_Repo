import Header from "../../MyComponents/Header/Navbar";
import Footer from "../../MyComponents/Footer/Index";
import Programs from "../../MyComponents/CareerPageComponents/Programs/Programs";
import Career from "../../MyComponents/CareerPageComponents/Career/Career";

import "./CareerPage.scss";

const CareerPage = () => {
  return (
    <>
      <Header />
      {/* <Career /> */}
      <div className="careerpage">
        <h2 className="careerpage__box">Programs</h2>
        <h4 className="careerpage__heading">Join Our Programs</h4>
        <Programs />
        <h2 className="careerpage__box">What we offer</h2>
        <h4 className="careerpage__text">
          At stet aliquam nec, mei an dicam posidonium instructior. Id iracundia
          scriptorem disputando mea, omnes corpora ne sed.{" "}
        </h4>

        <Career />
      </div>

      <Footer />
    </>
  );
};

export default CareerPage;
