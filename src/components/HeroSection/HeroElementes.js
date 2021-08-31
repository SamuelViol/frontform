import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #f0f0f0;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;
`
export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a43;
`

export const HeroContent = styled.div`
z-index: 1; 
align-items: center;
display: flex;
flex-direction: column;
padding: 8px 24px;
max-width: 1200px;
position: absolute;
`

export const HeroH1 = styled.h1`
font-size: 50px;
line-height: 1.1;
color: white;
align-items: center;

@media screen and (max-width: 780px){
    font-size: 40px;
}
@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 28px;
text-align: center;
max-width: 600px;
font-family: helvetica;

@media screen and (max-width: 780px){
    font-size: 24px;
}
@media screen and (max-width: 480px){
    font-size: 18px;
}

transition: all 0.2s ease-in-out;

&:hover{
    transform:scale(1.01);
    transition: all 0.2s ease-in-out;
    color: #e3e3e3;
}
`
export const HeroBtn = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`
