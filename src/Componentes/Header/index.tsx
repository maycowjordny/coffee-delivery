import { HeaderContainer } from "./styles";
import LogoCoffeeDelivery from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={LogoCoffeeDelivery} alt="" />
            </span>
            <nav>
                <button> <MapPin size={22} color="#8047f8" weight="fill" />Porto Alegre, RS</button>
                <NavLink to="/order" title="Pedido">
                    <ShoppingCartSimple size={22} color="#c47f17" weight="fill" />
                    <span>{2}</span>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}