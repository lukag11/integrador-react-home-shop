import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import {
  FooterWrapperContainer,
  ContainerLinks,
  TextStyled,
  Contact,
  FotEncabezado,
} from "./FooterStyled";
const Footer = (props) => {
  return (
    <footer>
      <FooterWrapperContainer margin={props.margin}>
        <ContainerLinks>
          <Link to="/">
            <TextStyled>Inicio</TextStyled>
          </Link>
          <TextStyled>Quienes somos</TextStyled>
          <TextStyled>Google Maps</TextStyled>
          <Link to="/contacto">
            <TextStyled>Contacto</TextStyled>
          </Link>
        </ContainerLinks>
      </FooterWrapperContainer>
      <Contact>
        <div>
          <FontAwesomeIcon icon={faAt} color="blue" /> <p>homeshop@gmail.com</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faLocationDot} color="red" />
          <p>Cordoba 209</p>
        </div>
      </Contact>
      <FotEncabezado>Home Shop - Derechos Reservados ©</FotEncabezado>
    </footer>
  );
};

export default Footer;
