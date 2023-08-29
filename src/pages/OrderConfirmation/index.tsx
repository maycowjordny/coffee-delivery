import { InfoOrderConfirmation, OrderConfirmationContainer } from "./styles";
import imgConfirmation from "../../assets/Illustration.svg"
import { Points } from "../Home/styles";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { OrderContext } from "../../Context";
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export function OrderConfirmation() {

    const { orders, setOrders } = useContext(OrderContext)
    const adreess = orders.adreess
    const paymentMethod = orders.payment_method
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            localStorage.clear()
            setOrders({ ...orders, adreess: null, payment_method: null, coffees: [] })
            navigate("/");
        }, 5000);
    }, [orders]);
    return (
        <OrderConfirmationContainer>
            <InfoOrderConfirmation>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
                <div id="border-style">
                    <div className="adress-wrapper">
                        <div id="adress">
                            <Points pointscolor="purple"><MapPin size={16} color="#fafafa" weight="fill" /></Points>
                            <h3>Entrega em <strong> {adreess.road},{adreess.number}</strong> {adreess.neighborhood}-{adreess.city} {adreess.UF}</h3>
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
                                <h3><strong>{paymentMethod}</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </InfoOrderConfirmation>
            <img src={imgConfirmation} alt="imagem de uma moto de um entregador" />
        </OrderConfirmationContainer>
    )
} 