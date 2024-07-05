import {Checkbox} from "../components/atoms/checkbox";
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['default', 'disabled', 'readonly', 'error']
        },
        label: {
            control: {type: 'text'}
        }
    }
};

export default meta;
type Story = StoryObj<typeof Checkbox>

export const StyledCheckbox: Story = {
    args: {
        variant: 'default',
        label: 'label name'
    }
}
