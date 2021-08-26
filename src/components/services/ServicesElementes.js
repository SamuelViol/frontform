import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;

@media screen and (max-width: 780px){
    height: 1100px;
}
@media screen and (max-width: 480px){
    height: 1300px;
}
`
export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;

`


export const ServcesH1 = styled.h1``



export const ServicesCard = styled.div``