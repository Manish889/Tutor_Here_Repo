import React from 'react'
import Header from '../../MyComponents/Header/Navbar';
import Footer from '../../MyComponents/Footer/Index';
import JobTable from './../../MyComponents/JobTable/Index';
import Pagination from './../../MyComponents/Pagination/Index';
import BgImgText from '../../MyComponents/BgImgText/BgImgText';
import './style.css';
const Index = () => {
    return (
        <>
            <Header />
            <BgImgText toptext='Read Anything' bottomtext="that's what she said"/>
            <JobTable />
            <JobTable />
            <JobTable />
            <JobTable />
            <Pagination/>
            <Footer />
        </>
    );
}

export default Index;