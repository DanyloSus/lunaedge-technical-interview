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
    label: "Name",
    type: "text",
    id: "name",
    required: false,
    information: "Info text",
    disabled: true,
    popText: "Disabled",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    type: "email",
    id: "email",
    required: true,
    information: "Info text",
    disabled: false,
    error: true,
  },
};

export const PrimarySelect: Story = {
  args: {
    label: "Text",
    type: "text",
    id: "text",
    required: false,
    information: "Info text",
    disabled: false,

    select: {
      placeholder: "Select",
      values: [],
      options: [],
      onChange: () => {},
      disabled: false,
    },
  },
};

export const DisabledSelect: Story = {
  args: {
    label: "Text",
    type: "text",
    id: "text",
    required: false,
    information: "Info text",
    popText: "Disabled",

    select: {
      placeholder: "Select",
      values: [],
      options: [],
      onChange: () => {},
      disabled: true,
    },
  },
};
