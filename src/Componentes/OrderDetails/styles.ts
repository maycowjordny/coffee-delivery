import { styled } from "styled-components";

export const CardDetailsContainer = styled.div`
width: 23rem;
background-color: transparent;
display: flex;
flex-direction: column;
gap: 1.25rem;
margin-bottom: 1.5rem;

.info-wrapper{
    display: flex;
    gap: 1.25rem;
}
img{
    width: 4rem;
    height: 4rem;

}

.info-coffee{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

#title-price{
    display: flex;
    gap: 4rem;
    white-space: nowrap;
    text-align: left;
    p{
        color: ${props => props.theme.BACKGROUND_BASE_TEXT};
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 700;
        line-height: 130%
    }
}

#buttons{
    display: flex;
    gap: 0.5rem;
    width: 10.5rem;
    button{
        display: flex;
        justify-content: center;
    }
}

hr{
    border: 1px solid;
    color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
}

`;