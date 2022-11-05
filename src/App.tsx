import GlobalsStyle from './styles/Globals';
import Responsive from './styles/Responsive';

import Header from './components/Header';
import Block from './components/Generator';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100vw;
`;

function App() {
  return (
    <div>
      <GlobalsStyle />
      <Responsive />
      <Header>PassGenerator</Header>
      <Main>
        <Block/>
      </Main>
    </div>
  );
}

export default App