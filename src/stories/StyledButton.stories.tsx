import {Meta} from "@storybook/react";
import {StyledButton} from "../components/StyledButton";
import { action } from '@storybook/addon-actions';
import {useState} from "react";

const meta:Meta<typeof StyledButton> = {
    title: 'StyledButton',
    component: StyledButton,
    // argTypes: { onClick : { action: 'clicked' }}
};

const incrementAction = action('increment')

export default meta;

export const Primary = (props) => {
    const [count, setCount] = useState(0)
    const onClick = (e: React.MouseEvent) => {
        incrementAction(e, count);
        setCount((c) => c+ 1)
    }
    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
}

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}
