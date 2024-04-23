import { StoryFn, Meta } from "@storybook/react";
import Button from "../Button/Button";
import * as React from "react";
import { MeroThemeProvider } from "../theme";
import { Skeleton } from "@meroui/react";
import { AiOutlineCode } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { AiFillSignal } from "react-icons/ai";
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
        children: { control: "text" },
        variant: { control: { type: "select" }, options: ['solid', 'outlined', "text"] },
        color: {
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info',],
            control: { type: "select" }
        },
        size: {
            options: ['sm', 'md', 'lg', 'xl', '2xl'],
            control: { type: "select" }
        },
        rounded: {
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
            control: { type: "select" }
        },
        disabled: { control: "boolean" },
        disableCaptialize: { control: "boolean" },
        disableRipple: { control: "boolean" },
    },
} as Meta<typeof Button>;


const SimpleBtnTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider ><Button  {...args} />  </MeroThemeProvider>

const IconButtonTemplate: StoryFn<typeof Button> = (args) => <MeroThemeProvider >
    <Button endIcon={<AiFillSignal style={{ marginBottom: "3px" }} />} {...args} />
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
