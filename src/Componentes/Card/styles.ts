import { styled } from "styled-components";

export const CardContainer = styled.div`
width: 16rem;
height: 19.375rem;
border-radius: 0.375rem 2.25rem;
padding: 1.25rem;
background-color: ${props => props.theme.BACKGROUND_BASE_CARD};
text-align:center;
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

.tags-wrapper{
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}
`;


export const ButtonsCoffee = styled.div`
display: flex;
align-items: baseline;
justify-content: space-between;

div{
    display: flex;
    gap: 0.5rem;
}

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
    padding: 0.3rem;
    border: none;
    border-radius: 0.375rem;
    background-color:${props => props.theme.PURPLE};
    &:hover{
        background-color:${props => props.theme.PURPLE_DARK};

    }
}
`;




