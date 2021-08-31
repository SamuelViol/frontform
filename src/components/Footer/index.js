import React from 'react'
import {FooterContainer, FooterLinksContainer, FooterWrap, LinkItens, LinkTitle, LinkTo, LinksWrap, CreditsContainer ,FooterCredits} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                {/* <FooterLinksContainer>
                    <LinksWrap>
                        <LinkItens>
                            <LinkTitle>Testes</LinkTitle>
                            <LinkTo>Teste</LinkTo>
                            <LinkTo>Teste</LinkTo>
                            <LinkTo>Teste</LinkTo>
                            <LinkTo>Teste</LinkTo>
                            <LinkTo>Teste</LinkTo>
                        </LinkItens>
                    </LinksWrap>
                </FooterLinksContainer> */}
                <CreditsContainer>
                <FooterCredits>testetetet</FooterCredits>
                </CreditsContainer>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
