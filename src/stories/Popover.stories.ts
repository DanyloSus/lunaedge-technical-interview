import type { Meta, StoryObj } from "@storybook/react";
import "../index.css";

import Popover from "../elements/Popover";

const meta: Meta<typeof Popover> = {
  title: "Elements/Popover",
  component: Popover,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Primary: Story = {
  args: {
    children: "It is a popover",
    visible: true,
  },
};
