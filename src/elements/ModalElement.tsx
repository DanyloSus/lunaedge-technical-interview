// libraries
import axios from "axios";
import { useEffect, useState } from "react";

// styles
import "./ModalElement.css";

// types
type TypeObject = {
  // pokemon's types type
  slot: number;
  type: {
    url: string;
    name: string;
  };
};

type ModalProps = {
  // props type
  url: string;
};

const ModalElement = (props: ModalProps) => {
  const [pokemonName, setPokemonName] = useState<string>(); // state of pokemon's name
  const [pokemonSprite, setPokemonSprite] = useState<string>(); // state of pokemon's sprite
  const [pokemonTypes, setPokemonTypes] = useState<TypeObject[]>(); // state of pokemon's types array

  useEffect(() => {
    const urlArray = props.url.split("/");
    const pokemonID = urlArray[urlArray.length - 2];

    try {
      axios(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).then(
        // get the pokemon info
        (response) => {
          const data = response.data; // get data of the pokemon
          setPokemonName(data.name); // set the pokemon's name
          setPokemonSprite(data.sprites.front_default); // set the pokemon's sprite
          setPokemonTypes(data.types); // set the pokemon's types
          return;
        }
      );
    } catch (error) {
      console.error("Error fetching Pokemon data:", error); // if some error, print it
    }
  }, []);

  return (
    <div className="ModalElement">
      <div>
        <h3 className="ModalElement__Heading">{pokemonName}</h3>
        <p className="ModalElement__Paragraph">
          {pokemonTypes?.map((type) => `${type.type.name} `)}
        </p>
      </div>
      <img
        src={
          pokemonSprite === null
            ? "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png"
            : pokemonSprite
        }
        alt={pokemonName}
        className="ModalElement__Image"
      />
    </div>
  );
};

export default ModalElement;
