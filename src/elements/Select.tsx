import { useState } from "react";

import "./Select.css";
import Badge from "./Badge";
import { PokemonOption, PokemonValue } from "../App";

export type SelectProps = {
  placeholder: string;
  values: PokemonValue[];
  options: PokemonOption[];
  onChange: (name: any) => void;
  error?: boolean;
  disabled: boolean;
};

const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const addPokemon = (pokemon: PokemonOption, index: number) => {
    if (props.values.length <= 3) {
      props.onChange([...props.values, { ...pokemon, id: index }]);
    }
  };

  const deletePokemon = (pokemon: PokemonValue) => {
    const filtered = props.values.filter((value) => value.id !== pokemon.id);
    console.log(pokemon);
    props.onChange(filtered);
  };

  const clearPokemons = () => {
    props.onChange([]);
  };

  return (
    <div
      className={`Select ${
        props.disabled
          ? "Select__Disabled"
          : `${isOpen ? "Select__Active" : ""} ${
              props.values.length ? "" : "Select_Gray"
            } ${props.error ? "Select__Invalid" : ""}`
      }`}
    >
      <div
        className="Select__Values"
        onClick={() => {
          props.disabled ? () => {} : setIsOpen(true);
        }}
        onBlur={() => setIsOpen(false)}
      >
        <span className="Select__Values">
          {props.values.length
            ? props.values.map((pokemon, index) => (
                <Badge
                  key={index}
                  name={pokemon.name}
                  type="delete"
                  onClick={() => {
                    deletePokemon(pokemon);
                  }}
                />
              ))
            : props.placeholder}
        </span>
      </div>
      {props.values.length ? (
        <button
          className="Select__Button"
          onClick={clearPokemons}
          disabled={props.disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="Select__Icons border-none"
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
        className={`Select__Button`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen((value) => !value);
        }}
        disabled={props.disabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`Select__Icons border-none  ${
            isOpen ? "Select__Icons_Active" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul className={`Select__List ${isOpen ? "Show" : ""}`}>
        {props.options.map((option: PokemonOption) => {
          const id = Math.random();
          return (
            <Badge
              key={id}
              name={option.name}
              type="add"
              onClick={() => addPokemon(option, id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
