import styled, {css} from "styled-components";
import {StyledLabel} from "./styledLabel";

export const StyledTextField = styled.input`
    border: 1px;
    padding: 10px 12px;
    font-size: 14px;
    line-height: 20px;
`

export const TextField = ({label, placeholder}) => {
    return <>
        <StyledLabel>{label}</StyledLabel>
        <StyledTextField placeholder={placeholder}></StyledTextField>
    </>
}
