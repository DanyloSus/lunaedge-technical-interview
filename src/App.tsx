import { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";
import Select from "./elements/Select";

import "./App.css";

type Option = {
  name: string;
  value: number;
};

const options: Option[] = [
  { name: "sus", value: 1 },
  { name: "sus", value: 2 },
  { name: "sus", value: 3 },
];

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  return (
    <main className="Main">
      <h1 className="Main__Header">Register Form for Pokemon Tower</h1>
      <p className="Main__Paragraph">
        Welcome to register form for Pokemon Tower!
        <br />
        Input name and surname of a future pokemon champion. And select your 4
        pokemons.
      </p>
      <form className="Main__Form">
        <div className="flex gap-3 w-full">
          <Input
            label="Name"
            type="text"
            id="name"
            required
            information="Write your name, Champ"
            disabled={false}
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
            required
            information="Write your surname, Champ"
            disabled={false}
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
        <Select
          values={pokemons}
          options={options}
          placeholder="Check"
          onChange={(pokemon) => setPokemons(pokemon)}
          label="Pokemons"
          required
          id="pokemons"
          information="In Pokemon Tower you can use only four yout Pokemons"
          disabled={false}
        />
        <Button text="Submit" size="base" variant="primary" disabled={false} />
      </form>
    </main>
  );
}

export default App;
