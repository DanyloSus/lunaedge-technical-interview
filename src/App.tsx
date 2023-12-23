// Libraries
import { FormEvent, createRef, useEffect, useState } from "react";
import axios from "axios";

// Elements
import Input from "./elements/Input";
import Button from "./elements/Button";
import useValidation from "./hooks/useValidation";
import ModalElement from "./elements/ModalElement";
import useHandleChange from "./hooks/useHandleChange";

//styles
import "./App.css";

// types
export type PokemonOption = {
  // options of API array
  name: string;
  url: string;
};

export type PokemonValue = {
  // values of user's pokemons
  name: string;
  url: string;
  id: number;
};

// main Element
function App() {
  const [isLoading, setIsLoading] = useState<Boolean>(true); // state for check is all data downloaded
  const [isModal, setIsModal] = useState<Boolean>(false); // state for check is modal active
  const [isRegistered, setIsRegistered] = useState<Boolean>(false); // state for check is registered screen active

  const [pokemons, setPokemons] = useState<PokemonValue[]>([]); // array for save user's pokemons
  const [pokemonArray, setPokemonArray] = useState<PokemonOption[]>([]); // array of pokemons

  const [nameInfo, setNameInfo] = useState<string>("Write your name, Champ"); // Info text for name input
  const [surnameInfo, setSurnameInfo] = useState<string>(
    "Write your surname, Champ"
  ); // Info text for surname input
  const [selectInfo, setSelectInfo] = useState<string>(
    "In Pokemon Tower you can use only four your Pokemons"
  ); // Info text for select input

  const [nameError, setNameError] = useState<boolean>(false); // State for check does name input have an error
  const [surnameError, setSurnameError] = useState<boolean>(false); // State for check does surname input have an error
  const [selectError, setSelectError] = useState<boolean>(false); // State for check does select input have an error

  const [name, setName] = useState<string | undefined>(""); // State for user's name
  const [surname, setSurname] = useState<string | undefined>(""); // State for user's surname

  const nameRef = createRef<HTMLInputElement>(); // Ref for get value of name input
  const surnameRef = createRef<HTMLInputElement>(); // Ref for get value of surname input

  useEffect(() => {
    setIsLoading(true);
    try {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000") // get array of pokemons
        .then((response) => setPokemonArray(response.data.results)); // set array of pokemons
    } catch (error) {
      console.error("Error fetching Pokemon data:", error); // if some error, print it
    }
    setIsLoading(false);
  }, []);

  const handleCancel = () => {
    // close modal window
    setIsModal(false);
    setPokemons([]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // onSubmit function for form
    e.preventDefault();
    if (useValidation(name)) {
      // check validation of name input
      setNameInfo("Write your name, Champ");
      setNameError(false);
    } else {
      setNameInfo("You write a wrong name");
      setNameError(true);
    }

    if (useValidation(surname)) {
      // check validation of surname input
      setSurnameInfo("Write your name, Champ");
      setSurnameError(false);
    } else {
      setSurnameInfo("You write a wrong name");
      setSurnameError(true);
    }

    if (pokemons.length > 0 && pokemons.length <= 4) {
      // check validation of select input
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
      // if everything is awesome then go to modal screen
      setIsModal(true);
    }
  };

  return (
    <main className="Main">
      {isLoading ? (
        <img
          src="/loading.gif"
          alt="loading"
          width={200}
          height={200}
          className="mx-auto"
        />
      ) : isRegistered ? ( //check is register page active
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            Congratulations{" "}
            <span className="text-2xl capitalize">
              {name} {surname}
            </span>
            !
          </h1>
          <p>You and your pokemons are registered to Pokemon Tower!</p>
        </div>
      ) : isModal ? ( //check is modal page active
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
                onClick={() => setIsRegistered(true)}
              />
            </div>
          </div>
        </>
      ) : (
        // render main page
        <>
          <h1 className="Main__Header">Register Form for Pokemon Tower</h1>
          <p className="Main__Paragraph">
            Welcome to register form for Pokemon Tower!
            <br />
            Input name and surname of a future pokemon champion. And select your
            4 pokemons.
          </p>
          <form className="Main__Form" onSubmit={handleSubmit}>
            <div className="flex flex-col items-center sm:flex-row gap-3 w-full">
              <Input
                label="Name"
                type="text"
                id="name"
                placeholder="John"
                required
                popText={
                  <p>
                    Your name is required
                    <br />
                    Your name should be from 2 to 12 length
                  </p>
                }
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
                placeholder="Doe"
                required
                information={surnameInfo}
                disabled={false}
                error={surnameError}
                popText={
                  <p>
                    Your surname is required
                    <br />
                    Your surname should be from 2 to 12 length
                  </p>
                }
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
              popText={<p>You can have from 1 to 4 pokemons</p>}
              select={{
                values: pokemons,
                options: pokemonArray,
                placeholder: "Check",
                onChange: (pokemon) => setPokemons(pokemon),
                disabled: false,
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
