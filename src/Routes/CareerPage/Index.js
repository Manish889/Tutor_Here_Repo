import React from 'react'
import Header from './../../MyComponents/Header/Index';
import Career from './../../MyComponents/Career/Index';
import JobTable from './../../MyComponents/JobTable/Index';
import SuggestionBox from './../../MyComponents/SuggestionBox/Index';
import Footer from './../../MyComponents/Footer/Index';

import Circles from '../../MyComponents/Circles/circles';
import Cardview from '../../MyComponents/Title/Cardview';
import Calendar from '../../MyComponents/calendar/Calendar';
import Chatbot from '../../MyComponents/Chatbot/index';
import '../CareerPage/style.css';
export default function Index() {
    return (
        <>
            <Header />
            
            <Career />
            <Cardview/>
            <Circles/>
            <JobTable />
            <div className="latest_update">
            <Calendar/>
            <Chatbot/>
            <SuggestionBox/>

            </div>
            <Footer/>
        </>
    )
}
