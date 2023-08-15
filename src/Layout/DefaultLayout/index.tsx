import { Header } from "../../Componentes/Header";
import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles";
export function DeafaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <Outlet />
        </LayoutContainer>
    )
}