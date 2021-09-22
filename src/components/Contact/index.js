import React from 'react'
import { Styles, ContContainer, ContactH1, ContWrapper, ContForm, ContLabel } from './Elements'

const Contact = () => {
    return (
            <ContContainer id="contact">
                <ContactH1>Contato</ContactH1>
                <ContWrapper>
                    <ContForm>
                        <ContLabel>Telefone: (32)99984-1599</ContLabel>
                        <ContLabel>Email: suporte@eloretaguarda.com.br</ContLabel>
                    </ContForm>
                </ContWrapper>
            </ContContainer>
    )
}

export default Contact
