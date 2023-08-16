import { styled } from "styled-components";

export const CardContainer = styled.div`
width: 16rem;
height: 19.375rem;
border-radius: 0.375rem 2.25rem;
padding: 1.25rem;
background-color: ${props => props.theme.BACKGROUND_BASE_CARD};
`;

export const InfoCoffee = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
text-align: center;

span{
    margin-top: 1rem;
    font-family: 'Roboto';
    font-size: 0.625rem;
    font-weight: 700;
    line-height: 130%; 
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;
    background-color:${props => props.theme.YELLOW_LIGHT};
    color: ${props => props.theme.YELLOW_DARK};
    margin-bottom: 1rem;
}

img{
    width: 7.5rem;
    height: 7.5rem;
    margin-top:-3rem;
}

h2{
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_SUBTITLE};
    margin-bottom:0.5rem;
}


h1{
    font-family:'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_LABEL};
    margin-bottom:2rem;
}
`;

export const ButtonsCoffee = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

h2{
    white-space: nowrap;
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_TEXT};
}

strong{
    font-family:'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_TEXT};
}

#order-button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border: none;
    gap: 0.5rem; 
    border-radius: 0.375rem;
    background-color:${props => props.theme.PURPLE_DARK}; ;
}
`;




