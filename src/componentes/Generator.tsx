import styled from 'styled-components';
import React, { useState } from 'react';

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vw;
  width: 80vw;
  box-shadow: 1px 1px 10px #2B3245 inset;
  border-radius: 20px;
  background-color: rgb(194, 200, 204);
`;

const TextInformation = styled.h1`
  font-size: 1.5em;
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
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
  margin: 0px 10px;
  width: 20px;
`;

const Text = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  text-align: center;
  color: rgb(14, 21, 37);
  margin: 5px;
`;

const TextPass = styled.p`
  font-size: 1.3em;
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
  /*left: -35px;*/
  position: absolute;
`;

const ButtonPass = styled.button`
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  color: rgb(14, 21, 37);
  border: 2px solid black;
  border-radius: 2vw;
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #6FEB78;
`;

const styleInput = {
  range: {
    margin: '10px 0px',
    width: '70%',
  },
  
  checkbox: {
    width: '20px',
    height: '20px',
  }
}

type passProps = {
  text:string;
}

function Password(props: passProps) {
  return (
    <TextPass>{props.text}</TextPass>
  );
}

function InputAndEvents() {
  const [countStr, setCountStr] = useState(20);
  const [isUpper, setIsUpper] = useState(true);
  const [isAll, setIsAll] = useState(true);
  const [pass, setPass] = useState('...')
  const characters  = ['abcdefghijklmnoqwrsuxyz','#$_&/@!?"_+*\%=']; 
  
  function listenerInput(event){
    if (event.target.name === 'countStr') {
      setCountStr(event.target.value)
    } else if (event.target.name === 'isUpper') {
      setIsUpper(!isUpper)
    } else if (event.target.name === 'isAll') {
      setIsAll(!isAll)
    }
    console.log(`${event.target.type}:${event.target.value}`);
    
  }

  function getNumberInt(max) {
    return Math.floor(Math.random() * max);
  }

  function allCharacters(password, simbols, i) {
    console.log(password);
   // console.log(simbols);
    if (isUpper === true) {
        if (i < getNumberInt(18)) {      
          return password = password.concat(simbols[getNumberInt(simbols.length)]).toUpperCase();
        } else {         
          return password = password.concat(simbols[getNumberInt(simbols.length)])
        }        
      }
   // setPass(password.toString())
  }

//console.log(getNumberInt(10))
  async function clickButton() { 
    let password = ''
    console.log('click!')
    for (let i = 0; i < countStr; i++){
      let simbols  = characters[0]
      if (isAll === true) {
        simbols  = characters[getNumberInt(2)]
        if (isUpper === true) {
          if (i < getNumberInt(18)) {      
            password = password.concat(simbols[getNumberInt(simbols.length)]).toUpperCase();
          } else {         
            password = password.concat(simbols[getNumberInt(simbols.length)])
          }        
        } else {
           password = password.concat(simbols[getNumberInt(simbols.length)])
        }
      } else {
        if (isUpper === true) {
          if (i < getNumberInt(18)) {      
            password = password.concat(simbols[getNumberInt(simbols.length)]).toUpperCase();
          } else {         
            password = password.concat(simbols[getNumberInt(simbols.length)])
          }
        } else {
           password = password.concat(simbols[getNumberInt(simbols.length)])
        }
      }
    }
    setPass(password.toString())
  }
  return (
    <div style={{width: '100%'}}>
      <Text>Número de Caracteres:</Text>
      <AlignLabel>
        <input style={styleInput.range} name="countStr" type="range" min="0" max="20" onChange={listenerInput}/>
        <LabelRange>{countStr}</LabelRange>
      </AlignLabel>
      <AlignLabel>
        <input style={styleInput.checkbox} name="isUpper" type="checkbox" onChange={listenerInput} checked={isUpper}/>
        <Text>Letras Maiúsculas</Text>
      </AlignLabel>
      <AlignLabel>
        <input style={styleInput.checkbox} name="isAll" type="checkbox" onChange={listenerInput} checked={isAll}/>
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
