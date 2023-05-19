import React from "react";
import * as cartActions from "../../redux/cart/cart-actions";
import { formatPrice } from "../../utils/formatPrice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  ContainerProductsFeatured,
  WrapperProductos,
  CardProducts,
  Images,
  TextWrapper,
  BtnAdd,
} from "./SectionVentasStyles";

const SectionVentas = ({ section, setSection }) => {
  const dispatch = useDispatch();

  let items = useSelector((state) => state.products.items);
  if (section) {
    items = { [section]: items[section] };
  }
  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };
  return (
    <>
      {Object.entries(items).map(([seccionName, items]) => {
        return (
          <>
            <ContainerProductsFeatured id="ventas">
              <div>
                <h2>{seccionName}</h2>
              </div>
              <WrapperProductos>
                {items.map((item) => (
                  <>
                    <CardProducts>
                      <Images>
                        <img src={item.img} alt={item.nombre} />
                      </Images>
                      <TextWrapper>
                        <h3>{item.nombre}</h3>

                        <p>Precio {formatPrice(item.precio)}</p>

                        <BtnAdd onClick={() => addToCart(item)}>
                          Agregar al carrito
                        </BtnAdd>
                      </TextWrapper>
                    </CardProducts>
                  </>
                ))}
              </WrapperProductos>
              {section && (
                <BtnAdd
                  onClick={() => {
                    setSection(null);
                    window.location.replace("/#ventas");
                  }}
                >
                  Ver Mas
                </BtnAdd>
              )}
            </ContainerProductsFeatured>
            ;
          </>
        );
      })}
    </>
  );
};
export default SectionVentas;
