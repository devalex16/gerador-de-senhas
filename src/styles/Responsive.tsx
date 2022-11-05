import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @media (max-width: 800px) {
   h1 {
    font-size: 1.5em;
   }
   
   h2 {
    font-size: 2em;
   }
   
   p#count {
    font-size: 1.7em;
   }

   p {
    font-size: 1em;
   }

   p#password {
    font-size: 1.5em;
   }

   input[type=range] {
    -webkit-appearance: none;
    background: rgb(194, 200, 204);
    width: 80%;
   }

   input[type=range]::-webkit-slider-thumb {
    height: 26px;
    width: 26px;
    border-radius: 60px;
    background: #009FFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -8px;
   }
   
   input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    cursor: pointer;
    animate: 0.2s;
    background: #0075FF;
    border-radius: 5px;
   }
   
   input[type=checkbox] {
    height: 20px;
    width: 20px;
    margin: 5px 0px;
   }
  
   button {
    font-size: 1.2em;
   }
  }

  @media (min-width: 801px) {
   h1 {
    font-size: 3.5em;
   }
   
   h2 {
    font-size: 5em;
   }
   
   p#count {
    font-size: 5em;
   }

   p {
    font-size: 2.5em;
   }

   p#password {
    font-size: 4em;
   }
   
   input[type=range] {
    -webkit-appearance: none;
    background: rgb(194, 200, 204);
    width: 60%;
   }

   input[type=range]::-webkit-slider-thumb {
    height: 66px;
    width: 66px;
    border-radius: 60px;
    background: #009FFF;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -20px;
   }
   
   input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 25px;
    cursor: pointer;
    animate: 0.2s;
    background: #0075FF;
    border-radius: 5px;
   }
   
   input[type=checkbox] {
    height: 50px;
    width: 50px;
    margin: 10px 0px;
    border-radius: 10px;
   }
  
   button {
    font-size: 4em;
   }
  }
`;