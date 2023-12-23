import axios from "axios";
import { useEffect, useState } from "react";

import "./ModalElement.css";

interface TypeObject {
  slot: number;
  type: {
    url: string;
    name: string;
  };
}

interface ModalProps {
  url: string;
}

const ModalElement = (props: ModalProps) => {
  const [pokemonName, setPokemonName] = useState<string>();
  const [pokemonSprite, setPokemonSprite] = useState<string>();
  const [pokemonTypes, setPokemonTypes] = useState<TypeObject[]>();

  useEffect(() => {
    const urlArray = props.url.split("/");
    const pokemonID = urlArray[urlArray.length - 2];

    axios(`https://pokeapi.co/api/v2/pokemon/${pokemonID}/`).then(
      (response) => {
        const data = response.data;
        setPokemonName(data.name);
        setPokemonSprite(data.sprites.front_default);
        setPokemonTypes(data.types);
        return;
      }
    );
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
