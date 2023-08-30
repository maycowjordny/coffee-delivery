import { CardContainer, ButtonsCoffee } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { InputNumber } from "../InputNumber";
import { Tags } from "../Tags";
import { useState, useContext } from "react";
import { OrderContext } from "../../Context";
import { CardPropsCoffee } from "../../interfaces";

export function Card(props: { data: CardPropsCoffee }) {
    const { orders, setOrders } = useContext(OrderContext)
    const [quantity, setQuantity] = useState(1)

    function handleCreateOrder(data: CardPropsCoffee) {
        const BuildCoffee = {
            id: data.id,
            image: data.image,
            tags: data.tags,
            title: data.title,
            description: data.description,
            price: data.price,
            quantity: quantity
        }

        if (orders) {
            const updateCoffee = orders.coffees.map(coffee => {
                if (coffee.id === BuildCoffee.id) {
                    return { ...coffee, quantity: coffee.quantity += BuildCoffee.quantity }
                }
                return coffee
            })

            const coffeExisting = orders.coffees.some(coffee => coffee.id === BuildCoffee.id)

            if (!coffeExisting) {
                updateCoffee.push(BuildCoffee)
            }

            localStorage.setItem("@coffees", JSON.stringify({ ...orders, coffees: updateCoffee }));
            const coffee = {
                coffees: updateCoffee,
                payment_method: null,
                adreess: null
            }
            setOrders(coffee)
        } else {

            const coffee = {
                coffees: [BuildCoffee],
                payment_method: null,
                adreess: null
            }

            localStorage.setItem("@coffees", JSON.stringify(coffee));
            setOrders(coffee)
        }
    }

    return (
        <CardContainer>
            <img src={props.data.image} alt="Imagem xícara de café" />
            <div className="tags-wrapper">
                {
                    props.data.tags.map(tag => {
                        return (
                            <Tags
                                key={tag.id}
                                id={tag.id}
                                name={tag.name}
                            />
                        )
                    })
                }
            </div>
            <h2>{props.data.title}</h2>
            <h1>{props.data.description}</h1>

            <ButtonsCoffee>
                <h2>R$ <strong>{props.data.price.toFixed(2)}</strong> </h2>
                <div>
                    <InputNumber
                        variant="InputNumberHome"
                        quantity={quantity}
                        setQuantity={setQuantity}
                    />
                    <button id="order-button"
                        onClick={() => handleCreateOrder(props.data)}>
                        <ShoppingCartSimple size={24} color="#ffff" weight="fill" />
                    </button>
                </div>
            </ButtonsCoffee>
        </CardContainer>
    )
}