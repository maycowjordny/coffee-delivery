import { styled } from "styled-components";

interface ButtonContainerProps {
    variant: 'ButtonPayment' | 'ButtonDeletedCoffee'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
display: flex;
justify-content: center;
align-items: center;
gap:${props => props.variant == 'ButtonPayment' ? '0.5rem' : '0.25rem'};

width: 100%;
border-radius: 0.375rem;
background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
color: ${props => props.theme.BACKGROUND_BASE_TEXT};
border: none;
font-family: 'Roboto';
font-size: 0.75rem;
white-space: nowrap;
font-style: normal;
font-weight: 400;
line-height: 160%; 
text-transform: uppercase;
width: ${props => props.variant == 'ButtonPayment' ? '11rem' : '5rem'};
height: ${props => props.variant == 'ButtonPayment' ? '3rem' : '2rem'};

&:hover{
    background-color: ${props => props.theme.BACKGROUND_BASE_HOVER};
}

&:focus{
    border: ${props => props.variant == 'ButtonPayment' ? '1px solid #8047F8' : 'none'};
    background-color: ${props => props.theme.BACKGROUND_BASE_HOVER};
}
`;

