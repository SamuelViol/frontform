import React from 'react'
import Video from '../../videos/video.mp4'
import { Button } from '../Button'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtn} from './HeroElementes'

const HeroSection = () => {
    return (
        <HeroContainer id="Home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Elo Informática</HeroH1>
                    <HeroP>
                    O sistema certo para a sua empresa
                    </HeroP>
                    <HeroBtn>
                        <Button to='sobre'>Saiba Mais</Button>
                    </HeroBtn>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
