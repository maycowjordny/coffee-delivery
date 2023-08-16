import { styled } from "styled-components";

export const InputNumberContainer = styled.div`
display: flex;
align-items: center;
padding: 0.6rem;
background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
border-radius: 0.375rem;


button{
  display: flex;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
  border-radius: 0.375rem;
}

input{
  text-align: center;
  width: 2rem;
  border: none;
  background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
}

input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

      input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
      }

`;