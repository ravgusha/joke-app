import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Text, Container } from "@nextui-org/react";

import "./App.css";

const baseURL = "https://v2.jokeapi.dev/joke/Any?type=single";

function App() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        setJoke(response.data.joke);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error}`;
  // if (!joke) return null;

  return (
    <Container display="flex" justify="center" alignItems="center">
      <Text h3 color="#19A7CE" css={{ flexBasis: "100%" }}>
        {joke}
      </Text>
      <Button css={{ background: "#146C94" }}>Click me</Button>
    </Container>
  );
}

export default App;
