import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import Button from "../elements/Button";

const meta: Meta<typeof Button> = {
  title: "Elements/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const OutlineXS: Story = {
  args: {
    text: "Button",
    variant: "outline",
    size: "xs",
    disabled: false,
  },
};

export const DisabledPrimaryBase: Story = {
  args: {
    text: "Button",
    variant: "primary",
    size: "base",
    disabled: true,
  },
};

export const TextLG: Story = {
  args: {
    text: "Button",
    variant: "text",
    size: "lg",
    disabled: false,
  },
};
