import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'AppleSDGothic';
        src: url("../../src/assets/AppleSDGothicNeoL.ttf");
        font-weight: normal;
        font-style: normal;
    }
    
    body {
        font-family: 'AppleSDGothic', sans-serif;
        line-height: 1.5rem;
    }
`
