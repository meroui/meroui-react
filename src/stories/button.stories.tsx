import { StoryFn, Meta } from "@storybook/react";
import Button from "../Button/Button";
import * as React from "react";

export default {
    title: "MeroUi/Button",
    component: Button,
} as Meta<typeof Button>;


const Template: StoryFn<typeof Button> = (args) => <Button btnText="Hello" />;

export const ButtonTest = Template.bind({});