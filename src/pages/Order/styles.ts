import { styled } from "styled-components";

export const OrderContainer = styled.div`
width: 100%;
display: flex;
padding:2.5rem 10rem 10rem;


h2{
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_SUBTITLE};
}
`;

export const BaseSection = styled.div`

padding: 2.5rem;
background-color:${props => props.theme.BACKGROUND_BASE_CARD};
font-family: 'Roboto';

`;

export const AddressAndPayment = styled.div`
 width: 40rem;
 
`;

export const AdressWrapper = styled(BaseSection)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0 0 0;
    height: 23rem;
    border-radius: 0.375rem;
    
    .title{
        display: flex;
        gap:0.5rem;
    }

    .title div{
        display: flex;
        flex-direction: column;
        gap: 0.12rem;
        font-family: 'Roboto';
        margin-bottom: 1rem;
        p{
            font-size: 1rem;
            font-weight: 400;
            line-height: 130%;
            color:${props => props.theme.BACKGROUND_BASE_SUBTITLE};
        }

        h3{
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 130%;
            color: ${props => props.theme.BACKGROUND_BASE_TEXT};
        }
    }

    div:nth-child(4){
        display: flex;
        gap: 0.75rem;
    }
    div:nth-child(5){
        display: flex;
        gap: 0.75rem;
    }

    #complement{
        width: 220%;
    }

    #state{
        width: 20%;
    }
    #city{
        width: 180%;
    }
`;

export const PaymentWrapper = styled(BaseSection)`
    margin-top: 1rem;
    height: 13rem;
    border-radius: 0.375rem;

    
    .title{
        display: flex;
        gap:0.5rem;
    }

    .title div{
        display: flex;
        flex-direction: column;
        gap: 0.12rem;
        font-family: 'Roboto';
        margin-bottom: 1rem;
        p{
            font-size: 1rem;
            font-weight: 400;
            line-height: 130%;
            color:${props => props.theme.BACKGROUND_BASE_SUBTITLE};
        }

        h3{
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 130%;
            color: ${props => props.theme.BACKGROUND_BASE_TEXT};
        }
    }

    div:nth-child(2){
        display: flex;
        gap:0.75rem;
        
    }

`;

export const OrdersDetails = styled.div`
width: 28rem;

h2{
    margin-left: 2rem;
}
.order-wrapper{
    margin-top:0.94rem;
    margin-left: 2rem;
    padding: 2.5rem;
    background-color:${props => props.theme.BACKGROUND_BASE_CARD};
    border-radius: 0.375rem 2.75rem;
}

`;

export const Input = styled.input`
 font-family: 'Roboto';
width: 100%;
padding: 0.75rem;
border: 1px solid ${props => props.theme.BACKGROUND_BASE_BUTTON};
height:2.265rem;
border-radius: 0.25rem;
background-color:${props => props.theme.BACKGROUND_BASE_INPUT};
::placeholder{
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_LABEL};
}
`;




