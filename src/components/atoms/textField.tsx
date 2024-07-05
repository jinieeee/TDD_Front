import styled, {css} from "styled-components";
import {StyledLabel} from "./styledLabel";

export const StyledTextField = styled.input`
    border: 1px solid black;
    padding: 10px 12px;
    margin: 10px 0 10px 0;
    font-size: 14px;
    line-height: 20px;
    border-radius: 10px;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const TextField = ({label, placeholder}) => {
    return <Container>
            <StyledLabel>{label}</StyledLabel>
            <StyledTextField placeholder={placeholder}></StyledTextField>
    </Container>
}
