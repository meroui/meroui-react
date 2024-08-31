import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta: Meta<typeof Badge> = {
    title: "Badge",
    component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: { children: "Badge", variant: "outline-neutral", size: "sm" },
};
