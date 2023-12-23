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
    placeholder: "Check",
    values: [],
    onChange: () => {},
    options: [],
    disabled: false,
  },
};

export const SelectDisabled: Story = {
  args: {
    placeholder: "Disabled",
    values: [],
    onChange: () => {},
    options: [],
    disabled: true,
  },
};

export const SelectError: Story = {
  args: {
    placeholder: "Error",
    values: [],
    onChange: () => {},
    options: [],
    disabled: false,
    error: true,
  },
};
