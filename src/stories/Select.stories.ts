import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import Select from "../elements/Select";

const meta: Meta<typeof Select> = {
  title: "Elements/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectPrimary: Story = {
  args: {
    text: "Check",
    values: [],
    onChange: () => {},
  },
};
