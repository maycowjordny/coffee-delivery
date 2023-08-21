import { CardContainer, InfoCoffee, ButtonsCoffee } from "./styles";
import CoffeImg from "../../assets/coffeeImg.svg"

import { ShoppingCartSimple } from "phosphor-react";
import { InputNumber } from "../InputNumber";
export function Card() {
    return (
        <CardContainer>
            <InfoCoffee>
                <img src={CoffeImg} alt="Imagem xícara de café" />
                <span>TRADICIONAL</span>
                <h2> Expresso Tradicional</h2>
                <h1>O tradicional café feito com água quente e grãos moídos</h1>
            </InfoCoffee>
            <ButtonsCoffee>
                <h2>R$ <strong>9,90</strong> </h2>
                <div>
                    <InputNumber variant="InputNumberHome" />
                    <button id="order-button"><ShoppingCartSimple size={24} color="#ffff" weight="fill" /></button>
                </div>
            </ButtonsCoffee>
        </CardContainer>
    )
}