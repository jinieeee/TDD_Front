import styled, {css} from "styled-components";

const variants = {
    lineBold: {
        height: '8px',
        backgroundColor: 'gray'
    },
    lineThin : {
        height: '1px',
        backgroundColor: 'gray'
    }
} as const

type DividerProps = {
    variant: keyof typeof variants
}

const DividerContainer = styled.div`
    display: flex;
    align-items: center;
`

const DividerLine = styled.div<DividerProps>`
    ${({variant}) => {
        const style = variants[variant]

        return css`
            height: ${style.height};
            background-color: ${style.backgroundColor};
        `;
    }}
    
    flex-grow: 1
`

const DividerText = styled.div`
    text-align: center;
    white-space: nowrap;
    flex-grow: 0.1;
`

export const Divider = ({ variant, children }) => {
    return (
        <DividerContainer>
            <DividerLine variant={variant}></DividerLine>
            <DividerText><p className="text-lg font-bold">{children}</p></DividerText>
            <DividerLine variant={variant}></DividerLine>
        </DividerContainer>
    )
}
