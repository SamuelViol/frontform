import styled from 'styled-components'

export const ContContainer = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
z-index: 1;
`
export const ContactH1 = styled.h1`
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
`
export const ContWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`
export const ContForm = styled.form`
/* background-color: blueviolet; */
height: 20rem;
width: 100%;
max-width: 700px;
margin-right: auto;
margin-left: auto;
margin-bottom: 30rem;
text-align: center;
box-sizing: border-box;
border: 2px solid;
border-radius: 4px;
`

export const ContLabel = styled.h3`

`