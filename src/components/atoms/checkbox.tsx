import styled, {css} from "styled-components";
import {useState} from "react";
import {StyledLabel} from "./styledLabel";

const variants = {
    default: {
        border: '1px solid #333333',
        accentColor: 'none',
        cursor: 'pointer',
        backgroundImage: 'none',
        backgroundColor: 'none'
    },
    disabled: {
        border: '1px solid  #333333',
        accentColor: '#CCCCCC',
        cursor: 'not-allowed',
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
        backgroundColor: 'gray'
    },
    readonly: {
        border: '1px solid',
        accentColor: '#CCCCCC',
        cursor: 'not-allowed',
        backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
        backgroundColor: 'gray'
    },
    error: {
        border: '1px solid #DF2101',
        accentColor: 'none',
        cursor: 'not-allowed',
        backgroundImage: `none`,
        backgroundColor: 'none'
    }
} as const

type CheckboxProps = {
    variant: keyof typeof variants,
}
const StyledCheckbox = styled.input<CheckboxProps>`
    appearance: none;
    width: 1rem;
    height: 1rem;

    ${({variant}) => {
        const style = variants[variant]

        return css`
            border: ${style.border};
            accent-color: ${style.accentColor};
            cursor: ${style.cursor};
            background-image: ${style.backgroundImage};
            background-color: ${style.backgroundColor};
        `;
    }}

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 100% 100%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: limegreen;
    }
`

export const Checkbox = ({label, variant}) => {
    const [checked, setChecked] = useState(false);

    const changeChecked = () => {
        setChecked(!checked);
    }

    return <>
        <StyledCheckbox
            type="checkbox"
            name={label}
            checked={checked}
            variant={variant}
            onClick={changeChecked}
            disabled={variant !== 'default'}/>
        <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </>
}
