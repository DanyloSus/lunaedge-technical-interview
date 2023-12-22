import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import Input from "../elements/Input";

const meta: Meta<typeof Input> = {
  title: "Elements/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Text",
    type: "text",
    id: "text",
    required: true,
    information: "Info text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    required: false,
    information: "Info text",
    disabled: true,
  },
};
