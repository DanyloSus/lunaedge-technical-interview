import { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";
import Select from "./elements/Select";

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
    <div>
      <Input
        label="Text"
        type="text"
        id="text"
        required
        information="Info"
        disabled={false}
      />
      <Button text="Button" size="xs" variant="outline" disabled={false} />
      <Select
        values={pokemons}
        options={options}
        text="Check"
        onChange={(pokemon) => setPokemons(pokemon)}
      />
    </div>
  );
}

export default App;
