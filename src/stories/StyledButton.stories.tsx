import {Meta, StoryObj} from "@storybook/react";
import {StyledButton} from "../components/atoms/styledButton";

const meta:Meta<typeof StyledButton> = {
    title: 'StyledButton',
    component: StyledButton,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'success', 'transparent'],
        },
        children: {
            control: { type: 'text' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'primary'
    }
}
