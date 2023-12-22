import { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";

function App() {
  return (
    <div>
      <Input label="Text" type="text" id="text" required information="Info" />
      <Button text="Button" size="xs" variant="outline" disabled={false} />
    </div>
  );
}

export default App;
