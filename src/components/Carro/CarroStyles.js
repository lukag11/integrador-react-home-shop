import styled from "styled-components";

export const WrapperCarrito = styled.div`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0px;
  top: 10%;
  height: calc(100% - 93px);
  width: 100vw;
  max-width: 400px;
  background-color: grey;
  z-index: 4;
  transform: ${({ show }) => (show ? `translateX(0)` : `translateX(100%)`)};
  transition-property: transform;
  transition-duration: 0.5s;
  z-index: 990;
  p {
    text-align: center;
  }
`;

export const TitleCarro = styled.h3`
  font-size: 1rem;
  text-decoration: underline;
`;

export const ItemsCarro = styled.div`
  display: grid;
  padding: 12px;
  grid-template-columns: 55px 15px 12px 15px 120px 95px;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 0.7rem;
  p {
    padding-left: 1px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: greenyellow;
    color: black;
  }

  button:hover {
    background-color: yellow;
  }
`;

export const ImgCarritoEmpty = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: 100%;
  min-width: 200px;
  width: 200px;
  height: 200px;
  padding: 100px;
`;

export const ItemsImg = styled.img`
  width: 100px;
`;

export const TotalPrice = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin: 0px;
  font-family: cursive;
  border-radius: 5px;
  background-color: greenyellow;
  color: black;
`;

export const BtnCompra = styled.button`
  width: 100%;
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  padding: 13px 32px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;

  :hover {
    background: linear-gradient(to bottom, #408c99 5%, #599bb3 100%);
    background-color: #408c99;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;
