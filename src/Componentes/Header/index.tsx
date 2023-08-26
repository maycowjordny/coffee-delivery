import { HeaderContainer } from "./styles";
import LogoCoffeeDelivery from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../Context";
export function Header() {
    const { orders } = useContext(OrderContext)
    const coffeeList = orders.coffees.length
    return (
        < HeaderContainer >
            <span>
                <img src={LogoCoffeeDelivery} alt="" />
            </span>
            <nav>
                <button> <MapPin size={22} color="#8047f8" weight="fill" id="svg-map" />Porto Alegre, RS</button>
                <NavLink to="/order" title="Pedido">
                    <ShoppingCartSimple size={22} color="#c47f17" weight="fill" />
                    {
                        orders.coffees.length == 0 ? null : <span> {coffeeList}</span>
                    }
                </NavLink>
            </nav>
        </HeaderContainer >
    )
}