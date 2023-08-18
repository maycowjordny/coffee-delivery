import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color:${props => props.theme.BACKGROUND_BASE};
    color: ${props => props.theme.WHITE};
}

body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1rem;
    outline: none;
    }

button{
    cursor: pointer;
}

a{
    text-decoration: none;
    color:${props => props.theme.BACKGROUND_BASE_TEXT};
}

`;