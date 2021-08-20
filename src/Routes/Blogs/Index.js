import React from 'react'
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import BgImgText from '../../MyComponents/BgImgText/BgImgText';
import './style.css';
const Index = () => {
    return (
        <>
            <Header />
            <BgImgText toptext='Read Everything' bottomtext="that's what she said"/>
            <Footer />
        </>
    );
}

export default Index;