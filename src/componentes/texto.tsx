type TextoProps = {
  children: React.ReactNode;
  text?: string;
}

type HeaderProps = {
  children?: React.ReactNode;
  backColor?: string;
  textSize?: string;
}

export function Texto(props: TextoProps) {
  return (
    <p>{props.children}</p>
  );
} 

export function Header(props: HeaderProps){
  return (
    <header style={{
      height: '10vh',
      width: '100vw',
      backgroundColor: props.backColor,
      color: 'white',
      textAlign: 'center',
      fontSize: props.textSize,
      borderBottom: '1px solid white',
    }}>
      <h1>{props.children}</h1>
    </header>
  );
}