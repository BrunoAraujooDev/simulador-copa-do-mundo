import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, input, textarea, button {
        font:400 1rem Roboto, sans-serif;
    }

    
`


export default GlobalStyled;