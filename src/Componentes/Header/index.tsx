import { HeaderContainer } from "./styles";
import LogoCoffeeDelivery from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../Context";
import axios from "axios";

interface locationProps {
    city: string
    UF: string
}

export function Header() {
    const { orders } = useContext(OrderContext)
    const coffees = orders ? orders.coffees.length : null
    const [userLocation, setUserLocation] = useState<locationProps>();

    async function callbackPosition(position: any) {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDoguseAzVbHzurLAFOFN-8wlho0Q7g2MA`)
        const adreess = response.data.results[0].address_components
        const city = adreess[3].long_name
        const UF = adreess[4].short_name
        console.log(response);

        const Adreess = {
            city: city,
            UF: UF
        }
        setUserLocation(Adreess)

    }

    function getLocation() {
        if (userLocation) {
            return
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callbackPosition)
        } else {
            alert("Você deve permitir sua localização.")
        }
    }

    useEffect(() => {
        getLocation()
    }, [userLocation])

    const existingLocation = userLocation ? `${userLocation.city}, ${userLocation.UF}` : "Permitir sua localização"

    return (
        < HeaderContainer >
            <span>
                <img src={LogoCoffeeDelivery} alt="" />
            </span>
            <nav>
                <button onClick={getLocation}> <MapPin size={22} color="#8047f8" weight="fill" id="svg-map" />{existingLocation}</button>
                <NavLink to="/order" title="Pedido">
                    <ShoppingCartSimple size={22} color="#c47f17" weight="fill" />
                    {
                        coffees ?
                            <span>{coffees}</span>
                            :
                            null
                    }
                </NavLink>
            </nav>
        </HeaderContainer >
    )
}