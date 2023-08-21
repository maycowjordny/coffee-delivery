import { CardDetailsContainer } from "./styles"
import CoffeImg from "../../assets/coffeeImg.svg"
import { InputNumber } from "../InputNumber";
import { Button } from "../Button";
import { Trash } from "phosphor-react";

export function OrderDetails() {
    return (
        <CardDetailsContainer>
            <div className="info-wrapper">
                <img src={CoffeImg} alt="xícara de café" />
                <div className="info-coffee">
                    <div id="title-price">
                        <h2>Expresso Tradicional</h2>
                        <p>R$ 9,90</p>
                    </div>
                    <div id="buttons">
                        <InputNumber variant="InputNumberOrder" />
                        <Button variant="ButtonDeletedCoffee" title="Remover" icon={<Trash size={16} color="#8047F8" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <hr />
            </div>
        </CardDetailsContainer>
    )
}