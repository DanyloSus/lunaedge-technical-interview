import { useState } from "react";

import "./Select.css";
import Badge from "./Badge";

type SelectProps = {
  text: string;
  values: any[];
  options: any[];
  onChange: (name: any) => void;
};

const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const addPokemon = (pokemon: any) => {
    props.onChange([...props.values, pokemon]);
  };

  const deletePokemon = (pokemon: any) => {
    const filtered = props.values.filter(
      (value) => value.value !== pokemon.value
    );
    console.log(filtered);
    props.onChange(filtered);
  };

  const clearPokemons = () => {
    props.onChange([]);
  };

  return (
    <div
      className={`Select ${isOpen ? "Select__Active" : ""} ${
        props.values.length ? "" : "Select_Gray"
      }`}
    >
      <div
        className="Select__Values"
        onClick={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <span className="Select__Values">
          {props.values.length
            ? props.values.map((pokemon) => (
                <Badge
                  name={pokemon.name}
                  delete={() => {
                    deletePokemon(pokemon);
                  }}
                />
              ))
            : props.text}
        </span>
      </div>
      {props.values.length ? (
        <button className="Select__Button" onClick={clearPokemons}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="Select__Icons"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : null}
      <button
        className={`Select__Button ${isOpen ? "Select__Icons_Active" : ""}`}
        onClick={() => setIsOpen((value) => !value)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="Select__Icons"
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul className={`Select__List ${isOpen ? "Show" : ""}`}>
        {props.options.map((option: any) => (
          <li
            className="Select__List__Element"
            key={option.value}
            onClick={() => {
              addPokemon(option);
              console.log(option);
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
