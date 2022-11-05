import styled from 'styled-components';
import React, { useState } from 'react';

//[Estilos]
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-height: 1000px;
  max-width: 1000px;
  margin: 10px;
  padding: 40px;
  box-shadow: 1px 1px 10px #2B3245 inset;
  border-radius: 20px;
  background-color: rgb(194, 200, 204);
`;

const TextInformation = styled.h2`
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
`;


const AlignLabel = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const LabelRange = styled.p`
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
  margin: 0px 10px;
  width: 20px;
`;

const Text = styled.p`
  font-weight: 500;
  text-align: center;
  color: rgb(14, 21, 37);
  margin: 5px;
`;

const TextPass = styled.p`
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
  box-shadow: 0px 0px 10px white;
  border-radius: 3vw;
  margin: 20px;
  padding: 10px 20px;
  background-color: rgb(194, 200, 204);
  width: 100%;
  bottom: -20vh;
  position: absolute;
`;

const ButtonPass = styled.button`
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
  border: 2px solid black;
  border-radius: 2vw;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #6FEB78;
`;
//[/Estilos]

//Componente da Senha
type passProps = {
  text:string;
}

function Password(props: passProps) {
  return (
    <TextPass id="password">{props.text}</TextPass>
  );
}

function InputAndEvents() {
  const [countStr, setCountStr] = useState(20);
  const [isUpper, setIsUpper] = useState(true);
  const [isAll, setIsAll] = useState(true);
  const [pass, setPass] = useState('...')
  
  //Caracteres da Senhas
  const characters  = ['abcdefghijklmnoqwrsuxyz','#$_&/@!?"_+*\%='];

  //Escutando Eventos
  function listenerInput(event){
    //Pegando o Input com os Nomes
    //Atualizando os Dados
    if (event.target.name === 'countStr') {
      setCountStr(event.target.value)
    } else if (event.target.name === 'isUpper') {
      setIsUpper(!isUpper)
    } else if (event.target.name === 'isAll') {
      setIsAll(!isAll)
    }
    console.log(`${event.target.type}:${event.target.value}`);
    
  }

  //Pegando número inteiro Aleatório
  function getNumberInt(max) {
    return Math.floor(Math.random() * max);
  }

  //Evento de Click
  function clickButton() { 
    //Cria variável para armazenar senha
    let password = ''
    //Loop até o máximo de Caracteres
    for (let i = 0; i < countStr; i++) {
      let simbols  = characters[0]
      //Se Todos os Caracteres for ativo [Checkbox - isAll]
      if (isAll === true) {
        simbols  = characters[getNumberInt(2)]
        //[Checkbox - isUpper]
        if (isUpper === true) {
          if (i < getNumberInt(18)) {
            password = password.concat(simbols[getNumberInt(simbols.length)]).toUpperCase();
          } else {         
            password = password.concat(simbols[getNumberInt(simbols.length)])
          }        
        } else {
           password = password.concat(simbols[getNumberInt(simbols.length)])
        }
      //Se Todos os Caracteres não for Ativo [Checkbox - isAll]
      } else {
        //[Checkbox - isUpper]
        if (isUpper === true) {
          //Se var i for menor do que um número aleatório de 0 á 18
          //Se for menor - Letra Maiúscula
          if (i < getNumberInt(18)) {
            password = password.concat(simbols[getNumberInt(simbols.length)]).toUpperCase();
          //Se não for menor - Letra Minúscula
          } else {         
            password = password.concat(simbols[getNumberInt(simbols.length)])
          }
        } else {
           password = password.concat(simbols[getNumberInt(simbols.length)])
        }
      }
    }
    //No final de todo o Processo, Atualiza!
    setPass(password.toString())
  }
  return (
    <div style={{width: '100%'}}>
      <Text>Número de Caracteres:</Text>
      <AlignLabel>
        <input id="range" name="countStr" type="range" min="0" max="20" onChange={listenerInput}/>
        <LabelRange id="count">{countStr}</LabelRange>
      </AlignLabel>
      <AlignLabel>
       <input name="isUpper" type="checkbox" onChange={listenerInput} checked={isUpper}/>
        <Text>Letras Maiúsculas</Text>
      </AlignLabel>
      <AlignLabel>
        <input name="isAll" type="checkbox" onChange={listenerInput} checked={isAll}/>
        <Text>Todos os Caracteres</Text>
      </AlignLabel>
      <AlignLabel>
        <ButtonPass onClick={clickButton}>Criar</ButtonPass>
        <Password text={pass}/>
      </AlignLabel>
    </div>
  );
}

const Container = () => (
  <Div>
    <TextInformation>Gerador de Senhas</TextInformation>
    <Text style={{marginBottom: '20px'}}>Crie senhas seguras para as suas contas na Internet!</Text>
    <InputAndEvents/> 
  </Div>
);

export default Container
