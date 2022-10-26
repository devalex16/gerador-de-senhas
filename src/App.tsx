import { Texto } from './componentes/texto';
import GlobalsStyle from './styles/Globals';
import Header from './componentes/Header';
import Block, {Password} from './componentes/Generator';

import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100vw;
  y-overflow: hidden;
`;

function App() {
  return (
    <div>
      <GlobalsStyle />
      <Header>PassGenerator</Header>
      <Main>
        <Block/>
      </Main>
    </div>
  );
}

export default App