import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NHeader from '../components/NHeader'

import Services2 from '../components/Services2/index'
import InfoSection from '../Infos'
import { homeOne, homeTwo } from '../Infos/data'

const Home = () => {
    return (
        <>
        <NHeader/>
        <HeroSection/>
        <InfoSection {...homeOne}/>
        <InfoSection {...homeTwo}/>
        <Services2/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home
