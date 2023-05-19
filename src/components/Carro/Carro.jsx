import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as cartActions from "../../redux/cart/cart-actions";
import CarroEmpty from "./img/carritovacio.png";
import {
  BtnCompra,
  ItemsCarro,
  ItemsImg,
  TitleCarro,
  TotalPrice,
  WrapperCarrito,
  ImgCarritoEmpty,
} from "./CarroStyles";

const Carro = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.precio * item.quantity;
  }, 0);
  const clearCart = () => {
    dispatch(cartActions.clearCart());
    alert("Gracias por su compra");
  };

  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };
  const removeToCart = (i) => {
    dispatch(cartActions.removeItem(i));
  };
  return (
    <>
      <WrapperCarrito show={hidden}>
        <TitleCarro>Mis Compras</TitleCarro>
        {cartItems.length === 0 ? (
          <>
            <p>El carrito esta vacio</p>
            <ImgCarritoEmpty image={CarroEmpty}></ImgCarritoEmpty>
          </>
        ) : (
          cartItems.map((item) => (
            <div className="contenedorItems">
              <ItemsCarro>
                <h3>{item.nombre}</h3>
                <button onClick={() => addToCart(item)} className="addRemBtns">
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => removeToCart(item)}
                  className="addRemBtns"
                >
                  -
                </button>
                <ItemsImg src={item.img} alt={item.nombre} />
                <div>{formatPrice(item.precio * item.quantity)}</div>
              </ItemsCarro>
            </div>
          ))
        )}
        {cartItems.length >= 1 && (
          <>
            <TotalPrice>Total:{formatPrice(subTotal)}</TotalPrice>
            <BtnCompra onClick={clearCart}>Finalizar Compra</BtnCompra>
          </>
        )}
      </WrapperCarrito>
    </>
  );
};

export default Carro;
