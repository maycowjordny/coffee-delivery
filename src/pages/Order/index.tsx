import { Button } from "../../Componentes/Button";
import { AddressAndPayment, AdressWrapper, Input, OrderContainer, OrdersDetails, PaymentWrapper } from "./styles";
import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { OrderDetails } from "../../Componentes/OrderDetails"
import { OrderContext } from "../../Context";
import { useContext, useEffect, useState } from "react";

export function Order() {

  const { orders, setOrders } = useContext(OrderContext)

  const deliveryValue = Math.floor(Math.random() * 10)
  const totalOrderAmount = orders ? orders.coffees.reduce((total, coffee) => total + coffee.price * coffee.quantity, 0) : 0
  const totalOrderWithDelivery = (Number(totalOrderAmount) + Number(deliveryValue))

  const validateAdreess = true

  return (
    <OrderContainer>
      <AddressAndPayment>
        <h2>Complete seu pedido</h2>
        <AdressWrapper>
          <div className="title">
            <MapPinLine size={18} color="#C47F17" />
            <div>
              <p>Endereço de Entrega</p>
              <h3>Informe o endereço onde deseja receber seu pedido</h3>
            </div>
          </div>
          <Input placeholder="CEP" />
          <Input placeholder="Rua" />
          <div>
            <Input placeholder="Número" />
            <Input placeholder="Complemento" id="complement" />
          </div>
          <div>
            <Input placeholder="Bairro" />
            <Input placeholder="Cidade" id="city" />
            <Input placeholder="UF" id="state" />
          </div>
        </AdressWrapper>
        <PaymentWrapper>
          <div className="title">
            <CurrencyDollar size={18} color="#8047F8" />
            <div className="info-payment">
              <p>Pagamento</p>
              <h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
            </div>
          </div>
          <div className="buttons-payment">
            <Button variant="ButtonPayment" title="Cartão de crédito" icon={<CurrencyDollar size={16} color="#8047F8" />} />
            <Button variant="ButtonPayment" title="cartão de débito" icon={<CreditCard size={16} color="#8047F8" />} />
            <Button variant="ButtonPayment" title="dinheiro" icon={<Money size={16} color="#8047F8" />} />
          </div>
        </PaymentWrapper>
      </AddressAndPayment>
      <OrdersDetails>
        <h2>Cafés selecionados</h2>
        {
          orders ?
            <div className="order-wrapper">
              {
                orders.coffees.map(coffee => (
                  <OrderDetails
                    data={coffee}
                    key={coffee.id}
                  />
                ))
              }
              <div className="payment-details">
                <div>
                  <p>Total de itens </p>
                  <p>R$ {(totalOrderAmount).toFixed(2)} </p>
                </div>
                {validateAdreess ?
                  <div>
                    <p>Entrega </p>
                    <p>R${(deliveryValue).toFixed(2)}</p>
                  </div>
                  : null
                }
                <div>
                  <strong>Total</strong>
                  <strong>R${(totalOrderWithDelivery).toFixed(2)}</strong>
                </div>
                <button id="button-confirm-order">confirmar pedido</button>
              </div>
            </div>
            :
            null
        }
      </OrdersDetails>
    </OrderContainer>
  )
}


