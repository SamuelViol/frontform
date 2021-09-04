import React from 'react'
import imagem from '../../images/imagem10.jpg'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesIcon, ServicesP, ServicesWrapper, ServicesH2, Servicebg, Imgbg } from './ServicesElementes'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <Servicebg>
                <Imgbg src={imagem} />
            </Servicebg>
            <ServicesH1>Serviços</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesH2>Controle de Estoque</ServicesH2>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Controle de Caixa</ServicesH2>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>Controle Financeiro</ServicesH2>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesH2>NFe e NFCe</ServicesH2>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                    <ServicesP><GiCheckMark/> fsdf fsdfs fsdfs fdsf sfdds</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
