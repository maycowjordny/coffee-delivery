import { styled } from "styled-components";

export const OrderContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding:2.5rem 10rem 10rem;
gap: 2rem;

h2{
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;
    color: ${props => props.theme.BACKGROUND_BASE_SUBTITLE};
}

input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

      input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
      }


@media(max-width:1200px){
    flex-direction: column;
    align-items: center;
}
`;

export const BaseSection = styled.div`
padding: 2.5rem;
background-color:${props => props.theme.BACKGROUND_BASE_CARD};
font-family: 'Roboto';
`;

export const AddressAndPayment = styled.div`
    max-width: 35rem;
`;

export const AdressWrapper = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0 0 0;
    min-height: 23rem;
    border-radius: 0.375rem;
    padding: 2.5rem;
    background-color:${props => props.theme.BACKGROUND_BASE_CARD};
    font-family: 'Roboto';
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

  #number-complement{
        display: flex;
        gap: 0.75rem;
    }
  #neighborhood-city-uf{
        display: flex;
        gap: 0.75rem;
    }

    #neighborhood,#number{
        width: 12.5rem;
    }

    #complement{
      width: 16.75rem;
    }

    #state{
       width: 4rem;
    }
    #city{
        width: 12rem;
    }
`;

export const Error = styled.span`
color: red;
font-size: 0.8rem;
font-family: 'Roboto';
`;

export const PaymentWrapper = styled(BaseSection)`
    margin-top: 1rem;
    height: 13rem;
    border-radius: 0.375rem;
    padding:2.5rem;
    
    .title{
        display: flex;
        gap:0.5rem;
    }

    .title div{
        display: flex;
        flex-direction: column;
        gap: 0.12rem;
        font-family: 'Roboto';
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
            margin-bottom:2rem;
        }
    }

    .buttons-payment{
        display: flex;
        gap:0.75rem;
    }
`;

export const OrdersDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 23rem;
    border-radius: 0.375rem;
    width: 28rem;
    .order-wrapper{
        padding: 2.5rem;
        border-radius: 0.375rem 2.75rem;
        background-color:${props => props.theme.BACKGROUND_BASE_CARD};
}

.payment-details{
    margin-top: 1.5rem;
}

.payment-details div{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    p{
        color:${props => props.theme.BACKGROUND_BASE_TEXT};
        font-family: 'Roboto';
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 130%;
    }

    strong{
        color:${props => props.theme.BACKGROUND_BASE_SUBTITLE};
        font-family:'Roboto';
        font-size: 1.25rem;
        font-weight: 700;
        line-height: 130%; 
    }
}

    #button-confirm-order{
    width: 100%;
    height: 2.8rem;
    border: none;
    display: flex;
    padding: 0.75rem 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    border-radius: 0.375rem;
    background-color:${props => props.theme.YELLOW}; 
    color:${props => props.theme.WHITE};
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; 
    text-transform: uppercase;
    transition: 200ms;
    &:hover{
        background-color:${props => props.theme.YELLOW_DARK}; 
    }
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

