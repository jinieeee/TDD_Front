import {Meta} from "@storybook/react";
import {StyledButton} from "../components/StyledButton";

const meta:Meta<typeof StyledButton> = {
    component: StyledButton,
};

export default meta;

export const Primary = (props) => {
    return (
        <StyledButton {...props} variant="primary">
            Primary
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
