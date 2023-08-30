import { ButtonContainer } from "./styles"
import { ButtonProps } from "../../interfaces"

export function Button(props: ButtonProps) {
    return (
        <ButtonContainer variant={props.variant} {...props} >
            {props.icon}
            {props.title}
        </ButtonContainer>
    )
}