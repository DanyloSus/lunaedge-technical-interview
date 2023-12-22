import { useState } from "react";

import "./Select.css";
import Badge from "./Badge";
import { PokemonOption, PokemonValue } from "../App";

type SelectProps = {
  placeholder: string;
  values: PokemonValue[];
  options: PokemonOption[];
  onChange: (name: any) => void;

  label: string;
  id: string;
  required: boolean;
  information: string;
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
    <div className="Input">
      <div className="Input__InfoBlock">
        <label htmlFor={props.id} className="Input__Label">
          {props.label}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="Input__InfoIcon"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <span className="Input__Info">
          {props.required ? "Required" : "Optional"}
        </span>
      </div>
      <div className="Input__InputBlock">
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
            <button className="Select__Button" onClick={clearPokemons}>
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
            className={`Select__Button ${isOpen ? "Select__Icons_Active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen((value) => !value);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="Select__Icons border-none"
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
      </div>
      <span className="Input__Info">{props.information}</span>
    </div>
  );
};

export default Select;
