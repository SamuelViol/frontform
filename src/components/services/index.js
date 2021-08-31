import React from 'react'
import imagem from '../../images/imagem7.jpg'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesIcon, ServicesP, ServicesWrapper, ServicesH2, Servicebg, Imgbg } from './ServicesElementes'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <Servicebg>
                <Imgbg src={imagem}/>
            </Servicebg>
            <ServicesH1>Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Controle de Estoque</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>

                  </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={FaAndroid} /> */}
                    <ServicesH2>Controle de Caixa</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon3} /> */}
                    <ServicesH2>Controle Financeiro</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon1} /> */}
                    <ServicesH2>NFe e NFCe</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                  </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon2} /> */}
                    <ServicesH2>Controle de Entregas</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    {/* <ServicesIcon src={Icon3} /> */}
                    <ServicesH2>E Muito Mais...</ServicesH2>
                    <ServicesP>fsdf fsdfs fsdfs fdsf sfdds fsdfsd</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
