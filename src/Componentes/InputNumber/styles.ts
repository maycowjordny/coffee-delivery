import { styled } from "styled-components";

interface InputNumberContainer {
  variant: 'InputNumberHome' | 'InputNumberOrder'
}

export const InputNumberContainer = styled.div<InputNumberContainer>`
display: flex;
align-items: center;
padding: ${props => props.variant === 'InputNumberHome' ? '0.5rem' : '0.2rem'};
background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
border-radius: 0.375rem;


.buttonInput{
  display: flex;
  align-items: center;
  border-radius: 0.375rem;
  cursor: pointer;
}

button{
  border: none;
  background-color: ${props => props.theme.BACKGROUND_BASE_BUTTON};
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