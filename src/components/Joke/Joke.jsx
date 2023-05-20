import { Text } from "@nextui-org/react";

const Joke = ({joke}) => {

  return joke.type === "single" ? (
    <Text
      h3
      color="#19A7CE"
      css={{ flexBasis: "100%", padding: "0 10% 30px", textAlign: "center" }}
    >
      {joke.joke}
    </Text>
  ) : (
    <>
      <Text
        h3
        color="#19A7CE"
        css={{ flexBasis: "100%", padding: "0 10% 30px", textAlign: "center" }}
      >
        {joke.setup}
      </Text>
      <Text h3 color="#19A7CE" css={{ flexBasis: "100%", textAlign: "center" }}>
        {joke.delivery}
      </Text>
    </>
  );
};

export default Joke;
