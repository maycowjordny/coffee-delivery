import { Button } from "../../Componentes/Button";
import { AddressAndPayment, AdressWrapper, Input, OrderContainer, OrdersDetails, PaymentWrapper } from "./styles";
import { CurrencyDollar, MapPinLine } from "phosphor-react";

export function Order() {
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
            <CurrencyDollar size={18} color="#C47F17" />
            <div>
              <p>Pagamento</p>
              <h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
            </div>
          </div>
          <div>
            <Button variant="secundary" title="Cartão de crédito" icon={<CurrencyDollar />} />
            <Button variant="ButtonPayment" title="cartão de débito" icon={<CurrencyDollar />} />
            <Button variant="secundary" title="dinheiro" icon={<CurrencyDollar />} />
          </div>
        </PaymentWrapper>
      </AddressAndPayment>
      <OrdersDetails>
        <h2>Cafés selecionados</h2>
        <div className="order-wrapper">

        </div>
      </OrdersDetails>
    </OrderContainer>
  )
}


