// TypeScript prüft jeden Greeting-Aufruf gegen diesen Props-Vertrag.
type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <h3>Hallo, {name}!</h3>;
};

export default Greeting;
