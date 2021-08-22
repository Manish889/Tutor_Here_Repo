import React, { useState } from "react";
import Header from "../../MyComponents/Header/Navbar";
import Footer from "../../MyComponents/Footer/Index";
import Pagination from "./../../MyComponents/Pagination/Pagination";
import BgImgText from "../../MyComponents/BgImgText/BgImgText";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Blogs from "../../MyComponents/Blogs/blogs";
const Index = () => {

  return (
    <>
      <Header />
      <BgImgText toptext="Read Anything" bottomtext="that's what she said" />
    
    <Blogs/>
      <Footer />
    </>
  );
};

export default Index;
