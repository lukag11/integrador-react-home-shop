import React from "react";
import { GlobalStylesContainer } from "../../Styles/GlobalStyles";
import FondoHero from "./img/electrodomesticos.jpg";
import { TitleHero, WrapperHero, WrapperTitle } from "./HeroStyles";

const Hero = () => {
  return (
    <GlobalStylesContainer>
      <WrapperHero image={FondoHero}>
        <WrapperTitle>
          <TitleHero>Bienvenidos a HOME SHOP ELECTRODOMESTICOS</TitleHero>

          <p>
            Buscás electrodomésticos y artículos para el hogar? Descubrí en
            Megatone los mejores precios, financiación y cuotas sin interés.
            ¡Accedé para ver más!
          </p>
        </WrapperTitle>
      </WrapperHero>
    </GlobalStylesContainer>
  );
};
export default Hero;
