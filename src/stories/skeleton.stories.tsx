import { StoryFn, Meta } from "@storybook/react";
import Skeleton from "../Skeleton/Skeleton";
import * as React from "react";

export default {
    title: "Meroui/Skeleton",
    component: Skeleton,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["rectangular", "circular"],
            },
        },
        height: { control: "text" },
        width: { control: "text" },
    },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => <Skeleton {...args}> </Skeleton>;

export const SkeletonTest = Template.bind({});

SkeletonTest.args = {
    variant: 'rectangular',
    height: '90px',
    width: '200px',
};