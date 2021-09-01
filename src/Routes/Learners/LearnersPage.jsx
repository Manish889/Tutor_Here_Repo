import React from "react";
import Art from "../../MyComponents/LearnersPageComponents/Art/indexart";
import TheArtist from "../../MyComponents/LearnersPageComponents/TheArtist/TheArtist";
import ResourcesConatiner from "../../MyComponents/LearnersPageComponents/LearnersResources/ResourcesContainer";
import Header from "../../MyComponents/Header/Navbar";
import Footer from "../../MyComponents/Footer/Index";
import BgImgText from "../../MyComponents/BgImgText/BgImgText";
const LearnersPage = () => {
  return (
    <>
      <Header />
      <BgImgText
        toptext="Learn Everything"
        bottomtext="and become sharma ji ka beta"
      />
      <Art />
      <TheArtist />
      <ResourcesConatiner />
      <Footer />
    </>
  );
};

export default LearnersPage;
