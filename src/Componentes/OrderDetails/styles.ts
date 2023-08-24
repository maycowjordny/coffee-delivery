import { styled } from "styled-components";

export const CardDetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0.5rem;
gap: 1.25rem;

.info-wrapper{
    width: 23rem;
    display: flex;
    justify-content: start;
    gap: 1.25rem;
}
img{
    width: 4rem;
    height: 4rem;

}

.info-coffee{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

#title-price{
    display: flex;
    justify-content: space-between;

    span{
        color: ${props => props.theme.BACKGROUND_BASE_TEXT};
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 700;
        line-height: 130%
    }

    h2{
        font-family: 'Roboto';
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
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
    width: 23rem;
    border: 1px solid;
    color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
}

`;