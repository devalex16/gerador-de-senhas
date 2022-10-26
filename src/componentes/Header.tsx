import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  width: 100vw;
  background-color: rgb(28, 35, 51);
`;

const TextHeader = styled.h1`
  font-size: 1.1em;
`;

type TextProps = {
  children: React.ReactNode;
}

const Container = (props: TextProps) => (
  <Header>
    <TextHeader>{props.children}</TextHeader>
  </Header>
)

export default Container;