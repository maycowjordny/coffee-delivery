import { ReactNode } from "react"

export interface ButtonProps {
    variant?: any
    title?: string
    icon?: ReactNode
    onClick?: () => void
}

export interface ButtonContainerProps {
    variant: 'ButtonPayment' | 'ButtonDeletedCoffee'
}

export interface CardPropsCoffee {
    id: number
    image: string,
    tags: TagsCoffeeProps[],
    title: string,
    description: string
    price: number
    quantity: number
}

export interface TagsCoffeeProps {
    id: number,
    name: string,
}

export interface locationProps {
    city: string
    UF: string
}

export interface InputNumberProps {
    variant?: any
    quantity: number
    setQuantity: (newCount: number) => void
}

export interface OrderContextProps {
    children: ReactNode
}

export interface OrderContextType {
    orders: OrderProps,
    setOrders: React.Dispatch<React.SetStateAction<OrderProps>>
}

export interface OrderProps {
    coffees: CardPropsCoffee[]
    adreess: any
    payment_method: string | null
}
