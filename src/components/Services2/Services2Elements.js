import styled from 'styled-components'

export const Styles = styled.div`
/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
  height: 180px;
  transition: all 0.2s ease-in-out;
  &:hover{
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
}
.h5{
  color: #1a24eb;
  margin-bottom: 0px;
  @media screen and (max-width: 1366px){
    font-size: 15px;
}
@media screen and (max-width: 1024px){
    font-size: 15px;
}  
}
.row{
  margin-top: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 860px){
    grid-template-columns: 1fr;
    padding: 0 20px;
}
}
.react-icons{
  vertical-align: middle;
  color: #1a24eb;
  font-size: 50px;
  @media screen and (max-width: 1366px){
    font-size: 35px;
}
@media screen and (max-width: 1024px){
    font-size: 32px;
}
}
`
export const ServiceContainer = styled.div`
max-height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 30px;
position: relative;
z-index: 1;
`

export const ServicesH1 = styled.h1`
font-size: 3.5rem;
color: 'black';
font-weight: bold;
margin-top: 10rem;
/* margin-bottom: 54px; */
font-family: Futara;
z-index: 1;
transition: all 0.1s ease-in-out;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
`

// export const ServicesWrapper = styled.div`
// /* display: grid; */
// z-index: 1;
// height: 100vh;
// width: 100%;
// max-width: 1100px;
// margin-right: auto;
// margin-left: auto;
// padding: 0 24px;
// justify-content: center;
// `
// export const ServicesWrapper = styled.div`
// display: grid;
// z-index: 1;
// height: 100vh;
// width: 100%;
// max-width: 1100px;
// margin-right: auto;
// margin-left: auto;
// padding: 0 24px;
// justify-content: center;
// `