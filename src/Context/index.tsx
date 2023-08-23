import { ReactNode, createContext, useEffect, useState } from "react";
import { CardPropsCoffee } from "../Componentes/Card";

interface OrderContextProps {
    children: ReactNode
}

interface OrderContextType {
    orders: OrderProps,
    setOrders: React.Dispatch<React.SetStateAction<OrderProps>>
}

interface OrderProps {
    coffees: CardPropsCoffee[]
    adreess: any
    payment_method: string | null
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProps) {

    const [orders, setOrders] = useState<OrderProps>({ coffees: [], adreess: null, payment_method: null })

    useEffect(() => {
        async function FetchOrder() {
            const response = JSON.parse(localStorage.getItem("@coffees")!)
            setOrders(response)
        }
        FetchOrder()
    }, [])
    return (
        <OrderContext.Provider value={{
            orders,
            setOrders,
        }}>
            {children}
        </OrderContext.Provider>
    )
}