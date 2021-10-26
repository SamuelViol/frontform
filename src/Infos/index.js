import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, BtnWrap, Imgbg, Infobg } from './InfoElements'
import { ButtonInfo } from '../components/ButtonInfo'
import imagem from '../images/imagem9.jpg'

const InfoSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, buttonText, description, img, alt, primary, dark, to }) => {
    if (id == 'sobre') {
        return (
            <>
                <InfoContainer lightBg={lightBg} id={id}>
                {/* <InfoContainer id={id}> */}
                    {/* <Infobg>
                        <Imgbg src={imagem} />
                    </Infobg> */}
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <ButtonInfo to={to}
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact={true}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                        >{buttonText}</ButtonInfo>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </>
        )

    } else {
        return (
            <>
                {/* <InfoContainer lightBg={lightBg} id={id}> */}
                <InfoContainer lightBg={lightBg} id={id}>
                    <InfoWrapper>
                        <InfoRow imgStart={imgStart}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headline}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <BtnWrap>
                                        <ButtonInfo to='home'
                                            smooth={true}
                                            duration={500}
                                            spy={true}
                                            exact={true}
                                            primary={primary ? 1 : 0}
                                            dark={dark ? 1 : 0}
                                        >{buttonText}</ButtonInfo>
                                    </BtnWrap>
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </>
        )
    }

}

export default InfoSection
