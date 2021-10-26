import React, { useState } from 'react';
import {ContError, ContLabel, ContButton, ContTextArea, ContInput, ContForm, ContWrapper, ContContainer, ContH1} from './TesteElements'

const initalState = {
    nome: '',
    email: '',
    menssagem: ''
  };
  
const Teste = () => {
    const [state, setState] = useState(initalState);
    const [error, setError] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      console.log('submitted!');
      console.log(state);
  
      for (let key in state) {
        if (state[key] === '') {
          setError(`Dados de ${key}`)
          return
        }
      }
      setError('');
      // const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      // const test = regex.test(state.email);
      // console.log(test);
  
      console.log("Succeeded!!!")
    };
  
    const handleInput = e => {
      const inputName = e.currentTarget.name;
      const value = e.currentTarget.value;
  
      setState(prev => ({ ...prev, [inputName]: value }));
    };
  
    return (
      <>
      <ContContainer id="contact">
          <ContH1>Contato</ContH1>
        <ContWrapper>
          <ContForm onSubmit={handleSubmit}>
            {/* <h2>Contato</h2> */}
            <ContLabel>Telefone: (32)99984-1599</ContLabel>
            <ContLabel>Email: suporte@eloretaguarda.com.br</ContLabel>
            <ContLabel>Nome</ContLabel>
            <ContInput
              type="text"
              name="nome"
              value={state.nome}
              onChange={handleInput}
            />
            <ContLabel>Email</ContLabel>
            <ContInput
              type="email"
              name="email"
              value={state.email}
              onChange={handleInput}
            />
            <ContLabel>Menssagem</ContLabel>
            <ContTextArea
              name="menssagem"
              value={state.menssagem}
              onChange={handleInput}
            />
            {error && (
              <ContError>
                <p>{error}</p>
              </ContError>
            )}
            <ContButton type="submit">Enviar Mensagem</ContButton>
          </ContForm>
        </ContWrapper>
        </ContContainer>
      </>
    );
  }
  
  export default Teste;