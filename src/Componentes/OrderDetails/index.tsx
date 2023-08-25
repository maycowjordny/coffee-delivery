import { CardDetailsContainer } from "./styles"
import { InputNumber } from "../InputNumber";
import { Button } from "../Button";
import { Trash } from "phosphor-react";
import { OrderContext } from "../../Context";
import { useContext, useState } from "react";
import { CardPropsCoffee } from "../Card";



export function OrderDetails(props: { data: CardPropsCoffee }) {
    const { orders, setOrders } = useContext(OrderContext)
    const [newQuantity, setNewQuantity] = useState(props.data.quantity)


    const handleNewQuantity = (newVal: number) => {
        setNewQuantity(newVal)

        const updateQuantity = { ...props.data, quantity: newVal }

        const newCoffee = orders.coffees.map(coffee => {
            if (coffee.id == props.data.id) {
                return updateQuantity
            }
            return coffee
        })


        localStorage.setItem("@coffees", JSON.stringify({ coffees: newCoffee, }));
        setOrders({ ...orders, coffees: newCoffee });
    }

    function handleDeleteCoffee(id: number) {
        const coffeeDeleted = orders.coffees.filter(c => c.id != id)

        localStorage.setItem("@coffees", JSON.stringify({ coffees: coffeeDeleted, }));
        setOrders({ ...orders, coffees: coffeeDeleted });
    }

    return (
        <CardDetailsContainer>
            <div className="info-wrapper" >
                <img src={props.data.image} alt="xícara de café" />
                <div className="info-coffee">
                    <div id="title-price">
                        <h2>{props.data.title}</h2>
                        <span>R$ {(newQuantity * props.data.price).toFixed(2)}</span>
                    </div>
                    <div id="buttons">
                        <InputNumber variant="InputNumberOrder" quantity={newQuantity} setQuantity={handleNewQuantity} />
                        <Button variant="ButtonDeletedCoffee" onClick={() => handleDeleteCoffee(props.data.id)} title="Remover" icon={<Trash size={16} color="#8047F8" />}
                        />
                    </div>
                </div>
            </div>
            <hr />
        </CardDetailsContainer>
    )
}