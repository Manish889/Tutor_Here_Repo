import React from 'react'
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import BgImgText from '../../MyComponents/BgImgText/BgImgText';
 const LearnersPage = () => {
     return (
        <>
        <Header/>
        <BgImgText toptext='Tutors' bottomtext='A tutors job is to take a bunch of live wires and see that they are well-grounded.' />
        <Footer />
        </>
     );
 }

 export default LearnersPage;