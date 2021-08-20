import React from 'react'
import Art from '../../MyComponents/Art/indexart';
import TheArtist from '../../MyComponents/TheArtist/TheArtist';
import ResourcesConatiner from '../../MyComponents/LearnersResources/ResourcesContainer';
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import BgImgText from '../../MyComponents/BgImgText/BgImgText';
import './LearnersPage.scss';
 const LearnersPage = () => {
     return (
        <>
        <Header/>
        <BgImgText toptext='Learn Everything' bottomtext='and become sharma ji ka beta' />
        <Art />
        <TheArtist />
        <ResourcesConatiner />
        <Footer />
        </>
     );
 }

 export default LearnersPage;