import { InfoOrderConfirmation, OrderConfirmationContainer } from "./styles";
import imgConfirmation from "../../assets/Illustration.svg"
import { Points } from "../Home/styles";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { OrderContext } from "../../Context";
import { useContext } from "react"
export function OrderConfirmation() {
    const { orders } = useContext(OrderContext)
    return (
        <OrderConfirmationContainer>
            <InfoOrderConfirmation>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>

                <div id="border-style">
                    <div className="adress-wrapper">
                        <div id="adress">
                            <Points pointscolor="purple"><MapPin size={16} color="#fafafa" weight="fill" /></Points>
                            <h3>Entrega em <strong> Rua João Daniel Martinelli, 102</strong> Farrapos - Porto Alegre, RS</h3>
                        </div>
                        <div>
                            <Points pointscolor="yellow"><Timer size={16} color="#fafafa" weight="fill" /></Points>
                            <div id="time">
                                <h3>Previsão de entrega</h3>
                                <h3><strong> 20 min - 30 min</strong></h3>
                            </div>
                        </div>
                        <div>
                            <Points pointscolor="yellowDark"><CurrencyDollar size={16} color="#fafafa" weight="fill" /></Points>
                            <div id="payment">
                                <h3>Pagamento na entrega</h3>
                                <h3><strong>Cartão de Crédito</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </InfoOrderConfirmation>
            <img src={imgConfirmation} alt="imagem de uma moto de um entregador" />
        </OrderConfirmationContainer>
    )
} 