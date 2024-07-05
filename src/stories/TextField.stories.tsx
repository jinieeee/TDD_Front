import {TextField} from "../components/atoms/textField";
import {Meta, StoryObj} from "@storybook/react";

const meta:Meta<typeof TextField> = {
    title: 'TextField',
    component: TextField,
    argTypes: {
        label: {
            control: {type: 'text'}
        },
        placeholder: {
            control: {type: 'text'}
        }
    }
}

export default meta;
type Story = StoryObj<typeof TextField>

export const Primary: Story = {
    args: {
        label: 'label',
        placeholder: 'default placeholder'
    }
}
