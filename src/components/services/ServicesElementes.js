import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
position: relative;

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
grid-template-columns: 1fr 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;
z-index: 1;
@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 780px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`
export const Servicebg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
filter: blur(2px);
`

export const Imgbg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
`

export const ServicesCard = styled.div`
background: #ffff;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
border-radius: 10px;
max-height: 340px;
height: 240px;
padding: 30px;
box-shadow: 0 1px 3px;
transition: all 0.2s ease-in-out;

&:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #ffff;
}
`

export const ServicesIcon = styled.image`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
font-size: 3.5rem;
color: 'black';
font-weight: bold;
margin-bottom: 84px;
font-family: Futara;
z-index: 1;
transition: all 0.1s ease-in-out;

@media screen and (max-width: 480px){
    font-size: 2rem;
}

&:hover{
    transform:scale(1.01);
    transition: all 0.1s ease-in-out;
}
`

export const ServicesH2 = styled.h2`
font-size: 1.0062rem;
margin-bottom: 8px;

@media screen and (max-width: 480px){
    font-size: 0.90rem;
}
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
margin-bottom: 8px;
`



