import { styled } from "styled-components";


interface ButtonContainerProps {
    variant: 'ButtonPayment' | 'secundary'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100%;
border-radius: 0.375rem;
background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
font-family: 'Roboto';
font-size: 0.75rem;
font-weight: 400;
line-height: 160%;

padding: ${props => props.variant == 'ButtonPayment' ? '1rem' : '0rem 0.35rem'};
`;

