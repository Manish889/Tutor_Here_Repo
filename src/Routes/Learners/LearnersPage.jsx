import React from 'react'
import topImg from '../../Data/Learners-Page-Art.jpg';
import Art from '../../MyComponents/Art/indexart';
import TheArtist from '../../MyComponents/TheArtist/TheArtist';
import ResourcesConatiner from '../../MyComponents/LearnersResources/ResourcesContainer';
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import './LearnersPage.scss';
 const LearnersPage = () => {
     return (
        <>
        <Header/>
        <img className='learners__img' src={topImg} alt="" />
        <Art />
        <TheArtist />
        <ResourcesConatiner />
        <Footer />
        </>
     );
 }

 export default LearnersPage;