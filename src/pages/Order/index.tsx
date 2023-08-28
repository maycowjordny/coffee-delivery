import { Button } from "../../Componentes/Button";
import { AddressAndPayment, AdressWrapper, Input, OrderContainer, OrdersDetails, PaymentWrapper, Error } from "./styles";
import { CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { OrderDetails } from "../../Componentes/OrderDetails"
import { OrderContext } from "../../Context";
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useNavigate } from "react-router-dom";


const AdreessFormValidationSchema = zod.object({
  CEP: zod.number({
    invalid_type_error: "Campo obrigatório",
  }),
  road: zod.string()
    .min(1, { message: 'Campo obrigatório' }),
  number: zod.number({
    invalid_type_error: "Campo obrigatório",
  }),
  complement: zod.string().min(1, { message: 'Campo obrigatório' }),
  neighborhood: zod.string().min(1, { message: 'Campo obrigatório' }),
  city: zod.string().min(1, { message: 'Campo obrigatório' }),
  UF: zod.string().min(2, { message: 'Campo obrigatório' }),
})

type AdreessFormData = zod.infer<typeof AdreessFormValidationSchema>

export function Order() {

  const { orders, setOrders } = useContext(OrderContext)
  const deliveryValue = 5
  const totalOrderAmount = orders ? orders.coffees.reduce((total, coffee) => total + coffee.price * coffee.quantity, 0) : 0
  const totalOrderWithDelivery = (Number(totalOrderAmount) + Number(deliveryValue))
  const validateAdreess = true
  const FormAdreess = useForm<AdreessFormData>({
    resolver: zodResolver(AdreessFormValidationSchema),
    defaultValues: {
      CEP: undefined,
      road: '',
      number: undefined,
      complement: '',
      neighborhood: '',
      city: '',
      UF: ''
    }
  })
  const { register, handleSubmit, formState: { errors }, reset } = FormAdreess
  const navigate = useNavigate()

  function handleCompletedPayment(data: AdreessFormData) {
    if (orders.payment_method == null) {
      return alert("Selecione uma forma de pagamento")
    }
    setOrders({ ...orders, adreess: data })
    navigate('/orderconfirmation')
    reset()
  }


  const handlePaymentOptionClick = (paymentOption: string) => {
    let updatedPaymentMethod;

    switch (paymentOption) {
      case 'Cartão de crédito':
        updatedPaymentMethod = 'Cartão de crédito';
        break;
      case 'Cartão de débito':
        updatedPaymentMethod = 'Cartão de débito';
        break;
      case 'Dinheiro':
        updatedPaymentMethod = 'Dinheiro';
        break;
      default:
        return;
    }

    setOrders({ ...orders, payment_method: updatedPaymentMethod });
  };
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
          <Input
            type="number"
            placeholder="CEP"
            {...register('CEP', {
              valueAsNumber: true,
            })}

          />
          {
            errors.CEP &&
            <Error>{errors.CEP.message}</Error>
          }
          <Input
            type="text"
            placeholder="Rua"
            {...register('road')}
          />
          {
            errors.road &&
            <Error>{errors.road.message}</Error>
          }
          <div id="number-complement">
            <div>
              <Input
                type="number"
                id="number"
                placeholder="Número"
                {...register('number', {
                  valueAsNumber: true,
                })}
              />
              {
                errors.number &&
                <Error>{errors.number.message}</Error>
              }
            </div>
            <div>
              <Input
                type="text"
                placeholder="Complemento"
                id="complement"
                {...register('complement')}
              />
              {
                errors.complement &&
                <Error>{errors.complement.message}</Error>
              }
            </div>
          </div>
          <div id="neighborhood-city-uf">
            <div>
              <Input
                type="text"
                placeholder="Bairro"
                id="neighborhood"
                {...register('neighborhood')}
              />
              {
                errors.neighborhood &&
                <Error>{errors.neighborhood.message}</Error>
              }
            </div>
            <div>
              <Input
                type="text"
                placeholder="Cidade"
                id="city"
                {...register('city')} />
              {
                errors.city &&
                <Error>{errors.city.message}</Error>
              }
            </div>
            <div>
              <Input
                type="text"
                placeholder="UF"
                id="state"
                {...register('UF')}
              />
              {
                errors.UF &&
                <Error>{errors.UF.message}</Error>
              }
            </div>
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
            <Button
              variant="ButtonPayment"
              title="Cartão de crédito"
              icon={<CurrencyDollar size={16} color="#8047F8" />}
              onClick={() => handlePaymentOptionClick("Cartão de crédito")}
            />
            <Button
              variant="ButtonPayment"
              title="Cartão de débito"
              icon={<CreditCard size={16} color="#8047F8" />}
              onClick={() => handlePaymentOptionClick("Cartão de débito")}
            />
            <Button
              variant="ButtonPayment"
              title="Dinheiro"
              icon={<Money size={16} color="#8047F8" />}
              onClick={() => handlePaymentOptionClick("Dinheiro")}
            />
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
                <button id="button-confirm-order" onClick={handleSubmit(handleCompletedPayment)}>confirmar pedido</button>
              </div>
            </div>
            :
            null
        }
      </OrdersDetails>
    </OrderContainer>
  )
}


