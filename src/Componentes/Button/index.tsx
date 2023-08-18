import { ReactNode } from "react"
import { ButtonContainer } from "./styles"

interface ButtonProps {
    variant?: any
    title: string
    icon?: ReactNode
    id?: string
}

export function Button(props: ButtonProps) {

    return (
        <ButtonContainer variant={props.variant} {...props} >
            {props.icon}
            {props.title}
        </ButtonContainer>
    )
}