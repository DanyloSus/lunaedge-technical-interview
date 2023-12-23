import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import Badge from "../elements/Badge";

const meta: Meta<typeof Badge> = {
  title: "Elements/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    name: "Text",
    onClick: () => {},
    type: "add",
  },
};

export const Delete: Story = {
  args: {
    name: "Delete",
    onClick: () => {},
    type: "delete",
  },
};
