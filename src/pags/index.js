import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NHeader from '../components/NHeader'
import Services from '../components/Services/index'
import InfoSection from '../Infos'
import { homeOne, homeTwo } from '../Infos/data'

const Home = () => {
    return (
        <>
        <NHeader/>
        <HeroSection/>
        <InfoSection {...homeOne}/>
        <InfoSection {...homeTwo}/>
        <Services/>
        <Footer/>
        </>
    )
}

export default Home
