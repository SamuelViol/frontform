import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #f05053, #e1eec3);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export const ContContainer = styled.div`
height: 100vh;
flex-direction: column;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
z-index: 1;
`

// export const ContContainer = styled.div`
// max-height: 100vh;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// padding: 0 30px;
// position: relative;
// z-index: 1;
// `

export const contStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const ContWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
`;

export const ContForm = styled.form`
  width: 100vh;
  max-width: 900px;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 4px;
`;

export const ContInput = styled.input`
  display: block;
  width: 100%;
  ${contStyles}
`;

export const ContTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${contStyles}
`;
export const ContButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const ContFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const ContError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

export const ContLabel = styled.h1`
font-size: 1rem;
`
export const ContH1 = styled.h1`
font-size: 3.5rem;
color: 'black';
font-weight: bold;
margin-top: 8rem;
font-family: Futara;
z-index: 1;
transition: all 0.1s ease-in-out;

@media screen and (max-width: 480px){
    font-size: 2rem;
}
`