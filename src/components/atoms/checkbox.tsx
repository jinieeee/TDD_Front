import styled, {css} from "styled-components";

const variants = {
    default: {
        border: '1px solid #333333',
        accentColor: 'none',
        cursor: 'pointer'
    },
    disabled: {
        border: '1px solid  #333333',
        accentColor: '#CCCCCC',
        cursor: 'not-allowed'
    },
    readonly: {
        border: '1px solid',
        accentColor: '#CCCCCC',
        cursor: 'not-allowed'
    },
    error: {
        border: '1px solid #DF2101',
        accentColor: 'none',
        cursor: 'not-allowed'
    }
} as const

type CheckboxProps = {
    variant: keyof typeof variants,
}

const StyledCheckbox = styled.input<CheckboxProps>`
    ${({variant}) => {
        const style = variants[variant]

        return css`
            border: ${style.border};
            accent-color: ${style.accentColor};
            cursor: ${style.cursor};
        `
    }}

    height: 16px;
    width: 16px;
`

export const Checkbox = ({variant, ...props}) => {
    return <label>
        <StyledCheckbox
            type="checkbox"
            variant={variant}
            disabled={variant == 'disabled' || variant == 'readonly'}
            {...props}
        />
        {props.label}
    </label>
}
