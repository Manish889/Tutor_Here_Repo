import React from 'react'
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import TutorRows from '../../MyComponents/TutorRows/Index';
import BgImgText from '../../MyComponents/BgImgText/BgImgText';
import "../Tutors/style.css";
 const LearnersPage = () => {
     return (
        <>
        <Header/>
        <BgImgText  toptext='Tutors' bottomtext='A tutors job is to take a bunch of live wires and see that they are well-grounded.' />
        <div className="main-tutors">
        <TutorRows />
        </div>
        <Footer />
        </>
     );
 }

 export default LearnersPage;