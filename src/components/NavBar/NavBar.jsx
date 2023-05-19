import React from "react";

import "../UI/DropDrawList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/cart/cart-actions";
import { Link } from "react-router-dom";
// import { auth } from "../../firebase/firebase.util";
import { useSelector } from "react-redux";
import {
  HamburgerIcon,
  Carrito,
  CheckboxProducts,
  ContainerProducts,
  InputMenu,
  Logo,
  MenuPrincipal,
  MenuToggle,
  NavBarMenu,
  UserName,
  ContainerUser,
  LogoPrincipal,
} from "./NavBarStyles";

const Navbar = ({ setSection }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const sectionHandler = (section) => {
    setSection(section);
    window.location.replace("/#ventas");
  };
  const dispatch = useDispatch();
  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  return (
    <>
      <NavBarMenu>
        <MenuToggle>
          <InputMenu type="checkbox" />
          <HamburgerIcon margin="-10px" />
          <HamburgerIcon margin="7px" />
          <HamburgerIcon margin="23px" />
          <MenuPrincipal>
            <LogoPrincipal src="./img/logo.png" />
            <li>Inicio</li>
            {currentUser ? (
              <>
                <ContainerUser>
                  <p> Bienvenido, </p>
                  <UserName>
                    {currentUser.displayName
                      ? currentUser.displayName
                      : currentUser.email}
                  </UserName>
                </ContainerUser>
                {/* <li onClick={() => auth.signOut()}>Logout</li> */}
              </>
            ) : (
              <>
                {/* <Link to="/login">
                  <li id="registrarse">Iniciar Sesion</li>
                </Link>
                <Link to="/register">
                  <li id="iniciarSesion">Registrarse</li>
                </Link> */}
              </>
            )}

            <li onClick={() => sectionHandler("Destacados")}>
              Electrodom. Destacados
            </li>
            <ContainerProducts>
              <CheckboxProducts type="checkbox" /> Productos
              <FontAwesomeIcon id="DropDrawList" icon={faAngleRight} />
              <ul>
                <li onClick={() => sectionHandler("tvsmart")}>Tv Smart</li>
                <li onClick={() => sectionHandler("heladeras")}>Heladeras</li>
                <li onClick={() => sectionHandler("parlantes")}>Parlantes</li>
                <li onClick={() => sectionHandler("cocinas")}>Cocinas</li>
                <li onClick={() => sectionHandler("lavarropas")}>Lavarropas</li>
                <li onClick={() => sectionHandler("microondas")}>Microondas</li>
              </ul>
            </ContainerProducts>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>
          </MenuPrincipal>
        </MenuToggle>
        <Logo>
          <h1>Home Shop</h1>
        </Logo>
        <Carrito>
          <FontAwesomeIcon
            icon={faCartShopping}
            id="imgCarrito"
            size="xl"
            color="red"
            onClick={handlerToggle}
          />
          {quantity === 0 ? "" : <span>{quantity}</span>}
        </Carrito>
      </NavBarMenu>
    </>
  );
};

export default Navbar;
