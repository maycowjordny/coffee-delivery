import { styled } from "styled-components";

export const OrderConfirmationContainer = styled.div`
display: flex;
justify-content: space-between;
align-items:end;
gap: 4rem;
padding: 5rem 10rem 8rem;

img{
    width: 30.75rem;
    height: 18.3125rem;
}

@media(max-width:1200px){
    flex-direction: column;
    align-items: center;
}
`;

export const InfoOrderConfirmation = styled.div`

h1{
    font-family:'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme.YELLOW_DARK};
}

p{
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_SUBTITLE};
    margin-bottom:2.5rem ;
}

#border-style{
    border-radius: 0.375rem 2.25rem;
    padding: 0.1rem;
    background: linear-gradient(90deg, rgba(219,172,44,1) 0%, rgba(128,71,248,1) 100%);
}

.adress-wrapper{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 32.875rem;
    padding: 2.5rem;
    border-radius: 0.375rem 2.25rem;
    background-color: ${props => props.theme.WHITE};
}

.adress-wrapper div{
    display: flex;
    gap:1.23rem ;
    align-items: center;
    justify-content: start;
    
}

h3{
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_TEXT};
}

#time{
    flex-direction: column;
    gap: 0;
    align-items: start;
}

#payment{
    flex-direction: column;
    gap: 0;
    align-items: start;
}
`;




