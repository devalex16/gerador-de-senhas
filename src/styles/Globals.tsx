import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    position: relative;
  }
  
  html, body {
    max-height: 100vh;
    max-width: 100vw;
    background-color: rgb(14, 21, 37);
    color: white;
    font-family: Arial, sans-serif;
  } 
`;

