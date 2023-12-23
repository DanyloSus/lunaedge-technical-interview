import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import ModalElement from "../elements/ModalElement";

const meta: Meta<typeof ModalElement> = {
  title: "Elements/ModalElement",
  component: ModalElement,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModalElement>;

export const Primary: Story = {
  args: {
    url: "https://pokeapi.co/api/v2/pokemon/pikachu/",
  },
};
