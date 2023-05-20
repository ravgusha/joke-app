import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Text, Container } from "@nextui-org/react";

import ModalBlock from "./components/ModalBlock/ModalBlock.jsx";
import Logo from "./components/Logo/Logo";
import Joke from "./components/Joke/Joke.jsx";

import "./App.scss";

const baseURL = "https://v2.jokeapi.dev/joke/";

function App() {
  const [joke, setJoke] = useState([]);

  const [categories, setCategories] = useState([]);
  const [type, setType] = useState([]);

  const [error, setError] = useState(null);

  const [isCategoriesVisible, setCategoriesVisible] = useState(false);
  const [isTypeVisible, setTypeVisible] = useState(false);

  const categoriesHandler = () => setCategoriesVisible(true);
  const typesHandler = () => setTypeVisible(true);

  const closeCategoriesHandle = () => {
    setCategoriesVisible(false);
  };

  const closeTypesHandle = () => {
    setTypeVisible(false);
  };

  useEffect(() => {
    getJoke();
  }, []);

  const CategoriesList = ["Programming", "Miscellaneous", "Dark", "Pun", "Spooky", "Christmas"];
  const TypesList = ["Single", "Twopart"];

  const getJoke = () => {
    let jokeCategory = "Any";
    let jokeType = type.toString();

    if (categories.length) {
      jokeCategory = categories.join(",");
    }

    const config =
      jokeType === "Twopart,Single" || jokeType === "Single,Twopart"
        ? {
            params: {},
          }
        : {
            params: { type: jokeType },
          };

    axios
      .get(baseURL + jokeCategory, config)
      .then((response) => {
        if (response.data.error) {
          setError(response.data.message);
        }
        setJoke(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <Container display="flex" justify="center" alignItems="center">
      <Logo />
      <main className="main">
        {error ? (
          <Text
            h4
            color="error"
            css={{ flexBasis: "100%", padding: "0 10% 30px", textAlign: "center" }}
          >
            {error}
          </Text>
        ) : (
          <Joke joke={joke} />
        )}
        <Button size="xl" css={{ background: "#B0DAFF", marginBottom: "15px" }} onPress={getJoke}>
          Get New Joke
        </Button>
        <Button
          size="xl"
          css={{ background: "#146C94", marginBottom: "15px" }}
          onPress={categoriesHandler}
        >
          Select Categories
        </Button>
        <Button size="xl" css={{ background: "#146C94" }} onPress={typesHandler}>
          Select type
        </Button>
        <ModalBlock
          visible={isCategoriesVisible}
          onClose={closeCategoriesHandle}
          value={categories}
          setValue={setCategories}
          checkboxes={CategoriesList}
        />
        <ModalBlock
          visible={isTypeVisible}
          onClose={closeTypesHandle}
          value={type}
          setValue={setType}
          checkboxes={TypesList}
        />
      </main>
    </Container>
  );
}

export default App;
