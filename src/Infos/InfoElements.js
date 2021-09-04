import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 780px){
    height: 1100px;
}
@media screen and (max-width: 480px){
    height: 900px;
}

display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 100vh;
position: relative;
z-index: 1;
`
export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 100vh;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`
export const Infobg = styled.div`
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

export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px){
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`

export const TopLine = styled.p`
color: #1a24eb;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f9f9f9' : '#010606')};
font-family: Futara;

@media screen and (max-width: 480px){
    font-size: 32px;
}
`

export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
font-family: Helvetica;
border-radius: 10px; 
line-height: 24px;
color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`
export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
`