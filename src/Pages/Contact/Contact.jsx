import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  InputContacto,
  ContainerContact,
  ValidateButton,
} from "./ContactStyles";
const Contact = () => {
  return (
    <>
      <Header />
      <ContainerContact>
        <form>
          <label for="nombre">Nombre</label>
          <InputContacto type="text" name="nombre" />
          <label for="Email">Email</label>
          <InputContacto type="text" name="email" />
          <label for="nombre">Telefono</label>
          <InputContacto type="text" />
          <label for="nombre">Mensaje</label>
          <textarea name="" id="textarea" cols="50" rows="5"></textarea>
          <ValidateButton> Enviar </ValidateButton>
        </form>
      </ContainerContact>
      <Footer margin="5%" />
    </>
  );
};

export default Contact;
