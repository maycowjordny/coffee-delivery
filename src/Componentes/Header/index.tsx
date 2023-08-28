import { HeaderContainer } from "./styles";
import LogoCoffeeDelivery from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext } from "react";
import { OrderContext } from "../../Context";
export function Header() {
    const { orders } = useContext(OrderContext)
    const coffees = orders ? orders.coffees.length : null
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
                        orders ?
                            <span>{coffees}</span>
                            :
                            null
                    }

                </NavLink>
            </nav>
        </HeaderContainer >
    )
}