import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Text, Container } from "@nextui-org/react";

import ModalBlock from "./ModalBlock.tsx";
import logo from "./logo.svg";

import "./App.css";

const baseURL = "https://v2.jokeapi.dev/joke/";

function App() {
  const [joke, setJoke] = useState(null);
  const [categories, setCategories] = useState([]);

  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    let cat = "Any";
    if (categories.length) {
      cat = categories.join(",");
    }
    console.log(cat);
    axios
      .get(baseURL + cat + "?type=single")
      .then((response) => {
        // console.log(response);
        if (response.data.error) {
          setError(response.data.message);
        } else setJoke(response.data.joke);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Container display="flex" justify="center" alignItems="center">
      <img src={logo} className="logo" alt="logo" />

      <div className="main">
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
        <Button size="xl" css={{ background: "#B0DAFF", marginBottom: "15px" }} onPress={getJoke}>
          Get New Joke
        </Button>
        <Button size="xl" css={{ background: "#146C94" }} onPress={handler}>
          Select Categories
        </Button>
        <ModalBlock
          visible={visible}
          onClose={closeHandler}
          categories={categories}
          setCategories={setCategories}
        />
      </div>
    </Container>
  );
}

export default App;
