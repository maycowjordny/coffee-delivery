import { createContext, useEffect, useState } from "react";
import { OrderContextProps, OrderContextType, OrderProps } from "../interfaces";

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProps) {

    const [orders, setOrders] = useState<OrderProps>({ coffees: [], adreess: null, payment_method: null })

    useEffect(() => {
        async function FetchOrder() {
            if (orders) {
                const response = JSON.parse(localStorage.getItem("@coffees")!)
                setOrders(response)
            }
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