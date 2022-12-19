import React, { useEffect } from 'react'
import BrowseMenu from '../components/BrowseMenu'
import ContactHome from '../components/ContactHome'
import FaqHome from '../components/FaqHome'

import HeroBanner from '../components/HeroBanner'
import HowItWorks from '../components/HowItWorks'
import LearnAboutUsHome from '../components/LearnAboutUsHome'
import OrderNowHome from '../components/OrderNowHome'
import { useContext } from "react";
import { NavbarContext } from "../context/NavbarContext";

function Home() {

    const { setNavbarLinkIndex } = useContext(NavbarContext);

    useEffect(()=>{
        setNavbarLinkIndex(0);
    },[])
    return (
        <>
            <HeroBanner />
            <LearnAboutUsHome />
            <HowItWorks />
            <BrowseMenu showTitle={true} />
            <FaqHome />
            <ContactHome />
            <OrderNowHome />
        </>
    )
}



export default Home