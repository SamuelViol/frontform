import React from 'react'
import Icon1 from '../../images/imagem.svg'
import Icon2 from '../../images/imagem2.svg'
import Icon3 from '../../images/imagem3.svg'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesIcon, ServicesP, ServicesWrapper, ServicesH2 } from './ServicesElementes'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>fsfdsfds</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1} /> */}
                    <ServicesH2>fsfsd fsdfs</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                  </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon2} /> */}
                    <ServicesH2>fsfsd fsdfs</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon3} /> */}
                    <ServicesH2>fsfsd fsdfs</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
