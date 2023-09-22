import React from "react";
import SectionVentas from "../../components/SectionVentas/SectionVentas";
import Carro from "../../components/Carro/Carro";
import Navbar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";

import { GlobalStylesContainer } from "../../Styles/GlobalStyles";

import { HomeWrapper } from "./HomeStyles";
import Footer from "../../components/Footer/Footer";
import ScrollImages from "../../components/ScrollImages/ScrollImages";
import UserLogged from "../../components/UserLogged/UserLogged";

const Home = ({ secciones }) => {
  return (
    <>
      <GlobalStylesContainer>
        <HomeWrapper>
          <header>
            <Navbar {...secciones} />

            <Hero />
          </header>

          <Carro />
          <ScrollImages />

          <SectionVentas {...secciones} />
        </HomeWrapper>

        <Footer />
      </GlobalStylesContainer>
    </>
  );
};

export default Home;
