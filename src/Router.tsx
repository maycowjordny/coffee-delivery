import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Order } from "./pages/Order"
import { DeafaultLayout } from "./Layout/DefaultLayout";
export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DeafaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/order" element={<Order />} />
            </Route>
        </Routes>
    )
}