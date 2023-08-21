import { styled } from "styled-components";

export const TagsContainer = styled.span`
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%; 
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color:${props => props.theme.YELLOW_LIGHT};
    color: ${props => props.theme.YELLOW_DARK};
`;