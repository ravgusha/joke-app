import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Text, Container} from "@nextui-org/react";

import logo from "./logo.svg";

import "./App.css";

const baseURL = "https://v2.jokeapi.dev/joke/Any?type=single";

function App() {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    axios
      .get(baseURL)
      .then((response) => {
        console.log(response);
        setJoke(response.data.joke);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Container display="flex" justify="center" alignItems="center">
      <img src={logo} className="logo" alt="logo" />
      {error ? (
        <Text
          h4
          color="error"
          css={{ flexBasis: "100%", padding: "0 10% 30px", textAlign: "center" }}
        >
          {error}
        </Text>
      ) : (
        <Text
          h3
          color="#19A7CE"
          css={{ flexBasis: "100%", padding: "0 10% 30px", textAlign: "center" }}
        >
          {joke}
        </Text>
      )}
      <Button size="xl" css={{ background: "#146C94" }} onClick={getJoke}>
        Get New Joke
      </Button>
    </Container>
  );
}

export default App;
