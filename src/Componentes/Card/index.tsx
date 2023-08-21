import { CardContainer, ButtonsCoffee } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";
import { InputNumber } from "../InputNumber";
import { Tags, TagsCoffeeProps } from "../Tags";

interface CardPropsCoffee {
    image: string,
    tags: TagsCoffeeProps[],
    title: string,
    description: string
    price: number
    quantity: number
}



export function Card(props: { data: CardPropsCoffee }) {

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
                <h2>R$<strong>{props.data.price}</strong> </h2>
                <div>
                    <InputNumber variant="InputNumberHome" />
                    <button id="order-button"><ShoppingCartSimple size={24} color="#ffff" weight="fill" /></button>
                </div>
            </ButtonsCoffee>
        </CardContainer>
    )
}