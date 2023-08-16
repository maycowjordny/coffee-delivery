import { HomeContainer, AboutCoffeeDelivery, Points, Menu } from "./styles";
import { ShoppingCartSimple, Timer, Package, Coffee } from "phosphor-react";
import CoffeeImage from "../../assets/Imagem.svg"
import { Card } from "../../Componentes/Card";

export function Home() {
  return (
    <HomeContainer>
      <AboutCoffeeDelivery>
        <div className="description">
          <h2>Encontre o café perfeito para
            qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver,
            a qualquer hora</p>
          <div className="icons-wrapper">
            <div className="box-icons">
              <div>
                <Points pointscolor="yellowDark"><ShoppingCartSimple size={16} color="#fafafa" weight="fill" /></Points>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <Points pointscolor="yellow"><Timer size={16} color="#fafafa" weight="fill" /></Points>
                <p>Entrega rápida e rastreada </p>
              </div>
            </div>
            <div className="box-icons">
              <div>
                <Points pointscolor="gray"><Package size={16} color="#fafafa" weight="fill" /></Points>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <Points pointscolor="purple"><Coffee size={16} color="#fafafa" weight="fill" /></Points>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <img src={CoffeeImage} alt="imagem de um copo de café" />
        </div>
      </AboutCoffeeDelivery>
      <Menu>
        <div className="title">

          <h2>Nossos cafés</h2>
        </div>
        <section>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </Menu>
    </HomeContainer>
  )
}


