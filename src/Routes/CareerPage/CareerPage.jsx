import Header from "../../MyComponents/Header/Navbar";
import Footer from "../../MyComponents/Footer/Index";
import Programs from "../../MyComponents/CareerPageComponents/Programs/Programs";

import "./CareerPage.scss";

const CareerPage = () => {
  return (
    <>
      <Header />
      <div className="careerpage">
        <h2 className="careerpage__box">Programs</h2>
        <h4 className='careerpage__heading'>Join Our Programs</h4>
        <Programs />
      </div>
      
      <Footer />
    </>
  );
};

export default CareerPage;
