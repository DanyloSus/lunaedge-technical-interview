import { ChangeEvent, FormEvent, createRef, useEffect, useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";
import Select from "./elements/Select";

import "./App.css";
import axios from "axios";
import useValidation from "./hooks/useValidation";
import ModalElement from "./elements/ModalElement";
import useHandleChange from "./hooks/useHandleChange";

export type PokemonOption = {
  name: string;
  url: string;
};

export type PokemonValue = {
  name: string;
  url: string;
  id: number;
};

function App() {
  const [isModal, setIsModal] = useState<Boolean>(false);

  const [pokemons, setPokemons] = useState<PokemonValue[]>([]);
  const [pokemonArray, setPokemonArray] = useState<PokemonOption[]>([]);

  const [nameInfo, setNameInfo] = useState<string>("Write your name, Champ");
  const [surnameInfo, setSurnameInfo] = useState<string>(
    "Write your surname, Champ"
  );
  const [selectInfo, setSelectInfo] = useState<string>(
    "In Pokemon Tower you can use only four your Pokemons"
  );

  const [nameError, setNameError] = useState<boolean>(false);
  const [surnameError, setSurnameError] = useState<boolean>(false);
  const [selectError, setSelectError] = useState<boolean>(false);

  const [name, setName] = useState<string | undefined>("");
  const [surname, setSurname] = useState<string | undefined>("");

  const nameRef = createRef<HTMLInputElement>();
  const surnameRef = createRef<HTMLInputElement>();

  useEffect(() => {
    try {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302")
        .then((response) => setPokemonArray(response.data.results));
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    }
  }, []);

  const handleCancel = () => {
    console.log(name, surname);

    setIsModal(false);
    setPokemons([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (useValidation(name)) {
      setNameInfo("Write your name, Champ");
      setNameError(false);
    } else {
      setNameInfo("You write a wrong name");
      setNameError(true);
    }

    if (useValidation(surname)) {
      setSurnameInfo("Write your name, Champ");
      setSurnameError(false);
    } else {
      setSurnameInfo("You write a wrong name");
      setSurnameError(true);
    }

    if (pokemons.length > 0 && pokemons.length <= 4) {
      setSelectInfo("In Pokemon Tower you can use only four your Pokemons");
      setSelectError(false);
    } else {
      setSelectInfo("You check a wrong length of pokemons");
      setSelectError(true);
    }

    if (
      useValidation(name) &&
      useValidation(surname) &&
      pokemons.length > 0 &&
      pokemons.length <= 4
    ) {
      setIsModal(true);
    }

    console.log();
  };

  return (
    <main className="Main">
      {isModal ? (
        <>
          <div className="Modal">
            <div className="Modal__Header">
              <h2 className="Modal__Heading">
                <span className="capitalize text-xl">
                  {name} {surname}
                </span>
                , are you sure?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                onClick={handleCancel}
                className="Select__Icons border-none"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="Modal__Content">
              {pokemons.map((pokemon) => (
                <ModalElement key={pokemon.id} url={pokemon.url} />
              ))}
            </div>
            <div className="Modal__Footer">
              <Button
                variant="text"
                text="Cancel"
                size="base"
                disabled={false}
                onClick={handleCancel}
              />
              <Button
                variant="primary"
                text="Save"
                size="base"
                disabled={false}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="Main__Header">Register Form for Pokemon Tower</h1>
          <p className="Main__Paragraph">
            Welcome to register form for Pokemon Tower!
            <br />
            Input name and surname of a future pokemon champion. And select your
            4 pokemons.
          </p>
          <form className="Main__Form" onSubmit={handleSubmit}>
            <div className="flex gap-3 w-full">
              <Input
                label="Name"
                type="text"
                id="name"
                required
                onChange={() =>
                  useHandleChange(setName, nameRef.current!.value)
                }
                value={name}
                information={nameInfo}
                disabled={false}
                ref={nameRef}
                error={nameError}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="Input__Icon"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                }
              />
              <Input
                label="Surname"
                type="text"
                id="surname"
                ref={surnameRef}
                required
                information={surnameInfo}
                disabled={false}
                error={surnameError}
                onChange={() =>
                  useHandleChange(setSurname, surnameRef.current!.value)
                }
                value={surname}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="Input__Icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            </div>
            <Input
              label="Pokemons"
              information={selectInfo}
              disabled={false}
              required
              id="pokemons"
              error={selectError}
              select={{
                values: pokemons,
                options: pokemonArray,
                placeholder: "Check",
                onChange: (pokemon) => setPokemons(pokemon),
                disabled: true,
              }}
            />
            <Button
              text="Submit"
              size="base"
              variant="outline"
              disabled={false}
            />
          </form>
        </>
      )}
    </main>
  );
}

export default App;
