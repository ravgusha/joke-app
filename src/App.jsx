import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const baseURL = "https://v2.jokeapi.dev/joke/Any?";

function App() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data.joke);
      setJoke(response.data.joke);
    });
  }, []);

  if (!joke) return null;

  return (
    <div>
      <p>{joke}</p>
    </div>
  );
}

export default App;
