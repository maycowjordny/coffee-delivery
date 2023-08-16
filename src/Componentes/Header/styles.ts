import { styled } from "styled-components";


export const HeaderContainer = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 10rem;
nav{
    display: flex;
    gap: 0.75rem;
    align-items: center;

    button{
        display: flex;
        align-items: center;
        gap: 0.25rem;
        white-space: nowrap;
        border: none;
        padding: 0.5rem;
        border-radius: 0.375rem; 
        background-color: ${props => props.theme.PURPLE_LIGHT};
        color: ${props => props.theme.PURPLE_DARK};
    }

    a{
        display: flex;
        background-color: ${props => props.theme.YELLOW_LIGHT};
        padding: 0.5rem;
        border-radius: 0.375rem;
    }
}

`;