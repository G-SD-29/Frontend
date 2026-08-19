import Container from "./layouts/Container";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Status from "./components/Status";
import ProfileCard from "./components/ProfileCard";
import Alert from "./components/Alert";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";
import Avatar from "./components/Avatar";
import { useState } from "react";

const App = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
      <Greeting />
      <Counter initialCount={0} />
      <Status status="loading" />
      <ProfileCard user={{ name: "Ada", age: 99 }} />
      <Alert message="Profil" type="info" />
      <ProductList
        products={[
          { id: 1, title: "Book" },
          { id: 2, title: "Pen" },
        ]}
      />
      <Toggle isOn={isOn} onToggle={() => setIsOn((current) => !current)} />
      <Avatar
        url="https://avatars.githubusercontent.com/u/14369174?v=4"
        altText="Alexander"
        width="100px"
      />
    </Container>
  );
};

export default App;
