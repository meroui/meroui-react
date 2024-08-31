import { StoryFn, Meta } from "@storybook/react";
import { Button } from "../button"
import * as React from "react";
import { MeroThemeProvider } from "../theme";
import { fn } from "@storybook/test";

export default {
    title: "MeroUi/Button",
    component: Button,
    tags: ["autodocs"],
    args: { onClick: fn() },
    parameters: {
        layout: "centered",
    },
    argTypes: {

    },
} as Meta<typeof Button>;


const SimpleBtnTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider ><Button  {...args} />  </MeroThemeProvider>

const IconButtonTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider >
    <Button {...args} />
</MeroThemeProvider>

const RoundedButtonsTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider >
    <Button {...args} />
</MeroThemeProvider>

const DisabledButtonsTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider >
    <Button {...args} />
</MeroThemeProvider>

export const SimpleButton = SimpleBtnTemplate.bind({});
export const IconButton = IconButtonTemplate.bind({});
export const RoundedButton = RoundedButtonsTemplate.bind({})
export const DisabledButton = DisabledButtonsTemplate.bind({})
